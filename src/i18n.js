const translations = {
  es: {
    header: {
      nav: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Contacto', href: '#contacto' },
      ],
      cta: 'Contáctanos',
      menuLabel: 'Abrir menú',
      logoLabel: 'Siwakode Inicio',
    },
    hero: {
      badge: 'JACÓ, COSTA RICA — DESARROLLO WEB & SOFTWARE',
      title: 'Desarrollo Web Moderno &',
      titleAccent: 'Soluciones Digitales',
      description:
        'Creamos sitios web personalizados, plataformas de e-commerce y aplicaciones web que impulsan tu negocio. Desde diseño responsive hasta optimización SEO, entregamos experiencias digitales que generan resultados reales.',
      ctaPrimary: 'Inicia tu Proyecto',
      ctaSecondary: 'Ver Portafolio',
      performanceBadge: '100%',
      performanceLabel: 'Responsive & Optimizado',
      langToggle: 'ES',
      langToggleFull: 'Español',
    },
    services: {
      sectionTitle: 'Servicios Web',
      sectionTitleAccent: 'Profesionales',
      sectionSubtitle:
        'Desde sitios web simples hasta aplicaciones web complejas — ofrecemos soluciones digitales a la medida que ayudan a tu negocio a destacar y crecer en línea.',
      popular: 'MÁS POPULAR',
      list: [
        {
          title: 'Plan Web Básico',
          description:
            'Sitio web profesional con diseño responsive moderno y fundamentos SEO. Perfecto para emprendimientos y negocios locales.',
          icon: 'web',
          features: [
            'Diseño Responsive',
            'Optimización SEO',
            'Formulario de Contacto',
            'Carga Rápida',
          ],
          popular: false,
        },
        {
          title: 'Plan Avanzado + Catálogo',
          description:
            'Plataformas web completas con catálogos dinámicos, integración CMS y UX premium. Ideal para negocios en crecimiento.',
          icon: 'shopping_cart',
          features: [
            'CMS Personalizado',
            'Gestión de Inventario',
            'Animaciones Premium',
            'Panel de Análisis',
          ],
          popular: true,
        },
        {
          title: 'Mantenimiento Mensual',
          description:
            'Mantén tu sitio web seguro, actualizado y con el mejor rendimiento con soporte técnico continuo.',
          icon: 'settings',
          features: [
            'Parches de Seguridad',
            'Monitoreo de Rendimiento',
            'Actualizaciones de Contenido',
            'Respaldos Semanales',
          ],
          popular: false,
        },
      ],
      cta: 'Solicitar Cotización',
      learnMore: 'Ver más',
    },
    projects: {
      sectionTitle: 'Proyectos',
      sectionTitleAccent: 'Recientes',
      viewAll: 'Ver todos los proyectos',
      viewLess: 'Ver menos',
      tags: ['Diseño Web', 'Branding', 'UI/UX', 'SaaS'],
      items: [
        {
          title: 'Miiny - UI Responsive',
          description: 'Experiencia e-commerce para moda sostenible.',
          tag: 'UI/UX',
        },
        {
          title: 'Ransop - App Dev',
          description: 'Sistema de gestión logística multiplataforma.',
          tag: 'UI/UX',
        },
        {
          title: 'SaborCR - Restaurante',
          description: 'Plataforma de pedidos y menú digital interactivo.',
          tag: 'Diseño Web',
        },
        {
          title: 'MediQuick - Health',
          description: 'Portal de pacientes y agendamiento de citas.',
          tag: 'UI/UX',
        },
        {
          title: 'EcoBuild - SaaS',
          description: 'Panel de control para construcción sostenible.',
          tag: 'SaaS',
        },
        {
          title: 'SportZone - E-commerce',
          description: 'Tienda online con catálogo dinámico y pagos.',
          tag: 'Branding',
        },
      ],
    },
    testimonials: {
      sectionTitle: 'Lo que dicen',
      sectionTitleAccent: 'nuestros clientes',
      prevLabel: 'Testimonio anterior',
      nextLabel: 'Siguiente testimonio',
      starsLabel: '5 de 5 estrellas',
      list: [
        {
          quote:
            '“La mejor decisión al contratar una agencia para obtener la mejor conversión para el negocio. Sin duda un equipo humilde y talentoso. Su atención al detalle técnico es inigualable.”',
          name: 'Mathew Sigman',
          role: 'Director Creativo, Cliente Y',
        },
        {
          quote:
            '“Transformaron por completo nuestra presencia digital. El sitio web superó todas nuestras expectativas y nuestras conversiones se duplicaron en los primeros tres meses.”',
          name: 'María Jiménez',
          role: 'CEO, Grupo EcoSol',
        },
        {
          quote:
            '“Profesionalismo y calidad excepcional. Entregaron a tiempo, con una comunicación impecable durante todo el proyecto. Recomendados al 100%.”',
          name: 'Carlos Mendoza',
          role: 'Fundador, TechNova CR',
        },
      ],
    },
    ctaForm: {
      title: '¿Listo para construir algo grande juntos?',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      messageLabel: 'Cuéntanos de tu proyecto',
      messagePlaceholder:
        'Cuéntanos sobre tu proyecto, metas y cronograma...',
      submit: 'Enviar Mensaje',
      loading: 'Enviando...',
      success: '¡Mensaje Enviado!',
      successMsg:
        'Gracias por escribirnos. Te responderemos en menos de 24 horas.',
      errorMsg:
        'Hubo un error. Intenta de nuevo o escríbenos a kendollcastro@gmail.com',
      emailError: 'Correo electrónico inválido',
      messageError: 'Por favor cuéntanos de tu proyecto',
    },
    footer: {
      description:
        'Creamos sitios web personalizados, plataformas de e-commerce y aplicaciones web que impulsan tu negocio. Basados en Costa Rica, servimos a clientes en todo el mundo.',
      exploreTitle: 'Navegación',
      exploreLinks: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Contacto', href: '#contacto' },
      ],
      legalTitle: 'Legal',
      legalLinks: [
        { label: 'Aviso de Privacidad', href: '#' },
        { label: 'Portafolio', href: '#' },
        { label: 'Contáctanos', href: '#contacto' },
      ],
      studioTitle: 'Nuestro Estudio',
      address: 'Jacó, Costa Rica',
      copyright: 'Todos los derechos reservados.',
      madeIn: 'Hecho con dedicación en Jacó, Costa Rica',
    },
  },
  en: {
    header: {
      nav: [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#servicios' },
        { label: 'Projects', href: '#proyectos' },
        { label: 'Contact', href: '#contacto' },
      ],
      cta: 'Get Started',
      menuLabel: 'Toggle menu',
      logoLabel: 'Siwakode Home',
    },
    hero: {
      badge: 'JACÓ, COSTA RICA — WEB DEVELOPMENT & SOFTWARE',
      title: 'Modern Web Development &',
      titleAccent: 'Digital Solutions',
      description:
        'We build custom websites, e-commerce platforms, and web applications that help businesses grow. From responsive design to SEO optimization, we deliver modern digital experiences that drive real results.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'View Our Portfolio',
      performanceBadge: '100%',
      performanceLabel: 'Responsive & Optimized',
      langToggle: 'EN',
      langToggleFull: 'English',
    },
    services: {
      sectionTitle: 'Professional Web',
      sectionTitleAccent: 'Services',
      sectionSubtitle:
        'From simple websites to complex web applications — we deliver tailored digital solutions that help your business stand out and grow online.',
      popular: 'MOST POPULAR',
      list: [
        {
          title: 'Basic Web Presence',
          description:
            'Professional business website with modern responsive design and SEO foundations. Perfect for startups and local businesses.',
          icon: 'web',
          features: [
            'Responsive Design',
            'SEO Optimization',
            'Contact Integration',
            'Fast Loading',
          ],
          popular: false,
        },
        {
          title: 'Advanced Web + Catalog',
          description:
            'Full-scale web platforms with dynamic catalogs, CMS integration, and premium UX. Built for growing businesses ready to scale.',
          icon: 'shopping_cart',
          features: [
            'Custom CMS',
            'Inventory Management',
            'Premium Animations',
            'Analytics Dashboard',
          ],
          popular: true,
        },
        {
          title: 'Monthly Maintenance',
          description:
            'Keep your website secure, updated, and performing at its best with ongoing technical support and proactive monitoring.',
          icon: 'settings',
          features: [
            'Security Patches',
            'Performance Monitoring',
            'Content Updates',
            'Weekly Backups',
          ],
          popular: false,
        },
      ],
      cta: 'Get a Quote',
      learnMore: 'Learn More',
    },
    projects: {
      sectionTitle: 'Recent',
      sectionTitleAccent: 'Projects',
      viewAll: 'View All Projects',
      viewLess: 'Show Less',
      tags: ['Web Design', 'Branding', 'UI/UX', 'SaaS'],
      items: [
        {
          title: 'Miiny - Responsive UI',
          description: 'E-commerce experience for sustainable fashion.',
          tag: 'UI/UX',
        },
        {
          title: 'Ransop - App Dev',
          description: 'Cross-platform logistics management system.',
          tag: 'UI/UX',
        },
        {
          title: 'SaborCR - Restaurant',
          description: 'Online ordering and interactive digital menu.',
          tag: 'Web Design',
        },
        {
          title: 'MediQuick - Health',
          description: 'Patient portal and appointment scheduling.',
          tag: 'UI/UX',
        },
        {
          title: 'EcoBuild - SaaS',
          description: 'Dashboard for sustainable construction management.',
          tag: 'SaaS',
        },
        {
          title: 'SportZone - E-commerce',
          description: 'Online store with dynamic catalog and payments.',
          tag: 'Branding',
        },
      ],
    },
    testimonials: {
      sectionTitle: 'What Our',
      sectionTitleAccent: 'Clients Say',
      prevLabel: 'Previous testimonial',
      nextLabel: 'Next testimonial',
      starsLabel: '5 out of 5 stars',
      list: [
        {
          quote:
            '“The best choice to hire any agency to get the best conversion for business. Undoubtedly a humble team to get in touch with. Their attention to technical detail is unmatched.”',
          name: 'Mathew Sigman',
          role: 'Creative Lead, Client Y',
        },
        {
          quote:
            '“They completely transformed our digital presence. The website exceeded all our expectations and our conversions doubled within the first three months.”',
          name: 'Maria Jimenez',
          role: 'CEO, EcoSol Group',
        },
        {
          quote:
            '“Exceptional professionalism and quality. They delivered on time with flawless communication throughout the entire project. 100% recommended.”',
          name: 'Carlos Mendoza',
          role: 'Founder, TechNova CR',
        },
      ],
    },
    ctaForm: {
      title: 'Ready to build something great together?',
      emailLabel: 'Email address',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Project description',
      messagePlaceholder: 'Tell us about your project, goals, and timeline...',
      submit: 'Send Message',
      loading: 'Sending...',
      success: 'Message Sent!',
      successMsg:
        "Thanks for reaching out! We'll get back to you within 24 hours.",
      errorMsg:
        'Something went wrong. Try again or email us at kendollcastro@gmail.com',
      emailError: 'Invalid email address',
      messageError: 'Please tell us about your project',
    },
    footer: {
      description:
        'We build custom websites, e-commerce platforms, and web applications that help businesses grow. Based in Costa Rica, serving clients worldwide.',
      exploreTitle: 'Explore',
      exploreLinks: [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#servicios' },
        { label: 'Projects', href: '#proyectos' },
        { label: 'Contact', href: '#contacto' },
      ],
      legalTitle: 'Legal',
      legalLinks: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Portfolio', href: '#' },
        { label: 'Contact Us', href: '#contacto' },
      ],
      studioTitle: 'Our Studio',
      address: 'Jacó, Costa Rica',
      copyright: 'All rights reserved.',
      madeIn: 'Made with dedication in Jacó, Costa Rica',
    },
  },
}

export const defaultLang = 'en'

export function getTranslations(lang) {
  return translations[lang] || translations[defaultLang]
}


