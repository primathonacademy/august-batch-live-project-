import { useState, useEffect } from 'react';
import AboutPosterSection from '../../assets/images/art-card.png';
import NewsTechSurveyCards from '../../assets/images/news-tech-survey-cards.png';
import BgGridLine from '../../assets/images/bg-gridline.svg';

const initialContentToShow = 7;
const contentData = [
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    },
    {
        image: NewsTechSurveyCards,
        date: '/01 / News Technology / 03 March 2022',
        title: 'Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!'
    }
];

function AboutUs() {
    const [isMobileView, setIsMobileView] = useState(false);
    const [visibleContentCount, setVisibleContentCount] = useState(initialContentToShow);

    useEffect(() => {
        function handleResize() {
            setIsMobileView(window.innerWidth <= 768);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLoadMore = () => {
        setVisibleContentCount((prevCount) => prevCount + initialContentToShow);
    };

    return (
        <>
            <section className="w-full relative px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <img
                    className="absolute inset-0 bg-cover object-cover bg-center h-full scale-100"
                    src={BgGridLine}
                    alt="background grid line"
                />
                <div className="pt-24 pb-12">
                    <div className="w-fit px-5 py-1 flex items-center justify-center bg-blue-850">
                        <h3 className="text-white font-serif italic text-xl lg:text-2xl">
                            {isMobileView ? 'Our Services' : 'About Us'}
                        </h3>
                    </div>
                    <h1 className="font-medium text-4.5xl md:text-5xl lg:text-5.7xl xl:text-7xl 2xl:text-7.5xl 3xl:text-7.5xl pr-20 md:pr-28 lg:pr-40 xl:pr-52 2xl:pr-60 leading-12 md:leading-13 lg:leading-14 xl:leading-15 2xl:leading-16 3xl:leading-18 3xl:pr-72 mt-7">
                        {isMobileView
                            ? 'Simplyfying the Next'
                            : 'Feel at home among brave dreamers and curious rebels.'}
                    </h1>
                    <p className="text-neutral-575 text-lg xl:text-xl 2xl:text-2xl mt-10 pr-20 md:pr-40 lg:pr-60 xl:pr-80 2xl:pr-96 3xl:pr-131">
                        {isMobileView
                            ? 'High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love.'
                            : 'Here in “the pond” we’re driven by creativity, curiosity and a passion for challenging the status quo in everything we do'}
                    </p>
                </div>
            </section>

            <div className="relative flex items-center pb-8 overflow-x-hidden mt-10 md:mx-14 lg:mx-20 xl:mx-24 2xl:mx-28 3xl:mx-45.5 mb-24">
                <div
                    className="bg-cover w-full  object-cover scale-x-110 scale-y-110 overflow-hidden rounded-3xl bg-center 3xl:rounded-3xl"
                    style={{ backgroundImage: `url(${AboutPosterSection})` }}>
                    <div className="lg:pt-64 lg:pl-32 md:pt-32 md:pl-12 pt-16 pl-9 lg:pb-4 pr-2 p-20">
                        <div className="mt-2 mr-6 md:pb-28">
                            <h1 className="font-semibold text-gray-300 font-poppins text-lg pt-4 3xl:text-2xl pr-5 4xl:text-4xl">
                                /01/ News Technology / 03 March 2022
                            </h1>
                            <p className="text-gray-400 pt-4 text-lg lg:w-1/3 md:w-full font-roboto sm:w-1/2 3xl:text-2xl pr-5 4xl:text-4xl">
                                Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {contentData.slice(0, visibleContentCount).map((item, index) => (
                <div key={index}>
                    <div className="flex justify-center m-auto md:flex md:justify-start ">
                        <div
                            className="md:flex 3xl:gap-x-36 2xl:gap-x-32 xl:gap-x-28 lg:gap-x-24 md:gap-x-12 md:items-center mt-8 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 pb-8"
                            key={index}>
                            <img
                                src={item.image}
                                alt="NewsTech survey cards image"
                                className="3xl:w-127 3xl:h-80 md:w-96 md:h-60 lg:w-106.7 lg:h-64 xl:w-112.5 xl:h-72 2xl:w-116.25 2xl:h-80 bg-cover object-cover bg-center"
                            />
                            <div>
                                <p className="mt-6 font-poppins font-semibold text-base text-neutral-500 text-left 2xl:text-xl">
                                    {item.date}
                                </p>
                                <div className="min-w-72 max-w-96 md:min-w-full md:max-w-full">
                                    <h2 className="mt-4 font-roboto text-2.5xl text-black leading-8 pr-8 md:pr-0 2xl:text-4xl xl:text-3xl ">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {index !== contentData.length - 1 && (
                        <hr className="my-8 border-t-2 border-neutral-300 md:mx-14 lg:mx-20 xl:mx-24 2xl:mx-28 3xl:mx-45.5" />
                    )}
                </div>
            ))}

            {visibleContentCount < contentData.length && (
                <button
                    className={`block mx-auto font-semibold px-5 py-2 mt-10 bg-sky-50 rounded-8 w-52 h-14 3xl:w-60 3xl:h-20 text-blue-900 mb-52 hover:bg-gradient-to-r from-blue-200 to-pink-200 ${
                        visibleContentCount >= contentData.length ? 'hidden' : ''
                    }`}
                    onClick={handleLoadMore}>
                    LOAD MORE
                </button>
            )}
        </>
    );
}

export default AboutUs;
