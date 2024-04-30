/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "slate-700": "#374355",
        "slate-600": "#3D4D65",
        "slate-500": "#53657D",
        "slate-400": "#8393A7",
        "slate-300": "#ADB9C9",
        "slate-200": "#C9D3DF",
        "slate-100": "#EBEFF3",
      },
      backgroundImage: {
        strava: "url('/api_logo_pwrdBy_strava_stack_white.png')",
      },
    },
  },
  plugins: [],
};
