/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e2f1fb',
          100: '#b8dbf6',
          200: '#8bc5f0',
          300: '#5eaee9',
          400: '#399de6',
          500: '#088de2',
          600: '#0080d5', // default
          700: '#006ec3',
          800: '#005eb1',
          900: '#004192',
        },
        green: {
          50: '#e6f7eb',
          100: '#c3ebcd',
          200: '#9bdeae',
          300: '#6ed28d',
          400: '#47c873',
          500: '#03bd5a', // default
          600: '#00ad50',
          700: '#009b44',
          800: '#008938',
          900: '#006a23',
        },
        orange: {
          50: '#fff9e5',
          100: '#ffeebe',
          200: '#ffe396',
          300: '#ffd970',
          400: '#ffcf59',
          500: '#ffc852',
          600: '#ffba4d',
          700: '#ffa94a',
          800: '#ff9a47',
          900: '#fa7f43',
        },
        pink: {
          50: '#fbe5eb',
          100: '#f7bdcd',
          200: '#f293ac',
          300: '#ec698c',
          400: '#e64d74',
          500: '#e2375d',
          600: '#d1335a', // default
          700: '#bb2e56',
          800: '#a62a52',
          900: '#81224a',
        },
        purple: {
          50: '#f3e4f5',
          100: '#e1bbe6',
          200: '#cd8dd6',
          300: '#b95fc5',
          400: '#aa39b9', // default
          500: '#9b05ad',
          600: '#8d04a7',
          700: '#7901a0',
          800: '#680099',
          900: '#46008c',
        },
        slate: {
          100: '#EBEFF3',
          200: '#C9D3DF',
          300: '#ADB9C9',
          400: '#8393A7',
          500: '#53657D', // default
          600: '#3D4D65',
          700: '#374355',
          800: '#202731',
        },
      },
      backgroundImage: {
        strava: "url('/api_logo_pwrdBy_strava_stack_white.png')",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /text-(purple|green|blue|orange)-(300|500|600|800)/,
    },
  ],
});
