import HeroBackground from '../assets/images/hero-background.svg';
import ArrowIcon from '../assets/images/arrow-icon.svg';

const GetTouch = () => {
    return (
        <div className="bg-white  md:pb-16 md:px-14 lg:pb-20 xl:pb-24 xl:px-24 lg:px-20 2xl:pb-28 2xl:px-30 px-5 mt-24 3xl:px-45.5 ">
            <section className="flex flex-col sm:flex-row w-full bg-blue-900 p-3 rounded-lg md:rounded-xl relative overflow-hidden">
                <div className="absolute left-0 top-28 sm:top-28 lg:top-20 xl:top-32 2xl:top-40 3xl:top-43.5 flex flex-col gap-11 md:gap-11 lg:gap-16 xl:gap-16 2xl:gap-24 w-full border-fade-white opacity-20"></div>
                <div className="absolute top-0 -left-32 sm:-left-6 md:left-7 lg:left-8 xl:left-9 2xl:left-10 flex items-center gap-2 lg:gap-5 xl:gap-6 2xl:gap-7"></div>
                <div
                    className="flex flex-col gap-1 xl:items-start py-16 xl:py-24 2xl:py-32 lg:pl-24 2xl:pl-28 lg:pr-10 xl:gap-1 2xl:gap-4 items-center w-full relative bg-cover"
                    style={{ backgroundImage: `url(${HeroBackground})`, opacity: 1 }}>
                    <p className="font-poppins text-white opacity-80 lg:self-start text-start text-sm sm:text-base lg:text-2xl xl:text-2.5xl w-44 sm:w-48 lg:w-72 xl:w-full md:leading-6 lg:leading-8">
                        Have a dream for a better world?
                    </p>
                    <h2 className="flex justify-center lg:justify-start items-start text-4xl lg:text-5xl xl:text-6.5xl 2xl:text-7.5xl font-poppins leading-tight lg:leading-13 xl:leading-18 2xl:leading-24 text-white font-medium w-44 sm:w-48 lg:w-full 2xl:w-137.5">
                        Let us make it real.
                    </h2>
                </div>
                <div className="md:hover:from-blue-100 hover:to-pink-200 w-full flex justify-center items-center pt-5 pb-12 sm:pb-5 z-10">
                    <span className="flex items-center justify-center cursor-pointer gap-8 xs:gap-14 2xl:gap-16 py-1 xl:py-2 pl-5 xl:pl-12 2xl:pl-16 bg-gray-200 rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-200">
                        <h1 className="text-blue-600 text-xs sm:text-sm md:text-base xl:text-xl font-semibold">
                            GET IN TOUCH
                        </h1>
                        <div className=" flex items-center justify-center rounded-full p-3.5 sm:p-4 xl:p-6 mr-1 xs:mr-1.5 xl:mr-2 bg-blue-600 hover:bg-gradient-to-r from-blue-500 to-pink-500">
                            <img src={ArrowIcon} alt="ArrowIcon" className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-125 " />
                        </div>
                    </span>
                </div>
            </section>
        </div>
    );
};

export default GetTouch;
