import img1 from '../assets/images/double.svg';
import img2 from '../assets/images/man1.png';
import img3 from '../assets/images/ellipse.svg';
import img4 from '../assets/images/arrow-left.svg';
import img5 from '../assets/images/arrow-right.svg';

const CoFounder = () => {
    return (
        <div className=" px-5 mt-10  md:px-14  lg:px-20  xl:px-24  2xl:px-28  3xl:px-45.5 ">
            <div className="flex  w-89 h-84.25 xl:gap-55 2xl:gap-75 3xl:gap-94 md:w-full  lg:w-full xl:w-full 2xl:w-full 3xl:w-full   ">
                <div className=" flex flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row 3xl:flex-row w-89 md:w-110 lg:w-130.25 xl:w-130.25 2xl:w-171 3xl:w-192.5 h-84.25 3xl:h-83.25">
                    <div className=" xl:mr-10 2xl:mr-13 3xl:mr-16.25  mb-7 w-13 md:w-14 lg:w-14 xl:w-16 3xl:w-16.5 h-9.75 md:h-10 xl:h-11 3xl:h-12.25">
                        <img src={img1} alt="icon-image" />
                    </div>
                    <div className=" w-89 md:w-101.5 lg:w-116.5 xl:w-130.25 2xl:w-144.25 3xl:w-159.75 h-36.5 md:h-37.25 lg:h-40 xl:h-40 3xl:h-40 ">
                        <p className="text-6  2xl:text-8  3xl:text-9 opacity-60 text-left text-yume italic font-normal  text-lg 3xl:leading-10.75 font-roboto mt-1 mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 3xl:mb-11 w-full">
                            “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems. “
                        </p>

                        <div className="flex">
                            <div className="relative  w-24 md:w-25.5 lg:w-28 xl:w-28 2xl:w-30.25 3xl:w-32.25 h-24 md:h-24 lg:h-26 xl:h-28 2xl:h-28 3xl:h-32.25 mr-2 ">
                                <img
                                    src={img3}
                                    alt="ellipse-image"
                                    className="w-24 md:w-26 lg:w-28 xl:w-28  3xl:w-30.25 h-24 md:h-26 lg:h-26 xl:h-28 2xl:h-28 3xl:h-30.25 absolute right-3 bottom-1 xl:right-4 2xl:right-5 3xl:right-6 lg:top-0.5 "></img>
                                <img
                                    src={img2}
                                    alt="man-image"
                                    className="w-17.75 md:w-20 lg:w-21 xl:w-22 2xl:w-22 3xl:w-24 h-17.75 md:h-20 lg:h-20 xl:h-21 2xl:h-24 3xl:h-24 absolute right-1 lg:bottom-5 top-3 3xl:top-5"></img>
                            </div>
                            <div className="mt-2 3xl:mt-5 ">
                                <h2 className="text-4.5 lg:text-5  text-left 3xl:text-6  text-custom w-44 md:w-49 lg:w-54 xl:w-59 2xl:w-63 3xl:w-68 h-9.5 text-base leading-7 3xl:leading-normal font-medium font-poppins">
                                    Mrs. Regina Christy
                                </h2>

                                <p className="text-4 lg:text-4.5 xl:text-5 text-left 3xl:text-5 text-chief w-54 h-12 md:h-12 lg:h-13 xl:h-16 3xl:h-16.25 font-normal  text-base leading-6 font-poppins opacity-100 ">
                                    Chief Digital Officer Approlabs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" 3xl:w-143 xl:w-full 2xl:w-full  hidden 3xl:block   lg:hidden xl:block 2xl:block     md:hidden   3xl:text-left ">
                    {' '}
                    <p className=" lg:text-base 3xl:text-5 2xl:text-4  text-scale 3xl:leading-6 opacity-100">
                        Scale Your Brand through: Deeper Insight - Qualitative user insights validated by quantitative
                        studies that surface hidden market gaps for your next big opportunity. Pioneering Innovation -
                        First-to-market features with strong business cases for maintaining your edge over the
                        competition consistently. Compelling Design - True-to-brand aesthetics and applied behavioural
                        science that delivers industry-leading differentiation.
                    </p>
                </div>
            </div>
            <div className="w-89.75 md:w-112.5 lg:w-210 xl:w-250 2xl:w-330 3xl:w-389  h-9.75 3xl:h-16 flex lg:pr-89 xl:pr-20 2xl:pr-22 3xl:pr-24 ">
                <hr className="w-59.25 md:w-116.25 lg:w-173.25 xl:w-230.25 2xl:w-287.5 3xl:w-344.5 mr-2 border opacity-1 h-0 mt-6 3xl:mt-7"></hr>{' '}
                <img src={img4} alt="left-arrow-image" className="mr-2 w-[51px] h-[51px]"></img>{' '}
                <img src={img5} alt="right-arrow-image" className="w-[51px] h-[51px]"></img>{' '}
            </div>
        </div>
    );
};
export default CoFounder;
