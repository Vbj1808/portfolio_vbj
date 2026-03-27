// ─────────────────────────────────────────────────────────────────────────────
// CONTENT — all copy and data for the new chapter-narrative design
// ─────────────────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: '01_START', href: '#hero' },
  { label: '02_ARCH', href: '#capabilities' },
  { label: '03_OUTPUT', href: '#work' },
  { label: '04_PIPE', href: '#pipeline' },
  { label: '05_INTEL', href: '#research' },
  { label: '06_CORE', href: '#about' },
] as const

export const capabilities = [
  {
    icon: 'psychology',
    title: 'AI AGENTS',
    subtitle: 'Evaluation & Provenance',
  },
  {
    icon: 'dns',
    title: 'SCALABLE BE',
    subtitle: 'FastAPI & Robustness',
  },
  {
    icon: 'medical_services',
    title: 'HEALTHCARE TECH',
    subtitle: 'HIPAA & Compliance',
  },
  {
    icon: 'code',
    title: 'FULL-STACK',
    subtitle: 'React & Next.js',
  },
] as const

export const capabilityMetrics = [
  { label: 'PROVENANCE', value: '85%', ghost: false },
  { label: 'LATENCY', value: '~1MS', ghost: true },
  { label: 'APIs', value: '50+', ghost: false },
] as const

export type ProjectStatusColor = 'accent' | 'muted'

export interface Project {
  tag: string
  tagBordered: boolean
  status: string
  statusColor: ProjectStatusColor
  title: string
  description: string
}

export const projects: Project[] = [
  {
    tag: 'DOKIS',
    tagBordered: true,
    status: 'STABLE',
    statusColor: 'accent',
    title: 'RAG PROVENANCE',
    description:
      'Verifying claims against source documents in real-time with <1ms overhead.',
  },
  {
    tag: 'PROMED',
    tagBordered: false,
    status: 'HIPAA',
    statusColor: 'muted',
    title: 'HEALTH TECH',
    description:
      'Scaling healthcare operations through robust, compliant API ecosystems.',
  },
  {
    tag: 'HOPELINK',
    tagBordered: false,
    status: 'RESEARCH',
    statusColor: 'muted',
    title: 'CLINICAL AI',
    description:
      'LLM-powered clinical assistants with rigorous citation compliance frameworks.',
  },
  {
    tag: 'KRATO',
    tagBordered: false,
    status: 'AGENTS',
    statusColor: 'muted',
    title: 'MULTI-AGENT',
    description:
      'ReAct reasoning pipeline with episodic memory, tool calling, and real-time SSE streaming UI.',
  },
]

export const terminalMessages = [
  '● AI SYSTEMS: ONLINE',
  '● DOKIS v1.0: DEPLOYED',
  '● LAST COMMIT: 2M AGO',
  '● OPEN TO ROLES: TRUE',
  '● STATUS: TRANSMITTING_DATA',
] as const
