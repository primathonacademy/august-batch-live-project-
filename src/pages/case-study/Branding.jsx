import OptionForm from '../../assets/images/option-form.png';
import CaseStudy from '../../assets/images/case-study.png';
import ColorPaletteLg from '../../assets/images/color-palette-lg.png';
import ColorPaletteSm from '../../assets/images/color-palette-sm.png';
import ContactLab from '../../assets/images/contact-labs.png';

const Branding = () => {
    return (
        <section className="px-5 md:px-14 3xl:px-45.5 lg:px-20 xl:px-28 2xl:px-36 font-roboto mx-auto my-20">
            <h1 className="font-serif italic text-lg md:text-3xl bg-blue-850 px-4 text-white md:px-8 inline">
                Branding
            </h1>
            <div className="border-b-2 border-gray-200"></div>
            <div className="pt-2 md:pt-24 md:gap-10 gap-2 md:flex">
                <div className="md:w-1/3">
                    <h2 className="text-2.5xl md:text-4xl font-poppins font-medium w-45.5">Typography &amp; Color</h2>
                </div>
                <div className="md:w-2/3 text-gray-600">
                    <p className="pr-20">
                        The color palette artfully blends shades of blue, violet, and green, evoking a harmonious and
                        visually engaging experience. This palette conveys a sense of trustworthiness, innovation, and
                        tranquility. Moving to typography, the deliberate selection of Work Sans lends a balanced and
                        sophisticated touch to the design.
                    </p>
                    <div className="md:py-16 py-8">
                        <div className="gap-2 font-medium text-white text-base">
                            <img src={ColorPaletteLg} alt="Color Palette" className="hidden lg:block" />
                            <img src={ColorPaletteSm} alt="Color palette" className="lg:hidden" />
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

            <div className="p-5 lg:p-10 rounded-xl w-full bg-blue-200 mb-4 flex flex-col mx-auto">
                <div className="lg:grid lg:grid-cols-12 items-center bg-white rounded-3xl p-3 xl:p-5">
                    <div className="lg:col-span-8">
                        <img src={ContactLab} alt="" width={350} className="md:w-full lg:w-110 xl:w-137" />
                    </div>
                    <div className="lg:col-span-4 lg:-ml-20 lg:pr-20 lg:p-0 xl:-ml-40 xl:pr-60">
                        <form action="">
                            <p className="uppercase font-semibold lg:text-xl tracking-widest text-blue-850 mt-3">
                                Login
                            </p>
                            <p className="text-gray-425 my-2 lg:my-5">Please enter your details</p>
                            <div className="flex flex-col my-2 lg:my-5 gap-y-5">
                                <input type="email" name="email" placeholder="Email" className="border p-2 rounded" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="border p-2 rounded"
                                />
                                <p className="text-gray-425 text-sm">
                                    Forget Password&#63;
                                    <a href="#" className="text-blue-850 font-medium ml-1 uppercase">
                                        Reset
                                    </a>
                                </p>
                                <button type="submit" className="uppercase bg-blue-850 text-white p-3 rounded">
                                    Login
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center justify-center">
                            <div className="bg-gray-200 w-full h-[1px] mr-3" /> or
                            <div className="bg-gray-200 w-full h-[1px] ml-3" />
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center my-5 gap-x-2 lg:gap-x-10">
                                <a href="https://www.google.com">
                                    <img
                                        src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png"
                                        alt="google logo"
                                        width={35}
                                        className="border rounded-full p-1"
                                    />
                                </a>
                                <a href="https://www.facebook.com">
                                    <img
                                        src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png"
                                        alt="facebook logo"
                                        width={35}
                                        className="border rounded-full p-1"
                                    />
                                </a>
                                <a href="https://www.twitter.com">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg"
                                        alt="twitter logo"
                                        width={35}
                                        className="border rounded-full p-1"
                                    />
                                </a>
                            </div>
                            <p className="text-gray-425 text-sm">
                                Don&#39;t have an account&#63;
                                <a href="#" className="uppercase text-blue-850 font-medium ml-1">
                                    SIGN UP
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:flex gap-4 w-full h-full">
                <div className="bg-gradient-to-r from-purple-200 to-blue-200">
                    <img src={CaseStudy} alt="Case Study Work" className="object-contain" />
                </div>
                <div>
                    <img src={OptionForm} alt="Option Form" />
                </div>
            </div>
        </section>
    );
};

export default Branding;
