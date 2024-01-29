/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#c59d5f',
        },
        shades: {
          50: 'hsl(205, 100%, 96%)',
          100: 'hsl(205, 90%, 88%)',
          200: 'hsl(205, 86%, 81%)',
          300: 'hsl(205, 90%, 76%)',
          400: 'hsl(205, 89%, 70%)',
          500: 'hsl(205, 78%, 60%)',
          600: 'hsl(205, 63%, 48%)',
          700: 'hsl(205, 72%, 37%)',
          800: 'hsl(205, 77%, 27%)',
          900: 'hsl(205, 86%, 17%)',
        },
        grey: {
          50: 'hsl(210, 36%, 96%)',
          100: 'hsl(212, 33%, 89%)',
          200: 'hsl(210, 31%, 80%)',
          300: 'hsl(211, 27%, 70%)',
          400: 'hsl(209, 23%, 60%)',
          500: 'hsl(210, 22%, 49%)',
          600: 'hsl(209, 28%, 39%)',
          700: 'hsl(209, 34%, 30%)',
          800: 'hsl(211, 39%, 23%)',
          900: 'hsl(209, 61%, 16%)',
        },
        redCus: {
          50: 'hsl(360, 71%, 66%)',
          900: 'hsl(360, 67%, 44%)',
        },
        greenCus: {
          50: 'hsl(125, 67%, 44%)',
          900: 'hsl(125, 71%, 66%)',
        },
        blackCus: {
          900: '#222',
        },
      },
      boxShadow: {
        "ligh": "0 5px 15px rgba(0, 0, 0, 0.1)",
        "dark": "0 5px 15px rgba(0, 0, 0, 0.2)",
      },
      spacing: {
        "0.4" : "0.1rem",
        "maxWidth" : "78.75rem",
        "fixedWidth" : "38.75rem",
      },
      transition: {
        "cusTransition": "all 0.3s linear"
      },
      container: {
        center: true,
        DEAFULT: "1rem",
        lg: "0.625rem"
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container:{
      "center": true,
      "padding": {
        DEFAULT: "1rem",
        lg : "0.625rem",
      },
    },
  },
  plugins: [],
}

