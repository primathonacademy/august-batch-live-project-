import PropTypes from 'prop-types';
import BgGridImg from '../../assets/images/bg-grid-lines.png';
import DesktopMaivenTestImg from '../../assets/images/main-analysis-potrait.png';
import SelectedProjects from '../service/SelectedProjects';
import FounderSection from './FounderSection';
import ProductCard from './ProductCard';
import UnBiasedCard from './UnBiasedCard';

const ProductDesign = ({ screenSize }) => {
    return (
        <>
            <section className="flex items-end mb-8 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                {screenSize < 768 ? (
                    <span className="italic text-xl text-white bg-blue-850 py-2 px-8 tracking-normal w-36 font-serif">
                        Branding
                    </span>
                ) : (
                    <span className="italic text-xl text-white bg-blue-850 py-1 px-8 tracking-normal w-64 font-serif">
                        Product Design
                    </span>
                )}
                <div className="h-px w-full bg-gray-475 opacity-25" />
            </section>

            <section className="md:flex md:justify-between px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <h1 className="text-2.5xl font-poppins font-medium text-slate-925 max-w-80 2xl:text-4xl xl:max-w-80 2xl:max-w-110">
                    Headlines on the Problem Statement
                </h1>
                <p className="text-lg text-gray-475 max-w-96 py-7 md:p-0 md:min-w-110 2xl:text-2xl lg:max-w-175 xl:mr-20 2xl:max-w-250  3xl:max-w-270">
                    We’ve crafted a comprehensive solution that seamlessly merges intuitive AI-driven analysis,
                    user-centered product design, and effective project management. Our platform harmonizes these
                    elements to create a unified experience that empowers users at every stage.
                </p>
            </section>

            <section className="w-full relative mt-20 px-5 sm:mt-20 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <img
                    className="absolute inset-0 bg-cover object-cover bg-center bg-grid w-screen -left-5 md:-left-16 h-389 scale-110 sm:scale-150 sm:h-344.5 sm:top-52 sm:mt-20 md:h-80 md:mt-0 md:top-10 lg:mt-0 lg:top-10 lg:-left-20 lg:h-96 xl:h-116.25 xl:mt-20 xl:-left-24 3xl:h-159.5 3xl:-left-48"
                    src={BgGridImg}
                    alt="Background grid image"
                />

                <div className="flex justify-center gap-3 md:grid md:grid-cols-3">
                    <ProductCard />
                </div>
            </section>

            <section className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 mt-56 xl:mt-96">
                <UnBiasedCard />
            </section>

            <FounderSection />

            <div className="relative overflow-hidden md:mt-10 2xl:mt-20 3xl:mt-36 mb-10">
                <img
                    src={DesktopMaivenTestImg}
                    alt="maiven home desktop image"
                    className="bg-center object-cover bg-cover scale-110 h-210 w-full md:scale-110 lg:h-131 xl:h-175 2xl:h-250 mt-32"
                />
            </div>

            <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <SelectedProjects />
            </div>
        </>
    );
};

ProductDesign.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default ProductDesign;
