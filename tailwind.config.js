/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif'],
            },
            screens: {
                '3xl': '1920px',
                '4xl': '2560px',
            },
            spacing: {
                '46px': '182px',
            },
        },
    },
    plugins: [],
};
