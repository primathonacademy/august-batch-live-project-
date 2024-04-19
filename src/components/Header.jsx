import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import HeaderLogo from '../assets/images/header-logo.svg';
import HeaderLogoName from '../assets/images/header-logo-name-image.svg';
import { NAV_ITEMS } from '../constants';
import { ROUTES } from '../constants';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const NAVBAR_ITEMS_EXCLUDING_LAST = NAV_ITEMS.slice(0, -1);

    return (
        <>
            <header className="w-full sticky top-0 px-5 md:px-16 lg:px-20 xl:px-25 2xl:px-30 3xl:px-45.5 md:flex md:items-center md:justify-between md:h-19.25 lg:h-20.5 xl:h-21.75 2xl:h-23 3xl:h-24">
                <div className="flex h-18 md:border-0 justify-between items-center">
                    <div className="flex gap-4 items-center md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-4 3xl:gap-5">
                        <div>
                            <img
                                src={HeaderLogo}
                                alt="header logo image"
                                className="h-6 w-4.5 md:h-6 md:w-4 lg:h-7 lg:w-5 xl:h-7.5 xl:w-5.25 2xl:h-8 2xl:w-5.5 3xl:h-8 3xl:w-6 4xl:h-9 4xl:w-7"
                            />
                        </div>
                        <span>
                            <img
                                src={HeaderLogoName}
                                alt="header logoname image"
                                className="md:w-32 h-5 w-36 md:h-5.25 lg:h-5.5 lg:w-39 xl:h-5.75 xl:w-41 2xl:h-6 2xl:w-43 3xl:h-6.25 3xl:w-45.5 4xl:h-7 4xl:w-48"
                            />
                        </span>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>{isMenuOpen ? <FaTimes /> : <FaBars />}</button>
                    </div>
                </div>
                <nav
                    className={`md:flex items-center lg:flex 2xl:flex 3xl:flex 4xl:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className=" uppercase flex flex-col md:gap-4 lg:gap-6 xl:gap-12 2xl:gap-16 md:mt-0 lg:mt-0 2xl:mt-0 3xl:mt-0 4xl:mt-0 3xl:gap-20 4xl:gap-24 md:flex-row lg:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row text-2.5xl md:text-sm lg:text-xl xl:text-xl 2xl:text-lg 3xl:text-base 4xl:text-xl md:items-center lg:items-center 2xl:items-center 3xl:items-center 4xl:items-center md:leading-15 lg:leading-16 2xl:leading-17 3xl:leading-18 4xl:leading-20 leading-23 mt-40.5 font-normal not-italic font-poppins text-gray-425 md:text-slate-725 xl:text-slate-725 2xl:text-slate-725 3xl:text-slate-725">
                        {NAVBAR_ITEMS_EXCLUDING_LAST.map((item) => (
                            <li key={item.title}>
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to={ROUTES.CONTACT}
                                className="rounded-8 bg-blue-575 text-sm px-8 text-white py-5 md:px-4 md:py-2 lg:px-4.2 lg:py-2.5 xl:px-4.3 xl:py-3 4xl:px-6 4xl:py-4">
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
