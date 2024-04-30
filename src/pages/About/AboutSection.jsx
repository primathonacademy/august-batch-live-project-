import AboutImage from '../../assets/images/about-image.png';
function AboutSection() {
    return (
        <>
            <div className="pt-24  px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <div className="mb-6">
                    <span className="bg-blue-850 px-6 py-1.5 text-xl font-normal text-white italic "> About Us</span>
                </div>
                <h1 className="text-4.7xl leading-12 font-poppins font-medium mb-24 3xl:text-7.5xl 3xl:text-black 3xl:leading-19  ">
                    Stay ahead and stand apart with your extended innovation and design team.
                </h1>
                <p className="text-lg font-normal font-roboto text-slate-550 mb-24 xs:pr-20 3xl:text-2xl 3xl:text-black 3xl:pr-175">
                    High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust,
                    and higher media love.
                </p>

                <div>
                    <img
                        src={AboutImage}
                        alt="some peoples are doing meeting"
                        className="w-full  h-162.5 bg-transparent bg-no-repeat bg-padding-box bg-center bg-contain"
                    />
                </div>
            </div>
        </>
    );
}

export default AboutSection;
