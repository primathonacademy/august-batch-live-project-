import GridImg from '../../assets/images/bg-grid-lines.svg';
import CardImage from '../../assets/images/card-image.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

const carouselItems = [
    {
        image: CardImage,
        title: 'Deeper Insight',
        description:
            'Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems.',
        alt: 'deeper insight card image'
    },
    {
        image: CardImage,
        title: 'Pioneering Innovation',
        description:
            'Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems.',
        alt: 'pioneering innovation card image'
    },
    {
        image: CardImage,
        title: 'Compelling Design',
        description:
            'Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems.',
        alt: 'compelling design card image'
    }
];

OurServicesCard.propTypes = {
    title: PropTypes.any,
    description: PropTypes.any,
    image: PropTypes.any,
    alt: PropTypes.any
};

function OurServicesCard(props) {
    return (
        <div className="lg:flex justify-center px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
            <div className="lg:flex rounded-lg xs:py-20 p-5 bg-white lg:flex-row-reverse md:justify-around items-end mx-auto w-full h-full xs:w-96 md:w-110 lg:w-full">
                <img src={props.image} alt={props.alt} className="lg:w-96 lg:h-96 2xl:w-127 2xl:h-127" />
                <div className="xl:w-2/5 2xl:w-1/3">
                    <h3 className="text-slate-925 font-poppins font-medium text-2.5xl lg:text-4xl pt-10 xs:w-full lg:w-1/2 mb-5 md:mb-0">
                        {props.title}
                    </h3>
                    <p className="text-lg lg:text-2xl text-left font-normal font-roboto text-slate-550 pt-3 xs:w-full lg:w-4/5 xl:w-full opacity-80">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function Ourservices({ screenSize }) {
    return (
        <div className="w-full flex justify-center items-center gap-1 xs:gap-x-2.5 xs:gap-y-2 3xl:gap-3 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 xs:pb-23 relative mb-10">
            <img
                src={GridImg}
                className="absolute -left-24 top-0 scale-150 w-full h-72 bg-center object-cover xs:h-80 sm:h-60 sm:-top-5"
                alt="grid background image"
            />
            <div className="xs:pt-25 py-5">
                <div className="text-xl italic font-normal w-fit px-4 py-1 md:text-2xl 2xl:text-3xl font-serif text-white bg-blue-850">
                    {screenSize < 1024 ? 'Our Approach' : 'Our Services'}
                </div>
                <div className="xs:text-4xl text-2xl py-5 font-poppins font-medium text-zinc-850 xs:w-11/12 xs:py-4 lg:w-4/5 lg:leading-11 xl:w-2/3 2xl:w-3/5">
                    High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust,
                    and higher media love.
                </div>
            </div>
        </div>
    );
}

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="bg-gray-75 py-20">
            <Ourservices />
            <Slider {...settings} className="md:mt-20">
                {carouselItems.map((item, index) => {
                    return (
                        <OurServicesCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            alt={item.alt}
                        />
                    );
                })}
            </Slider>
        </div>
    );
}

Ourservices.propTypes = {
    screenSize: PropTypes.number.isRequired
};
