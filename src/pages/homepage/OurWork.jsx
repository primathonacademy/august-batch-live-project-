import GridImg from '../../assets/images/grid-image.png';
import TabImage from '../../assets/images/tablet-image.png';
import MobileImgBlack from '../../assets/images/black-moblie-image.png';
import MobileGraphicImg from '../../assets/images/mobile-graphic.png';
import MobileImgBlue from '../../assets/images/blue-mobile-image.png';
import { FaArrowRight } from 'react-icons/fa';

const OurWork = () => {
    return (
        <div className="relative py-40 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
            <div>
                <img
                    src={GridImg}
                    className="absolute left-0 w-full lg:w-1/2 h-64 sm:h-40 object-cover scale-x-150 scale-y-100"
                    alt="background grid image"
                />
                <div className="bg-blue-850 text-white w-fit text-xl xs:text-2xl xs:leading-7 font-serif italic px-4">
                    Our Work
                </div>
                <h3 className="text-3xl xs:text-4xl md:text-5xl 3xl:text-5.7xl 3xl:leading-15 font-medium font-poppins text-left xl:w-4/5 py-4">
                    Discover brand innovation stories that will inspire you to reimagine the Next for yours.
                </h3>
            </div>
            <div className="lg:grid grid-cols-2 grid-rows-2 gap-10 pt-40">
                <div className="mx-auto pb-16 xs:w-96 sm:w-110 md:w-127 lg:w-full">
                    <img src={TabImage} className="w-full lg:pr-8" alt="image showing some data in tablet" />
                    <div className="w-full xs:pr-8 py-5">
                        <div className="flex text-base font-semibold text-blue-850 py-2">
                            <div className="px-2">#UX/UI</div>
                            <div className="px-2">#DEVELOPMENT</div>
                        </div>
                        <div className="text-2.5xl md:text-4xl font-medium font-poppins">Simplicontract</div>
                        <p className="text-slate-550 text-lg md:text-2xl py-4">
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                </div>
                <div className="mx-auto pb-16 xs:w-96 sm:w-110 md:w-127 lg:w-full lg:mt-60">
                    <img src={MobileImgBlack} className="w-full lg:pl-8" alt="image showing holding mobile in hand" />
                    <div className="w-full xs:pr-8 lg:pl-8 py-5">
                        <div className="flex text-base font-semibold text-blue-850 py-2">
                            <div className="px-2">#UX/UI</div>
                            <div className="px-2">#DEVELOPMENT</div>
                        </div>
                        <div className="text-2.5xl md:text-4xl font-medium font-poppins">Simplicontract</div>
                        <p className="text-slate-550 text-lg md:text-2xl py-4">
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                </div>
                <div className="mx-auto pb-16 xs:w-96 sm:w-110 md:w-127 lg:w-full">
                    <img src={MobileGraphicImg} className="w-full lg:pr-8" alt="moblie dipslay with some graphic" />
                    <div className="w-full xs:pr-8 py-5">
                        <div className="flex text-base font-semibold text-blue-850 py-2">
                            <div className="px-2">#UX/UI</div>
                            <div className="px-2">#DEVELOPMENT</div>
                        </div>
                        <div className="text-2.5xl md:text-4xl font-medium font-poppins">Simplicontract</div>
                        <p className="text-slate-550 text-lg md:text-2xl py-4">
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                </div>
                <div className="mx-auto pb-16 xs:w-96 sm:w-110 md:w-127 lg:w-full lg:mt-60">
                    <img src={MobileImgBlue} className="w-full lg:pl-8" alt="image showing mobile holding in hand" />
                    <div className="w-full xs:pr-8 lg:pl-8 py-5">
                        <div className="flex text-base font-semibold text-blue-850 py-2">
                            <div className="px-2">#UX/UI</div>
                            <div className="px-2">#DEVELOPMENT</div>
                        </div>
                        <div className="text-2.5xl md:text-4xl font-medium font-poppins">Simplicontract</div>
                        <p className="text-slate-550 text-lg md:text-2xl py-4">
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                </div>
            </div>
            <button className="relative bg-zinc-75 mx-auto flex items-center border-0 border-transparent w-fit rounded-8 p-2 hover:bg-gradient-to-r hover:from-zinc-75 hover:from-40% hover:to-pink-200">
                <div className="px-8 text-blue-850 text-xs xs:text-base leading-4 lg:text-xl font-poppins font-semibold">
                    EXPLORE PORTFOLIO
                </div>
                <div className="p-5 bg-blue-575 text-white hover:bg-gradient-to-r rounded-full hover:from-pink-300 hover:to-blue-575">
                    <FaArrowRight />
                </div>
            </button>
        </div>
    );
};

export default OurWork;
