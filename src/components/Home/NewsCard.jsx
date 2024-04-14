import newsCard from '../../assets/images/newscard.png';
function NewsCard() {
    return (
        <div className="flex overflow-x-auto lg:overflow-hidden lg:scrollbar-hide gap-4 w-full px-5 md:px-0">
            <div className="w-full flex ">
                <div className="flex flex-no-wrap w-auto ">
                    <div className="w-full mr-4">
                        <div className="w-56 lg:w-auto md:w-full">
                            <img src={newsCard} alt="News" className="bg-light-blue w-full rounded-md bg-slate-200" />
                            <div className="mt-2">
                                <h1 className=" font-semibold text-lg pt-4 3xl:text-2xl  4xl:text-4xl ">
                                    /01/ News Technology / 03 March 2022
                                </h1>
                                <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 3xl:text-2xl  4xl:text-4xl 4xl:w-full">
                                    Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mr-4">
                        <div className="w-56 lg:w-auto md:w-full">
                            <img src={newsCard} alt="News" className="w-full  rounded-lg bg-slate-200" />
                            <div className="mt-2">
                                <h1 className=" font-semibold text-lg pt-4 3xl:text-2xl  4xl:text-4xl ">
                                    /01/ News Technology / 03 March 2022
                                </h1>
                                <p className=" font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 3xl:text-2xl  4xl:text-4xl 4xl:w-full">
                                    Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mr-4">
                        <div className="w-56 lg:w-auto md:w-full">
                            <img src={newsCard} alt="News" className=" w-full rounded-lg bg-slate-200" />
                            <div className="mt-2 pb-28">
                                <h1 className="  font-semibold text-lg pt-4 3xl:text-2xl  4xl:text-4xl">
                                    /01/ News Technology / 03 March 2022
                                </h1>
                                <p className=" text-gray-600  font-roboto pt-4 text-lg lg:w-8/12 3xl:text-2xl  4xl:text-4xl  4xl:w-full">
                                    Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;
