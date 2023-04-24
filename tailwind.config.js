/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      backgroundImage: {
         backDesktop: 'url(./src/assets/svg/bg-intro-desktop.svg)',
         backDevice: 'url(./src/assets/svg/bg-intro-mobile.svg)',
      },

      backgroundSize: {
         custom: '95% 100%',
         custom02: '140% 100%',
         custom03: '100% 100%',

         c_mbl01: '105% 145%',
      },

      backgroundPosition: {
         customPosition01: '48px 1px',
      },

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

      fontSize: {
         title: `${38 / 16}rem`,
         titleCard: `${18 / 16}rem`,
         author: `${12 / 16}rem`,
         textCard: `${14 / 16}rem`,
      },

      extend: {
         width: {
            1200: '75rem',

            '40vw': '40vw',
            '50vw': '50vw',
            '60vw': '60vw',
            '70vw': '70vw',
            '80vw': '80vw',
            '90vw': '90vw',
            '100vw': '100vw',
         },

         height: {
            '40vh': '40vh',
            '50vh': '50vh',
            '60vh': '60vh',
            '70vh': '70vh',
            '80vh': '80vh',
            '90vh': '90vh',
            '100vh': '100vh',
         },

         spacing: {
            52: '52px',
         },
      },

      fontFamily: {
         publicSans: ['Public Sans, sans-serif'],
      },

      screens: {
         smallDevice: { max: '320px' },
         mediumDevice: { min: '375px', max: '424px' },
         largerDevice: { min: '425px', max: '767px' },
         tablet: { min: '768px', max: '1023px' },
         highResolution: { min: '1920px' },
      },
   },
   plugins: [],
};
