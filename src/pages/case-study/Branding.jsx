import LoginImg from '../../assets/images/login.png';
import OptionForm from '../../assets/images/option-form.png';
import CaseStudy from '../../assets/images/case-study.png';
import ColorPaletteLg from '../../assets/images/color-palette-lg.png';
import ColorPaletteSm from '../../assets/images/color-palette-sm.png';

const Branding = () => {
    return (
        <section className="px-5 md:px-14 3xl:px-45.5 lg:px-20 xl:px-28 2xl:px-36 text-gray-600 font-roboto">
            <h1 className="font-serif italic text-lg md:text-3xl bg-blue-800 px-4 text-white md:px-8 inline">
                Branding
            </h1>
            <div className="border-b-2 border-gray-200 -mt-1"></div>
            <div className="pt-2 md:pt-24 md:gap-10 gap-2 md:flex">
                <div className="md:w-1/3">
                    <h2 className="text-2.5xl md:text-4xl font-poppins font-medium w-45.5">Typography & Color</h2>
                </div>
                <div className="md:w-2/3 ">
                    <p className="pr-20">
                        The color palette artfully blends shades of blue, violet, and green, evoking a harmonious and
                        visually engaging experience. This palette conveys a sense of trustworthiness, innovation, and
                        tranquility. Moving to typography, the deliberate selection of Work Sans lends a balanced and
                        sophisticated touch to the design.
                    </p>
                    <div className="md:py-16 py-8">
                        <div className="gap-2 font-medium text-white text-base">
                            <img src={ColorPaletteLg} alt="Color-Palette-Lg" className="hidden lg:block" />
                            <img src={ColorPaletteSm} alt="Color-palette-Sm" className="lg:hidden" />
                        </div>
                    </div>
                    <div className="md:flex mt-12">
                        <div className="md:w-2/4">
                            <h2 className="leading-10">
                                <span className="text-7.5xl">Aa</span>

                                <span className="text-4.5xl">
                                    <br />
                                    Work Sans
                                </span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 md:w-3/4">
                            <div className="flex gap-3 md:flex-col mt-12">
                                <p>60 pt</p>
                                <p>Work Sans Regular</p>
                            </div>
                            <div>
                                <h2 className="text-4.5xl font-bold">Heading 1</h2>
                            </div>

                            <div className="flex gap-3 md:flex-col mt-10 md:mt-0">
                                <p>42 pt</p>
                                <p className="">Work Sans Regular</p>
                            </div>
                            <div>
                                <h2 className="text-3xl">Heading 2</h2>
                            </div>

                            <div className="flex gap-3 md:flex-col mt-10 md:mt-0">
                                <p>36 pt</p>
                                <p>Work Sans bold</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Heading 3</h3>
                            </div>

                            <div className="flex gap-3 md:flex-col mt-10 md:mt-0">
                                <p>21 pt</p>
                                <p className="">Work Sans Regular</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-500">Heading 4</h4>
                            </div>

                            <div className="flex gap-3 md:flex-col mt-10 md:mt-0">
                                <p>14 pt</p>
                                <p className="">Work Sans Regular</p>
                            </div>
                            <div>
                                <p className="pr-20 md:pr-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis libero eu
                                    accumsan fringilla.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 pr-20">
                        <p>
                            During the design evolution, a concerted effort was made to synchronize all design elements
                            with the carefully chosen color palette. This cohesion was extended to the realm of
                            illustration, where a minimalist approach was adopted. Solid colors were employed, resulting
                            in clean and straightforward illustrations that effortlessly blend with the overall
                            aesthetic. These uncomplicated visuals not
                        </p>

                        <p className="pt-10">
                            only maintain a visual consistency but also facilitate clear communication of complex
                            concepts, aligning with the goal of simplicity in the face of extensive data. Furthermore,
                            the decision to integrate standard Google Material icons for the iconography amplifies user
                            familiarity and ease of understanding. The overarching aim of keeping elements simple aligns
                            seamlessly with the complex nature of data analysis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-28">
                <img src={LoginImg} className="w-full mb-4 h-96 -mt-16 md:h-full" />
                <div className="md:flex gap-4  w-full h-full">
                    <div className="bg-gradient-to-r from-purple-200 to-blue-200">
                        <img src={CaseStudy} alt="Case-Study-Work" className="object-contain" />
                    </div>
                    <div>
                        <img src={OptionForm} alt="Option-Form" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branding;
