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
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif']
            },
            screens: {
                '3xl': '1920px',
                 ssm: '354px',
            },
            spacing:{
                "37":"2.3125rem",
                "47":"2.9375rem",
                "25":"1.5625rem",
                "26":"1.625rem",
                "56":"3.5rem",
                "65":"4.0625rem",
                "70":"4.375rem"
            },
            fontSize:{
                "14":"0.875rem",
                "20":"1.25rem",
                "24":"1.5rem",
                "36":"2.25rem",
                "56":"3.5rem"
                
            },
            width:{
                "42":"2.625rem",
                "70":"4.375rem",
                "173":"10.8125rem",
                "300":"18.75rem",
                "305":"19.0625rem",
                "356":"22.25rem",
                "320":"20rem",
                "500":"31.25rem",
                "510":"31.875rem",
                "700":"700px"
            },
            height:{
                "350":"21.875rem",
                "377":"23.5625rem",
                "400":"25rem",
                "304":"19rem",
                "318":"19.875rem",
                "771":"48.1875rem"
            },
            lineHeight:{
                "21":"1.3125rem",
                "24":"1.5rem",
                "29":"1.8125rem",
                "43":"2.6875rem",
                "60":"3.75rem",
                "67":"4.1875rem"
            },
            letterSpacing:{
                "0.9":"0.05625rem",
            },
            borderRadius:{
                "40":"2.5rem",
            },
        
            colors:{
               "#F7F7F7":"#F7F7F7",
               "#0B1226":"#0B1226",
               "#272727":"#272727",
               "#696969":"#696969",
               "#253F9C":"#253F9C",
               "#F4F8FF":"#F4F8FF",
            }

        }
    },
    plugins: []
};
