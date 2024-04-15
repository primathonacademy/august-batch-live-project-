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
                'xs': '425px', // 12px
                // => @media (min-width: 425px) { ... }
                
                'sm': '640px', // 12px
                // => @media (min-width: 640px) { ... }

                'md': '768px', // 15px
                // => @media (min-width: 768px) { ... }

                'lg': '1024px', // 18px
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px', //21px
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px', // 24px
                // => @media (min-width: 1536px) { ... }

                '3xl': '1920px' //28px
                // => @media (min-width: 1920px) { ... }
            },
            height: {
                // for main div heights 
                '100': '25rem', // for height 400px
            },
            width: {
                // for main div width
                '3/10': '30%', // for width 30%
                '6/10': '60%', //for width 60%
                '13/20':'65%', // for width 65%
                '5/10': '50%', //for width 50%
                '7/10': '70%', // for width 70%
                '8/10': '80%', // for width 80%
                '93.5': '23.375rem', // for width 374
                '100': '25rem', // for width 400px
                
            },
            spacing: {
                    '2.5': '0.625rem', // for 10px
                    '25.25': '6.3125rem', // for 101px space
                    '25':'6.25rem', // for 100px padding
                    '30': '7.5rem', // for 120px padding
                    '14': '3.5rem', // for 56px  padding 
                    '20': '5rem', // for 80px padding
                    '25': '6.25rem', // for 100px padding
                    '27.5': '6.875rem', // for 110px or margin 
                    '30': '7.5rem', // for 120px padding
                    '45.5': '11.375rem', // for padding 182px
                    

                
            },
            colors: {
                '#253F9C': '#253F9C', // for service background color
                '#696969': '#696969', // for text color  
            },
            fontSize: {
                '3.25': '0.8125rem', // for 13px font size
                '3.75': '0.9375rem', // for 15px font size
                '4.5': '1.125rem', // for 18px font size
                '5': '1.25rem', // for 20px font size
                '5.25': '1.3125rem', // for 21px font size
                '5.5': '1.375rem', // for 22px font size
                '5.75': '1.4375rem', // for 23px font size
                '6' : '1.5rem', // for 24px font size
                '6.25': '1.5625rem', // for 25px font size
                '7': '1.75rem', // for 28px font size
                '8.75': '2.1875rem', // for 35px of font size
                '10': '2.5rem', // for 40px font size
                '11.5': '2.875rem', // for 46px of font size
                '12.5': '3.125rem', // for 50px of font size
                '15': '3.75rem', // for 60px of font size
                '17.5': '4.375rem', // for 70px of font size
                '20': '5rem', // for 80px of font size
                '21.25': '5.3125rem', //for 85px of font size
            },
            lineHeight: {
                '5.5': '1.375rem', // for 22px line height
                '5.75': '1.4375rem', // for 23px line height
                '6': '1.5rem', // for 24px of line height 
                '6.5': '1.625rem', // for 26px of line height 
                '7': '1.75rem', // for 28px of line height
                '7.25': '1.8125rem', // for 29px of line height
                '7.5': '1.875rem', // for 30px of line height
                '9.5': '2.375rem', // for 38px of line height
                '11.25': '2.8125rem', // for 45px of font size
                '12': '3rem', // for 48px of line height 
                '13': '3.25rem', // for 52px of line height
                '15.25': '3.8125rem', // for 61px of line height 
                '16.75': '4.1875rem', // for 67px of line height 
                '17.5': '4.375rem', // for 70px of line height 
                '20': '5rem', // for 80px of line height 
                '24': '6rem', // for 96px of line height

            }

        }
    },
    plugins: []
};
