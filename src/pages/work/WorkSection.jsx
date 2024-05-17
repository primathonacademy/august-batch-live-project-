import PropTypes from 'prop-types';
import GridImg from '../../assets/images/grid-image.png';
import TabImage from '../../assets/images/tablet-image.png';
import MobileImgBlack from '../../assets/images/black-moblie-image.png';
import MobileGraphicImg from '../../assets/images/mobile-graphic.png';
import MobileImgBlue from '../../assets/images/blue-mobile-image.png';

const OurWork = ({ screenSize }) => {
    return (
        <div className="relative mb-40 mt-10 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
            <div>
                <img
                    src={GridImg}
                    className="absolute left-0 -top-10 w-210 lg:scale-150 lg:w-210 xl:w-175 xl:left-20 xl:scale-125 xl:h-110 h-96 sm:w-96 sm:scale-110 sm:h-80 object-cover scale-150 scale-y-100 md:h-80 md:w-110 md:scale-150 2xl:scale-125"
                    alt="background grid image"
                />
                <div className="bg-blue-850 text-white w-fit text-xl xs:text-2xl xs:leading-7 font-serif italic px-4 mt-10">
                    {screenSize < 1024 ? 'Our Services' : 'Our Work'}
                </div>
                <h3 className="w-4/6 text-4xl mt-5 xs:mt-1 text-slate-925 mb-8 xs:text-4.7xl xs:leading-13 xs:p-4 xs:pl-0 sm:text-5.5xl sm:w-1/2 md:w-1/3 lg:text-6xl lg:leading-14 lg:w-1/3 lg:py-4 xl:text-7xl xl:leading-20 xl:py-4 2xl:text-7.7xl 2xl:leading-24 2xl:py-4 3xl:leading-24 3xl:py-4">
                    Simplifying the Next.
                </h3>
                <p className="text-lg md:leading-6 lg:leading-6 lg:m-2 xl:text-2xl xl:leading-7 xl:w-4/6 2xl:leading-7 3xl:leading-8 text-slate-550 font-roboto font-normal">
                    Yumelabs is a global UI UX Design and Industrial Design agency that helps your <br /> business scale
                    through fail-proof design innovation systems.
                </p>
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
                <div className="mx-auto pb-8 xs:w-96 sm:w-110 md:w-127 lg:w-full lg:mt-60">
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
            </div>
            <button className="hidden relative bg-zinc-75 mx-auto lg:flex items-center border-0 border-transparent w-fit rounded-8 p-2 hover:bg-gradient-to-r hover:from-zinc-75 hover:from-40% hover:to-pink-200">
                <div className="px-8 text-blue-850 text-xs xs:text-base leading-4 font-poppins font-semibold py-2">
                    Load More
                </div>
            </button>
        </div>
    );
};

OurWork.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default OurWork;
