import es from "./es";

export default {
  compact: {
    details: "View details",
    profile: "More about me",
    about:
      "I develop web applications, validate software quality, and lead the team at JMP PINGUS. Practical experience in QA at ADAPTIC and full stack development.",
    projects: [
      "Game recommendations built around each player’s preferences.",
      "A real estate SaaS platform with 360 content and company data management.",
      "Full stack development and team leadership, from planning to delivery.",
    ],
    roles: [
      "Frontend & Backend",
      "Full Stack Developer",
      "Team Lead & Full Stack",
    ],
    experience: [
      "Functional testing, API validation, issue tracking, and deployment reviews.",
      "Team coordination, feature development, code reviews, and delivery validation.",
    ],
  },

  cinema: {
    label: "ONE MIND. THREE PERSPECTIVES.",
    words: ["BUILD", "TEST", "LEAD"],
    modes: ["Development", "Quality", "Leadership"],
    controls: "Customize the scene",
    hint: "Scroll to move the scene · Click to transform it",
    descriptions: [
      "From frontend interfaces to backend logic. React, Node.js and connected data.",
      "Functional tests, API validation and careful delivery reviews.",
      "Clear priorities, code reviews and a team moving together.",
    ],
  },
  error: {
    title: "The portfolio could not load.",
    description: "Please refresh the page to try again.",
    retry: "Try again",
  },
  meta: {
    title: "Luis Teran | Full Stack Development & QA",
    description:
      "Luis Armando Teran Saucedo: full stack development, QA testing and team leadership. Ninth semester Systems and Computer Engineering student based in Trujillo, Peru.",
  },
  nav: ["Home", "About", "Work", "Experience", "Education", "Contact"],
  ui: {
    skip: "Skip to content",
    menu: "Open menu",
    close: "Close menu",
    language: "Select language",
    available: "Open to opportunities",
    location: "Trujillo, Peru",
    eyebrow: "DEVELOPMENT · QUALITY · LEADERSHIP",
    headline: ["Clear ideas.", "Purposeful", "code."],
    intro:
      "I’m Luis Teran. I build web solutions, test what matters, and help teams move forward.",
    viewWork: "Explore my work",
    contact: "Let’s talk",
    scroll: "Scroll to explore",
    orbit:
      "Full stack development, software quality and team leadership connected in an interactive three dimensional composition.",
    orbitHint: "Move your cursor to explore",
    system: "SYSTEM",
    logic: "LOGIC",
    orbitLabels: ["DEVELOPMENT", "QUALITY", "TEAM"],
    profileLabel: "01 / ABOUT ME",
    profileTitle: "Build. Validate. Collaborate.",
    profileIntro:
      "A complete view of software, from the first idea to the final delivery.",
    tagline: ["Every detail matters.", "Every delivery, too."],
    projectLabel: "02 / SELECTED WORK",
    projectTitle: "From concept to product.",
    projectIntro:
      "Three projects. Different challenges. The same care for development and quality.",
    role: "My role",
    contribution: "Contribution",
    result: "Outcome",
    concept: "Conceptual illustration",
    experienceLabel: "03 / EXPERIENCE",
    experienceTitle: "Code meets collaboration.",
    complementary: "Beyond technology",
    skillsLabel: "04 / CAPABILITIES",
    skillsTitle: "The tools behind the work.",
    educationLabel: "05 / EDUCATION",
    educationTitle: "Always learning. Always building.",
    certificates: "Certifications & additional training",
    certificate: "View certificate",
    contactLabel: "06 / CONTACT",
    contactTitle: ["Have something in mind?", "Let’s make it happen."],
    contactIntro:
      "Open to internships, technology projects, and collaborations in development or software quality.",
    email: "Send an email",
    cv: "Download CV",
    cvNote: "Original PDF in Spanish",
    footer: "Built with React and attention to detail.",
    back: "Back to top",
    theme: "Full Stack · QA · Leadership",
    software: "Software engineering",
    semester: "9th semester",
    upper: "Upper academic third",
    counts: ["Featured projects", "Certifications & courses"],
    codeTitle: "Preferences → recommendations",
    scene360: "Projects · 360 content · Data",
    sceneTeam: "Plan → develop → validate",
  },
  profile: {
    ...es.profile,
    role: "QA Testing · Full Stack Developer",
    location: "Trujillo, Peru",
  },
  about: [
    "I’m a Systems and Computer Engineering student at Universidad Tecnológica del Perú, currently in my ninth semester and ranked in the upper academic third.",
    "My practical QA experience at ADAPTIC covers functional testing, API validation with Postman, issue reporting and tracking in ClickUp, version control with GitHub, and deployment checks on Vercel.",
    "At JMP PINGUS, I lead the development team, organize tasks, and contribute to frontend and backend features, code reviews, and delivery validation. My technical foundation includes JavaScript, React, TypeScript, Node.js, SQL, REST APIs, and Supabase.",
    "I focus on software quality, identifying functional issues, and collaborating with development teams. I bring clear communication, empathy, adaptability, resilience, problem solving, teamwork, leadership, and a service mindset.",
  ],
  skillGroups: es.skillGroups.map((g, i) => ({
    ...g,
    title: [
      "QA / Testing",
      "Tools",
      "Web development & data",
      "Technical collaboration",
    ][i],
    skills:
      i === 0
        ? [
            "Functional testing",
            "API validation",
            "Issue reporting",
            "Deployment reviews",
            "Bug documentation",
            "Web validation",
          ]
        : i === 3
          ? [
              "Basic Scrum",
              "Vibe coding",
              "Technical communication",
              "Error analysis",
              "Collaborative work",
            ]
          : g.skills.map((s) => (s === "APIs REST" ? "REST APIs" : s)),
  })),
  experience: [
    {
      company: "ADAPTIC",
      role: "QA Testing",
      points: [
        "Executed functional tests and validated user flows before delivery.",
        "Validated APIs with Postman, checking responses, status codes, and submitted data.",
        "Reported and tracked issues in ClickUp, documenting reproduction steps.",
        "Reviewed navigation, updates, and functionality in Vercel deployments.",
        "Validated data in Supabase and collaborated with the team through GitHub.",
        "Participated in live programming sessions, solving exercises and explaining programming logic.",
        "Reviewed code, identified improvements, and modified existing features.",
      ],
    },
    {
      company: "JMP PINGUS",
      role: "Developer & Team Lead",
      points: [
        "Organized tasks, priorities, and responsibilities; tracked deliverables and helped resolve technical blockers.",
        "Planned system improvements, defined flows, reviewed requirements, and proposed practical solutions.",
        "Developed and improved frontend and backend features and reviewed existing code.",
        "Performed functional tests and delivery validation; documented issues and followed them through resolution.",
        "Coordinated team communication, agreements, assignments, and project progress.",
        "Supervised change integration to maintain system stability and user experience.",
        "Supported teammates with technical tasks, questions, and continuous workflow improvement.",
      ],
    },
  ],
  complementaryExperience: es.complementaryExperience.map((e, i) => ({
    ...e,
    role: [
      "Event operations & support",
      "Customer service & production",
      "Customer service",
    ][i],
    period: [
      "Feb 2025 – Jul 2025",
      "Apr 2024 – Jan 2025",
      "Jun 2021 – Jan 2022",
    ][i],
    description: [
      "Coordinated event operations, supported customers, and resolved requests in busy environments.",
      "Handled orders, product preparation, payments, and daily service organization, communicating with customers and managing concurrent tasks.",
      "Took orders, supported the checkout, coordinated deliveries, and kept the service area organized.",
    ][i],
  })),
  education: {
    ...es.education,
    career: "Systems and Computer Engineering",
    detail: "9th semester · Present",
    badge: "Upper academic third",
  },
  certifications: es.certifications.map((c, i) => ({
    ...c,
    name: [
      "Introduction to Cybersecurity",
      "Endpoint Security",
      "Networks and Security",
      "Basic English",
      "Graphic Design",
      "Introduction to Generative AI",
      "Artificial Intelligence for Business Decisions",
    ][i],
  })),
  projects: es.projects.map((p, i) => ({
    ...p,
    badge: ["Backend / Frontend", "Full Stack", "Leadership / Full Stack"][i],
    role: [
      "Web application backend/frontend developer",
      "Full stack developer",
      "Team lead & full stack developer",
    ][i],
    description: [
      "Built a web application that recommends games based on genre, platform, game mode, difficulty, duration, and mood. Implemented a scoring system, logical rules with pyDatalog, and a Supabase connection.",
      "Developed and maintained a multi tenant real estate SaaS platform: frontend modules, backend APIs, PostgreSQL/Supabase integration, Cloudflare R2 file management, and components for the 360 viewer.",
      "Led the team, organized tasks, and monitored project progress. Contributed to frontend and backend features, code reviews, issue resolution, functional testing, and delivery validation, supporting technical decisions.",
    ][i],
    result: [
      "A working web application combining imperative, functional, and logic programming to generate game recommendations.",
      "Helped centralize real estate projects, 360 visual content, and operational data in a scalable platform with separation between tenants.",
      "Contributed to better team coordination, code quality, and stability of delivered features.",
    ][i],
    techs: p.techs.map((t) =>
      t === "Bases de datos"
        ? "Databases"
        : t === "APIs REST"
          ? "REST APIs"
          : t,
    ),
  })),
};
