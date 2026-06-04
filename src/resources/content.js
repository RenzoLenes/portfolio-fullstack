const person = {
  firstName: "Renzo",
  lastName: "Lenes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Semi-Senior Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "lenesrenzoalberto@gmail.com",
  location: "America/Lima",
  languages: ["Español", "English"],
};

const newsletter = {
  display: true,
  title: <>Suscríbete al newsletter de {person.firstName}</>,
  description: (
    <>
      Escribo ocasionalmente sobre desarrollo fullstack, IA aplicada (LLMs y RAG) y cómo construir
      productos reales en entornos startup.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RenzoLenes",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/renzo-alberto-lenes/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  image: "/images/og/home.jpg",
  description: `Conoce a ${person.name}, ${person.role} desde ${person.location}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: { display: true },
  calendar: {
    display: true,
    link: "https://cal.com/renzo-lenes",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Soy desarrollador Full-Stack con más de 2 años construyendo productos reales en entornos
        startup, con foco en IA aplicada, features end-to-end y arquitecturas escalables. Integro
        LLMs (OpenAI, Gemini, RAG), APIs REST y workflows de automatización en plataformas B2C y B2B
        en producción. Perfil autónomo y orientado a impacto: propongo mejoras, tomo decisiones de
        arquitectura y entrego código limpio y mantenible, cómodo trabajando 100% remoto en equipos
        ágiles con ciclos de iteración rápida.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "VentIA",
        timeframe: "Enero 2026 - Presente",
        role: "Head of Fullstack Development",
        achievements: [
          <>
            Lidero la arquitectura y desarrollo fullstack de plataformas SaaS orientadas a
            e-commerce y automatización, tomando decisiones técnicas end-to-end en un entorno startup
            de ritmo acelerado.
          </>,
          <>
            Construí integraciones con la Gemini API y plataformas externas, incorporando
            capacidades de IA generativa directamente en flujos de negocio de clientes reales.
          </>,
          <>
            Diseñé y mantengo servicios backend escalables con FastAPI y Ruby on Rails, junto con
            APIs consumidas desde frontend en Next.js, garantizando rendimiento y mantenibilidad.
          </>,
          <>
            Desarrollé sistemas de automatización con n8n que eliminaron tareas manuales repetitivas
            en operaciones de e-commerce, reduciendo tiempos de respuesta hasta en un 60%.
          </>,
        ],
        images: [],
      },
      {
        company: "VentIA",
        timeframe: "Noviembre 2025 - Enero 2026",
        role: "AI Engineer",
        achievements: [
          <>
            Construí features de IA sobre la Gemini API e integré servicios externos en sistemas
            internos y soluciones orientadas a clientes de e-commerce.
          </>,
          <>
            Implementé arquitecturas RAG y soluciones conversacionales que mejoraron la experiencia
            de usuario con respuestas contextuales y precisas.
          </>,
          <>
            Orquesté workflows con n8n para automatizar procesos operativos y participé en
            iniciativas de prototipado rápido con IA.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "Octubre 2025 - Presente",
        role: "Software Engineer · Full-Stack Developer",
        achievements: [
          <>
            Diseñé y lancé Albergio, una plataforma SaaS B2B multi-tenant con Next.js y
            Node.js/Spring Boot, integrando las APIs de Airbnb, Booking y Despegar en un producto
            funcional en producción.
          </>,
          <>
            Implementé features de IA generativa (OpenAI + RAG) en productos propios, ganando
            experiencia en la intersección entre desarrollo de producto e IA aplicada.
          </>,
          <>
            Gestioné el ciclo completo de producto: arquitectura, desarrollo, despliegue en
            AWS/Vercel y mejora continua, con autonomía total y foco en escalabilidad.
          </>,
          <>
            Reduje en ~35% el tiempo de incorporación de nuevas features aplicando Clean
            Architecture, separación de responsabilidades y code reviews propios.
          </>,
        ],
        images: [],
      },
      {
        company: "Entel Perú",
        timeframe: "Mayo 2025 - Octubre 2025",
        role: "Practicante de Gestión de Información",
        achievements: [
          <>
            Automaticé pipelines ETL con Python reduciendo en un 30% el tiempo de reporting,
            proponiendo la solución por iniciativa propia al identificar ineficiencias del proceso.
          </>,
          <>
            Migré más de 10 reportes financieros críticos a Power BI, habilitando dashboards en
            tiempo real para decisiones gerenciales.
          </>,
        ],
        images: [],
      },
      {
        company: "Foxatel S.A.C.",
        timeframe: "Julio 2024 - Abril 2025",
        role: "Practicante de Desarrollo de Software",
        achievements: [
          <>
            Desarrollé una app web fullstack (Next.js + Spring Boot) que incrementó en un 40% la
            eficiencia logística, proponiendo y ejecutando la solución de forma autónoma desde el
            primer sprint.
          </>,
          <>
            Reduje en un 50% el tiempo de inventario con una app JavaScript + APIs REST,
            reemplazando un proceso 100% manual identificado de forma proactiva.
          </>,
          <>
            Diseñé una API REST con Spring Boot desplegada con Docker en Windows Server e implementé
            DLLs en .NET para integrar herramientas avanzadas en el ERP.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Educación y Certificaciones",
    institutions: [
      {
        name: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        description: <>Ingeniería de Sistemas de Información (2021 - 2026)</>,
      },
      {
        name: "AWS Certified Cloud Practitioner",
        description: <>Amazon Web Services (2025)</>,
      },
      {
        name: "Node.js: De cero a experto",
        description: <>REST APIs, Clean Architecture, DDD y PostgreSQL — Fernando Herrera (2024)</>,
      },
      {
        name: "Training Camp: Estructuras de Datos Avanzadas",
        description: <>Universidad Peruana de Ciencias Aplicadas (2023)</>,
      },
      {
        name: "JavaScript",
        description: <>Coderhouse (2024)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Interfaces modernas y responsive con Next.js, React, TypeScript y Tailwind CSS,
            optimizadas para rendimiento y mantenibilidad.
          </>
        ),
        images: [
          {
            src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop&crop=entropy&auto=format",
            alt: "React Frontend Development",
            width: 16,
            height: 9,
          },
          {
            src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop&crop=entropy&auto=format",
            alt: "Next.js Application",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend Development",
        description: (
          <>
            APIs robustas y escalables con FastAPI, Node.js (Express/NestJS), Ruby on Rails y Java
            Spring Boot, sobre bases de datos relacionales y NoSQL con tRPC y ORMs como Drizzle y
            Prisma.
          </>
        ),
        images: [
          {
            src: "https://radartecatenews.com/wp-content/uploads/2022/01/desarrollo-backend-servicios.jpg",
            alt: "Backend API Development",
            width: 16,
            height: 9,
          },
          {
            src: "https://www.adm.ee/wordpress/wp-content/uploads/2023/12/Spring.png",
            alt: "Spring Boot Application",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "IA & LLMs",
        description: (
          <>
            Integración de modelos generativos (OpenAI, Gemini), arquitecturas RAG, agentes
            conversacionales y automatización de workflows con n8n en productos en producción.
          </>
        ),
        images: [
          {
            src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop&crop=entropy&auto=format",
            alt: "AI and LLMs",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>
            Despliegue de aplicaciones fullstack en AWS (EC2, S3, Lambda) y Vercel, con
            contenedores Docker, arquitecturas serverless y CI/CD.
          </>
        ),
        images: [
          {
            src: "https://kmdigitalglobal.com/wp-content/uploads/2023/03/Group-169-3.png.webp",
            alt: "Docker Containers",
            width: 16,
            height: 9,
          },
          {
            src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&crop=entropy&auto=format",
            alt: "Cloud Infrastructure",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Proyectos de desarrollo fullstack e IA aplicada por ${person.name}.`,
};

export { person, social, newsletter, about, work };
