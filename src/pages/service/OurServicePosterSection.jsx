import GridImage from '../../assets/images/grid-image.svg';
import PropTypes from 'prop-types';

function OurServicePosterSection({ screenSize }) {
    return (
        <div className="relative px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 w-full">
            <img
                src={GridImage}
                alt="background grid image"
                className="absolute left-0 h-60 w-3/5 scale-150 bg-cover bg-center object-cover"
            />
            <div className="mt-24">
                <div
                    className="bg-blue-850 text-white text-base leading-4 px-2 py-1 text-center xs:text-xl xs:leading-7 xs:py-1 xs:px-2 sm:leading-5 sm:text-2xl sm:px-5 md:text-xl md:leading-5  lg:text-2.5xl lg:leading-7 xl:leading-7
     xl:text-2.5xl 2xl:leading-10 3xl:leading-10 font-serif italic font-normal w-fit">
                    Our services
                </div>
                <h2 className="w-4/6 text-4xl py-2 xs:text-4.7xl xs:leading-13 xs:py-4 xs:w-7/10 sm:text-5.5xl sm:w-1/2 md:w-1/3 lg:text-6xl lg:leading-14 lg:w-1/3 lg:py-4 xl:text-7xl xl:leading-20 xl:py-4 2xl:text-7.7xl 2xl:leading-24 2xl:py-4 3xl:leading-24 3xl:py-4">
                    Simplifying the Next.
                </h2>
                {screenSize < 768 ? (
                    <p className="text-slate-550 pr-10 w-full text-left text-sm leading-5 xs:text-lg xs:leading-6 xs:pr-24 sm:leading-6 sm:w-4/6 md:text-xl md:leading-6 font-roboto font-normal">
                        High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                        trust, and higher media love.
                    </p>
                ) : (
                    <p className="md:text-lg md:leading-6 lg:leading-6 lg:m-2 xl:text-2xl xl:leading-7 2xl:leading-7 2xl:w-4/6 3xl:leading-8 3xl:w-3/5 text-slate-550 font-roboto font-normal">
                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale
                        through fail-proof design innovation systems.
                    </p>
                )}
            </div>
        </div>
    );
}
OurServicePosterSection.propTypes = {
    screenSize: PropTypes.number.isRequired
};
export default OurServicePosterSection;
