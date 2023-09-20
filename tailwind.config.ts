import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Agregar tus propios colores aquí
        yellow_egg: '#FFB400', // Ejemplo de color personalizado
        back_panter: '#2B2B2B',
        silver: '#767676' // Otro ejemplo de color personalizado
      },
      fontFamily: {
        // Agregar tus propias fuentes aquí
        inter: ['Inter', 'sans-serif'], // Ejemplo de fuente personalizada
      },
    },
  },
  plugins: [],
}
export default config
