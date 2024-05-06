import ArrowRightIcon from '../../assets/icons/arrow-right-icon.svg';
import ArrowDownIcon from '../../assets/icons/arrow-down-icon.png';
import ResearchCardImage from '../../assets/images/research-card.png';

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
        <div className="px-5 md:flex md:px-14  lg:px-20 xl:24 2xl:px-28 3xl:45.5 justify-around mt-48">
            <div className="ml-9 mr-20 lg:w-3/4 xl:w-2/3 mx-auto mt-16 lg:ml-5">
                <h2 className="text-4xl lg:text-5xl font-medium text-gray-800">Research</h2>
                <p className="mt-12 text-sm lg:text-xl text-gray-500">
                    Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale
                    through fail-proof design innovation systems.
                </p>
            </div>
            <div className="ml-9 mr-9 h-472 mt-14 text-sm lg:text-xl  text-gray-500">
                {researchItems.map((item, index) => (
                    <div key={index} className="gap-4 items-center justify-between mt-2">
                        <div className="flex justify-between items-center w-full lg:w-508 3xl:w-800 mx-auto">
                            <span className="w-full">{item}</span>
                            <img
                                src={ArrowDownIcon}
                                alt="Arrow Down Icon"
                                className="w-4 h-3 ml-auto lg:w-6 lg:h-4 3xl:w-6 3xl:h-3"
                            />
                        </div>
                        <hr className="h-0.5 bg-gray-400 mt-1 w-full opacity-20" />
                    </div>
                ))}

                <div className="flex overflow-x-auto scrollbar-hide w-full mt-24 text-gray-500">
                    <div className="w-full flex">
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <img
                                    src={ResearchCardImage}
                                    className="rounded-md w-full h-40 object-cover"
                                    alt="Research Card Image"
                                />
                                <div className="pt-6">
                                    <span className="flex gap-6 text-sm text-blue-500">
                                        <h1>#UX/UI</h1>
                                        <h1>#DEVELOPMENT</h1>
                                    </span>
                                    <h1 className="font-semibold text-2xl tracking-wider text-fade-black pt-2">
                                        Simplicontract
                                    </h1>
                                    <p className="pt-3">
                                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your
                                        business scale through fail-proof design innovation systems.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <img
                                    src={ResearchCardImage}
                                    alt="Research-Card-Image"
                                    className="rounded-md w-full h-40 object-cover"
                                />
                                <div className="pt-6">
                                    <span className="flex gap-6 text-blue-500 text-sm">
                                        <h1>#UX/UI</h1>
                                        <h1>#DEVELOPMENT</h1>
                                    </span>
                                    <h1 className="font-semibold text-2xl tracking-wider pt-2">Simplicontract</h1>
                                    <p className="pt-3">
                                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your
                                        business scale through fail-proof design innovation systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24 w-full flex justify-center items-center pt-5 pb-12 z-10">
                    <span
                        to="/"
                        className="flex items-center justify-center cursor-pointer gap-8 py-1 xl:py-2 pl-5 xl:pl-12 bg-gray-200 rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-200">
                        <h1 className="text-blue-600 text-sm md:text-base xl:text-xl font-semibold">ALL OUR SERVICE</h1>
                        <div className="flex items-center justify-center rounded-full p-4 xl:p-6 bg-blue-600 hover:bg-gradient-to-r from-blue-500 to-pink-500">
                            <img src={ArrowRightIcon} alt="Arrow Right Icon" className="w-4 h-4 hover:scale-125" />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Research;
