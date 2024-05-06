import DoubleQuoteImg from '../../assets/images/double-quote.svg';
import EllipseImg from '../../assets/images/user-bg-img.png';
import ProfileImage from '../../assets/images/user-image.png';
import BgGridImg from '../../assets/images/bg-grid-lines.png';

const FounderSection = () => {
    return (
        <section className="relative">
            <img
                className="absolute bg-contain object-cover h-110 top-20 w-full bg-center xs:h-96 xs:my-10 scale-150 lg:h-80 lg:-right-32 lg:-left-40 3xl:h-110"
                src={BgGridImg}
                alt="background grid image"
            />

            <div className="inset-0 flex flex-col items-center justify-center px-4 py-20">
                <div className="lg:flex lg:mt-10 xl:mt-20 lg:gap-x-10 xl:items-center 3xl:mt-5">
                    <div>
                        <img src={DoubleQuoteImg} alt="double quote image" className="mb-5" />
                    </div>
                    <p className="text-2xl italic font-light mt-11 lg:mt-0 w-80 md:w-96 lg:w-137 xl:w-210 text-slate-925 opacity-60">
                        “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your business
                        scale through fail-proof design innovation systems. “
                    </p>
                </div>

                <div className="flex justify-around mt-10 gap-5 items-center w-96 lg:mt-16 xl:mt-24">
                    <div className="relative w-24 md:w-28 lg:w-28 xl:w-28 2xl:w-32 3xl:w-40 h-24 md:h-24 lg:h-28 3xl:h-32 mr-2 flex items-center">
                        <img src={EllipseImg} alt="ellipse-image" className="relative w-32 3xl:-left-6"></img>
                        <img
                            src={ProfileImage}
                            alt="Profile-image"
                            className="absolute -right-8 md:-right-4 w-20"></img>
                    </div>
                    <div className="mt-2 3xl:mt-5 font-poppins">
                        <h2 className="text-lg lg:text-xl text-left 3xl:text-2.5xl text-slate-925 w-44 md:w-48 lg:w-52 xl:w-60 2xl:w-64 3xl:w-72 h-9 3xl:leading-normal font-medium">
                            Mrs. Regina Christy
                        </h2>
                        <p className="text-base text-slate-550 font-normal w-60">Chief Digital Officer Approlabs</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderSection