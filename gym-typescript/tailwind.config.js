/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F0F8FF",
        "gray-50": "#E6F2FF",
        "gray-100": "#CCE0FF",
        "gray-500": "#6699CC",
        "primary-100": "#E0F7FF",
        "primary-300": "#99DFFF",
        "primary-500": "#33C4FF",
        "secondary-400": "#66B2FF",
        "secondary-500": "#3399FF",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #33C4FF 0%, #3399FF 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      }
    },
    screens: {
      "xs": "480px",
      "sm": "768px",
      "md": "1060px"
    }
  },
  plugins: [],
};
