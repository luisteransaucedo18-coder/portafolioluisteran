export const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mi', href: '#sobre-mi' },
  { label: 'Stack', href: '#habilidades' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export const profile = {
  name: 'Luis Armando Teran Saucedo',
  shortName: 'Luis Teran',
  role: 'QA Engineer & Developer',
  location: 'Trujillo, Peru',
  email: 'luisteransaucedo18@gmail.com',
  phone: '902 327 242',
  whatsapp: 'https://wa.me/51902327242',
  github: 'https://github.com/luisteransaucedo18-coder',
  githubUser: 'luisteransaucedo18-coder',
  cvUrl: 'documents/CV_Luis_Teran_Saucedo.pdf',
};

export const about = [
  'Soy estudiante de Ingenieria de Sistemas e Informatica en la Universidad Tecnologica del Peru, actualmente en VIII ciclo y perteneciente al tercio superior.',
  'Me desempeno como Practicante QA en ADAPTIC, donde participo en la validacion de funcionalidades, pruebas de APIs con Postman, documentacion de errores y seguimiento de incidencias en ClickUp.',
  'Me considero una persona analitica, responsable y orientada al detalle, con interes en la calidad del software, el desarrollo web y la mejora continua. Disfruto colaborar con equipos tecnicos, aprender rapido y aportar valor real en cada proyecto.',
];

export const stats = [
  { value: 'VIII', label: 'Ciclo en curso' },
  { value: 'QA', label: 'Practicante activo' },
  { value: '8+', label: 'Herramientas tecnicas' },
  { value: '5', label: 'Certificaciones' },
];

export const skillGroups = [
  {
    icon: 'Search',
    title: 'QA / Testing',
    skills: [
      'Pruebas funcionales',
      'Validacion de APIs',
      'Reporte de incidencias',
      'Revision de despliegues',
      'Documentacion de errores',
      'Validacion web',
    ],
  },
  {
    icon: 'Wrench',
    title: 'Herramientas',
    skills: ['Postman', 'Git', 'GitHub', 'ClickUp', 'Vercel', 'Supabase'],
  },
  {
    icon: 'Code2',
    title: 'Desarrollo web & BD',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java', 'SQL', 'APIs REST'],
  },
  {
    icon: 'Users',
    title: 'Trabajo tecnico',
    skills: [
      'Scrum basico',
      'Live coding',
      'Comunicacion tecnica',
      'Analisis de errores',
      'Trabajo colaborativo',
    ],
  },
];

export const experience = [
  {
    company: 'ADAPTIC',
    role: 'Practicante QA',
    period: 'Actualidad',
    points: [
      'Ejecucion de pruebas funcionales en proyectos digitales, validando flujos de usuario y comportamiento de funcionalidades antes de entrega.',
      'Validacion de APIs con Postman: revision de respuestas, codigos de estado y datos enviados.',
      'Reporte y seguimiento de incidencias en ClickUp, con documentacion de errores y pasos de reproduccion.',
      'Revision de despliegues web en Vercel, comprobando navegacion, funcionamiento general y posibles fallos para el usuario final.',
      'Validacion de datos en Supabase y colaboracion con el equipo tecnico en GitHub.',
      'Participacion en sesiones de live coding, resolviendo ejercicios y explicando logica de programacion en tiempo real.',
    ],
  },
];

export const complementaryExperience = [
  {
    company: 'Ludicus Park',
    role: 'Atencion operativa y soporte en eventos',
    period: 'Feb. 2025 - Jul. 2025',
    description:
      'Coordinacion de tareas operativas en eventos, atencion al cliente y resolucion rapida de solicitudes en entornos de alta demanda.',
  },
  {
    company: 'ChoriFan',
    role: 'Atencion al cliente y produccion',
    period: 'Abr. 2024 - Ene. 2025',
    description:
      'Atencion de pedidos, preparacion de productos, cobros y organizacion del servicio diario. Comunicacion directa con clientes y manejo de tareas simultaneas.',
  },
  {
    company: 'Venta de menus',
    role: 'Atencion al cliente',
    period: 'Jun. 2021 - Ene. 2022',
    description:
      'Toma de pedidos, apoyo en caja, coordinacion de entregas y mantenimiento del orden del area de atencion.',
  },
];

export const education = {
  institution: 'Universidad Tecnologica del Peru',
  career: 'Ingenieria de Sistemas e Informatica',
  detail: 'VIII Ciclo - Actualidad',
  badge: 'Tercio superior',
};

export const certifications = [
  {
    icon: 'Lock',
    name: 'Introduccion a la Ciberseguridad',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    documentUrl: 'documents/Certificado_Introduccion_Ciberseguridad.pdf',
  },
  {
    icon: 'ShieldCheck',
    name: 'Seguridad de Terminales',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    documentUrl: 'documents/Certificado_Seguridad_Terminales.pdf',
  },
  {
    icon: 'Globe2',
    name: 'Redes y Seguridad',
    issuer: 'Universidad Tecnologica del Peru',
    year: '2025',
  },
  {
    icon: 'Languages',
    name: 'Ingles Basico',
    issuer: 'ICE School',
    year: '2023',
  },
  {
    icon: 'Palette',
    name: 'Diseno Grafico',
    issuer: 'Integra Tec',
    year: '2019',
  },
];

export const projects = [
  {
    icon: 'FlaskConical',
    badge: 'QA',
    title: 'Validacion de APIs con Postman',
    description:
      'Coleccion de pruebas automatizadas para validar endpoints REST: respuestas, codigos de estado, datos enviados y flujos de error.',
    techs: ['Postman', 'APIs REST', 'JSON'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    icon: 'Globe2',
    badge: 'Web',
    title: 'Web App desplegada en Vercel',
    description:
      'Aplicacion web frontend desplegada en Vercel con integracion de base de datos y flujos de usuario validados en entorno de produccion.',
    techs: ['React', 'Vercel', 'Supabase'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    icon: 'Database',
    badge: 'Backend',
    title: 'Sistema con BD en Supabase',
    description:
      'Sistema de gestion con base de datos en Supabase. Validacion de registros, revision de datos y comprobacion de integridad de funcionalidades.',
    techs: ['Supabase', 'SQL', 'Node.js'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    icon: 'Atom',
    badge: 'Frontend',
    title: 'Proyecto Frontend con React',
    description:
      'Interfaz de usuario construida con React y componentes reutilizables. Diseno responsive y experiencia de usuario validada funcionalmente.',
    techs: ['React', 'JavaScript', 'CSS'],
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    icon: 'ClipboardCheck',
    badge: 'Testing',
    title: 'Practicas de Testing Funcional',
    description:
      'Casos de prueba y documentacion de escenarios funcionales para aplicaciones web, con reporte de incidencias y criterios de aceptacion.',
    techs: ['Testing', 'ClickUp', 'GitHub'],
    demoUrl: '#',
    codeUrl: '#',
  },
];
