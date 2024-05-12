import PropTypes from 'prop-types';
import AboutImage from '../../assets/images/about-image.png';
import BgGridLine from '../../assets/images/grid-image.svg';

function AboutSection({ screenSize }) {
    return (
        <section className="w-full px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
            <div className="relative w-389 h-40 scale-150">
                <img
                    className="absolute inset-0 bg-cover object-cover bg-center -top-14 left-16"
                    src={BgGridLine}
                    alt="background grid line"
                />
            </div>

            <div className="pt-24 pb-12 absolute top-16 2xl:top-20 w-full">
                <h4 className="w-36 md:w-40 md:mt-4 lg:w-45.5 xl:w-48 2xl:w-52 bg-blue-700 text-white py-2 text-center font-serif italic text-xl lg:text-2xl 2xl:text-3xl">
                    {screenSize < 768 ? 'Our Services' : 'About us'}
                </h4>
                <h3 className="font-poppins font-normal leading-13 text-5xl mt-3 sm:mt-5 sm:w-3/4 2xl:text-7.5xl 2xl:leading-18 w-full">
                    {screenSize < 768
                        ? 'Feet at home among brave dreamers and curious rebels.'
                        : 'Stay ahead and stand apart with your extended innovation and design team.'}
                </h3>
                <p className="text-lg text-slate-550 w-96 sm:w-110 md:w-3/4 xl:text-xl 2xl:text-2xl mt-10 pr-20 md:pr-40 lg:pr-60 xl:pr-80 2xl:pr-96 3xl:pr-131">
                    {screenSize < 768
                        ? 'High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love.'
                        : 'We are a small founder-led team passionate about co-creating a regenerative and sustainable future that delivers long-term prosperity to brands, users, and investors.'}
                </p>
            </div>

            <div className="mt-110 w-full rounded-lg lg:h-137 md:py-0 xl:h-175">
                <img
                    src={AboutImage}
                    alt="some peoples are doing group meeting"
                    className="w-full bg-cover bg-center object-cover rounded-lg h-full"
                />
            </div>
        </section>
    );
}

AboutSection.propTypes = {
    screenSize: PropTypes.number.isRequired
};

export default AboutSection;
