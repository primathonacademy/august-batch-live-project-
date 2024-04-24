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
            lineHeight: {
                '22': '22px',
                '34': '34px',
              },
            screens: {
                'xs': '425px',
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
            colors: {
                gray: {
                    75 : '#F7F7F7',
                    425: '#828796',
                    475: '#7B7B7B',
                    525: '#707070',
                },
                slate: {
                    550: '#696969',
                    725 : '#2F3750',
                    925: '#0B1226',
                },
                zinc:{
                    75: '#F4F8FF',
                    850: '#272727',
                },
                blue :{
                    575: '#0A66EC',
                    850: '#253F9C',
                },
                neutral : {
                    575: '#555555',
                },
            },
            spacing: {
                '25': '6.25rem',
                '23':' 5.9375rem',
        
            }
        }
    },
    plugins: []
};
