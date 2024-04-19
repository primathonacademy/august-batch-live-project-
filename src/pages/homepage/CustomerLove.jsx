import gridImg from '../../assets/images/grid-img.svg';
import quoteIcon from '../../assets/images/double-quote-sans-left.svg';
import ellipseImg from '../../assets/images/ellipse-gradient.svg';
import profileIcon from '../../assets/images/profile-img.png';
import leftArrow from '../../assets/images/left-arrow.svg';
import rightArrow from '../../assets/images/right-arrow.svg';

const CustomerLoveCard = () => {
    return (
        <div className="flex flex-col pt-13 pb-15">
            <div className="lg:flex items-start">
                <div className="w-13 h-9.75 xl:w-16.25 xl:h-12.25">
                    <img src={quoteIcon} className="w-13 h-9.75 xl:w-16.25 xl:h-12.25" alt="quote-icon" />
                </div>
                <blockquote className="text-slate-925 text-lg xs:text-2xl 2xl:text-3xl 3xl:text-4xl opacity-60 font-light italic font-roboto py-12 lg:pt-0 lg:px-10 w-11/12 xs:w-4/5 md:w-11/12 lg:w-5/6 xl:w-4/6 2xl:w-4/6 3xl:w-4/6">
                    “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale
                    through fail-proof design innovation systems. “
                </blockquote>
            </div>
            <div className="flex items-center w-60 xs:w-87.5 lg:w-112.5 xl:w-143.75 lg:ml-20 xl:ml-20">
                <div
                    className="w-17.75 h-17.75 xs:w-24 xs:h-24 md:w-28.75 md:h-28.75 lg:w-31.25 lg:h-31.25 xl:w-39 xl:h-39 rounded-full bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: `url(${ellipseImg})` }}></div>
                <img
                    src={profileIcon}
                    alt="profile-image"
                    className="absolute left-14 xs:left-16 lg:left-52 md:left-28 xl:left-43 3xl:left-60 xl:ml-20 w-14 h-14 xs:w-17.75 xs:h-17.75 md:w-21.5 md:h-21.5 lg:w-24 lg:h-24 xl:w-28.75 xl:h-28.75"
                />
                <div className="flex-1 flex-col pl-8 xs:pl-10 lg:pl-14 xl:pl-14">
                    <h6 className="text-sm xs:text-lg md:text-xl xl:text-2xl font-medium font-poppins lg:py-2">
                        Mrs. Regina Christy
                    </h6>
                    <p className="text-slate-550 text-sm xs:text-base md:text-xl xl:text-2xl lg:leading-8.5 font-normal font-poppins">
                        Chief Digital Officer Approlabs
                    </p>
                </div>
            </div>
        </div>
    );
};

const CustomerLove = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-1 py-32 xs:gap-x-2.5 xs:gap-y-2 3xl:gap-3 px-5 md:px-14 lg:px-20 xl:px-25 2xl:px-28 3xl:px-45.5 bg-gray-400 bg-transparent">
            <div className="w-full">
                <div
                    className="absolute left-0 hidden 2xl:block w-3/4 h-51.5 scale-x-100 bg-cover bg-center"
                    style={{ backgroundImage: `url(${gridImg})` }}></div>
                <div className="w-full text-blue-850 lg:text-white lg:w-fit lg:bg-blue-850 text-xl xs:text-5.5 sm:text-5.5 md:text-2xl xl:text-6.5 3xl:text-7 xs:leading-7 font-medium font-serif italic lg:px-4 lg:my-4">
                    Customer Love
                </div>
                <h3 className="text-3xl xs:text-4xl sm:text-10.5 lg:text-10.5 2xl:text-5xl 3xl:text-14 leading-9 xs:leading-10.5 sm:leading-12 lg:leading-14 2xl:leading-14 3xl:leading-16 font-medium font-poppins lg:w-11/12 xl:w-3/4 3xl:w-7/10">
                    Our customer brands see consistent return on design investment
                </h3>
            </div>
            {/* Cards */}
            <CustomerLoveCard />
            <div className="flex items-center w-full">
                <div className="w-full h-0.5 bg-black opacity-6"></div>
                <div className="flex justify-end">
                    <a href="" className="mx-2 xs:w-12.75 xs:h-12.75 xl:w-16.25 xl:h-16.25">
                        <img src={leftArrow} className="xs:w-12.75 xs:h-12.75 xl:w-16.25 xl:h-16.25" alt="left-arrow" />
                    </a>
                    <a href="" className="xs:w-12.75 xs:h-12.75 xl:w-16.25 xl:h-16.25">
                        <img
                            src={rightArrow}
                            className="xs:w-12.75 xs:h-12.75 xl:w-16.25 xl:h-16.25"
                            alt="right-arrow"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CustomerLove;
