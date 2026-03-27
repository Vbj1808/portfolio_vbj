import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Legacy sys.* tokens (kept for backward compat with old components)
        sys: {
          base: '#080C10',
          surface: '#0E1318',
          card: '#111820',
          strip: '#04070A',
        },
        // New design system — matches reference
        surface: '#111318',
        background: '#07090D',
        primary: '#4F9EFF',
        accent: '#4ae176',
        'on-surface-variant': '#c1c7d4',
      },
      fontFamily: {
        // Legacy vars (kept for old components)
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        // New design system fonts
        headline: ['var(--font-headline)', 'Impact', 'sans-serif'],
        technical: ['var(--font-technical)', 'ui-monospace', 'monospace'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1.2s step-end infinite',
        'fade-in': 'fadeIn 0.2s ease forwards',
        'slide-up': 'slideUp 0.3s ease forwards',
        marquee: 'marquee 30s linear infinite',
        'signal-beam': 'signal-beam 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'signal-beam': {
          '0%':   { opacity: '0', transform: 'scaleY(0.6)' },
          '40%':  { opacity: '1', transform: 'scaleY(1)' },
          '100%': { opacity: '0', transform: 'scaleY(0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
