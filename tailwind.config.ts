// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Agregar todas las variantes de fuentes personalizadas a Tailwind
        'appetite-bold': ['var(--font-appetite-bold)', 'sans-serif'],
        'appetite-heavy': ['var(--font-appetite-heavy)', 'sans-serif'],
        'appetite-medium': ['var(--font-appetite-medium)', 'sans-serif'],
        'quicksand-bold': ['var(--font-quicksand-bold)', 'sans-serif'],
        'quicksand-medium': ['var(--font-quicksand-medium)', 'sans-serif'],
        'quicksand-regular': ['var(--font-quicksand-regular)', 'sans-serif'],
        'quicksand-semibold': ['var(--font-quicksand-semi-bold)', 'sans-serif'],
      },
      colors: {
        // Puedes agregar colores personalizados aquí si lo deseas
      },
    },
  },
  plugins: [],
}

export default config