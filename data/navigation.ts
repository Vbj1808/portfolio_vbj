export interface NavLink {
  label: string
  href: string
  sectionId: string
}

export interface CommandItem {
  label: string
  description: string
  href: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Work', href: '#work', sectionId: 'work' },
  { label: 'Impact', href: '#impact', sectionId: 'impact' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Research', href: '#research', sectionId: 'research' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

export const commandItems: CommandItem[] = [
  { label: 'Featured Work', description: 'ProMed, HopeLink, Vybe, LTIMindtree', href: '#work' },
  { label: 'Impact Metrics', description: '50+ APIs · 40% latency · 20K assets', href: '#impact' },
  { label: 'Technical Skills', description: 'Frontend, backend, cloud, AI', href: '#skills' },
  { label: 'Research', description: 'IISE 2026 · accepted with minor revisions', href: '#research' },
  { label: 'About', description: 'Background and engineering approach', href: '#about' },
  { label: 'Contact', description: 'Email, GitHub, LinkedIn', href: '#contact' },
  { label: 'Download Resume', description: 'PDF resume', href: '/resume.pdf', external: true },
]
