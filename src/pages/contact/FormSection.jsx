import GridLineFormImage from '../../assets/images/bg-grid-lines.svg';
import DoubleQuoteImage from '../../assets/images/double-quote.svg';
import ProfileImage from '../../assets/images/profileimage.png';
import Ellipse from '../../assets/images/ellipse.svg';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import PropTypes from 'prop-types';

const FormSection = ({ screenSize }) => {
    return (
        <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 mt-5 relative">
            {screenSize < 1024 ? (
                <div>
                    <img
                        src={GridLineFormImage}
                        alt="contact page background grid lines"
                        className="w-full -top-6 h-137 bg-transparent absolute bg-center object-cover inset-0 mt-28 md:mt-32 sm:-top-52 sm:h-137 sm:-left-40 md:h-127 lg:-top-110 lg:mt-0"
                    />

                    <div className="mt-24 xs:mt-28 sm:mt-10 md:mt-14">
                        <h2 className="w-fit px-5 py-1 font-serif italic bg-blue-850 text-base text-center text-white ml-6 md:ml-0">
                            Our Services
                        </h2>
                        <h4 className="w-80 font-poppins ml-6 text-slate-925 md:ml-0 font-medium text-4xl mt-6">
                            Feel at home among brave dreamers and curious rebels.
                        </h4>
                        <p className="w-72 h-28 ml-6 md:ml-0 tracking-tight text-lg font-roboto mt-10 text-slate-550">
                            High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                            trust, and higher media love.
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    <img
                        src={GridLineFormImage}
                        alt="grid image form"
                        className="xl:w-144.5 2xl:w-162.5 3xl:w-210 3xl:h-127 lg:w-175 h-127 bg-transparent inset-0 absolute bg-center object-cover mt-0 -top-28 -left-5"></img>

                    <div>
                        <h2 className="w-fit px-5 py-1 font-serif italic bg-blue-850 xl:ml-4 3xl:ml-0 text-center text-xl text-white mt-20 xl:text-xl 2xl:mt-28">
                            Contact Us
                        </h2>

                        <h4 className="w-131 lg:w-full font-poppins xl:ml-4 3xl:ml-0 font-medium text-6xl mt-5">
                            Let us make it real
                        </h4>
                        <p className="w-full h-28 xl:ml-4 3xl:ml-0 tracking-tight text-base xl:text-xl font-roboto mt-5 text-slate-550">
                            Here in &quot;the pond&quot; we&apos;re driven by creativity ,curiosity and a <br /> passion
                            for challenging the status quo in everything we do
                        </p>
                    </div>
                </div>
            )}

            <div className="flex flex-col lg:flex-row-reverse lg:gap-10 xl:gap-28 2xl:gap-36 3xl:gap-52  mt-7 justify-end">
                <div className="mt-40 ml-8 h-210 w-10/12">
                    <input
                        type="text"
                        placeholder="* Name"
                        className="lg:placeholder:text-lg border pl-4 w-full lg:w-96 xl:w-127 2xl:w-162.5 3xl:w-175 h-20 lg:h-14"
                    />
                    <input
                        type="text"
                        placeholder="* Phone number"
                        className="lg:placeholder:text-lg border pl-4 w-full lg:w-96 xl:w-127  2xl:w-162.5 3xl:w-175 h-20 mt-4 lg:h-14"
                    />
                    <input
                        type="text"
                        placeholder="* Email"
                        className="lg:placeholder:text-lg border pl-4 w-full lg:w-96 xl:w-127 2xl:w-162.5 3xl:w-175 h-20 mt-4 lg:h-14"
                    />

                    <textarea
                        rows="5"
                        cols="20"
                        placeholder="* Message"
                        className="lg:placeholder:text-lg border p-4 w-full lg:w-96 xl:w-127 2xl:w-162.5 3xl:w-175 mt-4"></textarea>

                    <div className="flex mt-14 gap-5 lg:gap-1 lg:mt-4 xl:w-127 2xl:w-162.5 3xl:w-175">
                        <input type="checkbox" className="w-6 h-6" />
                        <p className="text-gray-525 font-normal w-64 lg:w-full tracking-normal text-lg lg:text-xl 2xl:text-2xl font-roboto ml-6">
                            I agree to frog collecting and processing my personal data to allow me to receive
                            information on frog services.
                        </p>
                    </div>

                    <button className="w-80 tracking-wider text-white font-medium h-20 text-center rounded-full bg-blue-575 mt-20 lg:text-xl 2xl:text-2xl">
                        SUBMIT
                    </button>
                </div>

                <div className="mt-28 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                    <div className="mt-10 w-96 lg:w-101.5 xl:w-106.7 2xl:w-116.25 3xl:w-127 h-80 lg:h-96 xl:h-106.7 2xl:h-116.25 3xl:h-131">
                        <div className="mb-7 w-14 h-9">
                            <img src={DoubleQuoteImage} alt="double quote image" />
                        </div>
                        <div className="">
                            <p className="opacity-60 text-left text-slate-925 italic font-light text-2xl font-roboto mt-1 mb-7 w-full">
                                “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your
                                business scale through fail-proof design innovation systems. “
                            </p>

                            <div className="flex gap-x-2 lg:mt-14">
                                <div className="relative w-24 h-24 mr-2">
                                    <img
                                        src={Ellipse}
                                        alt="ellipse image"
                                        className="w-24 h-24 absolute right-3 bottom-1 top-0.5"></img>
                                    <img
                                        src={ProfileImage}
                                        alt="profile image"
                                        className="w-17.75 h-17.75 absolute right-1 top-3 left-6"></img>
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-lg lg:text-xl 2xl:text-2xl text-left text-slate-925 w-44 lg:w-56 2xl:w-64 h-9 font-medium font-poppins">
                                        Mrs. Regina Christy
                                    </h2>

                                    <p className="text-left text-slate-550 w-48 h-12 font-normal text-base lg:text-xl 2xl:text-2xl font-poppins opacity-100">
                                        Chief Digital Officer Approlabs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center my-40 lg:hidden">
                        <div className="w-full h-px opacity-70 bg-gray-475"></div>
                        <img src={ArrowLeftIcon} alt="left arrow icon" className="mr- w-14 h-14"></img>
                        <img src={ArrowRightIcon} alt="right arrow icon" className="w-14 h-14"></img>
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
