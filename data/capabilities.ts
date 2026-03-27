export interface Capability {
  icon: string
  title: string
  description: string
}

export const capabilities: Capability[] = [
  {
    icon: 'Server',
    title: 'Production Backend Systems',
    description:
      'End-to-end API design, data modeling, and service architecture. Built for real load, real data, and the operational requirements that production demands.',
  },
  {
    icon: 'BrainCircuit',
    title: 'AI-Powered Workflows',
    description:
      'LLM integration, structured prompt design, and async AI pipelines that operate within real product constraints — not isolated demos.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Healthcare Technology',
    description:
      'HIPAA-compliant systems with audit trails, role-based access control, MFA, and the security posture that regulated environments require.',
  },
  {
    icon: 'Monitor',
    title: 'Full-Stack Interfaces',
    description:
      'React frontends built for clarity and performance. I own the full stack — UI through database — and make decisions across the boundary.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud & Infrastructure',
    description:
      'Azure, AWS, GCP deployments with Docker, CI/CD pipelines, and environment configurations that ship reliably and fail safely.',
  },
]
