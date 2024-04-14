/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                custom: '#0B1226', // Replace #FF5733 with your hexadecimal color value
                chief: '#696969',
                scale: '#707070;',
                yume: '#0B1226',
                line: '#000000'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif']
            },
            screens: {
                '3xl': '1920px',
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
            spacing: {
                45.5: '11.375rem',
                83.25: '20.8125rem',
                192.5: '48.125rem',
                89: '22.25rem',
                110: '27.5rem',
                130.25: '32.5625rem',
                151: '37.75rem',
                171: '42.75rem',
                84.25: '21.0625rem',
                13: '3.25rem',
                16.5: '4.125rem',
                9.75: '2.4375rem',
                12.25: '3.0625rem',
                116.5: '29.125rem',
                101.5: '25.375rem',
                144.25: '36.0625rem',
                159.75: '39.9375rem',
                36.5: '9.125rem',
                37.25: '9.3125rem',
                25.5: '6.375rem',
                30.25: '7.5625rem',
                32.25: '8.0625rem',
                26: '6.5rem',
                17.75: '4.4375rem',
                21: '5.25rem',
                22: '5.5rem',
                49: '12.25rem',
                54: '13.5rem',
                59: '14.75rem',
                63: '15.75rem',
                68: '17rem',
                9.5: '2.375rem',
                16.25: '4.0625rem',
                125: '31.25rem',
                143: '35.75rem',
                137: '34.25rem',
                131: '32.75rem',
                89.75: '22.4375rem',
                112.5: '28.125rem',
                210: '52.5rem',
                250: '62.5rem',
                330: '82.5rem',
                389: '97.25rem',
                59.25: '14.8125rem',
                150: '37.5rem',
                270: '67.5rem',
                344.5: '86.125rem',
                116.25: '29.0625rem',
                173.25: '43.3125rem',
                230.25: '57.5625rem',
                287.5: '71.875rem',
                3: '0.75rem',
                55: '13.75rem',
                75: '18.75rem',
                94: '23.5rem',
                6.75: '1.6875rem',
                7.25: '1.8125rem',
                10.75: '2.6875rem',
                8: '2rem'
            },
            fontSize: {
                6: '1.5rem',
                
                9: '2.25rem',
                5: '1.25rem',
                4.5: '1.125rem',
                4: '1rem',
                6.75: '1.6875rem',
                7.25: '1.8125rem',

                8: '2rem'
            },
            lineHeight: {
                10.75: '2.6875rem'
            }
        }
    },
    plugins: []
};
