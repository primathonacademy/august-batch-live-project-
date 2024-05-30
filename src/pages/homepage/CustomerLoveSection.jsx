import { useState } from 'react';
import GridImg from '../../assets/images/grid-line-image.svg';
import QuoteIcon from '../../assets/images/double-quote-image.svg';
import EllipseImg from '../../assets/images/ellipse-gradient-image.svg';
import ProfileIcon from '../../assets/images/profile-image.png';
import AbhinavkumarFounder from '../../assets/images/abhinav-kumar-founder.png';
import NabarunBhowmickFounder from '../../assets/images/nabarun-bhowmick-founder.png';
import PritamSahaFounder from '../../assets/images/pritam-saha-founder.png';
import LeftArrow from '../../assets/images/left-arrow-image.svg';
import RightArrow from '../../assets/images/right-arrow-image.svg';

const REVIEW_DATA = [
    {
        id: 1,
        image: ProfileIcon,
        name: 'Mr. Regina Christy',
        designation: 'Chief Digital Officer Approlabs',
        description:
            'Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems',
        alt_name: 'mrs regina christy'
    },
    {
        id: 2,
        image: AbhinavkumarFounder,
        name: 'Abhinav Kr.',
        designation: 'Chief Technology Officer Approlabs',
        description:
            'Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems',
        alt_name: 'abhinav kumar founder'
    },
    {
        id: 3,
        image: NabarunBhowmickFounder,
        name: 'Nabarun Bhowmick',
        designation: 'Chief Design Officer Approlabs',
        description:
            'Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems',
        alt_name: 'nabarun bhowmick founder'
    },
    {
        id: 4,
        image: PritamSahaFounder,
        name: 'Pritam Saha',
        designation: 'Chief Executive Officer Approlabs',
        description:
            'Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems',
        alt_name: 'pritam saha founder'
    }
];

const CustomerLoveCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEW_DATA.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + REVIEW_DATA.length) % REVIEW_DATA.length);
    };

    return (
        <>
            <div className="">
                <div className="lg:flex">
                    <div className="mt-10">
                        <img src={QuoteIcon} className="w-10 h-10 xl:w-16 xl:h-12" alt="quotes icon" />
                    </div>
                    <p className="text-slate-925 lg:mt-10 text-lg xs:text-2xl 2xl:text-3xl 3xl:text-4xl opacity-50 font-light italic font-roboto py-12 lg:pt-0 lg:px-10 xs:w-4/5 md:w-11/12 lg:w-5/6 xl:w-3/5 2xl:w-4/6 3xl:w-4/6">
                        {REVIEW_DATA[currentIndex].description}
                    </p>
                </div>
                <div className="flex items-center w-60 xs:w-96 lg:w-1/2 xl:w-2/5 3xl:w-1/3 lg:ml-20 xl:ml-20">
                    <img
                        src={EllipseImg}
                        className="relative w-20 h-20 xs:w-28 xs:h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-no-repeat bg-center bg-cover"
                        alt="blue colored gradient image"
                    />
                    <img
                        src={REVIEW_DATA[currentIndex].image}
                        alt={REVIEW_DATA[currentIndex].alt_name}
                        className="absolute rounded-full left-14 xs:left-16 lg:left-52 md:left-24 xl:left-40 3xl:left-60 xl:ml-20 w-14 h-14 xs:w-20 xs:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                    />
                    <div className="flex-1 pl-6 xs:pl-10 lg:pl-14 xl:pl-14">
                        <h6 className="text-sm xs:text-lg md:text-xl xl:text-2xl font-medium font-poppins lg:py-2 text-slate-925">
                            {REVIEW_DATA[currentIndex].name}
                        </h6>
                        <p className="text-slate-550 text-sm xs:text-base md:text-xl xl:text-2xl font-poppins">
                            {REVIEW_DATA[currentIndex].designation}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full">
                <div className="w-full h-0.5 bg-black opacity-5"></div>
                <div className="flex justify-end">
                    <button
                        disabled={currentIndex === 0 ? true : false}
                        className={currentIndex === 0 ? `mx-2 cursor-not-allowed` : `mx-2`}
                        onClick={prevSlide}>
                        <img
                            src={LeftArrow}
                            className="xs:w-10 xs:h-10 xl:w-16 xl:h-16 hover:scale-105"
                            alt="left-arrow-icon"
                        />
                    </button>
                    <button
                        disabled={currentIndex === REVIEW_DATA.length - 1 ? true : false}
                        className={currentIndex === REVIEW_DATA.length - 1 ? `cursor-not-allowed` : ``}
                        onClick={nextSlide}>
                        <img
                            src={RightArrow}
                            className="xs:w-10 xs:h-10 xl:w-16 xl:h-16 hover:scale-105"
                            alt="right-arrow-icon"
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

const CustomerLoveSection = () => {
    return (
        <div className="relative w-full gap-1 py-32 xs:gap-x-2.5 xs:gap-y-2 3xl:gap-3 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 bg-gray-400 bg-transparent">
            <div className="w-full">
                <img
                    src={GridImg}
                    className="absolute left-0 top-24 hidden md:block w-210 h-56 scale-x-150 scale-y-150 bg-cover bg-center xl:w-250"
                    alt="grid background image"
                />
                <div className="w-full text-blue-850 lg:text-white lg:w-fit lg:bg-blue-850 text-2xl 3xl:text-3xl xs:leading-7 font-medium font-serif italic lg:px-4 py-1 lg:mt-3">
                    Customer Love
                </div>
                <h3 className="text-4xl lg:text-4.7xl 2xl:text-5xl 3xl:text-5.7xl leading-10 xs:leading-10 sm:leading-11 lg:leading-12 2xl:leading-14 font-medium font-poppins xs:w-96 sm:w-full lg:w-4/5 xl:w-3/4 3xl:w-4/6 lg:py-5 mt-3 lg:mt-1 text-zinc-850">
                    Our customer brands see consistent return on design investment
                </h3>
            </div>
            <CustomerLoveCard />
        </div>
    );
};

export default CustomerLoveSection;
