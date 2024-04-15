import gridImage from '../assets/images/grid-image.svg';
import PropTypes from 'prop-types';

function OurServicePosterSection({ screenSize }) {
    return (
        <div className="px-5 md:px-14 lg:px-20 xl:px-25 2xl:px-30 3xl:px-45.5 w-full">
            <div
                className="absolute left-0 top-2.5 image bg-cover bg-center bg-no-repeat object-cover w-full h-100 scale-x-100 scale-y-100 md:w-1/2 lg:w-1/2 2xl:w-1/2 3xl:w-1/2 3xl:opacity-100"
                style={{ backgroundImage: `url(${gridImage})` }}></div>

            <div className=" text-div  flex flex-col item-center justify-center mt-25.25 ">
                <div
                    className="bg-#253F9C text-white text-3.75 leading-4 px-2 py-1 text-center xs:text-5 xs:leading-7 xs:py-1 xs:px-2 sm:leading-5 sm:text-6.25 sm:px-5 md:text-xl md:leading-5  lg:text-7 lg:leading-7 xl:leading-7
     xl:text-7 2xl:text-7 2xl:leading-9.5 3xl:text-7 3xl:leading-9.5 font-serif italic font-normal w-fit">
                    Our services
                </div>

                <h2 className="w-8/10 text-8.75 py-2 leading-10 xs:text-11.5 xs:leading-13 xs:py-4 xs:w-7/10 sm:text-12.5 sm:w-5/10 md:text-10 md:leading-11.25 md:w-1/4 lg:text-15 lg:leading-15.25 lg:w-3/10 lg:py-4 xl:text-17.5 xl:leading-20 xl:py-4 2xl:text-21.25 2xl:leading-24 2xl:py-4 3xl:text-21.25 3xl:leading-24 3xl:py-4">
                    Simplifying the Next.
                </h2>

                {screenSize < 768 ? (
                    <p className="text-#696969 pr-10 w-full text-left text-3.25 leading-5 xs:text-4.5 xs:leading-5.5 xs:pr-25 sm:text-4.5 sm:leading-5.75 sm:w-7/10 md:text-5 md:leading-6 lg:text-5.25 lg:leading-6.5 lg:m-2 xl:text-5.75 xl:leading-7 2xl:text-6 2xl:leading-7.25 3xl:text-6 3xl:leading-7.25 font-roboto font-normal">
                        High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                        trust, and higher media love.
                    </p>
                ) : (
                    <p className="text-3.25 leading-5 xs:text-4.5 xs:leading-5.5 sm:text-4.5 sm:leading-5.75 sm:w-8/10 md:text-5 md:leading-6 lg:text-5.25 lg:leading-6.5 lg:m-2 xl:text-5.75 xl:leading-7 2xl:text-6 2xl:leading-7.5 2xl:w-13/20 3xl:text-6 3xl:leading-7.25 3xl:w-6/10 text-#696969 font-roboto font-normal">
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
