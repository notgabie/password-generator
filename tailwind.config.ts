import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-grey': '#18171F',
        'dark-grey': '#24232C',
        'grey': '#817D92',
        'almost-white': '#E6E5EA',
        'neon-green': '#A4FFAF',
        'red-var': '#F64A4A',
        'orange-var': '#FB7C58',
        'yellow-var': '#F8CD65',
      },
      fontFamily: {
        'jetbrains': ['Jetbrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
