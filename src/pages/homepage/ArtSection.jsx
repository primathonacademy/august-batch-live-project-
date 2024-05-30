import PropTypes from 'prop-types';
import ArtSectionImg from '../../assets/images/art-card.png';
import GridlineImage from '../../assets/images/grid-lines.svg';
import NewsCard from '../../assets/images/news-card.png';
import RightArrow from '../../assets/icons/arrow-right-icon.svg';

function ArtSection({ screenSize }) {
    return (
        <>
            <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 pt-12 4xl:text-2xl xs:px-2">
                <section>
                    <div className="pl-6 4xl:pl-8">
                        <div className="hidden lg:block lg:relative lg:h-0 lg:-top-52 lg:-left-28 xl:-left-40 2xl:-left-52 3xl:-left-80">
                            <img
                                src={GridlineImage}
                                alt="Grid-Lines-Art-section"
                                className="md:w-full md:h-96 lg:h-127 lg:-left-6 3xl:scale-110"
                            />
                        </div>
                        <span className="text-blue-500 lg:text-white lg:bg-blue-850 md:text-blue-800 lg:px-12 lg:text-lg xl:text-xl italic font-serif py-2 4xl:text-4xl">
                            The Art of the Possible
                        </span>
                        <p className="text-3xl text-black sm:text-4xl font-poppins font- xl:text-5.7xl 2xl:text-6xl mb-4 sm:mb-12 xl:mb-32 leading-9 pt-4 w-10/12 3xl:text-6xl 4xl:text-8xl xl:leading-14">
                            Learn from our time in the trenches innovating for user advocacy.
                        </p>
                    </div>
                </section>
                <div className="relative flex pb-8 overflow-x-auto">
                    <div
                        className="bg-cover lg:h-full object-cover overflow-hidden w-full md:rounded-4xl rounded-3xl bg-center 3xl:rounded-3xl lg:mt-3 xl:mt-1"
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
                                            alt="News card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2">
                                            <h3 className="font-medium text-slate-925 text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h3>
                                            <p className="font-roboto text-slate-725 pt-4 text-lg lg:w-10/12 xl:text-2xl">
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
                                            alt="News card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2">
                                            <h3 className="font-medium text-slate-925 text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h3>
                                            <p className="font-roboto text-slate-725 pt-4 text-lg lg:w-10/12 xl:text-2xl">
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
                                            alt="News card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2 pb-28">
                                            <h3 className="font-medium text-slate-925 text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h3>
                                            <p className="font-roboto text-slate-725 pt-4 text-lg lg:w-10/12 xl:text-2xl">
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
                {screenSize < 1024 ? (
                    <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-60 mt-32 mx-auto my-20">
                        <button className="text-md text-blue-850 font-poppins font-semibold ml-3 tracking-wider">
                            ALL OUR SERVICES
                        </button>

                        <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center item-center ml-3">
                            <img src={RightArrow} alt="right direction arrow" className="w-3" />
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-56 lg:w-60 button-div sm:-mt-4 mt-4 mb-28 mx-auto">
                        <button className="text-md text-blue-850 font-poppins font-medium ml-3 tracking-wider button">
                            ALL OUR SERVICES
                        </button>

                        <div
                            className="w-12 h-12 bg-blue-600 
                    rounded-full flex justify-center item-center ml-4 button-arrow">
                            <img src={RightArrow} alt="right direction arrow" className="w-3" />
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

ArtSection.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default ArtSection;
