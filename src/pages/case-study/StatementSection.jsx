import StatementPoster from '../../assets/images/statement-poster.png';

const StatementSection = () => {
    return (
        <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5">
            <img
                src={StatementPoster}
                className="w-full h-110 xs:h-137 sm:h-110 object-cover rounded-2xl my-4"
                alt="statement poster image"
            />
            <div className="">
                <div className="lg:flex justify-between items-center py-8">
                    <h3 className="text-slate-925 text-2.5xl lg:text-4xl leading-8 font-medium font-poppins w-40 py-4">
                        Problem Statement
                    </h3>
                    <p className="text-gray-475 xs:text-lg md:text-2xl leading-6 font-roboto xs:w-4/5 lg:w-4/6">
                        Developing a software solution that streamlines the content analysis process for businesses,
                        enabling accelerated innovation and iterative content refinement. The challenge lies in creating
                        a platform that effectively utilizes AI to swiftly analyze and interpret content, allowing
                        companies to gain valuable insights and thereby enhancing the content creation and iteration
                        workflow.
                    </p>
                </div>
                <div className="lg:flex justify-between items-center py-8">
                    <h3 className="text-slate-925 text-2.5xl lg:text-4xl leading-8 font-medium font-poppins w-40 py-4">
                        Project Scope
                    </h3>
                    <p className="text-gray-475 xs:text-lg md:text-2xl leading-6 font-roboto xs:w-4/5 lg:w-4/6">
                        By harnessing advanced AI algorithms, this software ensures impartial and efficient evaluation
                        of content, eliminating human biases from the analysis process. A User-friendly interface will
                        facilitate seamless navigation, simplifying complex workflows and making insights easily
                        accessible. As a result, the software will empower businesses to create content that resonates
                        more effectively with their target audience, ultimately driving higher engagement and growth.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StatementSection;
