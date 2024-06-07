import PropTypes from 'prop-types';
import ArrowRightIcon from '../../assets/icons/arrow-right-icon.svg';
import ArrowDownIcon from '../../assets/icons/arrow-down-icon.png';
import ResearchCardImage from '../../assets/images/research-card.png';

function Research({ screenSize }) {
    const researchItems = [
        'Qualitative Research',
        'Heuristic Evaluation',
        'Usability Testing',
        'Quantitative Research',
        'Competitor Analysis',
        'Ethnographic Research'
    ];

    return (
        <>
            <div className="px-5 md:flex md:px-14  lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 justify-around mt-36">
                <div className="ml-9 mr-20 lg:w-3/4 xl:w-2/3 mx-auto mt-16 lg:ml-5">
                    <h2 className="text-4xl lg:text-5.7xl font-medium font-poppins text-gray-800">Research</h2>
                    <p className="mt-8 text-lg lg:text-xl text-gray-475 xl:w-80">
                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale
                        through fail-proof design innovation systems.
                    </p>
                </div>
                <div className="ml-9 mr-9 h-472 mt-14 text-sm lg:text-xl text-gray-500">
                    {researchItems.map((item, index) => (
                        <div key={index} className="gap-4 items-center justify-between mt-2">
                            <div className="flex justify-between items-center w-full mx-auto">
                                <span className="w-full text-lg lg:text-2xl font-poppins">{item}</span>
                                <img
                                    src={ArrowDownIcon}
                                    alt="arrow down icon"
                                    className="w-4 h-3 ml-auto lg:w-6 lg:h-4 3xl:w-6 3xl:h-3"
                                />
                            </div>
                            <hr className="h-0.5 bg-gray-400 mt-2 w-full opacity-20" />
                        </div>
                    ))}

                    <div className="flex overflow-x-auto scrollbar-hide w-full mt-24 text-gray-500">
                        <div className="w-full flex">
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <img
                                        src={ResearchCardImage}
                                        className="rounded-md w-full h-60 md:w-96 md:h-72 object-cover"
                                        alt="research card image"
                                    />
                                    <div className="pt-6">
                                        <span className="flex gap-6 text-base font-poppins text-blue-850 font-semibold">
                                            <h4>{screenSize < 1280 ? '# UX/UI' : '# QUALITATIVE RESEARCH'}</h4>
                                            <h4># DEVELOPMENT</h4>
                                        </span>
                                        <h2 className="font-medium text-2.5xl lg:text-4xl tracking-wider my-3 text-slate-925 xl:my-5">
                                            Simplicontract
                                        </h2>
                                        <p className="text-lg lg:text-2xl text-gray-475 pr-2">
                                            Yumelabs is a global UI UX Design and Industrial Design agency that helps
                                            your business scale through fail-proof design innovation systems.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 w-72">
                                    <img
                                        src={ResearchCardImage}
                                        alt="Research Card Image"
                                        className="rounded-md w-full h-60 md:w-96 md:h-72 object-cover"
                                    />
                                    <div className="pt-6">
                                        <span className="flex gap-6 text-base font-poppins text-blue-850 font-semibold">
                                            <h4>{screenSize < 1280 ? '# UX/UI' : '# QUALITATIVE RESEARCH'}</h4>
                                            <h4># DEVELOPMENT</h4>
                                        </span>
                                        <h2 className="font-medium text-2.5xl lg:text-4xl tracking-wider my-3 text-slate-925 xl:my-5">
                                            Simplicontract
                                        </h2>
                                        <p className="text-lg lg:text-2xl text-gray-475 pr-2">
                                            Yumelabs is a global UI UX Design and Industrial Design agency that helps
                                            your business scale through fail-proof design innovation systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {screenSize < 768 ? (
                        <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-60 mt-32 mx-auto my-20">
                            <button className="text-md text-blue-850 font-poppins font-semibold ml-3 tracking-wider">
                                EXPLORE PORTFOLIO
                            </button>

                            <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center item-center ml-3">
                                <img src={ArrowRightIcon} alt="right direction arrow" className="w-3" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-56 lg:w-72 button-div mt-32 my-28 mx-auto">
                            <button className="text-md text-blue-850 font-poppins font-medium ml-3 tracking-wider button">
                                ALL OUR SERVICES
                            </button>

                            <div
                                className="w-12 h-12 bg-blue-600 
                    rounded-full flex justify-center item-center ml-4 button-arrow">
                                <img src={ArrowRightIcon} alt="right direction arrow" className="w-3" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <hr className="w-11/12 mx-auto" />

            <div className="px-5 md:flex md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 justify-around mt-20">
                <div className="ml-9 mr-20 lg:w-3/4 xl:w-2/3 mx-auto mt-16 lg:ml-5">
                    <h2 className="text-4xl lg:text-5.7xl font-medium font-poppins text-gray-800">Research</h2>
                    <p className="mt-8 text-lg lg:text-xl text-gray-475 xl:w-80">
                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale
                        through fail-proof design innovation systems.
                    </p>
                </div>
                <div className="ml-9 mr-9 h-472 mt-14 text-sm lg:text-xl text-gray-500">
                    {researchItems.map((item, index) => (
                        <div key={index} className="gap-4 items-center justify-between mt-2">
                            <div className="flex justify-between items-center w-full mx-auto">
                                <span className="w-full text-lg lg:text-2xl font-poppins">{item}</span>
                                <img
                                    src={ArrowDownIcon}
                                    alt="arrow down icon"
                                    className="w-4 h-3 ml-auto lg:w-6 lg:h-4 3xl:w-6 3xl:h-3"
                                />
                            </div>
                            <hr className="h-0.5 bg-gray-400 mt-2 w-full opacity-20" />
                        </div>
                    ))}

                    <div className="flex overflow-x-auto scrollbar-hide w-full mt-24 text-gray-500">
                        <div className="w-full flex">
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <img
                                        src={ResearchCardImage}
                                        className="rounded-md w-full h-60 md:w-96 md:h-72 object-cover"
                                        alt="research card image"
                                    />
                                    <div className="pt-6">
                                        <span className="flex gap-6 text-base font-poppins text-blue-850 font-semibold">
                                            <h4>{screenSize < 1280 ? '#UX/UI' : '# QUALITATIVE RESEARCH'}</h4>
                                            <h4>#DEVELOPMENT</h4>
                                        </span>
                                        <h2 className="font-medium text-2.5xl lg:text-4xl tracking-wider my-3 text-slate-925 xl:my-5">
                                            Simplicontract
                                        </h2>
                                        <p className="text-lg lg:text-2xl text-gray-475 pr-2">
                                            Yumelabs is a global UI UX Design and Industrial Design agency that helps
                                            your business scale through fail-proof design innovation systems.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 w-72">
                                    <img
                                        src={ResearchCardImage}
                                        alt="Research Card Image"
                                        className="rounded-md w-full h-60 md:w-96 md:h-72 object-cover"
                                    />
                                    <div className="pt-6">
                                        <span className="flex gap-6 text-base font-poppins text-blue-850 font-semibold">
                                            <h4>{screenSize < 1280 ? '#UX/UI' : '# QUALITATIVE RESEARCH'}</h4>
                                            <h4>#DEVELOPMENT</h4>
                                        </span>
                                        <h2 className="font-medium text-2.5xl lg:text-4xl tracking-wider my-3 text-slate-925 xl:my-5">
                                            Simplicontract
                                        </h2>
                                        <p className="text-lg lg:text-2xl text-gray-475 pr-2">
                                            Yumelabs is a global UI UX Design and Industrial Design agency that helps
                                            your business scale through fail-proof design innovation systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {screenSize < 768 ? (
                        <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-60 mt-32 mx-auto my-20">
                            <button className="text-md text-blue-850 font-poppins font-semibold ml-3 tracking-wider">
                                EXPLORE PORTFOLIO
                            </button>

                            <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center item-center ml-3">
                                <img src={ArrowRightIcon} alt="right direction arrow" className="w-3" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-56 lg:w-72 button-div mt-32 my-28 mx-auto">
                            <button className="text-md text-blue-850 font-poppins font-medium ml-3 tracking-wider button">
                                ALL OUR SERVICES
                            </button>

                            <div
                                className="w-12 h-12 bg-blue-600 
                    rounded-full flex justify-center item-center ml-4 button-arrow">
                                <img src={ArrowRightIcon} alt="right direction arrow" className="w-3" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <hr className="w-11/12 mx-auto" />

            <div className="px-5 md:flex md:px-14  lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 justify-around mt-20">
                <div className="ml-9 mr-20 lg:w-3/4 xl:w-2/3 mx-auto mt-16 lg:ml-5">
                    <h2 className="text-4xl lg:text-5.7xl font-medium font-poppins text-gray-800">Research</h2>
                    <p className="mt-8 text-lg lg:text-xl text-gray-475 xl:w-80">
                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale
                        through fail-proof design innovation systems.
                    </p>
                </div>
                <div className="ml-9 mr-9 h-472 mt-14 text-sm lg:text-xl text-gray-500">
                    {researchItems.map((item, index) => (
                        <div key={index} className="gap-4 items-center justify-between mt-2">
                            <div className="flex justify-between items-center w-full mx-auto">
                                <span className="w-full text-lg lg:text-2xl font-poppins">{item}</span>
                                <img
                                    src={ArrowDownIcon}
                                    alt="arrow down icon"
                                    className="w-4 h-3 ml-auto lg:w-6 lg:h-4 3xl:w-6 3xl:h-3"
                                />
                            </div>
                            <hr className="h-0.5 bg-gray-400 mt-2 w-full opacity-20" />
                        </div>
                    ))}

                    <div className="flex overflow-x-auto scrollbar-hide w-full mt-24 text-gray-500">
                        <div className="w-full flex">
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <img
                                        src={ResearchCardImage}
                                        className="rounded-md w-full h-60 md:w-96 md:h-72 object-cover"
                                        alt="research card image"
                                    />
                                    <div className="pt-6">
                                        <span className="flex gap-6 text-base font-poppins text-blue-850 font-semibold">
                                            <h4>{screenSize < 1280 ? '#UX/UI' : '# QUALITATIVE RESEARCH'}</h4>
                                            <h4>#DEVELOPMENT</h4>
                                        </span>
                                        <h2 className="font-medium text-2.5xl lg:text-4xl tracking-wider my-3 text-slate-925 xl:my-5">
                                            Simplicontract
                                        </h2>
                                        <p className="text-lg lg:text-2xl text-gray-475 pr-2">
                                            Yumelabs is a global UI UX Design and Industrial Design agency that helps
                                            your business scale through fail-proof design innovation systems.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 w-72">
                                    <img
                                        src={ResearchCardImage}
                                        alt="Research Card Image"
                                        className="rounded-md w-full h-60 md:w-96 md:h-72 object-cover"
                                    />
                                    <div className="pt-6">
                                        <span className="flex gap-6 text-base font-poppins text-blue-850 font-semibold">
                                            <h4>{screenSize < 1280 ? '#UX/UI' : '# QUALITATIVE RESEARCH'}</h4>
                                            <h4>#DEVELOPMENT</h4>
                                        </span>
                                        <h2 className="font-medium text-2.5xl lg:text-4xl tracking-wider my-3 text-slate-925 xl:my-5">
                                            Simplicontract
                                        </h2>
                                        <p className="text-lg lg:text-2xl text-gray-475 pr-2">
                                            Yumelabs is a global UI UX Design and Industrial Design agency that helps
                                            your business scale through fail-proof design innovation systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {screenSize < 768 ? (
                        <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-60 mt-32 mx-auto my-20">
                            <button className="text-md text-blue-850 font-poppins font-semibold ml-3 tracking-wider">
                                EXPLORE PORTFOLIO
                            </button>

                            <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center item-center ml-3">
                                <img src={ArrowRightIcon} alt="right direction arrow" className="w-3" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center bg-zinc-75 rounded-full h-14 w-56 lg:w-72 button-div mt-32 my-28 mx-auto">
                            <button className="text-md text-blue-850 font-poppins font-medium ml-3 tracking-wider button">
                                ALL OUR SERVICES
                            </button>

                            <div
                                className="w-12 h-12 bg-blue-600 
                    rounded-full flex justify-center item-center ml-4 button-arrow">
                                <img src={ArrowRightIcon} alt="right direction arrow" className="w-3" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

Research.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default Research;
