import PropTypes from 'prop-types';
import GridImg from '../../assets/images/grid-image.png';
import TabImage from '../../assets/images/tablet-image.png';
import MobileImgBlack from '../../assets/images/black-moblie-image.png';
import MobileGraphicImg from '../../assets/images/mobile-graphic.png';
import MobileImgBlue from '../../assets/images/blue-mobile-image.png';
import ArrowRightIcon from '../../assets/icons/arrow-right-icon.svg';

const OurWork = ({ screenSize }) => {
    return (
        <div className="relative px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
            <div>
                <img
                    src={GridImg}
                    className="absolute left-0 -top-10 h-60 w-full lg:w-210 lg:-left-8 lg:-top-10 lg:h-44 object-cover scale-x-150 lg:bg-left 3xl:w-330 3xl:h-60"
                    alt="background grid image"
                />
                <div className="bg-blue-850 text-white w-fit text-xl xs:text-2xl xs:leading-7 font-serif italic px-4 2xl:text-3xl py-1">
                    Our Work
                </div>
                <h3 className="text-3xl xs:text-4xl md:text-3xl 3xl:text-5.7xl 3xl:leading-15 font-medium font-poppins text-left xl:w-4/5 py-4">
                    Discover brand innovation stories that will <br /> inspire you to reimagine the Next for yours.
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

            {screenSize < 1024 ? (
                <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-64 mt-32 mx-auto my-20">
                    <button className="text-md text-blue-850 font-poppins font-semibold ml-3 tracking-wider">
                        EXPLORE PORTFOLIO
                    </button>

                    <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center item-center ml-3">
                        <img src={ArrowRightIcon} alt="right direction arrow" className="w-3" />
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-56 lg:w-64 button-div mt-32 my-28 mx-auto">
                    <button className="text-md text-blue-850 font-poppins font-semibold ml-3 tracking-wider button">
                        EXPLORE PORTFOLIO
                    </button>

                    <div
                        className="w-12 h-12 bg-blue-600 
                    rounded-full flex justify-center item-center ml-4 button-arrow">
                        <img src={ArrowRightIcon} alt="right direction arrow" className="w-3" />
                    </div>
                </div>
            )}
        </div>
    );
};

OurWork.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default OurWork;
