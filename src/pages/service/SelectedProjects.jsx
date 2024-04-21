import { projectData } from '../../constants/project-data';
import LeftArrowIcon from '../../assets/icons/arrow-left-icon.svg';
import RightArrowIcon from '../../assets/icons/arrow-right-icon.svg';



const ProjectCard = () => {
    return (
        <>
            {projectData.map((item) => {
                return (
                    <div className="pb-5 ml-2 lg:ml-0 lg:w-80  2xl:m-0 2xl:w-127 3xl:w-full" key={item.id}>
                        <img src={item.imgSrc} alt="project image" className="w-72 lg:w-80 2xl:w-96 3xl:w-127" />

                        <div className="flex gap-3 mt-8 text-xs xl:text-base font-semibold text-blue-850 2xl:w-fit">
                            <p>{item.hash1}</p>
                            <p>{item.hash2}</p>
                        </div>

                        <h1 className="mt-2 text-2.5xl 2xl:text-4xl font-medium text-slate-925 mb-6 w-auto 2xl:w-fit">
                            {item.heading}
                        </h1>
                        <p className="text-lg text-gray-475 w-60 lg:w-64 2xl:text-2xl 2xl:w-96 3xl:w-110">
                            {item.discription}
                        </p>
                    </div>
                );
            })}
        </>
    );
};


const SelectedProjects = () => {
    return (
        <div className="px-5 py-20 md:px-14  lg:px-20 lg:pt-24 xl:px-24 2xl:px-28 2xl:pt-28 3xl:px-45.5">

            <h1 className='text-4xl mb-10 w-40 xl:text-5xl xl:leading-12 xl:ml-32 2xl:text-5.7xl xl:w-60 3xl:leading-15  3xl:pl-2'>Selected Projects</h1>

            <div className="overflow-x-auto lg:overflow-hidden scrollbar-hide gap-4 md:px-0 w-full lg:flex lg:justify-center 2xl:mx-auto">
            
                <div className="flex flex-no-wrap md:w-fit gap-3 lg:gap-5 xl:w-250 2xl:w-330   3xl:w-389 3xl:h-210">
                    <ProjectCard />
                </div>
            </div>

            <div className="flex justify-between items-center w-fit">
                <div className="w-[75vw] h-[1px] opacity-70 bg-gray-475"></div>

                <div className="flex items-center">
                    <img src={LeftArrowIcon} alt="left scrolling arrow img" className="w-16 h-12 3xl:w-16" />
                    <img src={RightArrowIcon} alt="right scrolling arrow img" className="w-16 h-12 3xl:w-28" />
                </div>

            </div>
        </div>
    );
};


export default SelectedProjects;
