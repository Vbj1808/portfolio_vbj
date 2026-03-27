// ─────────────────────────────────────────────────────────────────────────────
// PIPELINE — CHAPTER_06 // TRANSMISSION
// Active open-source projects currently in development
// ─────────────────────────────────────────────────────────────────────────────

export interface PipelineProject {
  tag: string
  status: string
  title: string
  mission: string
  progress: number          // 0–100
  stack: string[]
  links: {
    github?: string
    docs?: string
    pypi?: string
  }
}

export const pipelineProjects: PipelineProject[] = [
  {
    tag: 'OPEN SOURCE',
    status: 'ACTIVE',
    title: 'NLWEB-CLI',
    mission: 'Turn any website into an AI-queryable endpoint in under 5 minutes.',
    progress: 72,
    stack: ['TypeScript', 'Node.js', 'MCP', 'NLWeb', 'Qdrant', 'crawlee'],
    links: { github: '#' },
  },
  {
    tag: 'MOBILE',
    status: 'ACTIVE',
    title: 'SPLITCART',
    mission: 'Splitwise for Walmart receipts — PDF in, per-person totals out.',
    progress: 58,
    stack: ['React Native', 'Expo', 'Supabase', 'FastAPI', 'pdfplumber'],
    links: { github: '#' },
  },
  {
    tag: 'OPEN SOURCE',
    status: 'ACTIVE',
    title: 'VIBEJO',
    mission: 'Input a GitHub URL. Get a live clickable flow graph of the entire request lifecycle.',
    progress: 81,
    stack: ['React', 'TypeScript', 'Express', 'ts-morph', 'ReactFlow'],
    links: { github: '#' },
  },
  {
    tag: 'AI SYSTEMS',
    status: 'ACTIVE',
    title: 'AGENTCTRL',
    mission: 'Remote command center for AI agents — start, stop, and monitor any fleet from one dashboard.',
    progress: 65,
    stack: ['Next.js', 'tRPC', 'Prisma', 'SSE', 'MCP', 'Python SDK'],
    links: { github: '#' },
  },
]
