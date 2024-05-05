import ArtSectionImg from '../../assets/images/art-card.png';
import GridlineImage from '../../assets/images/grid-lines.svg';
import NewsCard from '../../assets/images/news-card.png';
import RightArrow from '../../assets/icons/arrow-right.svg';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';

function ArtSection() {
    return (
        <>
            <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 pt-12 4xl:text-2xl xs:px-2">
                <section>
                    <div className="pl-6 4xl:pl-8">
                        <div className="hidden lg:block lg:relative lg:h-0 lg:-top-24 lg:-left-20 xl:-left-32 2xl:left-0">
                            <img src={GridlineImage} alt="Grid-Lines-Art-section" className="md:w-full md:h-96"/>
                        </div>
                        <span className="text-blue-500 lg:text-white lg:bg-blue-900 md:text-blue-800 lg:px-12 lg:text-lg xl:text-xl italic font-serif py-2 4xl:text-4xl">
                            The Art of the Possible
                        </span>
                        <p className="text-3xl text-black sm:text-4xl font-poppins font-medium 2xl:text-6xl mb-4 sm:mb-12 xl:mb-32 leading-9 pt-4 w-10/12 3xl:text-6xl 4xl:text-8xl">
                            Learn from our time in the trenches innovating for user advocacy.
                        </p>
                    </div>
                </section>
                <div className="relative flex pb-8 overflow-x-auto">
                    <div
                        className="bg-cover lg:h-full object-cover overflow-hidden w-full md:rounded-4xl rounded-3xl bg-center 3xl:rounded-3xl"
                        style={{ backgroundImage: `url(${ArtSectionImg})` }}>
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
                <div>
                    <div className="flex overflow-x-auto lg:overflow-hidden lg:scrollbar-hide gap-4 w-full md:px-0 font-poppins">
                        <div className="w-full flex sm:px-4">
                            <div className="flex flex-no-wrap w-auto sm:px-0 md:px-0 xl:px-5 3xl:px-6">
                                <div className="w-full mr-4">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mr-4">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mr-4 3xl:mr-6">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2 pb-28">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="w-full flex justify-center items-center pt-5 pb-12 sm:pb-5 z-10">
                    <NavLink
                        to={ROUTES.SERVICE}
                        className="flex items-center justify-center cursor-pointer gap-8 xs:gap-14 2xl:gap-16 py-1 xl:py-2 pl-5 xl:pl-12 2xl:pl-16 bg-slate-100 rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100">
                        <h1 className="text-blue-500 text-xs sm:text-sm md:text-base xl:text-xl font-semibold hover:scale-110 transition-all duration-300">
                            ALL OUR SERVICES
                        </h1>
                        <div className="flex justify-center rounded-full p-3.5 sm:p-4 xl:p-6 mr-1 xs:mr-1.5 xl:mr-2 bg-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:from-10% hover:to-pink-600 transition-all duration-300">
                            <img src={RightArrow} alt="Right-Arrow" className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-100"/>
                        </div>
                    </NavLink>
                </div>
            </section>
        </>
    );
}

export default ArtSection;
