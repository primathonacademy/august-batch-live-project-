import GridLineFormImage from '../../assets/images/bg-grid-lines.svg';
import DoubleQuoteImage from '../../assets/images/double-quote.svg';
import ProfileImage from '../../assets/images/profileimage.png';
import Ellipse from '../../assets/images/ellipse.svg';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import PropTypes from 'prop-types';

const FormSection = ({ screenSize }) => {
    return (
        <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 mt-40 w-full">
            {screenSize < 1024 ? (
                <div>
                    <img
                        src={GridLineFormImage}
                        alt="grid-image-form"
                        className="w-106.7 md:w-116.25 h-137 bg-transparent absolute bg-center object-cover inset-0 mt-28 md:mt-32"></img>
                    <div>
                        <h2 className="w-36 md:w-40 bg-blue-850 text-base text-center text-white ml-6 md:ml-0">
                            Our Services
                        </h2>
                        <h4 className="w-80 font-poppins ml-6 md:ml-0 font-medium text-4xl mt-6">
                            Feel at home among brave dreamers and curious rebels.
                        </h4>
                        <p className="w-72 h-28 ml-6 md:ml-0 tracking-tight text-base font-roboto mt-10 text-slate-550">
                            High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                            trust, and higher media love.
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    <img
                        src={GridLineFormImage}
                        alt="grid-image-form"
                        className="lg:w-131 xl:w-144.5 2xl:w-162.5 3xl:w-175 h-137 bg-transparent inset-0 absolute bg-center mt-72  object-cover "></img>

                    <div className="pt-5">
                        <h2 className="w-36 bg-blue-850 xl:ml-4 3xl:ml-0 text-center text-xl text-white mt-32 xl:text-xl 2xl:mt-28">
                            Contact Us
                        </h2>

                        <h4 className="w-131 font-poppins xl:ml-4 3xl:ml-0 font-medium text-6xl mt-14">
                            Let us make it real
                        </h4>
                        <p className="w-101.5 h-28 xl:ml-4 3xl:ml-0 tracking-tight text-base xl:text-xl font-roboto mt-14 text-slate-550">
                            Here in &quot;the pond&quot; we&apos;re driven by creativity ,curiosity and a passion for
                            challenging the status quo in everything we do
                        </p>
                    </div>
                </div>
            )}

            <div className="flex flex-col lg:flex-row-reverse lg:gap-10 xl:gap-28 2xl:gap-36 3xl:gap-52  mt-7 justify-end  ">
                <div className="mt-40 ml-8 w-80 h-210 ">
                    <input
                        type="text"
                        placeholder="* Name"
                        className="lg:placeholder:text-2xl border pl-4 w-80 lg:w-96 xl:w-116.25 2xl:w-162.5 3xl:w-175 h-20 placeholder:font-medium "></input>
                    <input
                        type="text"
                        placeholder="* Phone number"
                        className="lg:placeholder:text-2xl border pl-4 w-80 lg:w-96 xl:w-116.25 2xl:w-162.5 3xl:w-175 h-20 mt-4"></input>
                    <input
                        type="text"
                        placeholder="* Email"
                        className="lg:placeholder:text-2xl border pl-4 w-80 lg:w-96 xl:w-116.25 2xl:w-162.5 3xl:w-175 h-20 mt-4"></input>
                    <input
                        type="text"
                        placeholder="* Message"
                        className="lg:placeholder:text-2xl border pb-56 pl-4 w-80 lg:w-96 xl:w-116.25 2xl:w-162.5 3xl:w-175 h-64 mt-4"></input>

                    <div className="flex mt-9 gap-5 w-56 lg:w-96 xl:w-116.25 2xl:w-144.5 3xl:w-175 h-32">
                        <input type="checkbox" className="w-6 h-6 xl:w-10 xl:h-10"></input>
                        <p className="text-gray-525 font-normal tracking-normal text-base lg:text-xl 2xl:text-2xl font-roboto xl:mt-1">
                            I agree to frog collecting and processing my personal data to allow me to receive
                            information on frog services.
                        </p>
                    </div>
                    <button className="w-80 tracking-wider text-white font-medium h-20 text-center rounded-full bg-blue-500 mt-10 lg:text-xl 2xl:text-2xl">
                        SUBMIT
                    </button>
                </div>

                <div className="mt-28">
                    <div className="mt-10 w-96 lg:w-101.5 xl:w-106.7 2xl:w-116.25 3xl:w-127 h-80 lg:h-96 xl:h-106.7 2xl:h-116.25 3xl:h-131">
                        <div className="mb-7 w-14 h-9">
                            <img src={DoubleQuoteImage} alt="double-quote-image" />
                        </div>
                        <div>
                            <p
                                className="opacity-60 text-left text-slate-925 italic font-normal text-lg 
                         font-roboto 2xl:text-2xl mt-1 mb-7 w-full">
                                “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your
                                business scale through fail-proof design innovation systems. “
                            </p>

                            <div className="flex">
                                <div className="relative w-24 h-24 mr-2">
                                    <img
                                        src={Ellipse}
                                        alt="ellipse-image"
                                        className="w-24 h-24 absolute right-3 bottom-1 top-0.5"></img>
                                    <img
                                        src={ProfileImage}
                                        alt="Profile-image"
                                        className="w-17.75 h-17.75 absolute right-1 top-3"></img>
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-base lg:text-xl 2xl:text-2xl text-left text-slate-925 w-44 lg:w-56 2xl:w-64 h-9 font-medium font-poppins">
                                        Mrs. Regina Christy
                                    </h2>

                                    <p className="text-left text-slate-550 w-54 h-12 font-normal text-base lg:text-xl 2xl:text-2xl font-poppins opacity-100">
                                        Chief Digital Officer Approlabs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 lg:hidden h-9.75 flex">
                        <hr className="w-60 mr-2 border opacity-1 h-0 mt-6"></hr>
                        <img src={ArrowLeftIcon} alt="left-arrow-icon" className="mr-2 w-14 h-14"></img>
                        <img src={ArrowRightIcon} alt="right-arrow-icon" className="w-14 h-14"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

FormSection.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default FormSection;
