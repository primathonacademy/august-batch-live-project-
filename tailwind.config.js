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
                '46': '182px',
                '73' : '298px',
                '97': '418px',
                '98': '508px',
            },
            colors : {
                primary : '#2F3750',
                secondary : '#555555', 
                bgPrimary : '#F7F7F7',
                blue : '#253F9C'
            },
            fontSize : {
                'sxs' : '10px',
                'sm' : '14px',
                'base' : '16px',
                'xl' : '20px',
                '2xl' : '24px'
            }
        }
    },
    plugins: []
};
