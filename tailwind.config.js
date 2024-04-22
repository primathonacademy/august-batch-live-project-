/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif']
            },
            screens: {
                xs: '425px',
                // => @media (min-width: 425px) { ... }
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }

                '3xl': '1920px'
                // => @media (min-width: 1920px) { ... }
            },
            width: {
                '1.5/10': '15%',
                '6/10': '60%', //for width 60%
                '7.5/10': '75%', // for width 65%
                '6.5/10': '65%',
            },

            spacing:{
                125: '31.25rem',
                159.5: '39.875rem',
            }
        }
    },
    plugins: []
};
