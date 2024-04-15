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
                '3xl': '1920px'
            },
            spacing: {
                46: '11.375rem',
                73: '18.625rem',
                97: '26.125rem',
                98: '31.75rem'
            },
            colors: {
                '2F3750': '#2F3750',
                '555555': '#555555',
                'F7F7F7': '#F7F7F7',
                '253F9C': '#253F9C'
            },
            fontSize: {
                sxs: '0.625rem'
            }
        }
    },
    plugins: []
};
