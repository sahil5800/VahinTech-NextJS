  import type { Config } from 'tailwindcss'

  const config: Config = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        screens:{
          xs: "320px",
          sm: "375px",
          sml: "500px",
          md: "667px",
          mdl: "768px",
          lg: "960px",
          lgl: "1024px",
          xl: "1280px",

        },
        fontFamily:{
          bodyFont:["Poppins", "sans-serif"],
          titleFont: ["Satisfy", "cursive"],
        },
        colors: {
          bodyColor: "#09050D",
          textDesignColor: "#ECDEC5",
        },
        animation:{
          "spin-slow": "spin 3s linear infinite",
        },
        rotate:{
          25: "25deg",
          13: "-13deg",
        }
      },
    },
    plugins: [],
  }
  export default config
