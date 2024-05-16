import ArticleSectionImg from '../../assets/images/article-card.png';
import GridlineImage from '../../assets/images/grid-lines.svg';
import AuthorImage from '../../assets/images/author-cto.png';
import Arrowbtn from './Arrowbtn';
import { AUTHORS } from '../../constants/ServiceAuthordata';
import Article from './Article';
import NewsCards from './NewsCards';

function OurService() {
    return (
        <>
            <div className="px-5 md:px-14 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 lg:pt-12 4xl:text-2xl">
                <section>
                    <div className="pl-4 4xl:pl-8">
                        <div className="lg:block lg:relative lg:h-0 lg:-top-24 lg:-left-20 xl:-left-32 2xl:left-0 hidden">
                            <img src={GridlineImage} alt="Grid Lines Insight detail" className="md:w-full md:h-96" />
                        </div>

                        <span className="w-fit px-8 py-1 md:block bg-blue-850 text-white text-center italic text-2xl font-normal mb-4 font-serif hidden">
                            Article
                        </span>
                        <span className="max-w-44 block bg-blue-900 text-white text-center italic text-sm font-normal -mt-3 mb-20 font-serif md:hidden relative top-20">
                            Our Services
                        </span>
                        <h1 className="text-4xl text-black sm:text-4xl font-poppins font-medium 2xl:text-6xl lg:text-4xl sm:mb-6 xl:mb-6 leading-9 pt-4 w-10/12 3xl:text-6xl 4xl:text-8xl">
                            Why Do You Need a Design system ?
                        </h1>

                        <p className="text-xl text-gray-600  font-medium font-poppins mt-8 mb-9 lg:text-2xl">
                            May 05, 2023
                        </p>
                    </div>
                </section>

                <div className="bg-cover object-cover w-auto md:rounded-4xl rounded-3xl bg-center 3xl:rounded-3xl">
                    <img
                        src={ArticleSectionImg}
                        alt="Article section"
                        className=" object-cover bg-cover bg-center 3xl:min-w-389 2xl:min-w-330 2xl:max-w-389 xl:min-w-270 xl:max-w-330 lg:min-w-210 lg:max-w-270 md:min-w-162.5 md:max-w-210 xl:h-127 lg:h-116.25 md:h-116.25 2xl:h-127 w-full"
                    />
                </div>

                <div>
                    <section className="md:flex gap-12 my-12 md:my-20 ">
                        <div className="md:w-2/5"></div>
                        <div className="md:w-3/5">
                            <Article />
                        </div>
                    </section>
                    <section className="md:flex gap-12 my-12 md:my-20 ">
                        <div className="md:w-2/5 text-3xl font-medium font-poppins lg:text-4xl">
                            What is a Design System?
                        </div>
                        <div className="md:w-3/5">
                            <Article />
                        </div>
                    </section>
                    <section className="md:flex gap-12 my-12 md:my-20 ">
                        <div className="md:w-2/5 text-3xl font-medium font-poppins lg:text-4xl">
                            The Handover Concern
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-lg text-gray-500 lg:text-xl mb-8 font-roboto font-normal">
                                Designers and developers used to encounter several challenges. Handoff presented several
                                issues due to iterations, requirement changes, and the compartmentalised structure of
                                design and development. It frequently resulted in designers impeding developers and bad
                                product decisions.
                            </p>
                            <p className="text-lg text-gray-500 mb-8 font-roboto lg:text-xl">
                                By concentrating on regularly used components, designers and developers have been able
                                to collaborate more effectively, and formerly isolated teams are now operating from the
                                same mental model. Seeing current components saves a lot of time and work.
                            </p>
                            <p className="text-lg text-gray-500 mb-8 font-roboto lg:text-xl">
                                The component-based design methodology is a significant advancement. It has decreased
                                the requirement for handoffs dramatically.
                            </p>
                            .
                            <p className="text-lg text-gray-500 mb-8 font-roboto lg:text-xl">
                                A Design System is a methodical approach to product creation that includes standards,
                                principles, philosophies, and code. A design systems guide is an ideal tool for
                                expanding the design practice, removing the need for hand-off, and promoting increased
                                cooperation.
                            </p>
                        </div>
                    </section>
                    <section className="md:flex gap-12 my-12 md:my-20 ">
                        <div className="md:w-2/5 text-3xl font-medium font-poppins lg:text-4xl">
                            Why Should You Use a Design System?
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-lg text-gray-500 mb-8 font-roboto font-normal lg:text-xl">
                                A Design System has several advantages. It enables the entire firm to provide better and
                                more consistent design solutions more effectively. It makes it easier to create engaging
                                experiences for end users.
                            </p>
                            <h1 className="text-2xl font-medium font-poppins text-black">1. Promotes Consistency</h1>
                            <br />
                            <p className="text-lg text-gray-500 mb-8 font-roboto font-normal lg:text-xl pl-4">
                                Building a Design System begins with categorizing all of a product’s visual components.
                                This assists in identifying the most significant discrepancies within the product and
                                assists the team in determining the product’s relevant and most often utilized features
                                and components. The most important Design Principle is consistency.
                            </p>
                            <h1 className="text-2xl font-medium font-poppins text-black">2. Better Communication</h1>
                            <br />
                            <p className="text-lg text-gray-500 mb-8 font-roboto lg:text-xl font-normal pl-4">
                                Open-source Design Systems are frequently referred to be the single source of truth for
                                product development teams. It assists the team in planning, developing, and maintaining
                                product quality.
                            </p>
                            <p className="text-lg text-gray-500 mb-8 lg:text-xl font-roboto font-normal pl-4">
                                Single source of truth (SSOT) is a notion that organisations employ as part of their
                                information architecture to ensure that everyone makes business choices using the same
                                facts.
                            </p>
                            <p className="text-lg lg:text-xl text-gray-500 mb-8 font-roboto font-normal pl-4">
                                Because it is a single source of truth, it encompasses any vocabulary that may be
                                utilized in the project. Gone are the days when a developer would refer to a button as
                                the red one. This improves talks between developers and designers by allowing them to
                                use the same naming standard.
                            </p>
                            <h1 className="text-2xl font-medium font-poppins text-black">
                                3. Clearification for Developers.
                            </h1>
                            <br />
                            <p className="text-lg lg:text-xl text-gray-500 mb-8 font-roboto font-normal pl-4">
                                Developers have a clear view of how to construct the needed components while keeping the
                                unified styles when it is in place.
                            </p>
                            <h1 className="text-2xl font-medium font-poppins text-black">4. Iterate Faster</h1>
                            <br />
                            <p className="text-lg lg:text-xl text-gray-500 mb-8 font-roboto font-normal pl-4">
                                By using a Design System, teams may iterate much more quickly. You may deploy new ideas
                                in tiny pieces with fewer resources and shorter feedback cycles. It keeps you organized
                                and up to speed on all of your team’s design updates.
                            </p>
                            <h1 className="text-2xl font-medium font-poppins text-black">
                                5. Improved Customer Service
                            </h1>
                            <br />
                            <p className="text-lg lg:text-xl text-gray-500 mb-8 font-roboto font-normal pl-4">
                                he cognitive burden is lowered when transitioning from a mobile app experience to a
                                desktop browser experience produced with it. A better experience for customers who use
                                your goods may be produced by developing a consistent language that both internal and
                                external users can comprehend.
                            </p>
                            <h1 className="text-2xl font-medium font-poppins text-black">
                                6. Making use of each other’s efforts
                            </h1>
                            <br />
                            <p className="text-lg lg:text-xl text-gray-500 mb-8 font-roboto font-normal pl-4">
                                Because Design Systems may be used across different teams, efficiency can be extended
                                across teams and products. It is now simple to harness other people’s work and utilise
                                each other’s creativity without recreating the wheel.{' '}
                            </p>
                            <p className="text-lg lg:text-xl text-gray-500 mb-8 font-roboto font-normal pl-4">
                                The key advantages of utilizing and maintaining a Design System are operating at scale
                                and enhancing efficiency and consistency. Because you reuse components in a Design
                                System, the time and effort invested in developing one pay off in the long term. Your
                                desig
                            </p>
                        </div>
                    </section>
                    <section className="md:flex gap-12 my-12 md:my-20 ">
                        <div className="md:w-2/5 text-3xl font-medium font-poppins lg:text-4xl">Conclusion</div>
                        <div className="md:w-3/5">
                            <p className="text-lg lg:text-xl text-gray-500 mb-8 font-roboto font-normal">
                                Rather than rethinking the basis of each new experience for your goods, a Design System
                                keeps designers, developers, product managers, and various stakeholders aligned with the
                                company’s design goal and allows the team to effortlessly focus on pixel-perfect
                                production.
                            </p>
                        </div>
                    </section>
                    <hr className="font-bold text-black mt-12" />
                    <div className="text-3xl font-medium font-poppins mt-12 mr-20">
                        <h1 className="md:w-2/5 text-3xl lg:mt-24 font-medium font-poppins lg:text-4xl ">Authors</h1>
                        <div className="lg:flex justify-between  gap-16 my-12 md:my-10 ">
                            {AUTHORS.map((author, index) => (
                                <div key={index} className="text-3xl font-medium font-poppins mt-12 md:auto">
                                    <div className="md:flex md:justify-center">
                                        <img
                                            src={AuthorImage}
                                            alt="Author Image"
                                            className="rounded-full mt-7 w-40 h-40"
                                        />
                                        <p className="lg:pt-24 ml-4  md:flex flex-col md:w-full">
                                            <h2 className="text-xl lg:text-2xl font-poppins font-medium mt-6 md:mt-6 ">
                                                {author.name}
                                            </h2>
                                            <h2 className="text-sm text-gray-475 mt-2 font-roboto font-normal">
                                                {author.role}
                                            </h2>
                                        </p>
                                    </div>
                                    <p className="text-sm lg:text-xl text-gray-475 mt-8 font-roboto font-normal">
                                        {author.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-px opacity-70 bg-gray-475 mt-40"></div>
                <NewsCards />
                <Arrowbtn />
            </div>
        </>
    );
}

export default OurService;
