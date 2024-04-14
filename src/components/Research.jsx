import React from 'react';
import ArrowDown from '../assets/images/arrowdown.png';
import Line from '../assets/images/line.png';
import Arrow from '../assets/images/arrow.svg';
import research from '../assets/images/research.png';

function Research() {
    const researchItems = [
        'Qualitative Research',
        'Heuristic Evaluation',
        'Usability Testing',
        'Quantitative Research',
        'Competitor Analysis',
        'Ethnographic Research'
    ];

    return (
        <div className="w-auto px-5 md:flex lg:px-20 lg:flex justify-around mt-48">
            <div className="ml-9 mr-20 lg:w-3/4 xl:w-2/3 3xl:ml-44 mx-auto mt-16 lg:ml-5 3xl:w-377 3xl:h-299 3xl:mr-44">
                <h2 className="text-4xl lg:text-5xl 3xl:text-6xl font-medium text-gray-800">Research</h2>
                <p className="w-295 h-118 mt-12 text-18 text-gray-500 font-poppins lg:text-xl lg:w-377 h-181 lg:mt-9 3xl:text-2xl">
                    Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale
                    through fail-proof design innovation systems.
                </p>
            </div>
            <div className="ml-9 mr-9 h-472 mt-14 text-sm lg:text-xl  text-gray-500 lg:">
                {researchItems.map((item, index) => (
                    <div key={index} className="gap-4 items-center justify-between mt-2">
                        <div className="flex justify-between items-center w-full lg:w-508 3xl:w-800 mx-auto">
                            <span className="w-full">{item}</span>
                            <img
                                src={ArrowDown}
                                alt="ArrowDown"
                                className="w-4 h-3 ml-auto lg:w-6 lg:h-4 3xl:w-6 3xl:h-3"
                            />
                        </div>
                        <img src={Line} alt="" className="h-0.5 bg-gray-300 mt-1 w-full opacity-20" />
                    </div>
                ))}

                <div className="flex overflow-x-auto scrollbar-hide w-full mt-24 text-gray-500">
                    <div className="w-full flex flex-shrink-0">
                        <div className="flex gap-2 2xl:w-full">
                            <div className="lg:w-auto xl:w-full flex">
                                <div className="lg:w-auto w-full md:w-auto">
                                    <img
                                        src={research}
                                        className="bg-[#E7E7FC] rounded-md w-full lg:w-full h-40 object-cover"
                                        alt="Research"
                                    />
                                    <div className="">
                                        <span className="flex lg:gap-12 md:gap-7 gap-6 text-sm text-blue-500 font-poppins md:font-semibold font-semibold lg:font-bold pt-6">
                                            <h1>#UX/UI</h1>
                                            <h1>#DEVELOPMENT</h1>
                                        </span>
                                        <h1 className="font-semibold text-2xl tracking-wider lg:text-2xl  text-fade-black font-poppins pt-2">
                                            Simplicontract
                                        </h1>
                                        <p className="pt-3 text-section-box-paragraph-color font-roboto">
                                            Yumelabs is a global UI UX Design and Industrial Design agency that helps
                                            your business scale through fail-proof design innovation systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-auto xl:w-full">
                                <div className="lg:w-auto w-full md:w-auto">
                                    <img
                                        src={research}
                                        alt="Research image"
                                        className="bg-[#E7E7FC] rounded-md w-full lg:w-full h-40 object-cover"
                                    />
                                    <div>
                                        <span className="flex lg:gap-12 md:gap-7 gap-6 text-blue-500 text-sm md:font-semibold font-semibold lg:font-bold font-poppins pt-6">
                                            <h1>#UX/UI</h1>
                                            <h1>#DEVELOPMENT</h1>
                                        </span>
                                        <h1 className="font-semibold text-2xl tracking-wider pt-2">Simplicontract</h1>
                                        <p className="pt-3 text-section-box-paragraph-color">
                                            Yumelabs is a global UI UX Design and Industrial Design agency that helps
                                            your business scale through fail-proof design innovation systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" md:hover:from-blue-100 mt-24 lg:mr-  hover:to-pink-200 w-full flex justify-center items-center pt-5 pb-12 sm:pb-5 z-10">
                    <span
                        to="/"
                        className="flex items-center justify-center cursor-pointer gap-8 xs:gap-14 2xl:gap-16 py-1 xl:py-2 pl-5 xl:pl-12 2xl:pl-16 bg-gray-200 rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-200">
                        <h1 className="text-blue-600 text-xs sm:text-sm md:text-base xl:text-xl font-semibold">
                            ALL OUR SERVICE
                        </h1>
                        <div className=" flex items-center justify-center rounded-full p-3.5 sm:p-4 xl:p-6 mr-1 xs:mr-1.5 xl:mr-2 bg-blue-600 hover:bg-gradient-to-r from-blue-500 to-pink-500">
                            <img src={Arrow} alt="" className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-125 " />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Research;
s