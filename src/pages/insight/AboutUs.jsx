import { useState, useEffect } from 'react';
import AboutHeroSection from '../../assets/images/about-herosection-image.png';
import AboutSurveyCards from '../../assets/images/about-survey-cards.png';
import BgGridLine from '../../assets/images/bg-gridline.svg';

const contentData = [
    {
        image: AboutSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: AboutSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: AboutSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: AboutSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: AboutSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: AboutSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: AboutSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    }
];

function AboutUs() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobileView(window.innerWidth <= 768); // Assuming md screen size is 768px, adjust as needed
        }

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener
        };
    }, []);

    return (
        <>
            <section className="w-full relative px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 ">
                <img
                    className="absolute inset-0 bg-cover object-cover bg-center h-full scale-100 "
                    src={BgGridLine}
                    alt="background grid line "
                />
                <div className=" pt-24 pb-12">
                    <div className="w-36 md:w-40 lg:w-45.5 xl:w-48 2xl:w-52  h-7 flex items-center justify-center bg-blue-700 ">
                        <h3 className="text-white italic text-xl lg:text-2xl 2xl:text-3xl ">
                            {isMobileView ? 'Our Services' : 'About us'}
                        </h3>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-4.5xl md:text-5xl lg:text-5.7xl xl:text-7xl 2xl:text-7.5xl 3xl:text-7.5xl pr-20 md:pr-28 lg:pr-40 xl:pr-52 2xl:pr-60 leading-12 md:leading-13 lg:leading-14 xl:leading-15  2xl:leading-16 3xl:leading-18 3xl:pr-72">
                            {isMobileView
                                ? 'Simplyfying the Next'
                                : 'Feel at home among brave dreamers and curious rebels.'}
                        </h1>
                    </div>
                    <p className="text-lg xl:text-xl 2xl:text-2xl  mt-10 pr-20 md:pr-40 lg:pr-60 xl:pr-80 2xl:pr-96 3xl:pr-131">
                        {isMobileView
                            ? 'High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love.'
                            : 'Here in “the pond” we’re driven by creativity, curiosity and a passion for challenging the status quo in everything we do'}
                    </p>
                </div>
            </section>

            <div className="mt-10 ">
                <img
                    src={AboutHeroSection}
                    alt="company workplace environment poster"
                    className=" object-cover bg-cover bg-center 3xl:min-w-389  2xl:min-w-330  2xl:max-w-389 xl:min-w-270    xl:max-w-330 lg:min-w-210 lg:max-w-270 md:min-w-162.5 md:max-w-210  xl:h-127 lg:h-116.25  md:h-116.25 2xl:h-127   md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 w-full  "
                />
            </div>

            {contentData.map((item, index) => (
                <div key={index} className="flex  justify-center m-auto md:flex md:justify-start md:m-0 ">
                    <div
                        className="  md:flex 3xl:gap-36 2xl:gap-32 xl:gap-28 lg:gap-24 md:gap-12 md:items-center   mt-28 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5"
                        key={index}>
                        <img
                            src={item.image}
                            alt="survey cards "
                            className="3xl:w-127 3xl:h-80 md:w-96 md:h-60 lg:w-106.7 lg:h-64 xl:w-112.5 xl:h-72 2xl:w-116.25 2xl:h-80 bg-cover object-cover bg-center "
                        />
                        <div>
                            <p className="mt-6 font-poppins font-semibold text-base text-gray-475 text-left 2xl:text-xl ">
                                {item.date}
                            </p>
                            <div className="min-w-72 max-w-96 md:min-w-full md:max-w-full">
                                <h2 className="mt-4 font-roboto text-2.5xl leading-8 pr-8 md:pr-0 2xl:text-4xl xl:text-3xl ">
                                    {item.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button className="block mx-auto px-5 py-2 mt-10 bg-transparent rounded-8 border-2 border-red-300 w-52 h-14 3xl:w-60 3xl:h-20 text-blue-900">
                LOAD MORE
            </button>
        </>
    );
}

export default AboutUs;
