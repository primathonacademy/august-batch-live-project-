import ArticleSectionImg from '../../assets/images/art-card.png';
import GridlineImage from '../../assets/images/grid-lines.svg';
import NewsCard from '../../assets/images/news-card.png';
import LeftArrow from '../../assets/icons/arrow-left.svg';
import RightArrow from '../../assets/icons/arrow-right.svg';
import AuthorImage from '../../assets/images/author-cto.png';

function OurService() {
    const authors = [
        {
            name: 'Abhinav Kr.',
            role: 'Cheif Technology Officer',
            bio: 'Abhinav leads all things technology at Yume Labs. He brings 10+ years of experience in B2B Technology Sales, Corporate Development, Strategy, and Consulting in Life Sciences and Healthcare industries globally. He holds an MBA from IIM Bangalore and a B.E. in Electronics and Telecommunications from IIEST, Shibpur.'
        },
        {
            name: 'Anubhav Kr.',
            role: 'Cheif Technology Officer',
            bio: 'Abhinav leads all things technology at Yume Labs. He brings 10+ years of experience in B2B Technology Sales, Corporate Development, Strategy, and Consulting in Life Sciences and Healthcare industries globally. He holds an MBA from IIM Bangalore and a B.E. in Electronics and Telecommunications from IIEST, Shibpur.'
        }
    ];
    return (
        <>
            <div className="px-9  md:px-14 lg:px-20 xl:px-24  2xl:px-28 3xl:px-45.5 pt-12 4xl:text-2xl">
                <section>
                    <div className="pl-4 4xl:pl-8">
                        <div className="  lg:block lg:relative lg:h-0 lg:-top-24 lg:-left-20 xl:-left-32 2xl:left-0">
                            <img src={GridlineImage} alt="Grid-Lines-Insight-detail" className="md:w-full md:h-96" />
                        </div>

                        <span className="max-w-52 md:block bg-blue-700 text-white text-center italic text-2xl font-normal -mt-3 mb-4 font-serif hidden">
                            Article
                        </span>
                        <span className="max-w-44 block bg-blue-700 text-white text-center italic text-sm font-normal -mt-3 mb-20 font-serif md:hidden relative top-20 ">
                            Our Services
                        </span>
                        <h1 className="text-4xl text-black sm:text-4xl font-poppins font-medium 2xl:text-6xl lg:text-4xl sm:mb-6 xl:mb-6 leading-9 pt-4 w-10/12 3xl:text-6xl 4xl:text-8xl">
                            Why Do You Need a Design system ?
                        </h1>

                        <p className="text-xl text-gray-600  font-medium font-poppins mt-8 mb-9  lg:text-2xl">
                            May 05, 2023
                        </p>
                    </div>
                </section>

                <div className="bg-cover  object-cover  w-auto md:rounded-4xl rounded-3xl bg-center 3xl:rounded-3xl">
                    <img src={ArticleSectionImg} alt="Article-section" />
                </div>

                <div className="">
                    <section className="flex flex-col md:flex-row gap-12 my-12 md:my-20 px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                        <div className="md:w-2/5"></div>
                        <div className="md:w-3/5">
                            <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto">
                                Have you recently struggled with your design-development workflow? Do you have a handoff
                                problem that is causing bad product decisions? Looking for methods to drastically
                                enhance it? So you’ll need a Design System. It will help you operate more efficiently
                                and effectively, as well as boost team cooperation.
                                <br />
                                <br />
                                But what exactly is a Design System? A Design System, on the other hand, is a relatively
                                recent concept in the terrain of digital transformation. But one that has recently
                                sparked a lot of emotions and curiosity. The objective behind a full stack design
                                system, also known as Atomic Design Methodology, Component Design, and Design Language,
                                is to create a sequence of components that can be reused by you and your team.
                                <br />
                                <br />
                                Airbnb and Uber have significantly altered how digital goods are developed by using
                                their distinct design processes. The benefits of a component-based design methodology
                                were that these organizations were able to radically improve the rate of invention and
                                production within their teams.
                            </p>
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row gap-12 my-12 md:my-20 px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                        <div className="md:w-2/5 text-3xl font-medium font-poppins lg:text-4xl ">
                            What is a Design System?
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-lg text-gray-500 mb-8 font-roboto md:text-2xl">
                                Have you recently struggled with your design-development workflow? Do you have a handoff
                                problem that is causing bad product decisions? Looking for methods to drastically
                                enhance it? So you’ll need a Design System. It will help you operate more efficiently
                                and effectively, as well as boost team cooperation.
                                <br />
                                <br />
                                But what exactly is a Design System? A Design System, on the other hand, is a relatively
                                recent concept in the terrain of digital transformation. But one that has recently
                                sparked a lot of emotions and curiosity. The objective behind a full stack design
                                system, also known as Atomic Design Methodology, Component Design, and Design Language,
                                is to create a sequence of components that can be reused by you and your team.
                                <br />
                                <br />
                                Airbnb and Uber have significantly altered how digital goods are developed by using
                                their distinct design processes. The benefits of a component-based design methodology
                                were that these organizations were able to radically improve the rate of invention and
                                production within their teams.
                            </p>
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row gap-12 my-12 md:my-20 px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                        <div className="md:w-2/5 text-3xl font-medium font-poppins lg:text-4xl ">
                            The Handover Concern
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-lg text-gray-500 md:text-2xl mb-8 font-roboto font-normal">
                                Designers and developers used to encounter several challenges. Handoff presented several
                                issues due to iterations, requirement changes, and the compartmentalised structure of
                                design and development. It frequently resulted in designers impeding developers and bad
                                product decisions.
                                <br />
                                <br />
                                By concentrating on regularly used components, designers and developers have been able
                                to collaborate more effectively, and formerly isolated teams are now operating from the
                                same mental model. Seeing current components saves a lot of time and work.
                                <br />
                                <br />
                                The component-based design methodology is a significant advancement. It has decreased
                                the requirement for handoffs dramatically.
                                <br />
                                <br />A Design System is a methodical approach to product creation that includes
                                standards, principles, philosophies, and code. A design systems guide is an ideal tool
                                for expanding the design practice, removing the need for hand-off, and promoting
                                increased cooperation.
                            </p>
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row gap-12 my-12 md:my-20 px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                        <div className="md:w-2/5 text-3xl font-medium font-poppins lg:text-4xl ">
                            Why Should You Use a Design System?
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-lg text-gray-500 mb-8 font-roboto font-normal md:text-2xl">
                                A Design System has several advantages. It enables the entire firm to provide better and
                                more consistent design solutions more effectively. It makes it easier to create engaging
                                experiences for end users.
                                <br />
                                <br />
                                <h1 className="text-2xl font-medium font-poppins text-black  ">
                                    1. Promotes Consistency
                                </h1>
                                <br />
                                <p className="text-lg text-gray-500 mb-8 font-roboto font-normal md:text-2xl">
                                    Building a Design System begins with categorizing all of a product’s visual
                                    components. This assists in identifying the most significant discrepancies within
                                    the product and assists the team in determining the product’s relevant and most
                                    often utilized features and components. The most important Design Principle is
                                    consistency.
                                </p>
                                <br />
                                <h1 className="text-2xl font-medium font-poppins text-black ">
                                    2. Better Communication
                                </h1>
                                <br />
                                <p className="text-lg text-gray-500 mb-8 font-roboto md:text-2xl font-normal">
                                    Open-source Design Systems are frequently referred to be the single source of truth
                                    for product development teams. It assists the team in planning, developing, and
                                    maintaining product quality.
                                </p>
                                <br />
                                <p className="text-lg text-gray-500 mb-8  md:text-2xl font-roboto font-normal">
                                    Single source of truth (SSOT) is a notion that organisations employ as part of their
                                    information architecture to ensure that everyone makes business choices using the
                                    same facts.
                                </p>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    Because it is a single source of truth, it encompasses any vocabulary that may be
                                    utilized in the project. Gone are the days when a developer would refer to a button
                                    as the red one. This improves talks between developers and designers by allowing
                                    them to use the same naming standard.
                                </p>
                                <br />
                                <h1 className="text-2xl font-medium font-poppins text-black ">
                                    3.Clearification for Developers.
                                </h1>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    Developers have a clear view of how to construct the needed components while keeping
                                    the unified styles when it is in place.
                                </p>
                                <br />
                                <h1 className="text-2xl font-medium font-poppins text-black ">4. Iterate Faster</h1>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    By using a Design System, teams may iterate much more quickly. You may deploy new
                                    ideas in tiny pieces with fewer resources and shorter feedback cycles. It keeps you
                                    organized and up to speed on all of your team’s design updates.
                                </p>
                                <br />
                                <h1 className="text-2xl font-medium font-poppins text-black ">
                                    5. Improved Customer Service
                                </h1>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    he cognitive burden is lowered when transitioning from a mobile app experience to a
                                    desktop browser experience produced with it. A better experience for customers who
                                    use your goods may be produced by developing a consistent language that both
                                    internal and external users can comprehend.
                                </p>
                                <br />
                                <h1 className="text-2xl font-medium font-poppins text-black ">
                                    6. Making use of each other’s efforts
                                </h1>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    Because Design Systems may be used across different teams, efficiency can be
                                    extended across teams and products. It is now simple to harness other people’s work
                                    and utilise each other’s creativity without recreating the wheel.{' '}
                                </p>
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    <br />
                                    The key advantages of utilizing and maintaining a Design System are operating at
                                    scale and enhancing efficiency and consistency. Because you reuse components in a
                                    Design System, the time and effort invested in developing one pay off in the long
                                    term. Your design and development team can simply improve existing goods, improve
                                    the user experience, or focus on developing new items.
                                </p>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    A Design System is frequently used interchangeably with a Style Guide or a Component
                                    Library. These, however, are sub-components of a Design System.
                                </p>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    A Design System is significantly more sophisticated than conventional style guides.
                                    Everything from colours to documentation is included. A Design System essentially
                                    creates a consistent visual language for product teams.
                                </p>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    It expedites the design process and bridges the gap between the teams engaged in
                                    creating a final product by establishing common aesthetic standards, making it
                                    extremely simple to design websites from components. It functions as a rulebook for
                                    the design and development teams and is divided into the following sections:
                                </p>
                                <h1 className="text-2xl font-medium font-poppins mr-20  text-black">Design System</h1>
                                <br />
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    The whole collection of design standards, including principles, patterns, and
                                    components for achieving them.
                                </p>
                                <br />
                                <h1 className="text 2xl font-medium font-poppins mr-20  text-black">Pattern Library</h1>
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    <br />A pattern library is a collection of reusable components and user interface
                                    design elements. It is a sub-component of the Design System. A pattern library is
                                    essentially a collection of design components that appear several times on a
                                    website.
                                </p>
                                <br />
                                <h1 className="text-2xl font-medium font-poppins mr-20  text-black">Style Guide</h1>
                                <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                    <br />A Style Guide is another sub-component that emphasizes visual presentation and
                                    dictates how things should appear. Colours, typefaces, brand features, and logos are
                                    all part of it.
                                </p>
                            </p>
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row gap-12 my-12 md:my-20 px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                        <div className="md:w-2/5 text-3xl font-medium font-poppins lg:text-4xl ">Conclusion</div>
                        <div className="md:w-3/5">
                            <p className="text-lg md:text-2xl text-gray-500 mb-8 font-roboto font-normal">
                                Rather than rethinking the basis of each new experience for your goods, a Design System
                                keeps designers, developers, product managers, and various stakeholders aligned with the
                                company’s design goal and allows the team to effortlessly focus on pixel-perfect
                                production.
                            </p>
                        </div>
                    </section>
                    <hr className="font-bold text-black mt-12 " />
                    <div className="text-3xl font-medium font-poppins mt-12 mr-20">
                        <h1 className=" md:w-2/5 text-3xl lg:mt-24 font-medium font-poppins lg:text-4xl px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                            Authors
                        </h1>
                        <div className="lg:flex justify-between  gap-16 my-12 md:my-10 px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                            {authors.map((author, index) => (
                                <div key={index} className="text-3xl font-medium font-poppins mt-12  md:auto ">
                                    <div className="md:flex md:justify-center ">
                                        <img
                                            src={AuthorImage}
                                            alt="Author-Image"
                                            className="rounded-full mt-7 w-40 h-40 "
                                        />
                                        <p className=" pt-24  md:flex flex-col md:w-full">
                                            {' '}
                                            <h2 className="text-xl lg:text-2xl font-poppins font-medium mt-6 md:mt-6 ">
                                                {author.name}
                                            </h2>
                                            <h2 className="text-sm text-gray-475 mt-2  font-roboto font-normal">
                                                {author.role}
                                            </h2>
                                        </p>
                                    </div>
                                    <p className="text-sm md:text-2xl text-gray-475 mt-2 font-roboto font-normal">
                                        {author.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl font-poppins font-medium px-5 mb-24">Latest Articles </h1>

                    <div className="flex overflow-x-auto lg:overflow-hidden lg:scrollbar-hide gap-4 w-full md:px-0 font-poppins">
                        <div className="w-full flex sm:px-4">
                            <div className="flex flex-no-wrap w-auto sm:px-0 md:px-0 xl:px-5  3xl:px-6">
                                <div className="w-full mr-4">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className=" w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mr-4">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mr-4 3xl:mr-6 md:hidden lg:block">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2 pb-28">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mr-4 3xl:mr-6 lg:hidden md:hidden">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2 pb-28">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mr-4 3xl:mr-6 lg:hidden md:hidden">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2 pb-28">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mr-4 3xl:mr-6 lg:hidden md:hidden">
                                    <div className="w-56 lg:w-auto md:w-full">
                                        <img
                                            src={NewsCard}
                                            alt="News-card"
                                            className="w-full rounded-lg bg-slate-300"
                                        />
                                        <div className="mt-2 pb-28">
                                            <h1 className="font-semibold text-lg pt-4 xl:text-2xl">
                                                /01/ News Technology / 03 March 2022
                                            </h1>
                                            <p className="font-roboto text-gray-600 pt-4 text-lg lg:w-8/12 xl:text-2xl">
                                                Great Place to Work 2022 Survey: Vincit is the best place to work in
                                                Finland, again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="px-9  md:px-14 lg:px-20 xl:px-24  2xl:px-28 3xl:px-45.5 pt-12 4xl:text-2xl">
                <div className="flex items-center md:gap-5  gap-2">
                    <div className=" flex-1 h-px opacity-70" />
                    <button
                        className="flex justify-center items-center  cursor-pointer rounded-full border-none bg-fade-white w-16 h-16"
                        type="button">
                        <img src={LeftArrow} alt="Left-Arrow" className="w-16 h-16" />
                    </button>
                    <button
                        className=" w-11 h-11 rounded-full border-none bg-blue-700 flex items-center justify-center align-middle"
                        type="button">
                        <img src={RightArrow} alt="Right-Arrow" className=" text-center lg:w-9 lg:h-9 sm:w-4 sm:h-4" />
                    </button>
                </div>
            </section>
        </>
    );
}

export default OurService;
