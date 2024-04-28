import { OUR_ENGAGEMENT_DATA } from '../../constants';

const OurEngagement = () => {
    return (
        <div className=" w-screen px-5  xs:pt-3 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 3xl:pt-5">
            <h2 className="font-poppins font-medium  text-zinc-850  text-4xl mb-6">Our Engagement Models</h2>
            <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5">
                {OUR_ENGAGEMENT_DATA.map((item, i) => {
                    return (
                        <div key={i} className="rounded-lg border p-16 bg-gray-75 w-full 3xl:py-20">
                            <div className="pt-14 pr-18 2xl:pr-24">
                                <h3 className=" text-left font-poppins font-medium text-2.5xl mb-4 w-10 2xl:text-4xl">
                                    {item.heading}
                                </h3>
                                <p className=" font-regular font-roboto opacity-80 lg:text-lg xl:w-110 2xl:text-2xl">
                                    {item.discription}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OurEngagement;
