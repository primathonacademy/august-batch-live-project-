import HomePagePoster from '../../assets/images/homepage-poster.png'
import HomePoster from '../../assets/images/home-poster.png';
import GridImg from '../../assets/images/grid-image.jpg';



const Postersection = ({ screenSize }) => {
    return (
        <div className="w-full flex flex-col px-5 md:px-14 lg:px-20 xl:px-6 2xl:px-28 3xl:px-11 pb-5">
            <div className="flex flex-col lg:flex-row lg:items-start xs:pt-3.5 md:pt-4 xs:pb-3.5 md:pb-1.5 3xl:pt-2.5">
                <div
                    className="absolute left-0 top-0 w-full h-31.25 bg-center bg-cover"
                    style={{ backgroundImage:`url(${GridImg})`}}></div>
                <div className="w-full xs:pt-5 xs:pb-4 3xl:py-0">
                    <h3 className="xs:w-3/5 md:w-1/2 3xl:w-full text-4xl xs:text-3 lg:w-full lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-5 sm:text-5xl leading-2.75 xs:leading-3.5 sm:leading-2.5 3xl:leading-6 font-medium font-poppins">
                        Simplifying the Next.
                    </h3>
                    <div className="px-2 py-1 my-4 xs:my-4 sm:my-2 lg:my-5 3xl:my-10 3xl:px-5 xs:text-1.25 3xl:text-4xl xs:leading-1.75 3xl:leading-10 text-white bg-blue-700 w-fit font-serif text-center font-normal italic">
                        for Dreamers who do.
                    </div>
                </div>
                <p className="xs:pb-3.5 3xl:pb-0 lg:pt-6 3xl:pt-4 xs:w-3/4 3xl:w-1/2  3xl:pl-10 xs:text-lg lg:text-sm xl:text-xl 3xl:text-2xl leading-1.5 3xl:leading-7 font-roboto text-blue-900 flex flex-col text-left">
                    High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust,
                    and higher media love.
                </p>
            </div>
            {screenSize < 640 ? (
                <div className="relative p-0.625">
                    <img className="w-full xs:h-39.875" src={HomePagePoster} alt="Home Page Image" />
                    <div className=" sm:top-2/3 w-1/2 top-3/4 left-1/4 absolute text-left text-3xl xs:text-3 xs:leading-3 text-white font-serif italic ">
                        Dreams Delivered
                    </div>
                </div>
            ) : (
                <div className="relative">
                    <img
                        className="border outline-none border-none rounded-lg w-full md:h-screen 3xl:h-40vh"
                        height={639}
                        src={HomePoster}
                        alt=""
                    />
                    <div className=" sm:top-6/10 w-1/6 top-3/4 3xl:top-2/3 left-1/4 absolute text-left text-5xl lg:w-1/4 3xl:w-5 3xl:text-80 3xl:leading-96 text-white font-serif italic ">
                        Dreams Delivered
                    </div>
                </div>
            )}
        </div>
    );
};

export default Postersection;
