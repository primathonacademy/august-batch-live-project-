import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import YumiLogo from '../assets/images/header-logo.svg';
import BrandName from '../assets/images/header-logo-name-image.svg';
import { NAV_ITEMS } from '../constants';
import { ROUTES } from '../constants';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavItemClick = () => {
        setIsMenuOpen(false); // Close the menu when a navigation item is clicked
    };

    const NAVBAR_ITEMS_EXCLUDING_LAST = NAV_ITEMS.slice(0, -1);

    return (
        <>
            <header
                className={`w-full sticky top-0 px-5 md:px-16 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 md:flex md:items-center md:justify-between md:h-20 lg:h-20 xl:h-20 2xl:h-24 3xl:h-24 ${
                    isMenuOpen ? 'menu-open' : ''
                } ${isScrolled ? 'backdrop-blur-md bg-opacity-75' : ''}`}>
                <div className="flex h-16 md:border-0 justify-between items-center">
                    <div className="flex gap-4 items-center md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-4 3xl:gap-5">
                        <div>
                            <img
                                src={YumiLogo}
                                alt="yumi lab logo "
                                className="h-6 w-4 md:h-6 md:w-4 lg:h-7 lg:w-5 xl:h-7 xl:w-5 2xl:h-8 2xl:w-5 3xl:h-8 3xl:w-6 4xl:h-9 4xl:w-7"
                            />
                        </div>
                        <span>
                            <img
                                src={BrandName}
                                alt="yumi lab brand name "
                                className="md:w-32 h-5 w-36 md:h-5 lg:h-5 lg:w-40 xl:h-5 xl:w-40 2xl:h-6 2xl:w-44 3xl:h-6 3xl:w-45.5 4xl:h-7 4xl:w-48"
                            />
                        </span>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>{isMenuOpen ? <FaTimes /> : <FaBars />}</button>
                    </div>
                </div>
                <nav className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="uppercase flex flex-col md:gap-4 lg:gap-6 xl:gap-12 2xl:gap-16 md:mt-0 3xl:gap-20 4xl:gap-24 md:flex-row text-2.5xl md:text-sm lg:text-xl 2xl:text-lg 3xl:text-base 4xl:text-xl md:items-center md:leading-14 2xl:leading-15 3xl:leading-16 4xl:leading-17 leading-18 mt-40 font-normal not-italic font-poppins text-gray-425 md:text-slate-725">
                        {NAVBAR_ITEMS_EXCLUDING_LAST.map((item) => (
                            <li key={item.title}>
                                <Link to={item.link} onClick={handleNavItemClick}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to={ROUTES.CONTACT}
                                className="rounded-8 bg-blue-575 text-sm px-8 text-white py-5 md:px-4 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-3 4xl:px-6 4xl:py-4"
                                onClick={handleNavItemClick}>
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
