import PropTypes from 'prop-types';
import ProductInnovationImg from '../../assets/images/product-innovation-img.png';
import IndustrialDesignImg from '../../assets/images/industrial-design-img.png';
import UxUiDesignImg from '../../assets/images/ux-ui-design-img.png';
import ArrowRightIcon from '../../assets/icons/arrow-right-icon.svg';

const ExploreServiceSection = ({ screenSize }) => {
    return (
        <div className="grid gap-y-2 lg:gap-x-3 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 my-40 lg:flex">
            <div className="w-full min-h-110 bg-gray-75 grid grid-cols-1 p-10 xl:p-20 xl:pt-32 text-left rounded">
                <h2 className="text-4xl text-slate-925 font-medium font-poppins xl:px-20">
                    Innovation is the New Marketing.
                </h2>
                <p className="py-6 text-slate-550 text-xl xl:px-20">
                    {screenSize < 1024
                        ? 'Translating user needs into actionable business objectives.'
                        : 'Build your brand moat with us and leave the competition in the dust.'}
                </p>

                <div className="flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-200  bg-white rounded-full">
                    <button className="text-md text-blue-850 font-poppins font-semibold">
                        {screenSize < 1024 ? 'ALL OUR SERVICES' : 'EXPLORE SERVICES'}
                    </button>

                    <div className="w-10 h-10 bg-blue-600 hover:bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex justify-center item-center ml-2">
                        <img src={ArrowRightIcon} alt="right direction arrow" className="hover:scale-110 text-xs w-5" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-1 lg:gap-y-3 lg:flex lg:flex-col">
                <div className="w-full relative">
                    <img
                        className="min-h-80 object-cover rounded"
                        src={ProductInnovationImg}
                        alt="product innovation image"
                    />
                    <p className="absolute bottom-6 left-8 text-center lg:text-left text-slate-925 opacity-50 font-medium xl:text-lg 2xl:text-xl">
                        PRODUCT <br /> INNOVATION
                    </p>
                </div>
                <div className="relative">
                    <img
                        className="min-h-80 object-cover rounded"
                        src={IndustrialDesignImg}
                        alt="industrial design image"
                    />
                    <p className="absolute bottom-6 left-8 text-center lg:text-left text-slate-925 opacity-50 font-medium 2xl:text-xl">
                        INDUSTRIAL <br /> DESIGN
                    </p>
                </div>
            </div>

            <div className="w-full min-h-110 flex items-center justify-end bg-orange-light relative rounded">
                <img className="w-3/4" src={UxUiDesignImg} alt="ux ui design image" />
                <p className="absolute bottom-6 left-48 text-white lg:left-6 font-medium 2xl:text-xl">UX/UI</p>
            </div>
        </div>
    );
};

ExploreServiceSection.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default ExploreServiceSection;
