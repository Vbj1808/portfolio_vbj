// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// Update the links object with your real URLs before deploying.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Balaji Jegadeesh Vijayaraghavan',
  shortName: 'Balaji V.',
  title: 'Applied AI Product Engineer / Full-Stack Engineer',
  tagline:
    'I build production systems end-to-end — HIPAA-compliant healthcare platforms, LLM-powered clinical tools, and scalable backend APIs. Strong across the full stack, with a focus on owning what ships.',
  availability: 'Open to new roles',
  links: {
    github: 'https://github.com/yourusername',       // ← UPDATE
    linkedin: 'https://linkedin.com/in/yourusername', // ← UPDATE
    email: 'your@email.com',                          // ← UPDATE
    resume: '/resume.pdf',                            // ← REPLACE with real resume file
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// WHAT I BUILD
// ─────────────────────────────────────────────────────────────────────────────

export interface BuildArea {
  icon: string
  title: string
  description: string
}

export const whatIBuild: BuildArea[] = [
  {
    icon: 'Layers',
    title: 'Full-Stack Products',
    description:
      'End-to-end ownership from data models and APIs to React frontends. I build for production, not demos — with the architecture decisions and edge cases that entails.',
  },
  {
    icon: 'BrainCircuit',
    title: 'AI-Powered Workflows',
    description:
      'LLM integration, structured prompt design, and async AI pipelines that fit real product constraints. Clinical tools, developer tooling, and domain-scoped assistants.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Healthcare Systems',
    description:
      'HIPAA-compliant platforms with audit logging, role-based access, MFA, and the security posture that regulated environments require.',
  },
  {
    icon: 'Server',
    title: 'Scalable Backend APIs',
    description:
      'Django, Flask, and Node.js APIs designed to be well-modeled, testable, and operationally sound — built for real data and real load.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  roleLabel: string
  role: string
  accent: 'indigo' | 'teal' | 'violet' | 'slate'
  category: string
  techStack: string[]
  impacts: string[]
}

export const projects: Project[] = [
  {
    id: 'promed',
    title: 'ProMed Health Plus',
    roleLabel: 'Sole Engineer',
    role: 'Designed and built the full platform from scratch — data modeling, API design, authentication, async workflows, and Azure deployment.',
    accent: 'indigo',
    category: 'Healthcare · Full-Stack',
    techStack: ['Django', 'React', 'PostgreSQL', 'Azure', 'JWT', 'MFA', 'QuickBooks API'],
    impacts: [
      'Architected a HIPAA-compliant wound care platform with 19+ relational models and 50+ production APIs as the sole engineer',
      'Implemented role-based auth with JWT, MFA, and audit logging — meeting regulated security requirements throughout',
      'Built QuickBooks integration and async background workflows via Django signals and task queues',
      'Deployed on secure Azure infrastructure with controlled access, environment segmentation, and monitoring',
    ],
  },
  {
    id: 'hopelink',
    title: 'HopeLink',
    roleLabel: 'Lead Engineer · First Author',
    role: 'Built an LLM-powered assistant helping cancer patients evaluate and interpret online medical information with domain-scoped reliability.',
    accent: 'teal',
    category: 'AI · Healthcare · Research',
    techStack: ['React', 'Flask', 'OpenAI API', 'Python', 'LLM Pipelines'],
    impacts: [
      'Reduced end-to-end system latency by 40% through prompt optimization and structured response caching',
      'Implemented domain-scoped trust boundaries preventing the model from responding outside verified clinical context',
      'Generated structured, patient-ready summaries from raw online medical sources with source attribution',
      'First-author paper accepted with minor revisions at the 2026 IISE Annual Conference',
    ],
  },
  {
    id: 'vybe',
    title: 'Vybe',
    roleLabel: 'Full-Stack Engineer',
    role: 'Built an AI-enabled platform that translates natural language descriptions into production-style full-stack applications with real-time feedback.',
    accent: 'violet',
    category: 'AI · Developer Tools',
    techStack: ['Next.js', 'tRPC', 'Prisma', 'Neon', 'Clerk', 'Docker', 'Tailwind CSS'],
    impacts: [
      'Natural language to production-style app generation with dynamic UI state orchestration across the stack',
      'Real-time execution feedback for generated workflows with live component and data state management',
      'End-to-end stack: auth (Clerk), ORM (Prisma + Neon), API layer (tRPC), containerized via Docker',
      'Modular generation pipeline with pluggable component architecture designed for extensibility',
    ],
  },
  {
    id: 'ltimindtree',
    title: 'LTIMindtree',
    roleLabel: 'Software Engineer',
    role: 'Enterprise-scale systems work — led a major React migration, built a data lineage engine, and introduced AI-assisted tooling to the engineering workflow.',
    accent: 'slate',
    category: 'Enterprise · Frontend · AI Tooling',
    techStack: ['React', 'TypeScript', 'Python', 'D3.js', 'GitHub Actions', 'Jenkins'],
    impacts: [
      'Led React v16 → v18 migration with TypeScript adoption, improving dashboard performance by 40%',
      'Built a data lineage engine mapping 20,000+ data assets across interconnected enterprise systems',
      'Introduced AI-assisted code analysis features that reduced migration analysis time by 50%',
      'Maintained and shipped across a multi-team enterprise codebase with CI/CD pipelines and automated testing',
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// IMPACT METRICS
// ─────────────────────────────────────────────────────────────────────────────

export interface Metric {
  value: string
  label: string
  sublabel: string
}

export const metrics: Metric[] = [
  { value: '50+', label: 'Production APIs', sublabel: 'ProMed Health Plus' },
  { value: '19+', label: 'Relational Models', sublabel: 'Data architecture' },
  { value: '40%', label: 'Latency Reduction', sublabel: 'HopeLink pipeline' },
  { value: '20K+', label: 'Assets Mapped', sublabel: 'Data lineage engine' },
  { value: '4.5M', label: 'Posts Processed', sublabel: 'NLP pipeline' },
  { value: '1st', label: 'Research Paper', sublabel: 'First author, accepted' },
]

// ─────────────────────────────────────────────────────────────────────────────
// TECHNICAL SKILLS
// ─────────────────────────────────────────────────────────────────────────────

export interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

export const techSkills: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: 'Code2',
    skills: ['Python', 'Django', 'Flask', 'Node.js', 'Express'],
  },
  {
    category: 'Data & APIs',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: 'Cloud',
    skills: ['Azure', 'AWS', 'GCP', 'Docker', 'GitHub Actions', 'Jenkins'],
  },
  {
    category: 'AI Systems',
    icon: 'BrainCircuit',
    skills: ['OpenAI APIs', 'LLM Workflows', 'Prompt Engineering', 'AI-Assisted Dev', 'Async Pipelines'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// RESEARCH
// ─────────────────────────────────────────────────────────────────────────────

export const research = {
  title:
    'HopeLink: A Large Language Model–Powered Clinical Information Assistant Supporting Cancer Patients\u2019 Online Information Seeking',
  status: 'Accepted with Minor Revisions',
  venue: '2026 IISE Annual Conference',
  authorNote: 'First author',
  description:
    'An LLM-powered assistant designed to help cancer patients critically evaluate and contextualize online medical information. The system uses domain-scoped trust boundaries and structured summarization to deliver accurate, patient-ready clinical context while limiting out-of-domain responses.',
  disclaimer: 'Accepted, not yet published.',
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────

export const aboutPoints = [
  {
    icon: 'PackageOpen',
    label: 'Ownership-driven',
    text: "I take full ownership of what I build — from the first schema design to the last deployment check. I don't hand off problems.",
  },
  {
    icon: 'GitBranch',
    label: 'Systems-minded',
    text: 'I think in data flows, dependencies, and failure modes. Good software starts with clear mental models of what the system actually does.',
  },
  {
    icon: 'Layers',
    label: 'Full-stack depth',
    text: "Comfortable owning backend architecture, frontend UX, and everything in between — including the parts that don't have clean interfaces.",
  },
  {
    icon: 'Stethoscope',
    label: 'Real-world AI focus',
    text: 'Interested in AI that ships into real products — not just demos. I build with the constraints and trust requirements that production environments demand.',
  },
]
