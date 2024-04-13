/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px'
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            screens: {
                '3xl': '1920px'
                // => @media (min-width: 1920px) { ... },
            },
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif']
            },
            spacing: {
                '25':'6.25rem',
                '30':'7.5rem',
                '45.5':'11.375rem',
                '40.5':'10.125rem'
                
            },
            height: {
                 '19.25':'4.8125rem',
                 '18':'4.5rem',
                 '7.5':'1.875rem',
                 '20.5':'5.125rem',
                 '5.25':'1.3125rem',
                 '5.5':'1.375rem',
                 '5.75':'1.4375rem',
                 '21.75':'5.4375rem',
                 '6.25':'1.5625rem',
                 '23':'5.75rem'
            },
            width: {
                '4.5':'1.125rem',
                '5.25':'1.3125rem',
                '7.5':'1.875rem',
                '5.5':'1.375rem',
                '35':'8.75rem',
                '37':'9.25rem',
                '39':'9.75rem',
                '41':'10.25rem',
                '43':'10.75rem',
                '45.5':'11.375rem'

            },
            fontSize: {
              '7':'1.75rem',
              '4':'1rem',
              '4.5':'1.125rem',
              '5':'1.25rem'
            },
            lineHeight: {
                '15':'3.75rem',
                '93px':'93px'
            }
         
        }
    },
    plugins: []
};
