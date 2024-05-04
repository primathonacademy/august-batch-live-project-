import DoubleQuoteImage from '../../assets/images/double-quote.svg';
import ProfileImage from '../../assets/images/profileimage.png';
import Ellipse from '../../assets/images/ellipse.svg';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';

const CoFounder = () => {
    return (
        <div className="px-5 mt-10 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
            <div className="flex lg:gap-24 xl:gap-55 2xl:gap-75 3xl:gap-94 md:w-full">
                <div className="lg:flex w-96 md:w-110 lg:w-127 xl:w-142.4 lg:gap-3 2xl:w-175 3xl:w-192.5 h-80 3xl:h-80">
                    <div className=" xl:mr-10 2xl:mr-14 3xl:mr-16 mb-7 w-14 xl:w-16 3xl:w-16 h-9 md:h-10 xl:h-11 3xl:h-12">
                        <img src={DoubleQuoteImage} alt="double-quote-image" />
                    </div>
                    <div className="w-89 md:w-101.5 lg:w-116.25 xl:w-131 2xl:w-144.5 3xl:w-159.5 h-36  lg:h-40 xl:h-40 3xl:h-40 ">
                        <p
                            className="2xl:text-2.5xl 3xl:text-4xl opacity-60 text-left text-slate-925 italic font-normal  text-lg 2xl:leading-8 3xl:leading-9
                         font-roboto mt-1 mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 3xl:mb-11 w-full">
                            “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems. “
                        </p>

                        <div className="flex">
                            <div className="relative w-24 md:w-28 lg:w-28 xl:w-28 2xl:w-32 3xl:w-32 h-24 md:h-24 lg:h-28   3xl:h-32 mr-2 ">
                                <img
                                    src={Ellipse}
                                    alt="ellipse-image"
                                    className="w-24 md:w-28 3xl:w-32 h-24 md:h-24 lg:h-28 3xl:h-32 absolute right-3 bottom-1 xl:right-5 2xl:right-5 3xl:right-7 3xl:top-2 lg:top-px  md:top-px md:right-8 top-0.5"></img>
                                <img
                                    src={ProfileImage}
                                    alt="Profile-image"
                                    className="w-17.75 md:w-20 lg:w-21 xl:w-22 2xl:w-22 3xl:w-24 h-17.75 md:h-20  xl:h-24  3xl:h-24 absolute right-1 lg:bottom-5 top-3 3xl:top-5"></img>
                            </div>
                            <div className="mt-2 3xl:mt-5 ">
                                <h2 className="text-base lg:text-xl text-left 3xl:text-2.5xl text-slate-925 w-44 md:w-48 lg:w-52 xl:w-60 2xl:w-64 3xl:w-72 h-9  leading-7 3xl:leading-normal font-medium font-poppins">
                                    Mrs. Regina Christy
                                </h2>

                                <p className="lg:text-xl text-left 3xl:text-xl text-slate-550 w-54 h-12 md:h-12 lg:h-13 xl:h-16 3xl:h-16.25 font-normal  text-base leading-6 font-poppins opacity-100 ">
                                    Chief Digital Officer Approlabs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-96 xl:w-116.25 2xl:w-142.4 3xl:w-144.5 hidden lg:block 3xl:text-left ">
                    <p className="lg:text-base 3xl:text-lg 2xl:text-4 text-gray-525 3xl:leading-6 opacity-100">
                        Scale Your Brand through: Deeper Insight - Qualitative user insights validated by quantitative
                        studies that surface hidden market gaps for your next big opportunity. Pioneering Innovation -
                        First-to-market features with strong business cases for maintaining your edge over the
                        competition consistently. Compelling Design - True-to-brand aesthetics and applied behavioural
                        science that delivers industry-leading differentiation.
                    </p>
                </div>
            </div>
            <div className="w-full flex">
                <hr className="w-full mr-2 border opacity-1 h-0 mt-6 3xl:mt-7"></hr>
                <img src={ArrowLeftIcon} alt="left-arrow-image" className="mr-2 w-14 h-14"></img>
                <img src={ArrowRightIcon} alt="right-arrow-image" className="w-14 h-14"></img>
            </div>
        </div>
    );
};
export default CoFounder;
