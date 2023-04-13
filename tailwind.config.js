/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors: {
         // Primary
         darkBlue: 'hsl(233, 26%, 24%)',
         limeGreen: 'hsl(136, 65%, 51%)',
         brightCyan: 'hsl(192, 70%, 51%)',

         // Neutral
         grayishBlue: 'hsl(233, 8%, 62%)',
         lightGrayishBlue: 'hsl(220, 16%, 96%)',
         veryLightGray: 'hsl(0, 0%, 98%)',
         white: 'hsl(0, 0%, 100%)',
      },

      extend: {
         width: {
            1200: '75rem',
         },
      },

      fontFamily: {
         sans: ['Public Sans', 'sans-serif'],
      },

      screens: {
         smallDevice: { max: '320px' },
         mediumDevice: { min: '375px', max: '424px' },
         largerDevice: { min: '425px', max: '767px' },
         tablet: { min: '768px', max: '1023px' },
      },
   },
   plugins: [],
};
