import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports={
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": {
            transfrom: "translateX(0)"
          },
          "100%": {
            transfrom: "translateX(-100%)"
          }
        },
        slideRight: {
          "100%": {
            transfrom: "translateX(100)"
          },
          "0%": {
            transfrom: "translateX(0)"
          }
        }
      },
      animation: {
        "slide-left": "slideLeft 60s linear"
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}