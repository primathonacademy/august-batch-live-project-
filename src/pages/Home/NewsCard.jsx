import newsCard from '../../assets/HomeImg/Newscard.png';
function NewsCard() {
    return (
        <div className="flex overflow-x-auto lg:overflow-hidden lg:scrollbar-hide gap-4 w-full">
            <div className="w-full flex ">
                <div className="flex flex-no-wrap w-full">
                    <div className="w-full mr-4">
                        <div className="w-56 lg:w-auto md:w-full">
                            <img src={newsCard} alt="" className="bg-light-blue w-full rounded-md bg-[#E7E7FC]" />
                            <div className="mt-2">
                                <h1 className=" font-semibold text-lg pt-4 3xl:text-[24px]">
                                    /01/ News Technology /03 March 2022
                                </h1>
                                <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 3xl:text-[24px]  ">
                                    Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mr-4">
                        <div className="w-56 lg:w-auto md:w-full">
                            <img src={newsCard} alt="" className="w-full  rounded-md bg-[#E7E7FC]" />
                            <div className="mt-2">
                                <h1 className=" font-semibold text-lg pt-4 3xl:text-[24px]">
                                    /01/ News Technology / 03 March 2022
                                </h1>
                                <p className=" font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 3xl:text-[24px]">
                                    Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-56 lg:w-auto md:w-full">
                            <img src={newsCard} alt="" className=" w-full rounded-md bg-[#E7E7FC]" />
                            <div className="mt-2 pb-28">
                                <h1 className="  font-semibold text-lg pt-4 3xl:text-[24px]">
                                    /01/ News Technology / 03 March 2022
                                </h1>
                                <p className=" text-gray-600  font-roboto pt-4 text-lg lg:w-8/12 3xl:text-[24px]">
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
