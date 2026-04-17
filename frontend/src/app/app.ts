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
      description: 'Líderes en obras civiles en Casanare y Colombia. Especialistas en cimentación industrial masiva y construcción de infraestructura bajo la normativa NSR-10. Garantizamos solidez técnica en cada metro cuadrado, utilizando estándares de aliados como Argos.',
      icon: 'architecture',
      image: 'https://i.postimg.cc/FF6XwFg3/cimen-silo-10k.jpg'
    },
    {
      title: 'Mantenimiento de Obra Civil',
      description: 'Mantenimiento industrial preventivo y correctivo para plantas de procesamiento en todo el país. Optimizamos infraestructuras existentes mediante ingeniería de precisión, prolongando la vida útil operativa de sus activos industriales.',
      icon: 'engineering',
      image: 'https://i.postimg.cc/kXtPCrfc/mant-obra-civil.jpg'
    },
    {
      title: 'Fabricación de Estructuras Metálicas',
      description: 'Expertos en diseño, fabricación y montaje de naves industriales de alta complejidad. Contamos con procesos de soldadura certificada y personal técnico calificado para soluciones estructurales de gran envergadura a nivel nacional.',
      icon: 'foundation',
      image: "https://i.postimg.cc/SNzb40Dz/fabri-estruc-metalicas.jpg"
    }
  ];

  seoData = {
    metaTitles: [
      'JC Constructora | Ingeniería Civil y Estructuras Metálicas en Casanare',
      'Empresa de Construcción Industrial en Yopal | JC Constructora S.A.S.',
      'Estructuras Metálicas y Obras Civiles en Colombia | JC Constructora',
      'Mantenimiento Industrial y Cimentación NSR-10 en Casanare',
      'Contratistas de Ingeniería y Construcción en Yopal | Cobertura Nacional'
    ],
    longTailKeywords: [
      'Empresa de estructuras metálicas en Yopal',
      'Contratistas de obra civil en Casanare',
      'Mantenimiento industrial para plantas en Colombia',
      'Construcción de silos industriales en Casanare',
      'Soldadura certificada para proyectos petroleros en Yopal',
      'Ingeniería civil para cimentaciones industriales en Colombia',
      'Montaje de naves industriales en Casanare',
      'Obras civiles bajo normativa NSR-10 en Yopal',
      'Diseño y fabricación de estructuras metálicas pesadas',
      'Expertos en cimentación profunda en Casanare',
      'Mantenimiento preventivo de infraestructuras industriales',
      'Soluciones de ingeniería para el sector agroindustrial',
      'Empresas de construcción con cobertura nacional en Colombia',
      'Gestión logística de proyectos constructivos en el Casanare',
      'Construcción de pavimentos industriales en Yopal'
    ],
    nationalCoverage: 'Nuestra base estratégica está en Yopal, pero nuestro impacto es nacional. En JC Constructora S.A.S. contamos con la infraestructura logística y la capacidad operativa para movilizar equipos técnicos y personal calificado a cualquier rincón de Colombia. Entendemos los desafíos de los grandes proyectos industriales y estamos preparados para ejecutar obras de gran envergadura allí donde su empresa nos necesite.',
    localAuthority: 'Liderazgo con conocimiento local. Como expertos con base en Yopal, dominamos las particularidades técnicas del terreno en Casanare y la normativa específica del departamento. Esta profundidad de conocimiento nos permite ofrecer soluciones constructivas más eficientes, seguras y adaptadas a las condiciones geográficas y legales del Llano colombiano.'
  };

  projects = [
    {
      title: 'Cimentación Silo 10.000 ton',
      client: 'Diana Corporación S.A.S',
      location: 'Yopal, Casanare',
      challenge: 'Cimentación profunda para carga estática y dinámica masiva en suelos de alta complejidad.',
      result: 'Operación estable con asentamientos mínimos, cumpliendo el cronograma de montaje industrial.',
      image: 'https://i.postimg.cc/NGnvZG71/cons-obras-civiles.jpg'
    },
    {
      title: 'Torre de Secado y Enfriamiento',
      client: 'Diana Corporación S.A.S',
      location: 'Yopal, Casanare',
      challenge: 'Instalación de estructuras de soporte con tolerancias milimétricas en altura.',
      result: 'Alineación perfecta del sistema mecánico y entrega técnica satisfactoria para operación 24/7.',
      image: 'https://i.postimg.cc/9FqH23Jx/torre-secado.jpg'
    },
    {
      title: 'Estación Tratamiento de Agua',
      client: 'Diana Corporación S.A.S',
      location: 'Yopal, Casanare',
      challenge: 'Infraestructura para procesos químicos corrosivos con requerimientos de estanqueidad total.',
      result: 'Implementación de recubrimientos técnicos y acabados industriales de larga duración.',
      image: 'https://i.postimg.cc/sfLCbf95/estacion-agua.jpg'
    },
    {
      title: 'Plataforma de Descarga',
      client: 'Diana Corporación S.A.S',
      location: 'Yopal, Casanare',
      challenge: 'Construcción de losas de alta resistencia para tráfico pesado y foso de bombas.',
      result: 'Optimización logística en el área de recepción de materia prima con estructuras reforzadas.',
      image: 'https://i.postimg.cc/8PrgG8th/foso-descarga.jpg'
    }
  ];

  differentiators = [
    {
      title: 'Logística en Casanare',
      description: 'Dominio absoluto de la geografía y proveedores locales, garantizando agilidad en el suministro en toda la región.'
    },
    {
      title: 'Cronogramas Estrictos',
      description: 'Gestión técnica de obra para el cumplimiento riguroso de fechas de entrega, esencial para la planeación industrial.'
    },
    {
      title: 'Seguridad y Salud (SST)',
      description: 'Cero incidentes como meta mínima mediante normativas de seguridad industrial y supervisión constante en sitio.'
    },
    {
      title: 'Mano de Obra Calificada',
      description: 'Personal técnico con amplia experiencia operativa y formación en los estándares constructivos más exigentes.'
    }
  ];

  values = [
    {
      title: 'Integridad',
      description: 'Ética y transparencia total en cada contrato y ejecución de obra.',
      icon: 'gavel'
    },
    {
      title: 'Innovación',
      description: 'Búsqueda constante de soluciones constructivas eficientes y modernas.',
      icon: 'lightbulb'
    },
    {
      title: 'Responsabilidad Ambiental',
      description: 'Compromiso con el entorno llanero mediante el cumplimiento de normativas de impacto ambiental.',
      icon: 'eco'
    },
    {
      title: 'Excelencia Operativa',
      description: 'Calidad técnica innegociable en cada etapa del proceso constructivo.',
      icon: 'verified'
    }
  ];

  featuredProjects = [
    {
      title: 'Cimentación de Silos de Gran Capacidad',
      description: 'Ejecución técnica para Diana Corporación S.A.S. en Casanare.',
      image: 'https://i.postimg.cc/Hs71mGBX/img-portada.jpg'
    },
    {
      title: 'Montaje de Naves Industriales',
      description: 'Estructuras metálicas de alta resistencia para el sector agroindustrial.',
      image: 'https://i.postimg.cc/HW6knC0C/Whats-App-Image-2026-04-16-at-4-05-54-PM.jpg'
    },
    {
      title: 'Reforzamiento de Infraestructura Crítica',
      description: 'Prolongamos la vida útil de plantas de procesamiento.',
      image: 'https://i.postimg.cc/440Rj4b6/const-obras-civiles.jpg'
    },
    {
      title: 'Infraestructura de Secado y Enfriamiento',
      description: 'Sistemas de alta capacidad para la agroindustria llanera.',
      image: 'https://i.postimg.cc/pVsLrtQ9/Whats-App-Image-2026-04-16-at-4-07-29-PM.jpg'
    },
    {
      title: 'Obras Hidráulicas y Plantas de Agua',
      description: 'Soluciones técnicas para suministro industrial y tratamiento ambiental.',
      image: 'https://i.postimg.cc/5yK4Rw99/Whats-App-Image-2026-04-16-at-4-09-59-PM.jpg'
    }
  ];

  galleryImages = [
    { url: 'https://i.postimg.cc/WzYNHMpt/Whats-App-Image-2026-04-16-at-4-11-29-PM.jpg', caption: 'Proceso de soldadura certificada' },
    { url: 'https://i.postimg.cc/v80ZTdr0/Whats-App-Image-2026-04-16-at-4-12-27-PM.jpg', caption: 'Vaciado de concreto para cimentación profunda' },
    { url: 'https://i.postimg.cc/C5rhQjMj/Whats-App-Image-2026-04-16-at-4-12-07-PM.jpg', caption: 'Izaje de vigas principales' },
    { url: 'https://i.postimg.cc/h42tvqLC/Whats-App-Image-2026-04-16-at-4-12-44-PM.jpg', caption: 'Mantenimiento preventivo de silos' },
    { url: 'https://i.postimg.cc/T1320kx2/Whats-App-Image-2026-04-16-at-4-11-17-PM.jpg', caption: 'Instalación de cubierta industrial' },
    { url: 'https://i.postimg.cc/4y2fSz4y/Whats-App-Image-2026-04-16-at-4-09-41-PM.jpg', caption: 'Adecuación de terreno para planta' },
    { url: 'https://i.postimg.cc/44WxyTvY/Whats-App-Image-2026-04-16-at-4-07-10-PM.jpg', caption: 'Encofrado de vigas de amarre' },
    { url: 'https://i.postimg.cc/1545NYM8/Whats-App-Image-2026-04-16-at-4-08-10-PM.jpg', caption: 'Nivelación láser para losas industriales' },
    { url: 'https://i.postimg.cc/Hs71mGBX/img-portada.jpg', caption: 'Montaje de silos metálicos Diana Corporación' },
    { url: 'https://i.postimg.cc/5yK4Rw99/Whats-App-Image-2026-04-16-at-4-09-59-PM.jpg', caption: 'Pruebas de estanqueidad en tanques' },
    { url: 'https://i.postimg.cc/gcg2jPV7/Whats-App-Image-2026-04-16-at-4-05-19-PM.jpg', caption: 'Reforzamiento estructural de columnas' },
    { url: 'https://i.postimg.cc/sX9qxytf/Whats-App-Image-2026-04-16-at-4-40-51-PM.jpg', caption: 'Pintura epóxica de grado industrial' },
    { url: 'https://i.postimg.cc/v80ZTd7c/Whats-App-Image-2026-04-16-at-4-06-59-PM.jpg', caption: 'Cimentación tolvas de arroz' },
    { url: 'https://i.postimg.cc/J7pz0W3m/Whats-App-Image-2026-04-16-at-4-06-34-PM.jpg', caption: 'Supervisión técnica de montaje' },
    { url: 'https://i.postimg.cc/m2h2F6VB/Whats-App-Image-2026-04-16-at-4-07-57-PM.jpg', caption: 'Obra civil tunel de silo' },
    { url: 'https://i.postimg.cc/RCgZhz1r/Whats-App-Image-2026-04-16-at-4-05-29-PM.jpg', caption: 'Armado de acero zapata y columna' }
  ];

  currentSlide = 0;
  selectedImage: any = null;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.featuredProjects.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.featuredProjects.length) % this.featuredProjects.length;
  }

  openLightbox(image: any) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }

  contact = {
    whatsapp: '+57 311 898 3725',
    whatsappLink: 'https://wa.me/573118983725',
    phones: ['+57 311 898 3725', '+57 321 233 7930'],
    address: 'Carrera 21 N° 29-78, Yopal-Casanare',
    ctaText: 'Solicite hoy una asesoría técnica especializada o cotice su proyecto con los expertos en el Casanare.'
  };

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
