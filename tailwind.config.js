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
            },
            spacing: {
                9.5: '2.438rem',
                18: '4.5rem',
                21: '5.125rem',
                25: '6.25rem',
                45: '11.25rem',
                46: '11.375rem',
                57: '14.5rem',
                73: '18.75rem',
                81: '22.25rem',
                82: '21.875rem',
                83: '23.438rem',
                84: '24.563rem',
                94: '22.313rem',
                95: '25.625rem',
                96: '26.688rem',
                97: '31.75rem',
                98: '35.625rem',
                102: '36.125rem',
                108: '40.625rem',
                116: '44.375rem',
                120: '48.125rem'
            },
            fontSize: {
                '2.5xl': '1.75rem',
                '5.5xl': '3.5rem'
            },
            lineHeight: {
                11: '2.625rem',
                12: '2.1rem',
                13: '4.188rem',

            },
            colors: {
                blackish: '#272727',
                bgPrimary: '#F7F7F7'
            }
        }
    },
    plugins: []
};
