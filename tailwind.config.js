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
            spacing: {
                '0.5': '0.125rem',
                '1.5': '0.375rem',
                '9.75': '2.4375rem',
                '10': '2.5rem',
                '12.25': '3.0625rem',
                '12.5': '3.125rem',
                '12.75': '3.1875rem',
                '13': '3.25rem',
                '14': '3.5rem',
                '15': '3.75rem',
                '16.25': '4.0625rem',
                '17.5': '4.375rem',
                '17.75': '4.4375rem',
                '21.5': '5.375rem',
                '22.5': '5.625rem',
                '25': '6.25rem',
                '28.75': '7.1875rem',
                '30': '7.5rem',
                '31.25': '7.8125rem',
                '39': '9.75rem',
                '45.5': '11.375rem',
                '51.5': '12.875rem',
                '87.5': '21.875rem',
                '112.5': '28.125rem',
                '143.75': '35.9375rem',
                '7/10': '70%'
            },
            fontSize: {
                '5': '1.25rem',
                '5.5': '1.375rem',
                '6.5': '1.625rem',
                '7': '1.75rem',
                '10.5': '2.625rem',
                '14': '3.5rem'
            },
            lineHeight: {
                '7': '1.75rem',
                '7.5': '1.875rem',
                '8.5': '2.125rem',
                '9.5': '2.375rem',
                '10.5': '2.625rem',
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
            }
            ,
            colors: {
                '#F5F5F5': '#F5F5F5',
                '#FFFFFF': '#FFFFFF',
                '#253F9C': '#253F9C',
                '#0B1226': '#0B1226',
                '#696969': '#696969',
            },
            opacity: {
                '6': '0.06',
            },
        }
    },
    plugins: []
};
