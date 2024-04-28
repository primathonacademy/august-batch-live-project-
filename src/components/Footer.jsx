import { Link } from 'react-router-dom';
import Instagram from '../assets/icons/instagram-icon.svg';
import Linkedin from '../assets/icons/linkedin-icon.svg';
import Twitter from '../assets/icons/twitter-icon.svg';
import { IMPORTANT_PAGES, NAV_ITEMS } from '../constants';
import YumeLogo from '../assets/images/yume-logo.svg';

const NavElement = () => {
    return (
        <ul className="flex flex-col gap-3 3xl:gap-y-7 text-lg lg:leading-8 2xl:text-xl 3xl:text-2xl 3xl:leading-7">
            {NAV_ITEMS.map((item, i) => {
                return (
                    <Link to={item.link} key={`index-${i}`}>
                        {item.title}
                    </Link>
                );
            })}
        </ul>
    );
};

const BottomFooter = () => {
    return (
        <div className="grid grid-cols-3 gap-5 font-poppins text-xs font-semibold text-blue-850 md:text-sm lg:text-base lg:leading-6">
            {IMPORTANT_PAGES.map((item, i) => (
                <Link key={`index-${i}`} to={item.link}>
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="w-full mt-auto bg-gray-75 px-5 py-5 lg:py-0 md:w-full md:px-14 md:pt-20 lg:px-20 lg:pt-24 xl:px-24 2xl:px-28 2xl:pt-28  3xl:px-45.5">

            <section className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b-2 border-opacity-80 pb-10 pt-14 text-slate-725  md:pb-20 lg:pb-24 2xl:pb-28">
                <div className="flex items-center ">
                    <NavElement />
                </div>

                <address className="gap-9 text-2xl not-italic">
                    <div className="lg:leading-7">
                        <p className="font-poppins text-xs font-semibold text-neutral-575 lg:text-sm lg:leading-7">
                            WRITE TO US
                        </p>
                        <p className="text-lg lg:leading-7 2xl:text-lg 3xl:text-2xl">hello@yumelabs.com</p>
                    </div>
                    <div className="mt-3">
                        <p className="font-poppins text-xs font-semibold text-neutral-575 lg:text-sm lg:leading-7 3xl:leading-7.5">
                            ADDRESS
                        </p>
                        <p className="text-lg 2xl:text-xl 3xl:text-2xl 3xl:leading-7">
                            4th Floor, Qubical Coworking Space, <br /> Kormanagala Bangalore - 560033 Karnataka, India
                            <span className="mt-7 block">+91 9562332441</span>
                        </p>
                    </div>
                </address>

                <div className="mb-10">
                    <ul className="flex justify-start gap-10 lg:justify-evenly">
                        <li className="w-6 lg:h-8 lg:w-8">
                            <a href="https://www.instagram.com" target="_">
                                <img src={Instagram} alt="instagram icon" className="w-full" />
                            </a>
                        </li>
                        <li className="w-6 lg:h-8 lg:w-8">
                            <a href="#" target="_">
                                <img src={Linkedin} alt="linkedin icon" className="w-full" />
                            </a>
                        </li>
                        <li className="w-6 lg:h-8 lg:w-8">
                            <a href="#" target="_">
                                <img src={Twitter} alt="twitter icon" className="w-full" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:py-4 xl:py-6 2xl:py-8 3xl:py-15">
                <Link to={'/'} className="mb-4 md:mb-0">
                    <img src={YumeLogo} alt="yume labs logo" className="w-36 md:w-48 lg:h-8 lg:w-60" />
                </Link>

                <BottomFooter />
            </div>

        </footer>
    );
}

export default Footer;
