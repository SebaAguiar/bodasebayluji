import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#FDFDFD',
      background2: '#fff4ea',
      'color-1': '#DAA0DF',
      'color-2': '#a87662',
      'color-3': '#DEB2B1',
      red: '#FC0000',
      green: '#00FC2A',
      orange: 'FCB700',
      grey: '#d1d1d1',
    },
    extend: {
      height: {
        '30': '7.5rem',
        '128': '32rem',
        '152': '38rem',
      },
      backgroundImage: {
        'header-landing': "url('/images/portada-web-comprimida.png')",
        'website-decoration':
          'url(https://cdn1.casamientos.com.ar/assets/img/wedsites/hero/olive-branches-bg-small.jpg)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '100': '25rem',
        '110': '30rem',
        '120': '35rem',
        '130': '40rem',
        '140': '45rem',
        '150': '50rem',
        '160': '55rem',
        '170': '60rem',
        '180': '65rem',
        '190': '70rem',
        '200': '75rem',
        '210': '80rem',
        '220': '85rem',
        '230': '90rem',
        '240': '95rem',
        '242': '96rem',
      },
      fontFamily: {
        sans: ['ProximaNova', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
