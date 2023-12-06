import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',



  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
        //font family monteserrat
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
        },
      colors: {
          primary: '#E9E9E9',
          secondary: '#e8e8e8',

        dark: {
            100: '#171717',
            200: '#1F1F1F',
            300: '#272727',
            },
        },
        background: {
            'glass':'linear-gradient(180deg, rgba(217, 217, 217, 0.15) 0%, rgba(217, 217, 217, 0) 100%)',
        }
      },
    },

  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
