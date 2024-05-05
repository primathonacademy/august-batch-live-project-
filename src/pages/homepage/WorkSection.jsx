import image1 from '../../assets/images/tablet-screen.png';
import image2 from '../../assets/images/black-display.png';
import image3 from '../../assets/images/45-inclined-display.png';
import image4 from '../../assets/images/blue-display.png';

const WorkSection = () => {
    return (
        <>
            <div className="xs:px-5 lg:px-20 xl:px-24 md:px-14  3xl:px-45.5 ">
                <div className="mt-10">
                    <h1 className="bg-blue-850 md:text-xl md:w-36 md:h-8 italic xs:text-white xs:text-center xs:font-semibold xs:font-serif xs:w-24 mb-2.5 lg:w-44 lg:font-bold lg:text-3xl lg:text-center lg:font-serif lg:h-10 lg:leading-10 3xl:w-56 3xl:h-16 3xl:text-white 3xl:text-5xl ">
                        Our Work
                    </h1>
                    <p className="md:mb-0 xs:font-Poppins text:2xl text-slate-950 xs:w-3/4 xs:h-56 xs:text-3xl  lg:text-4xl xs:mb-2.5 sm:w-full 3xl:text-6xl 3xl:leading-15 3xl:font-poppins 3xl:mb-24 3xl:w-11/12 3xl:h-60 3xl:text-gray-525 3xl:font-semibold 3xl:text-left">
                        Discover brand innovation stories that will inspire you to reimagine the Next for yours.
                    </p>
                </div>

                <div className="sm:px-10  ">
                    <div className="3xl:flex lg:flex ">
                        <div>
                            <img
                                src={image1}
                                alt="tablet display"
                                className="md:w-3/4  md:h-full xs:h-96 xs:mb-8 md:mt-0 sm:ml-10 sm:w-5/6 sm:mr-10 xs:w-full md:px-0 lg:ml-0  lg:w-11/12 lg:h-3/4 3xl:ml-0  3xl:h-4/6 3xl:w-full 3xl:mb-20"
                            />

                            <div className="xs:flex xs:gap-2.5  sm:pl-10 xs:mt-8 xs:font-poppins xs:font-semibold xs:text-xs xs:text-blue-850 lg:text-xl lg:font-poppins  lg:gap-4  3xl:mt-8 3xl:leading-6 3xl:text-3xl 3xl:p-4">
                                <p># UX/UI</p>
                                <p>#DEVELOPMENT</p>
                            </div>

                            <h1 className="xs:mt-2  xs:text-slate-925 xs:text-3xl sm:pl-10 xs:leading-10 xs:w-80 h-7 font-Poppins font-medium  lg:leading-12 lg:font-poppins lg:text-4xl 3xl:w-80 3xl:font-poppins 3xl:leading-15 3xl:h-16 3xl:ml-0 3xl:text-5xl 3xl:mb-8 ">
                                Simplicontract
                            </h1>

                            <p className="xs:mt-6  xs:text-left xs:h-28 sm:pl-10 xs:font-roboto xs:font-regular xs:text-lg xs:leading-6 xs:text-zinc-850 xs:w-96 lg:mt-8 lg:h-32 lg:text-gray-475 lg:leading-6 lg:font-normal lg:font-roboto lg:w-96 3xl:w-[640px] 3xl:h-32 3xl:font-roboto 3xl:leading-8 3xl:text-3xl 3xl:font-normal 3xl:text-gray-475 3xl:mt-1">
                                Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                                scale through fail-proof design innovation systems.
                            </p>
                        </div>

                        <div className="3xl:mt-20  ">
                            <img
                                src={image2}
                                alt="black mobile display"
                                className="md:w-3/4 md:h-full md:mt-20 xs:h-96 xs:mb-8  sm:ml-10 sm:w-5/6 sm:h-5/6 sm:mt-16 sm:mr-10 xs:w-full md:px-0 lg:mt-0 lg:w-10/12 lg:h-3/4 lg:ml-24 3xl:h-4/6 3xl:w-11/12 3xl:mb-20 3xl:mt-52"
                            />

                            <div className="xs:flex xs:gap-2.5  sm:pl-10 xs:mt-8 xs:font-poppins xs:font-semibold xs:text-xs xs:text-blue-850 lg:text-xl lg:font-poppins lg:gap-4 lg:ml-20  3xl:mt-8 3xl:leading-6 3xl:text-3xl 3xl:p-4">
                                <p># UX/UI</p>
                                <p>#DEVELOPMENT</p>
                            </div>

                            <h1 className="xs:mt-2  xs:text-slate-925 xs:text-3xl sm:pl-10 xs:leading-10 xs:w-80 h-7 font-Poppins font-medium lg:leading-12 lg:font-poppins lg:ml-16 lg:text-4xl 3xl:w-80 3xl:font-poppins 3xl:leading-15 3xl:h-16 3xl:text-5xl 3xl:mb-8 ">
                                Simplicontract
                            </h1>

                            <p className="xs:mt-6  xs:text-left xs:h-28 sm:pl-10 xs:font-roboto xs:font-regular xs:text-lg xs:leading-6 xs:text-zinc-850 xs:w-96 lg:ml-16 lg:mt-8 lg:h-32 lg:text-gray-475 lg:leading-6 lg:font-normal lg:font-roboto lg:w-96 3xl:w-[640px] 3xl:h-32 3xl:font-roboto 3xl:leading-8 3xl:text-3xl 3xl:font-normal 3xl:text-gray-475 3xl:mt-1">
                                Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                                scale through fail-proof design innovation systems.
                            </p>
                        </div>
                    </div>

                    <div className="3xl:flex 3xl:gap-2 lg:flex ">
                        <div className="mt-8 ">
                            <img
                                src={image3}
                                alt=" angled mobile display"
                                className="md:w-3/4 md:h-full md:mt-20 xs:h-96 xs:mb-8 sm:mt-20 sm:ml-10 sm:w-5/6 sm:h-5/6 sm:mr-10 xs:w-full md:px-0  lg:w-11/12 lg:h-2/3 lg:ml-0 3xl:ml-0 3xl:h-4/6 3xl:w-full 3xl:mb-20"
                            />

                            <div className="xs:flex xs:gap-2.5  sm:pl-10 xs:mt-8 xs:font-poppins xs:font-semibold xs:text-xs xs:text-blue-850 lg:text-xl lg:font-poppins lg:gap-4  3xl:mt-8 3xl:leading-6 3xl:text-3xl 3xl:p-4">
                                <p># UX/UI</p>
                                <p>#DEVELOPMENT</p>
                            </div>

                            <h1 className="xs:mt-2  xs:text-slate-925 xs:text-3xl sm:pl-10 xs:leading-10 xs:w-80 h-7 font-Poppins font-medium lg:leading-12 lg:font-poppins lg:text-4xl 3xl:w-80 3xl:font-poppins 3xl:leading-15 3xl:h-16 3xl:text-5xl 3xl:mb-8 ">
                                Simplicontract
                            </h1>

                            <p className="xs:mt-6  xs:text-left xs:h-28 sm:pl-10 xs:font-roboto xs:font-regular xs:text-lg xs:leading-6 xs:text-zinc-850 xs:w-96 lg:mt-8 lg:h-32 lg:text-gray-475 lg:leading-6 lg:font-normal lg:font-roboto lg:w-96 3xl:w-[640px] 3xl:h-32 3xl:font-roboto 3xl:leading-8 3xl:text-3xl 3xl:font-normal 3xl:text-gray-475 3xl:mt-1">
                                Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                                scale through fail-proof design innovation systems.
                            </p>
                        </div>

                        <div className=" 3xl:mt-48 ">
                            <img
                                src={image4}
                                alt="A hand is holding mobile phone with blue display"
                                className="md:w-3/4 md:h-full md:mt-20 xs:h-96 xs:mb-8 sm:ml-10 sm:w-5/6 sm:mt-20 sm:h-5/6 sm:mr-10 xs:w-full md:px-0  lg:w-5/6 lg:mt-28 lg:h-2/3  3xl:h-3/4 lg:ml-24 3xl:w-11/12 3xl:mt- 3xl:mb-20"
                            />

                            <div className="xs:flex xs:gap-2.5  sm:pl-10 xs:mt-8 xs:font-poppins xs:font-semibold xs:text-xs xs:text-blue-850 lg:text-xl lg:font-poppins lg:gap-4 lg:ml-20  3xl:mt-8 3xl:leading-6 3xl:text-3xl 3xl:p-4">
                                <p># UX/UI</p>
                                <p>#DEVELOPMENT</p>
                            </div>

                            <h1 className="xs:mt-2 xs:text-slate-925 xs:text-3xl sm:pl-10 xs:leading-10 xs:w-80 h-7 font-Poppins font-medium lg:leading-12 lg:ml-20 lg:font-poppins lg:text-4xl 3xl:w-80 3xl:font-poppins 3xl:leading-15 3xl:h-16 3xl:text-5xl 3xl:mb-8 ">
                                Simplicontract
                            </h1>

                            <p className="xs:mt-6 xs:text-left xs:h-28 sm:pl-10 xs:font-roboto xs:font-regular xs:text-lg xs:leading-6 xs:text-zinc-850 xs:w-96  lg:mt-8 lg:h-32 lg:text-gray-475 lg:leading-6 lg:font-normal lg:ml-20 lg:font-roboto lg:w-96 3xl:w-[640px] 3xl:h-32 3xl:font-roboto 3xl:leading-8 3xl:text-3xl 3xl:font-normal 3xl:text-gray-475 3xl:mt-1">
                                Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                                scale through fail-proof design innovation systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkSection;
