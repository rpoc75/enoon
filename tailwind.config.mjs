/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Lexend', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'primary-hover': 'var(--color-primary-hover)',
        accent: 'var(--color-accent)',
        bg: 'var(--color-bg)',
        body: 'var(--color-bg-body)',
        fg: 'var(--color-fg)',
        'btn-bg': 'var(--color-btn-bg)',
        'btn-bg-alt': 'var(--color-btn-bg-alt)',
        'btn-hover-bg': 'var(--color-btn-hover-bg)',
        brand: 'var(--color-brand)',
      },
    },
  },
  plugins: [],
};
