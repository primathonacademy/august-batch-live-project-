import PropTypes from 'prop-types';
import HeroBackground from '../assets/images/hero-background.svg';
import RightArrowIcon from '../assets/icons/arrow-right-icon.svg';

const GetTouch = ({ screenSize }) => {
    return (
        <div className="md:px-14 xl:px-24 lg:px-20 2xl:px-28 px-5 3xl:px-45.5 xl:mb-10">
            <section className="flex flex-col w-full bg-blue-900 p-3 rounded-lg md:rounded-xl overflow-hidden relative h-137 lg:h-96">
                <div className="gap-1 xl:items-start py-16 xl:py-24 2xl:py-32 lg:pl-24 2xl:pl-28 lg:pr-10 xl:gap-1 2xl:gap-4 items-center w-full bg-cover h-full">
                    <img
                        src={HeroBackground}
                        alt="get in touch background grid lines"
                        className="absolute top-0 object-cover bg-center h-full md:left-0 xl:w-full"
                    />

                    <div className="h-full flex flex-col justify-around items-center mt-10 lg:flex-row lg:items-center lg:pb-20">
                        <div>
                            <p className="font-poppins text-white opacity-80 lg:self-start text-start text-2xl lg:text-2xl xl:text-2.5xl w-60 lg:w-72 xl:w-full md:leading-6 lg:leading-8">
                                Have a dream for a better world?
                            </p>

                            <h2 className="text-5xl xl:text-6.5xl font-poppins leading-tight lg:leading-13 text-white font-medium w-48 lg:w-96 mt-1 xl:mt-2">
                                Let us make it real.
                            </h2>
                        </div>

                        <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 min-w-52 lg:w-64 lg:h-16 button-div mt-24 lg:mt-0 cursor-pointer z-10">
                            <button className="text-md lg:text-xl text-blue-850 font-poppins font-medium ml-5 tracking-wider button">
                                {screenSize < 1024 ? 'ALL OUR SERVICES' : 'GET IN TOUCH'}
                            </button>

                            <div
                                className="w-12 h-12 bg-blue-600 
                    rounded-full flex justify-center item-center mx-2 button-arrow">
                                <img src={RightArrowIcon} alt="right direction arrow" className="w-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
GetTouch.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default GetTouch;
