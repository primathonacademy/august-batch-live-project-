import BrandImg from '../../assets/images/brandvalue.png';
function BrandSection() {
    return (
        <div>
            <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
                <div className="max-w-344.5 text-left font-medium text-midnight-blue font-Poppins text-4xl lg:text-5.7xl lg:leading-15 py-24 sm:w-4/5 md:w-3/4 2xl:w-3/5">
                    Give your brand the “Yume Labs Edge”
                </div>
                <div className="grid lg:grid-cols-3 gap-20">
                    <p className="text-slate-925 w-72 text-left font-Roboto font-normal opacity-100 lg:py-12">
                        <b>We innovate</b> at the intersection of business, design, and engineering so your brand can
                        deliver on its unique promise.
                    </p>
                    <p className="text-slate-925 w-72 text-left font-Roboto font-normal opacity-100 lg:py-12">
                        <b>We invest</b> in continuous R&D to bring you the latest and the best in Product Innovation,
                        UX/UI Design, and Industrial Design.
                    </p>
                    <p className="text-slate-925 w-72 text-left font-Roboto font-normal opacity-100 lg:py-12">
                        <b>We proactively</b> manage delivery risk through a structured project management process to
                        ensure you stay within time and budget.
                    </p>
                </div>
                <div className="py-24">
                    <div className="max-w-344.5 text-left font-medium text-midnight-blue font-Poppins text-4xl w-20 lg:w-full lg:text-5xl">
                        Our Values
                    </div>
                    <div className="max-w-344.5 w-2/3 sm:w-2/5 lg:w-1/4 text-slate-925 text-left font-Roboto font-normal opacity-100 py-10 pt-2">
                        Our values guide our choices and actions daily, built on the three pillars of:
                    </div>
                </div>
                <div className="max-w-344.5 grid lg:grid-cols-3 gap-10">
                    <div className="py-2 lg:pr-10 w-72">
                        <h3 className="text-left font-light text-midnight-blue font-Roboto text-8xl pb-2">%</h3>
                        <h4 className="text-left font-medium text-midnight-blue font-Roboto text-2xl ">Excellence</h4>
                        <p className="text-slate-925 text-left font-Roboto font-normal opacity-100 pt-2">
                            Choose to go beyond “enough” to deliver at the edge of what’s “possible”.
                        </p>
                    </div>
                    <div className="py-2 lg:px-10 w-72">
                        <h3 className="text-left font-light text-midnight-blue font-Roboto text-8xl pb-2">%</h3>
                        <h4 className="text-left font-medium text-midnight-blue font-Roboto text-2xl ">
                            Simplification
                        </h4>
                        <p className="text-slate-925 text-left font-Roboto font-normal opacity-100 pt-2">
                            Simplification Embrace first-principles thinking to reduce non-essential complexity.
                        </p>
                    </div>
                    <div className="py-2 lg:pl-10 w-72">
                        <h3 className="text-left font-light text-midnight-blue font-Roboto text-8xl pb-2">%</h3>
                        <h4 className="text-left font-medium text-midnight-blue font-Roboto text-2xl ">Co-creation</h4>
                        <p className="text-slate-925 text-left font-Roboto font-normal opacity-100 pt-2">
                            Co-creation Create together through diligence, communication, and transparency.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-20">
                <img className="w-full " src={BrandImg} alt="team standup call img" />
            </div>
        </div>
    );
}

export default BrandSection;
