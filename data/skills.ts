export interface SkillGroup {
  category: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
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
    category: 'Cloud & Infra',
    icon: 'Cloud',
    skills: ['Azure', 'AWS', 'GCP', 'Docker', 'GitHub Actions', 'Jenkins'],
  },
  {
    category: 'AI Systems',
    icon: 'BrainCircuit',
    skills: [
      'OpenAI APIs',
      'LLM Workflows',
      'Prompt Engineering',
      'AI-Assisted Dev',
      'Async Pipelines',
    ],
  },
]
