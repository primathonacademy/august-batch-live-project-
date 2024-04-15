import artSectionImg from '../../assets/images/art.png';
import gridlineImage from '../../assets/images/gridline-bg.png';
import Scrollservice from './ServiceBtn';
import NewsCard from './NewsCard';

function ArtSection() {
    return (
        <>
            <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-46 3xl:px-46px pt-12 4xl:text-2xl">
                <section>
                    <div className="pl-6 4xl:pl-8">
                        <div className="hidden lg:block lg:relative opacity-1 lg:h-0 lg:-top-24 lg:-left-20 xl:-left-32 2xl:left-0">
                            <img src={gridlineImage} alt="gridImageBg" className="md:w-full md:h-96" />
                        </div>
                        <span className="text-blue-500 lg:text-white lg:bg-blue-900 md:text-blue-800 md:bg-dark-blue lg:px-12 lg:text-lg xl:text-xl italic font-serif py-2 4xl:text-4xl">
                            The Art of the Possible
                        </span>
                        <p className="text-3xl text-fade-black sm:text-4xl font-poppins font-medium 2xl:text-6xl mb-4 sm:mb-12 xl:mb-32 leading-9 pt-4 w-10/12 3xl:text-6xl 4xl:text-8xl">
                            Learn from our time in the trenches innovating for user advocacy.
                        </p>
                    </div>
                </section>
                <div className="relative flex pb-8 overflow-x-auto">
                    <div
                        className="bg-cover lg:h-full object-cover overflow-hidden w-full md:rounded-4xl rounded-3xl bg-center bg-no-repeat 3xl:rounded-3xl "
                        style={{ backgroundImage: `url(${artSectionImg}) ` }}>
                        <div className="lg:pt-64 lg:pl-32 md:pt-32 md:pl-12 pt-16 pl-9 lg:pb-4 pr-2 p-20">
                            <div className="mt-2 mr-6 md:pb-28 ">
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
                    <NewsCard />
                </div>
            </div>

            <Scrollservice />
        </>
    );
}

export default ArtSection;
