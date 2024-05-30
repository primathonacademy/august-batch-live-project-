import GridImage from '../../assets/images/grid-image.svg';
import PropTypes from 'prop-types';

function OurServicePosterSection({ screenSize }) {
    return (
        <div className="relative px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 w-full py-5">
            <img
                src={GridImage}
                alt="background grid image"
                className="absolute left-28 h-96 w-full lg:w-3/5 scale-150 bg-cover bg-center object-cover xs:h-127 xs:top-0 xs:left-36 sm:left-44"
            />
            <div className="mt-20 xs:mt-16 sm:mb-20">
                <div
                    className="bg-blue-850 text-white leading-4 px-5 py-1 text-center xs:leading-7 sm:leading-5 text-xl md:text-2xl md:leading-5 md:mt-20 xl:text-3xl lg:leading-7 xl:leading-7
     xl:text-2.5xl 2xl:leading-10 3xl:leading-10 font-serif italic font-normal w-fit">
                    Our services
                </div>
                <h2 className="w-4/6 text-4xl font-medium py-10 xs:text-4.7xl xs:leading-13 xs:py-4 xs:w-7/10 sm:text-5.5xl sm:w-1/2 md:w-1/3 md:mt-4 lg:mt-1 lg:text-6xl lg:leading-16 lg:w-1/3 lg:py-4 xl:text-7xl xl:leading-18 xl:py-4 2xl:text-7.7xl 2xl:leading-24 2xl:py-7 3xl:leading-24 3xl:py-10">
                    Simplifying the Next.
                </h2>
                {screenSize < 768 ? (
                    <p className="text-slate-550 pr-10 w-full text-left text-sm leading-5 xs:text-lg xs:leading-6 xs:pr-24 sm:leading-6 sm:w-4/6 md:text-xl  md:leading-6 font-roboto font-normal">
                        High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                        trust, and higher media love.
                    </p>
                ) : (
                    <p className="md:leading-6 lg:leading-6 lg:m-2 md:mt-5 text-2xl xl:leading-7 md:pr-40 2xl:leading-7 2xl:w-4/6 3xl:leading-8 3xl:w-3/5 text-slate-550 font-roboto font-normal">
                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your <br /> business
                        scale through fail-proof design innovation systems.
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
