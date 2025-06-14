const person = {
  firstName: "Renzo",
  lastName: "Lenes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer",
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
      Escribo ocasionalmente sobre desarrollo web, tecnologías fullstack y reflexiones sobre la
      intersección entre el frontend y el backend.
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
        Soy desarrollador fullstack con base en Lima, Perú. Tengo experiencia creando soluciones
        eficientes en entornos empresariales. Mi enfoque se basa en optimizar procesos mediante
        tecnologías como Next.js, Java Spring Boot y Docker. Me apasiona construir experiencias
        digitales completas, desde interfaces intuitivas hasta arquitecturas backend robustas.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "Entel Perú",
        timeframe: "Mayo 2025 - Presente",
        role: "Practicante de Gestión de Información",
        achievements: [
          <>Apoyo en el análisis y estructuración de información crítica para la toma de decisiones.</>,
        ],
        images: [],
      },
      {
        company: "Foxatel S.A.C.",
        timeframe: "Julio 2024 - Abril 2025",
        role: "Practicante de Desarrollo de Software",
        achievements: [
          <>Mejoré el ERP implementando DLLs en .NET para integrar herramientas avanzadas.</>,
          <>Desarrollé un algoritmo para generar códigos de barras únicos para materia prima.</>,
          <>Diseñé una API REST con Spring Boot y la desplegué con Docker en Windows Server.</>,
          <>Construí una app de inventarios con lector de códigos de barras, reduciendo tiempos en 50%.</>,
          <>Desarrollé una app logística con Next.js y Spring Boot, mejorando procesos en un 40%.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Educación",
    institutions: [
      {
        name: "Universidad Peruana de Ciencias Aplicadas",
        description: <>Ingeniería de Sistemas de Información (2022 - 2026)</>,
      },
      {
        name: "Universidad Peruana de Ciencias Aplicadas",
        description: <>Training Camp: Estructuras de Datos Avanzadas</>,
      },
      { name: "AWS", description: <>AWS Academy: Introduction to Cloud</> },
      { name: "Coderhouse", description: <>Desarrollo Web</> },
      { name: "Coderhouse", description: <>JavaScript</> },
      { name: "Coderhouse", description: <>Programación con Java</> },
      {
        name: "Cámara de Comercio de Lima",
        description: <>Fundamentos de Ethical Hacking</>,
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
            Desarrollo de interfaces modernas con React, Next.js, TypeScript y Tailwind CSS.
            Experiencia en aplicaciones responsive optimizadas para rendimiento.
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
            Desarrollo de APIs robustas con Node.js, Express, Java Spring Boot y bases de datos
            relacionales y NoSQL.
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
        title: "Cloud",
        description: (
          <>
            Experiencia desplegando aplicaciones fullstack en AWS con servicios como EC2, Lambda,
            S3, RDS y DynamoDB.
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
  description: `Proyectos de desarrollo fullstack por ${person.name}.`,
};

export { person, social, newsletter, about, work };
