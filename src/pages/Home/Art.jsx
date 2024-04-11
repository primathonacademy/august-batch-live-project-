import art from '../../assets/HomeImg/Art.png';
import gridlineImage from '../../assets/HomeImg/gridline-bg.png';
import Scrollservice from './Scroll-service';
import NewsCard from './NewsCard';

function Art() {
    return (
        <>
            <div className="px-[20px] md:px-[56px] lg:px-[82px] xl:px-[100px] 2xl:px-[120px] 3xl:px[182px] pt-[48px]">
                <section>
                    <div className="pl-4">
                        <div className="hidden lg:block lg:relative lg:h-0 lg:top-[-6.668rem] lg:left-[-5.2rem] xl:left-[-7.7rem] 2xl:left-0">
                            <img src={gridlineImage} alt="Grid" className="md:w-full md:h-96" />
                        </div>
                        <span className="text-blue-500 lg:text-white lg:bg-blue-900 md:text-blue-800 md:bg-dark-blue lg:px-12 lg:text-lg xl:text-xl italic font-serif py-2 ">
                            The Art of the Possible
                        </span>
                        <p className="text-3xl text-fade-black sm:text-4xl font-poppins font-medium 2xl:text-6xl mb-4 sm:mb-12 xl:mb-32 leading-9 pt-4 w-10/12 3xl:text-[56px]">
                            Learn from our time in the trenches innovating for user advocacy.
                        </p>
                    </div>
                </section>
                <div className="relative flex pb-8 overflow-x-auto">
                    <div
                        className="bg-cover lg:h-[35rem] h-[420px] object-cover overflow-hidden w-full md:rounded-4xl rounded-3xl bg-center bg-no-repeat 3xl:rounded-3xl "
                        style={{ backgroundImage: `url(${art}) ` }}>
                        <div className="lg:pt-[256px] lg:pl-32 md:pt-32 md:pl-12 pt-16 pl-[32px] lg:pb-4 p-16 pr-2">
                            <div className="mt-2 mr-6 md:pb-28 ">
                                <h1 className="font-semibold text-gray-300 font-poppins text-lg pt-4 3xl:text-[24px]">
                                    /01/ News Technology / 03 March 2022
                                </h1>
                                <p className="text-gray-400 pt-4 text-lg lg:w-1/3 md:w-full font-roboto sm:w-1/2 3xl:text-[24px]">
                                    Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-10 ">
                    <NewsCard />
                </div>
            </div>

            <Scrollservice />
        </>
    );
}

export default Art;
