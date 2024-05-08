import NewsCard from '../../assets/images/news-card.png';

function NewsCards() {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-poppins font-medium px-5 mb-24">Latest Articles </h1>

                <div className="flex overflow-x-auto lg:overflow-hidden lg:scrollbar-hide gap-4 w-full md:px-0 font-poppins">
                    <div className="w-full flex sm:px-4">
                        <div className="flex flex-no-wrap w-auto sm:px-0 md:px-0 xl:px-5 3xl:px-6">
                            <div className="w-full mr-4">
                                <div className="w-56 lg:w-auto md:w-full">
                                    <img src={NewsCard} alt="News card" className="w-full rounded-lg bg-slate-300" />
                                    <div className="mt-2">
                                        <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                            /01/ News Technology / 03 March 2022
                                        </h1>
                                        <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                            Great Place to Work 2022 Survey: Vincit is the best place to work in
                                            Finland, again!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mr-4">
                                <div className="w-56 lg:w-auto md:w-full">
                                    <img src={NewsCard} alt="News card" className="w-full rounded-lg bg-slate-300" />
                                    <div className="mt-2">
                                        <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                            /01/ News Technology / 03 March 2022
                                        </h1>
                                        <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                            Great Place to Work 2022 Survey: Vincit is the best place to work in
                                            Finland, again!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mr-4 3xl:mr-6 lg:block">
                                <div className="w-56 lg:w-auto md:w-full">
                                    <img src={NewsCard} alt="News card" className="w-full rounded-lg bg-slate-300" />
                                    <div className="mt-2 pb-28">
                                        <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                            /01/ News Technology / 03 March 2022
                                        </h1>
                                        <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                            Great Place to Work 2022 Survey: Vincit is the best place to work in
                                            Finland, again!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mr-4 3xl:mr-6 lg:hidden md:hidden">
                                <div className="w-56 lg:w-auto md:w-full">
                                    <img src={NewsCard} alt="News card" className="w-full rounded-lg bg-slate-300" />
                                    <div className="mt-2 pb-28">
                                        <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                            /01/ News Technology / 03 March 2022
                                        </h1>
                                        <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                            Great Place to Work 2022 Survey: Vincit is the best place to work in
                                            Finland, again!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mr-4 3xl:mr-6 lg:hidden md:hidden">
                                <div className="w-56 lg:w-auto md:w-full">
                                    <img src={NewsCard} alt="News card" className="w-full rounded-lg bg-slate-300" />
                                    <div className="mt-2 pb-28">
                                        <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                            /01/ News Technology / 03 March 2022
                                        </h1>
                                        <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                            Great Place to Work 2022 Survey: Vincit is the best place to work in
                                            Finland, again!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mr-4 3xl:mr-6 lg:hidden md:hidden">
                                <div className="w-56 lg:w-auto md:w-full">
                                    <img src={NewsCard} alt="News card" className="w-full rounded-lg bg-slate-300" />
                                    <div className="mt-2 pb-28">
                                        <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                            /01/ News Technology / 03 March 2022
                                        </h1>
                                        <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                            Great Place to Work 2022 Survey: Vincit is the best place to work in
                                            Finland, again!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCards;
