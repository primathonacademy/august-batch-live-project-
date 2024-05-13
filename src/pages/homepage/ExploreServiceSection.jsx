import ProductInnovationImg from '../../assets/images/product-innovation-img.png';
import IndustrialDesignImg from '../../assets/images/industrial-design-img.png';
import UxUiDesignImg from '../../assets/images/ux-ui-design-img.png';
const ExploreServiceSection = () => {
    return (
        <div className="grid gap-y-1 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 lg:flex ">
            <div className=" w-full h-110 bg-gray-75 grid grid-cols-1 px-12 py-10">
                <h2 className="text-4xl text-slate-925 font-medium">Innovation is the New Marketing.</h2>
                <p className=" py-6 text-slate-550 text-xl">
                    Translating user needs into actionable business objectives.
                </p>
                {/* erro and effect add krna  */}
                <button className="pt-10 text-sm text-blue-850 font-poppins">EXPLORE SERVICES</button>
            </div>
            <div className=" grid grid-cols-2 gap-x-1 lg:flex lg:flex-col">
                <div className=" w-full relative">
                    <img className=" h-80 object-cover rounded" src={ProductInnovationImg} alt="" />
                    <p className=" text-base absolute bottom-8 left-8 text-center  text-slate-550 opacity-75">
                        PRODUCT <br /> INNOVATION
                    </p>
                </div>
                <div className=" relative">
                    <img className=" h-80 object-cover rounded" src={IndustrialDesignImg} alt="" />
                    <p className=" text-base absolute bottom-8 left-8 text-center  text-white opacity-60">
                        INDUSTRIAL <br /> DESIGN
                    </p>
                </div>
            </div>
            {/* width problem new bnana pdgi not equal color add krna orage m */}
            <div className=" w-full h-110 flex items-center justify-end  bg-orange-300 relative rounded">
                <img className=" w-3/4" src={UxUiDesignImg} alt="" />
                <p className=" text-base absolute bottom-6 left-36 text-white opacity-60">UX/UI</p>
            </div>
        </div>
    );
};

export default ExploreServiceSection;
