import type { Config } from 'tailwindcss'
import daisyui from "daisyui";

const config: Config = {
    darkMode: 'media',
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
          // accent: '#ef4e7b',
          accent: '#07b39b',

        dark: {
            100: '#171717',
            200: '#1F1F1F',
            300: '#272727',
            400: '#2F2F2F',
            500: '#373737',
            600: '#3F3F3F',
            700: '#474747',
            800: '#4F4F4F',
            900: '#575757',

            },
        },
        backgroundImage: {
            'black-to-transparent': 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
        }
      },
    },
    plugins: [daisyui],
}
export default config
