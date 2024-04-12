const ExploreInnovationSection= () => {
    return (
        <div className="grid gap-4  lg:grid-flow-col p-[37px]">
            <div className=" p-6 grid sm:col-span-2 ssm-[h-449px] ssm:col-span-2 lg:row-span-3 bg-gray-200 rounded-lg opacity-100 lg:w-[320px] lg:h-[771px] xl:w-[510px] 3xl:w-[500px]">
                <h1 className="font-normal text-medium text-[36px] xl:text-[56px] xl:leading-[53px]  leading-[43px] text-[#0B1226] opacity-100 pt-[47px] pb-[25px] 2xl:text-normal 2x:pt-[116px 40px] 2xl:px-[70px] 2xl:font-medium 2xl:text-[56px] 2xl:font-poppins 2xl:tracking-[0.4px] 2xl:text-[#272727] 2xl:opacity-100">
                    Innovation is the New Marketing.
                </h1>
                <p className="font-normal text-normal text-[20px] leading-[24px] text-gray-600 opacity-100 pt-5 pb-[65px] 2xl:px-[70px]  2xl:font-normal  2xl:text-[28px]  2xl:leading-[29px]  2xl:text-gray-600  2xl:opacity-100">
                    Translating user needs into actionable business objectives.
                </p>
                <div className="flex items-center pb-[35px] 2xl:pb-[100px]">
                    <h3 className="font-bold text-[14px] leading-[21px] tracking-[0.4px] text-[#253F9C] opacity-100 2xl:pl-[70px] 2xl:text-[20px] ">
                        ALL OUR SERVICES
                    </h3>
                    <span className="ml-2 2xl:ml-3">
                        <img src="/src/assets/images/errow.png" alt="icon" className="w-[42px] 2xl:w-[70px]" />
                    </span>
                </div>
            </div>

            <div>
                <img
                    src="/src/assets/images/img1.png"
                    alt="Image not available"
                    className="ssm:[w-173] ssm:h-[318px] lg:w-[305px] lg:h-[377px] sm:h-[300px]  xl:w-[510px] 3xl:w-[500px] object-cover"
                />
            </div>
            <div>
                <img
                    src="/src/assets/images/img2.png"
                    alt="Image not available"
                    className="ssm:[w-173] ssm:h-[318px] lg:w-[305px] lg:h-[377px] sm:h-[300px] xl:w-[510px] 3xl:w-[500px] object-cover"
                />
            </div>
            <div className=" grid sm:col-span-2 ssm:col-span-2  lg:row-span-3">
                <img
                    src="/src/assets/images/img3.png"
                    alt="Image not available"
                    className="ssm-[w-356] ssm-[h-304] lg:w-[300px] lg:h-[771px] sm:h-[700px] xl:w-[510px] 3xl:w-[500px] object-cover"
                />
            </div>
        </div>
    );
};
export default ExploreInnovationSection;
