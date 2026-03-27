export interface Metric {
  id: string
  numericValue: number
  suffix: string
  prefix?: string
  label: string
  sublabel: string
  isDecimal?: boolean
  useComma?: boolean
  staticDisplay?: string // if set, skip animation and show this
}

// data/metrics.ts — UPDATED (add LTI signal)
export const metrics: Metric[] = [
  {
    id: 'apis',
    numericValue: 50,
    suffix: '+',
    label: 'Production APIs',
    sublabel: 'ProMed Health Plus',
  },
  {
    id: 'models',
    numericValue: 19,
    suffix: '+',
    label: 'Relational Models',
    sublabel: 'Data architecture',
  },
  {
    id: 'latency',
    numericValue: 40,
    suffix: '%',
    label: 'Latency Reduction',
    sublabel: 'HopeLink LLM pipeline',
  },
  {
    id: 'assets',
    numericValue: 20000,
    suffix: '+',
    label: 'Enterprise Assets Mapped',
    sublabel: 'LTIMindtree lineage engine',
    useComma: true,
  },
  {
    id: 'experience',
    numericValue: 2,
    suffix: '+',
    label: 'Years Enterprise Eng',
    sublabel: 'LTIMindtree · production scale',
  },
  {
    id: 'research',
    numericValue: 1,
    suffix: '',
    label: 'Research Paper',
    sublabel: 'First author · Accepted',
    staticDisplay: '1st',
  },
]