import {
  profile,
  about,
  skillGroups,
  experience,
  complementaryExperience,
  education,
  certifications,
  projects,
} from "../data/portfolio";

export default {
  cinema: {
    label: "UNA MENTE. TRES PERSPECTIVAS.",
    words: ["CREAR", "PROBAR", "GUIAR"],
    modes: ["Desarrollo", "Calidad", "Liderazgo"],
    controls: "Personalizar la escena",
    hint: "Desplázate para mover la escena · Haz clic para transformarla",
    descriptions: [
      "De las interfaces frontend a la lógica backend. React, Node.js y datos conectados.",
      "Pruebas funcionales, validación de APIs y revisión cuidadosa de las entregas.",
      "Prioridades claras, revisión de código y un equipo que avanza unido.",
    ],
  },
  error: {
    title: "No se pudo cargar el portafolio.",
    description: "Actualiza la página para volver a intentarlo.",
    retry: "Volver a intentar",
  },
  meta: {
    title: "Luis Teran | Desarrollo Full Stack y QA",
    description:
      "Portafolio de Luis Armando Teran Saucedo. Desarrollo full stack, QA Testing y liderazgo de equipos. Estudiante de IX ciclo en Trujillo, Perú.",
  },
  nav: [
    "Inicio",
    "Perfil",
    "Proyectos",
    "Experiencia",
    "Formación",
    "Contacto",
  ],
  ui: {
    skip: "Ir al contenido",
    menu: "Abrir menú",
    close: "Cerrar menú",
    language: "Seleccionar idioma",
    available: "Disponible para oportunidades",
    location: "Trujillo, Perú",
    eyebrow: "DESARROLLO · CALIDAD · LIDERAZGO",
    headline: ["Ideas claras.", "Código con", "propósito."],
    intro:
      "Soy Luis Teran. Desarrollo soluciones web, pruebo lo que importa y ayudo a los equipos a avanzar.",
    viewWork: "Explorar proyectos",
    contact: "Hablemos",
    scroll: "Desplázate para explorar",
    orbit:
      "Desarrollo full stack, calidad de software y liderazgo conectados en una composición tridimensional.",
    orbitHint: "Mueve el cursor para explorar",
    system: "SISTEMA",
    logic: "LÓGICA",
    orbitLabels: ["DESARROLLO", "CALIDAD", "EQUIPO"],
    profileLabel: "01 / PERFIL",
    profileTitle: "Construir. Validar. Colaborar.",
    profileIntro:
      "Una mirada completa al software, desde la primera idea hasta la entrega.",
    tagline: ["Cada detalle cuenta.", "Cada entrega también."],
    projectLabel: "02 / PROYECTOS SELECCIONADOS",
    projectTitle: "Del concepto al producto.",
    projectIntro:
      "Tres proyectos. Distintos retos. La misma atención al desarrollo y a la calidad.",
    role: "Mi rol",
    contribution: "Contribución",
    result: "Resultado",
    concept: "Representación conceptual",
    experienceLabel: "03 / TRAYECTORIA",
    experienceTitle: "Código y trabajo en equipo.",
    complementary: "Más allá de la tecnología",
    skillsLabel: "04 / HABILIDADES",
    skillsTitle: "Las herramientas detrás del trabajo.",
    educationLabel: "05 / FORMACIÓN",
    educationTitle: "Aprender para seguir construyendo.",
    certificates: "Certificaciones y formación complementaria",
    certificate: "Ver certificado",
    contactLabel: "06 / CONTACTO",
    contactTitle: ["¿Una idea en mente?", "Hagámosla realidad."],
    contactIntro:
      "Abierto a prácticas, proyectos tecnológicos y colaboración en desarrollo o calidad de software.",
    email: "Enviar correo",
    cv: "Descargar CV",
    cvNote: "PDF original en español",
    footer: "Desarrollado con React y atención al detalle.",
    back: "Volver arriba",
    theme: "Full Stack · QA · Liderazgo",
    software: "Ingeniería de software",
    semester: "IX ciclo",
    upper: "Tercio superior",
    counts: ["Proyectos destacados", "Certificaciones y cursos"],
    codeTitle: "Preferencias → recomendaciones",
    scene360: "Proyectos · Contenido 360 · Datos",
    sceneTeam: "Planificar → desarrollar → validar",
  },
  profile,
  about,
  skillGroups: skillGroups.map((g, i) => ({
    ...g,
    title: [
      "QA / Testing",
      "Herramientas",
      "Desarrollo web y datos",
      "Trabajo técnico",
    ][i],
    skills:
      i === 0
        ? [
            "Pruebas funcionales",
            "Validación de APIs",
            "Reporte de incidencias",
            "Revisión de despliegues",
            "Documentación de errores",
            "Validación web",
          ]
        : i === 3
          ? [
              "Scrum básico",
              "Vibe coding",
              "Comunicación técnica",
              "Análisis de errores",
              "Trabajo colaborativo",
            ]
          : g.skills,
  })),
  experience: experience.map((e, i) => ({
    ...e,
    points:
      i === 0
        ? [
            "Ejecución de pruebas funcionales y validación de flujos de usuario antes de la entrega.",
            "Validación de APIs con Postman: respuestas, códigos de estado y datos enviados.",
            "Reporte y seguimiento de incidencias en ClickUp con pasos de reproducción.",
            "Revisión de navegación, cambios y funcionamiento de despliegues en Vercel.",
            "Validación de datos en Supabase y colaboración con el equipo mediante GitHub.",
            ...e.points.slice(5),
          ]
        : e.points,
  })),
  complementaryExperience: complementaryExperience.map((e, i) => ({
    ...e,
    role: [
      "Atención operativa y soporte en eventos",
      "Atención al cliente y producción",
      "Atención al cliente",
    ][i],
    description: [
      "Coordinación de tareas operativas en eventos, atención al cliente y resolución de solicitudes en entornos de alta demanda.",
      "Atención de pedidos, preparación de productos, cobros y organización del servicio diario. Comunicación con clientes y manejo de tareas simultáneas.",
      "Toma de pedidos, apoyo en caja, coordinación de entregas y organización del área de atención.",
    ][i],
  })),
  education,
  certifications: certifications.map((c, i) => ({
    ...c,
    name: [
      "Introducción a la Ciberseguridad",
      "Seguridad de Terminales",
      "Redes y Seguridad",
      "Inglés básico",
      "Diseño gráfico",
      "Introduction to Generative AI",
      "Inteligencia Artificial para decisiones empresariales",
    ][i],
    issuer:
      c.issuer === "Universidad Tecnologica del Peru"
        ? "Universidad Tecnológica del Perú"
        : c.issuer,
  })),
  projects,
};
