import GridLineImg from '../../assets/images/bg-grid-lines.png';
import MeetingImgOne from '../../assets/images/group-meeting-two.png';
import MeetingImgTwo from '../../assets/images/group-meeting-three.png';
import MeetingImgThree from '../../assets/images/group-meeting-one.png';
import MeetingImgFour from '../../assets/images/group-meeting-four.png';
import { PARTNERS_DATA } from '../../constants/about-page';

const PartnerCard = () => {
    return (
        <>
            {PARTNERS_DATA.map((item, i) => {
                return (
                    <div
                        key={`index-${i}`}
                        className="w-full rounded-lg bg-gray-75 backdrop-blur-2xl md:mt-14 lg:mt-28 xl:mt-32 mt-20 2xl:">
                        <img
                            src={item.imgSrc}
                            alt="rectangle image"
                            className="w-full lg:w-80 xl:w-full rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="p-10 3xl:w-106.7 bg-white rounded-lg backdrop-blur-2xl">
                            <h3 className="text-2xl font-medium">{item.heading}</h3>
                            <p className="text-xl text-slate-550 mt-2">{item.discription}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

const PartnerSection = () => {
    return (
        <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 mb-52">
            <h1 className="text-4.7xl font-poppins font-medium w-80 leading-12">Partners at Yume Labs</h1>

            <section className="w-full relative mt-12 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <img
                    className="absolute inset-0 bg-cover object-cover bg-center w-screen -left-5 h-270 top-80 scale-150 xs:h-330 sm:h-389 sm:mt-20 md:h-110 md:scale-150 md:-left-16 md:top-3 lg:top-10 lg:h-96 xl:-left-24 xl:h-110 2xl:h-127 3xl:-left-48"
                    src={GridLineImg}
                    alt="background grid image"
                />

                <div className="flex flex-wrap justify-center gap-3 md:grid md:grid-cols-3 md:gap-x-5 w-full">
                    <PartnerCard />
                </div>
            </section>

            <div className="mt-56 grid gap-y-3 mx-auto md:grid-cols-3 md:gap-x-3 md:mt-52 xl:mt-52">
                <img
                    src={MeetingImgOne}
                    alt="two boys and two girls standing with card boards"
                    className="w-full h-116.25 sm:h-137 object-cover bg-center bg-cover md:order-1 xl:h-fit xl:object-contain"
                />

                <img
                    src={MeetingImgTwo}
                    alt="some guys sitting on tables and discussing"
                    className="w-full h-116.25 sm:h-137 object-cover md:col-span-2 md:order-3 xl:h-fit xl:object-contain"
                />

                <img
                    src={MeetingImgThree}
                    alt="some girls and boys something watching in laptop"
                    className="w-full h-116.25 sm:h-137 object-cover md:order-2 md:col-span-2 xl:h-fit xl:object-contain"
                />

                <img
                    src={MeetingImgFour}
                    alt="some people taking an meeting"
                    className="w-full h-116.25 sm:h-137 object-cover bg-center bg-cover md:order-4 xl:h-fit xl:object-contain"
                />
            </div>
        </div>
    );
};

export default PartnerSection;
