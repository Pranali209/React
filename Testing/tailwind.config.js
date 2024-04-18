/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      headerblue : '#7FC7D9',
      bodyBlue :'#DCF2F1'

    }
  },
  plugins: [],
}

