import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'JC Constructora S.A.S';

  services = [
    {
      title: 'Construcción de Obras Civiles',
      description: 'Ejecución de infraestructura con altos estándares de calidad y seguridad.',
      icon: 'architecture',
      image: 'assets/images/const-obras-civiles.jpg'
    },
    {
      title: 'Mantenimiento de Obra Civil',
      description: 'Servicios preventivos y correctivos para maximizar la vida útil de sus instalaciones.',
      icon: 'engineering',
      image: 'assets/images/mant-obra-civil.jpg'
    },
    {
      title: 'Fabricación de Estructuras Metálicas',
      description: 'Diseño e instalación de estructuras de alta resistencia para el sector industrial.',
      icon: 'foundation',
      image: 'assets/images/fabri-estruc-metalicas.jpg'
    }
  ];

  projects = [
    {
      title: 'Cimentación Silo 10.000 ton',
      client: 'Diana Corporación S.A.S',
      image: 'assets/images/cimen-silo-10k.jpg'
    },
    {
      title: 'Cimentación Torre de Secado y Enfriamiento',
      client: 'Diana Corporación S.A.S',
      image: 'assets/images/torre-secado.jpg'
    },
    {
      title: 'Estación de Tratamiento de Agua Desmineralizada',
      client: 'Diana Corporación S.A.S',
      image: 'assets/images/estacion-agua.jpg'
    },
    {
      title: 'Plataforma de Descarga y Foso de Bomba',
      client: 'Diana Corporación S.A.S',
      image: 'assets/images/foso-descarga.jpg'
    }
  ];

  contact = {
    whatsapp: '+57 311 898 3725',
    whatsappLink: 'https://wa.me/573118983725',
    phones: ['+57 311 898 3725', '+57 321 233 7930'],
    address: 'Carrera 21 N° 29-78, Yopal-Casanare'
  };

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
