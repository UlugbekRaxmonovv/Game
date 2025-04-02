/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': 'rgba(255, 255, 255, 0.15)',  
      },
      backdropBlur: {
        '10': '10px',
        '15': '15px',  
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        cardEntrance: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        cardEntrance: "cardEntrance 0.6s ease-out forwards",
        float: "float 2s ease-in-out infinite"
      },
    },
  },
  corePlugins: {
    backdropFilter: true,
  },
  plugins: [
    
  ],
};