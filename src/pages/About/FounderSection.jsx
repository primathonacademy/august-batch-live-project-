import AbhinavkumarFounder from '../../assets/images/abhinav-kumar-founder.png';
import LinkedInIcon from '../../assets/images/linkedin-img.svg';
import GridImg from '../../assets/images/grid-image.svg';

const FounderSection = () => {
    return (
        <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 py-24">
            <h3 className="text-4xl xl:text-5xl xl:leading-12 text-left font-medium font-poppins w-60 md:w-80">
                Founders at Yume Labs
            </h3>
            <div className="relative">
                <img
                    className="absolute lg:w-full lg:h-full lg:scale-x-150 lg:object-cover opacity-100"
                    src={GridImg}
                />
                <div className="lg:flex lg:flex-row lg:gap-16 xl:gap-20 items-center justify-center">
                    <div className="relative py-24 w-60 lg:w-80 mx-auto lg:mx-0">
                        <div className="group relative rounded-tl-lg rounded-tr-lg bg-gray-100 overflow-hidden">
                            <div className="px-8 py-16">
                                <img src={AbhinavkumarFounder} className="w-full h-full" alt="abhinav kumar founder" />
                            </div>
                            <p className="absolute inset-0 rounded-tl-lg rounded-tr-lg p-8 text-xs xl:text-base text-white bg-blue-850 opacity-80 group-hover:translate-y-0 translate-y-[100%] transition ease-in-out duration-300">
                                Abhinav leads Experience and Interaction Design for our clients. He is a serial
                                technology entrepreneur (ex-IndieBio and Google Accelerator cohorts) and a published
                                researcher and subject matter expert in Computational Neuroscience and Brain-Machine
                                Interfaces. He is an M.Des (Interaction Design) from IDC - IIT Bombay and B.Tech in
                                Mechanical Engineering from IIIT DM, Jabalpur.
                            </p>
                        </div>
                        <div className="p-5">
                            <div className="absolute right-5 bottom-48 xs:right-5 xs:bottom-52 w-10 h-10">
                                <img src={LinkedInIcon} className="" alt="linkedin icon" />
                            </div>
                            <div className="font-medium font-poppins xs:text-2xl w-20">Abhinav Kr.</div>
                            <p className="xs:text-lg text-slate-550 font-roboto">Chief Technology Officer</p>
                        </div>
                    </div>
                    <div className="relative w-60 lg:w-80 mx-auto lg:mx-0">
                        <div className="group relative rounded-tl-lg rounded-tr-lg bg-gray-100 overflow-hidden">
                            <div className="px-8 py-16">
                                <img src={AbhinavkumarFounder} alt="nabarun bhowmick founder" />
                            </div>
                            <p className="absolute inset-0 rounded-tl-lg rounded-tr-lg p-8 text-xs xl:text-base text-white bg-blue-850 opacity-80 group-hover:translate-y-0 translate-y-[100%] transition ease-in-out duration-300">
                                Nabarun leads Industrial and Marketing Design for our clients. He has worked extensively
                                with Exploration & Innovation teams in large Corporates in the Appliances and Healthcare
                                domains globally and has multiple patents and awards to his name. He is an M.Des
                                (Industrial Design) from IDC - IIT Bombay and B.E. in Electronics and Telecommunications
                                from IIEST, Shibpur.
                            </p>
                        </div>
                        <div className="p-5">
                            <div className="absolute right-5 bottom-24 xs:right-5 xs:bottom-28 lg:right-5 lg:bottom-30 w-10 h-10">
                                <img src={LinkedInIcon} alt="linkedin icon" />
                            </div>
                            <div className="font-medium font-poppins xs:text-2xl w-20">Nabarun Bhowmick</div>
                            <p className="xs:text-lg text-slate-550 font-roboto">Chief Design Officer</p>
                        </div>
                    </div>
                    <div className="relative py-24 w-60 lg:w-80 mx-auto lg:mx-0">
                        <div className="group relative rounded-tl-lg rounded-tr-lg bg-gray-100 overflow-hidden">
                            <div className="px-8 py-16">
                                <img src={AbhinavkumarFounder} alt="pritam saha founder" />
                            </div>
                            <p className="absolute inset-0 rounded-tl-lg rounded-tr-lg p-8 text-xs xl:text-base text-white bg-blue-850 opacity-80 group-hover:translate-y-0 translate-y-[100%] transition ease-in-out duration-300">
                                Pritam leads Marketing and Go-to-Market with a consultative approach to the business
                                aspects of Experience Design. He brings extensive experience in B2B Technology Sales &
                                Marketing, Corporate Development, Strategy, and Consulting in multiple industries
                                globally. He is an MBA from IIM Bangalore and B.E. in Electronics and Telecommunications
                                from IIEST, Shibpur.
                            </p>
                        </div>
                        <div className="p-5">
                            <div className="absolute right-5 bottom-48 xs:right-5 xs:bottom-52 w-10 h-10">
                                <img src={LinkedInIcon} className="" alt="linkedin icon" />
                            </div>
                            <div className="font-medium font-poppins xs:text-2xl w-20">Pritam Saha</div>
                            <p className="xs:text-lg text-slate-550 font-roboto">Chief Executive Officer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FounderSection;
