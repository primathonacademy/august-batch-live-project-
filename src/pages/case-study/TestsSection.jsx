import MaivenChargingImg from '../../assets/images/maiven-charging-img.png';
import TestDesktopImg from '../../assets/images/test-desktop-design.png';
import ReportMobileImg from '../../assets/images/report-mobile-design.png';
import BoxDesignImg from '../../assets/images/box-design.png';
const TestsSection = () => {
    return (
        <div>
            <div className="mt-20">
                <img
                    className=" object-cover w-full h-175 scale-110 3xl:scale-y-110 bg-center bg-cover"
                    src={MaivenChargingImg}
                    alt="charging the future image"
                />
            </div>

            <div className="w-80 px-5 md:px-14 lg:px-20  xl:px-24 2xl:px-28 3xl:px-45.5 mt-28 lg:flex lg:w-full lg:justify-between ">
                <div className="font-poppins font-medium text-2.5xl lg:text-3xl 3xl:text-4xl leading-8">
                    <span className=" inline-block lg:w-40 3xl:w-80">Strategy & Implementing</span>
                    <p className=" lg:w-72 xl:w-64 2xl:w-72 3xl:w-80"> Design solutions.</p>
                </div>
                <div className=" ss:w-60 xs:w-72 mt-5 text-lg md:w-142.4 lg:text-xl xl:min-w-175 3xl:text-2xl 2xl:w-250 3xl:w-270 lg:mt-0">
                    <p>
                        The core AI feature will be meticulously honed to provide accurate and unbiased content
                        analysis, allowing businesses to gain valuable insights into consumer preferences. In parallel,
                        an array of user-centric enhancements will be integrated, including effective filtration options
                        for streamlined data analysis. A consolidated section will be devised to simplify user
                        interaction and exploration of the software’s various features, fostering an intuitive and
                        seamless experience.
                    </p>
                    <p className="my-5">
                        Additionally, fostering collaboration with clients, a feature to share campaign test links with
                        client contact lists will be introduced. Quality assurance will be upheld through an
                        intervention module that prompts users to maintain optimal recording conditions. Ensuring data
                        integrity, a facial recognition solution will be integrated to authenticate unique test
                        sessions, bolstering analysis accuracy and credibility.
                    </p>
                    <p>
                        Throughout these design implementations, utmost attention will be given to privacy, security,
                        and scalability considerations. By continually refining AI models and enhancing the user
                        interface based on user feedback and performance data, the platform will maintain its commitment
                        to delivering actionable insights while upholding ethical standards.
                    </p>
                </div>
            </div>

            <div className="mt-10 w-full grid gap-y-3 mb-16 lg:grid-cols-2 lg:gap-x-3 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <img src={TestDesktopImg} alt="maiven tests desktop screen image" className="rounded-lg w-full" />
                <img src={ReportMobileImg} alt="maiven tests mobile screen image" />
                <img
                    src={BoxDesignImg}
                    alt="image of two white boxes"
                    className=" ss:h-110 rounded-lg h-144.5 w-full lg:h-full lg:col-span-2 "
                />
            </div>
        </div>
    );
};

export default TestsSection;
