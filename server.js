const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static files from the Angular app
const staticPath = path.join(__dirname, 'frontend/dist/frontend/browser');
app.use(express.static(staticPath));

// Redirect all route requests to index.html for Angular SPA to handle routing
app.use((req, res, next) => {
    console.log("Fallback route hit for URL:", req.url);
    const indexPath = path.join(staticPath, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error("Failed to send index.html:", err);
            res.status(500).send("Error loading index.html");
        } else {
            console.log("Successfully served index.html");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
