import GridLineImg from '../../assets/images/bg-grid-lines.png';
import GroupMeetngImgOne from '../../assets/images/group-meeting-two.png';
import GroupMeetngImgTwo from '../../assets/images/group-meeting-three.png';
import GroupMeetngImgThree from '../../assets/images/group-meeting-one.png';
import GroupMeetngImgFour from '../../assets/images/group-meeting-four.png';
import { PARTNERS_DATA } from '../../constants/about-page';

const PartnerCard = () => {
    return (
        <>
            {PARTNERS_DATA.map((item, i) => {
                return (
                    <div key={`index-${i}`} className="w-full my-5 md:w-64 xl:w-80 xl:max-w-110 3xl:w-110">
                        <img src={item.imgSrc} alt="rectangle image" className="w-full" />
                        <div className="p-10  3xl:w-106.7 bg-white rounded-lg brightness-100 backdrop-blur-2xl opacity-75">
                            <h3 className="text-2xl">{item.heading}</h3>
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
        <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
            <h1 className="text-4.7xl font-poppins font-medium w-80 leading-12">Partners at Yume Labs</h1>

            <section className="w-full relative mt-8 px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <img
                    className="absolute inset-0 bg-cover object-cover bg-center w-screen -left-5 md:-left-16 h-270 top-80 scale-150 md:h-175 md:top-40 lg:top-20 lg:h-96 xl:-left-24 xl:h- 3xl:h-110 3xl:-left-48"
                    src={GridLineImg}
                    alt="Background grid image"
                />

                <div className="flex flex-wrap mx-auto justify-center items-center pt-24 pb-40 md:pt-10 md:w-full md:pb-24 md:gap-x-5 md:px-5 md:justify-center lg:px-0 lg:w-full">
                    <PartnerCard />
                </div>
            </section>

            <div className="mt-5 grid gap-y-3 mx-auto md:grid-cols-3 md:gap-x-3">
                <img
                    src={GroupMeetngImgOne}
                    alt="two boys and two girls standing with card boards"
                    className="w-full h-116.25 object-cover bg-center bg-cover md:order-1 xl:h-fit xl:object-contain"
                />

                <img
                    src={GroupMeetngImgTwo}
                    alt="some guys sitting on tables and discussing"
                    className="w-full h-116.25 object-cover md:col-span-2 md:order-3 xl:h-fit  xl:object-contain"
                />

                <img
                    src={GroupMeetngImgThree}
                    alt="some girls and boys something watching in laptop"
                    className="w-full h-116.25 object-cover md:order-2 md:col-span-2 xl:h-fit  xl:object-contain"
                />

                <img
                    src={GroupMeetngImgFour}
                    alt="some people taking an meeting"
                    className="w-full h-116.25 object-cover bg-center bg-cover  md:order-4 xl:h-fit  xl:object-contain"
                />
            </div>
        </div>
    );
};

export default PartnerSection;
