import brandimg from '../../assets/images/brandvalue.png';

function BrandSection() {
    return (
        <>
            <div className="">
                <div className=" max-w-[1320px] mx-auto text-left font-medium text-midnight-blue font-Poppins text-6xl py-24 pl-[36px]">
                    Give your brand the “Yume Labs Edge”
                </div>
                <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-[20px]">
                    <div className="text-gray-700 text-left pl-[32px] pr-[112px] font-Roboto font-normal opacity-100 py-12">
                        We innovate at the intersection of business, design, and engineering so your brand can deliver
                        on its unique promise.
                    </div>
                    <div className="text-gray-700 text-left pl-[32px] pr-[112px] font-Roboto font-normal opacity-100 py-12">
                        We invest in continuous R&D to bring you the latest and the best in Product Innovation, UX/UI
                        Design, and Industrial Design.
                    </div>
                    <div className="text-gray-700 text-left pl-[32px] pr-[112px] font-Roboto font-normal opacity-100 py-12">
                        We invest in continuous R&D to bring you the latest and the best in Product Innovation, UX/UI
                        Design, and Industrial Design.
                    </div>
                </div>

                <div className="py-24">
                    <div className=" max-w-[1320px] mx-auto text-left font-medium text-midnight-blue font-Poppins text-6xl pl-[32px] text-balance text-pretty">
                        Our Values
                    </div>
                    <div className=" max-w-[1320px] mx-auto text-gray-700 text-left pl-[32px] pr-[112px] font-Roboto font-normal opacity-100 py-10 pt-2">
                        Our values guide our choices and actions daily, built on the three pillars of:
                    </div>
                </div>
                <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-[20px]">
                    <div className="">
                        <h1 className="text-left font-medium text-midnight-blue font-Roboto text-6xl pl-[37px] pb-2">
                            %
                        </h1>
                        <h1 className="text-left font-medium text-midnight-blue font-Roboto text-3xl pl-[37px] ">
                            Excellence
                        </h1>
                        <p className="text-gray-700 text-left pl-[32px] pr-[112px] font-Roboto font-normal opacity-100 pt-2">
                            Choose to go beyond “enough” to deliver at the edge of what’s “possible”.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="text-left font-medium text-midnight-blue font-Roboto text-6xl pl-[37px] pb-2">
                            %
                        </h1>
                        <h1 className="text-left font-medium text-midnight-blue font-Roboto text-3xl pl-[37px] ">
                            Simplification
                        </h1>
                        <p className="text-gray-700 text-left pl-[32px] pr-[112px] font-Roboto font-normal opacity-100 pt-2">
                            Embrace first-principles thinking to reduce non-essential complexity.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="text-left font-medium text-midnight-blue font-Roboto text-6xl pl-[37px] pb-5">
                            %
                        </h1>
                        <h1 className="text-left font-medium text-midnight-blue font-Roboto text-3xl pl-[37px] ">
                            Co-creation{' '}
                        </h1>
                        <p className="text-gray-700 text-left pl-[32px] pr-[112px] font-Roboto font-normal opacity-100 pt-2">
                            Create together through diligence, communication, and transparency.
                        </p>
                    </div>
                </div>
                <div className="py-16">
                    {/* <img class="mx-auto" src="./Mask Group 4088.png" alt=""> */}
                    <img className="w-full " src={brandimg} alt="" />
                </div>
            </div>
        </>
    );
}

export default BrandSection;
