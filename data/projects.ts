export type StatusDot = 'green' | 'blue' | 'gray'

export interface KeyMetric {
  value: string
  label: string
}

export interface Project {
  id: string
  title: string
  typeTag: string
  statusLabel: string
  statusDot: StatusDot
  roleLabel: string
  description: string
  keyMetric?: KeyMetric
  techStack: string[]
  links: {
    github?: string
    live?: string
  }
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'promed',
    title: 'ProMed Health Plus',
    typeTag: 'HEALTHTECH',
    statusLabel: 'PRODUCTION',
    statusDot: 'green',
    roleLabel: 'Sole Engineer',
    description:
      'HIPAA-compliant wound care platform built end-to-end as the sole engineer — data models, APIs, frontend, auth, async workflows, and Azure deployment. Covers clinical intake, billing integration via QuickBooks, role-based access control, JWT + MFA, and full audit logging throughout.',
    keyMetric: { value: '50+ APIs · 19 models', label: 'full-stack production system' },
    techStack: ['Django', 'React', 'PostgreSQL', 'Azure', 'Celery', 'JWT', 'MFA', 'QuickBooks API'],
    links: { github: '#', live: '#' },
    featured: true,
  },
  {
    id: 'hopelink',
    title: 'HopeLink',
    typeTag: 'AI RESEARCH',
    statusLabel: 'ACCEPTED',
    statusDot: 'blue',
    roleLabel: 'Lead Engineer · First Author',
    description:
      "LLM-powered clinical information assistant for cancer patients evaluating online medical information. Reduced end-to-end latency by 40% through prompt optimization and response caching. Domain-scoped trust boundaries prevent out-of-context responses; structured summarization delivers patient-ready outputs.",
    keyMetric: { value: '40%', label: 'latency reduction' },
    techStack: ['React', 'Flask', 'OpenAI API', 'Python', 'LLM Pipelines'],
    links: { github: '#' },
  },
  {
    id: 'vybe',
    title: 'Vybe',
    typeTag: 'PLATFORM',
    statusLabel: 'ACTIVE',
    statusDot: 'blue',
    roleLabel: 'Full-Stack Engineer',
    description:
      'AI-enabled full-stack application generation platform. Translates natural language input into production-style applications with real-time execution feedback and dynamic UI state orchestration. Full stack: Clerk auth, Prisma + Neon ORM, tRPC API layer, containerized via Docker.',
    techStack: ['Next.js', 'tRPC', 'Prisma', 'Neon', 'Clerk', 'Docker', 'Tailwind CSS'],
    links: { github: '#', live: '#' },
  },
  // data/projects.ts — UPDATED (LTI elevated)
{
  id: 'ltimindtree',
  title: 'LTIMindtree',
  typeTag: 'ENTERPRISE',
  statusLabel: '2+ YEARS',
  statusDot: 'blue',           // elevated from gray
  roleLabel: 'Senior Software Engineer',
  description:
    'Led React v16 → v18 migration with TypeScript adoption across a multi-team enterprise codebase — 40% dashboard performance gain. Built a data lineage engine mapping 20,000+ interconnected assets, reducing migration planning from 2 days to 15 minutes. Introduced AI-assisted code analysis tooling cutting migration analysis time by 50%.',
  keyMetric: { value: '20,000+', label: 'assets mapped across enterprise systems' },
  techStack: ['React', 'TypeScript', 'Spring Boot', 'OrientDB', 'Python', 'D3.js', 'Jenkins'],
  links: {},
  featured: false,
},
]
