// ─────────────────────────────────────────────────────────────────────────────
// LINKS — update all values here before deploying
// ─────────────────────────────────────────────────────────────────────────────

export const links = {
  github: 'https://github.com/Vbj1808',         // ← UPDATE
  linkedin: 'https://www.linkedin.com/in/vbj1808/',   // ← UPDATE
  email: 'vbj180807@gmail.com',                        // ← UPDATE
  resume: '/resume.pdf',                              // ← drop PDF in /public/
  pypi: 'https://pypi.org/project/dokis',             // ← Dokis PyPI package
} as const

export type Links = typeof links
