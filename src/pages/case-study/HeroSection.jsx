const HeroSection = () => {
    return (
        <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 w-10/12">
            <div className="pt-36">
                <div className="text-xl italic font-normal w-fit px-5 font-serif text-white bg-blue-850">
                    <p className="hidden md:block">Minits</p>
                    <p className="md:hidden">Our Services</p>
                </div>
                <div className="text-4xl md:text-5xl font-medium not-italic text-blue-black pt-5">
                    <p className="hidden md:block">Simplifying the Next.</p>
                    <p className="md:hidden">Feel at home among brave dreamers and curious rebels.</p>
                </div>
                <div className="font-roboto font-normal not-italic text-lg md:text-xl text-neutral-575 opacity-100 pt-11 pb-7 md:pb-12">
                    <p className="hidden md:block">
                        Maiven is a cutting-edge AI-powered software designed to assist companies by analyzing audience
                        engagement through a combination of eye tracking and facial recognition technologies. This
                        software aims to provide insights into where the audience’s attention is focused the most and
                        their emotional reactions to the content.
                    </p>
                    <p className="md:hidden">
                        High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                        trust, and higher media love.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:pt-10">
                <div className="mb-5 md:mb-0">
                    <p className="text-blue-850 text-xs font-poppins font-semibold">Services</p>
                    <h1 className="font-medium font-poppins not-italic text-lg md:text-2xl leading-6 md:leading-10 text-gray-900">
                        Product
                    </h1>
                </div>
                <div className="mb-5 md:mb-0 md:ml-10">
                    <p className="text-blue-850 text-xs font-poppins font-semibold">Industry</p>
                    <h1 className="font-medium font-poppins not-italic text-lg md:text-2xl leading-6 md:leading-10 text-gray-900">
                        Product
                    </h1>
                </div>
                <div className="mb-5 md:mb-0 md:ml-10">
                    <p className="text-blue-850 text-xs font-poppins font-semibold">Location</p>
                    <h1 className="font-medium font-poppins not-italic text-lg md:text-2xl leading-6 md:leading-10 text-gray-900">
                        Product
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
