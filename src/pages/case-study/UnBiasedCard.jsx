import { UNBIASED_ANALYSIS_DATA } from '../../constants/product-design-data';

const UnBiasedCard = () => {
    return (
        <>
            {UNBIASED_ANALYSIS_DATA.map((item, i) => {
                return (
                    <div key={`index-${i}`}>
                        <div className="flex items-center mb-8">
                            <span className="font-poppins font-medium text-2.5xl 2xl:text-4xl">{item.number}</span>
                            <div className="h-px w-full bg-gray-475 opacity-25" />
                        </div>

                        <h2 className="text-2.5xl font-poppins font-medium max-w-80 text-slate-925 md:max-w-112.5 2xl:text-4xl 2xl:max-w-175 2xl:mt-16 3xl:mt-24">
                            {item.heading}
                        </h2>
                        <p className="text-lg text-gray-475 my-5 max-w-80 md:max-w-112.5 xl:my-10 2xl:text-2xl 2xl:my-16 2xl:max-w-175 3xl:mb-24">
                            {item.discription}
                        </p>

                        <div className="mt-10 w-full grid gap-y-3 mb-16 lg:grid-cols-2 lg:gap-x-3">
                            <img
                                src={item.imgSrc1}
                                alt="maiven tests desktop screen image"
                                className="rounded-lg w-full"
                            />
                            <img src={item.imgSrc2} alt="maiven tests mobile screen image" className="h-full" />
                            <img
                                src={item.imgSrc3}
                                alt="image of two white boxes"
                                className="h-96 rounded-lg xs:h-144.5 w-full lg:h-full lg:col-span-2"
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default UnBiasedCard;
