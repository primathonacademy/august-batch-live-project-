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
                xs: '280px',

                sm: '428px', //heading-16px  width-427
                // => @media (min-width: 640px) { ... }
    
                '3xl': '1920px' //h-24px w-770px
            }
        }
    },
    plugins: []
};
