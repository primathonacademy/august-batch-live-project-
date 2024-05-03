import { PRODUCT_DATA, UNBIASED_ANALYSIS_DATA } from '../../constants/product-design-data';
import PropTypes from 'prop-types';
import DoubleQuoteImg from '../../assets/images/double-quote.svg';
import EllipseImg from '../../assets/images/user-bg-img.png';
import ProfileImage from '../../assets/images/user-image.png';
import BgGridImg from '../../assets/images/bg-grid-lines.png';
import DesktopMaivenTestImg from '../../assets/images/main-analysis-potrait.png';
import SelectedProject from '../service/SelectedProject';

const ProductCard = () => {
    return (
        <>
            {PRODUCT_DATA.map((item, i) => {
                return (
                    <div
                        key={`index-${i}`}
                        className="w-full sm:mb-0 bg-gray-75 rounded-lg my-10 md:w-72 lg:my-5 lg:min-w-80 xl:w-96 2xl:w-110 3xl:mt-10">
                        <img
                            src={item.imgSrc}
                            alt="maiven tests page image"
                            className="w-full rounded-tl-lg rounded-tr-lg"
                        />
                        <h3 className="text-2xl p-12 max-w-96 mx-auto md:max-w-72 md:p-8 xl:max-w-80 2xl:pr-10">
                            {item.caption}
                        </h3>
                    </div>
                );
            })}
        </>
    );
};

const UnbiasedCard = () => {
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
                            <img src={item.imgSrc2} alt="maiven tests mobile screen image" />
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

const ProductDesign = ({ screenSize }) => {
    return (
        <>
            <section className="flex items-end mb-8 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                {screenSize < 768 ? (
                    <span className="italic text-xl text-white bg-blue-850 py-2 px-8 tracking-normal w-36 font-serif">
                        Branding
                    </span>
                ) : (
                    <span className="italic text-xl text-white bg-blue-850 py-2 px-8 tracking-normal w-64 font-serif">
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

            <section className="w-full relative mt-8 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <img
                    className="absolute inset-0 bg-cover object-cover bg-center bg-grid w-screen -left-5 md:-left-16 h-full scale-100 lg:-left-20 lg:scale-x-150 lg:h-127 xl:-left-24 xl:h-131 3xl:h-159.5 3xl:-left-48"
                    src={BgGridImg}
                    alt="Background grid image"
                />

                <div className="flex flex-wrap mx-auto pt-24 pb-40 md:pt-10 md:w-full md:pb-24 md:gap-x-5 md:px-5 md:justify-center lg:justify-between lg:px-0">
                    <ProductCard />
                </div>
            </section>

            <section className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 mt-20">
                <UnbiasedCard />
            </section>

            <section className="relative">
                <img
                    className="absolute object-cover bg-contain bg-center xs:h-137 h-96 w-screen lg:h-110 -left-5 scale-x-150 -right-10 3xl:h-127"
                    src={BgGridImg}
                    alt="Background grid image"
                />

                <div className="inset-0 flex flex-col items-center justify-center px-4 py-20">
                    <div className="lg:flex lg:gap-x-10 xl:items-center">
                        <div>
                            <img src={DoubleQuoteImg} alt="double quote image" className="mb-5" />
                        </div>
                        <p className="text-2xl italic font-light mt-11 lg:mt-0 w-80 md:w-96 lg:w-137 xl:w-210 text-slate-925 opacity-60">
                            “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems. “
                        </p>
                    </div>

                    <div className="flex justify-around mt-10 gap-5 items-center w-96 lg:mt-16 xl:mt-24">
                        <div className="relative w-24 md:w-28 lg:w-28 xl:w-28 2xl:w-32 3xl:w-32 h-24 md:h-24 lg:h-28 3xl:h-32 mr-2 flex items-center">
                            <img src={EllipseImg} alt="ellipse-image" className="relative w-32"></img>
                            <img
                                src={ProfileImage}
                                alt="Profile-image"
                                className="absolute -right-8 md:-right-4 max-w-20"></img>
                        </div>
                        <div className="mt-2 3xl:mt-5 font-poppins">
                            <h2 className="text-lg lg:text-xl  text-left 3xl:text-2.5xl  text-slate-925 w-44 md:w-48 lg:w-52 xl:w-60 2xl:w-64 3xl:w-72 h-9 3xl:leading-normal font-medium">
                                Mrs. Regina Christy
                            </h2>
                            <p className="text-base text-slate-550 font-normal w-60">Chief Digital Officer Approlabs</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative overflow-hidden md:mt-10 2xl:mt-20 3xl:mt-36 mb-10">
                <img
                    src={DesktopMaivenTestImg}
                    alt="maiven home desktop image"
                    className="bg-center object-cover bg-cover scale-110 h-210 w-full md:scale-110 lg:h-131 xl:h-175 2xl:h-250 mt-32"
                />
            </div>

            <div className=" px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <SelectedProject />
            </div>
        </>
    );
};

ProductDesign.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default ProductDesign;
