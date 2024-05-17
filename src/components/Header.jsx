import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import yumeLabsNameLogo from '../assets/images/yume-labs-name-logo.svg';
import { NAV_ITEMS } from '../constants';
import { ROUTES } from '../constants';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        setIsMenuOpen(false);
    };
    const handleLogoClick = () => {
        setActiveNavItem(null);
    };

    const NAVBAR_ITEMS_EXCLUDING_LAST = NAV_ITEMS.slice(0, -1);

    return (
        <>
            <header
                className={`w-full z-50 sticky top-0 px-5 md:px-16 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 md:flex md:items-center md:justify-between md:h-20 lg:h-20 xl:h-20 2xl:h-24 3xl:h-24 ${
                    isMenuOpen ? 'menu-open' : ''
                } ${isScrolled ? 'backdrop-blur-2xl bg-opacity-100' : ''}`}>
                <div className="flex h-16 md:border-0 justify-between items-center">
                    <Link to="/" onClick={handleLogoClick}>
                        <img src={yumeLabsNameLogo} alt="yumi lab logo " className="w-36 md:w-40 lg:h-8 lg:w-60" />
                    </Link>

                    <div className="md:hidden">
                        <button onClick={toggleMenu}>{isMenuOpen ? <FaTimes /> : <FaBars />}</button>
                    </div>
                </div>
                <nav className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="uppercase flex flex-col md:gap-4 lg:gap-6 xl:gap-12 2xl:gap-16 md:mt-0 3xl:gap-20 4xl:gap-24 md:flex-row text-2.5xl md:text-sm lg:text-xl 2xl:text-lg 3xl:text-base 4xl:text-xl md:items-center md:leading-14 2xl:leading-15 3xl:leading-16 4xl:leading-17 leading-15 mt-40 font-normal not-italic font-poppins text-gray-425 md:text-slate-725">
                        {NAVBAR_ITEMS_EXCLUDING_LAST.map((item) => (
                            <li key={item.title}>
                                <Link
                                    to={item.link}
                                    onClick={() => handleNavItemClick(item)}
                                    className={activeNavItem === item ? 'font-semibold' : ''}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to={ROUTES.CONTACT}
                                className="rounded-8 bg-blue-575 text-sm px-8 text-white py-5 md:px-4 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-3 4xl:px-6 4xl:py-4  hover:bg-gradient-to-r from-blue-500 to-pink-500"
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
