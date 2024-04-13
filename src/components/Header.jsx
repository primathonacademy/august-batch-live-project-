import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Headerlogo from '../assets/images/header-logo.png';
import Headerlogoname from '../assets/images/header-logo-name.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header className=" px-5 md:px-16 lg:px-20 xl:px-25 2xl:px-30 3xl:px-45.5 md:flex md:items-center md:justify-between  md:h-19.25  lg:h-20.5  xl:h-21.75  2xl:h-23 3xl:h-24">
                <div className="flex h-18 md:border-0 justify-between items-center">
                    <div className="flex gap-4 items-center md:gap-2 ">
                        <div className="h-6 w-4.5 md:h-6 md:w-4 lg:h-7 lg:w-5 xl:h-7.5 xl:w-5.25 2xl:h-8 2xl:w-5.5 3xl:h-8 3xl:w-6  ">
                            <img src={Headerlogo} alt="lab logo image" />
                        </div>
                        <span className="h-5 w-35 md:h-5.25 md:w-37  lg:h-5.5 lg:w-39 xl:h-5.75 xl:w-41 2xl:h-6 2xl:w-43 3xl:h-6.25 3xl:w-45.5">
                            <img src={Headerlogoname} alt=" logoname image" />
                        </span>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Use React icons */}
                        </button>
                    </div>
                </div>
                <nav className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'} `}>
                    <ul className="flex flex-col md:gap-2 lg:gap-6 xl:gap-12 2xl:gap-16 md:mt-0 3xl:gap-20 md:flex-row text-7  md:text-4 lg:text-5 xl:text-5 2xl:text-4.5 3xl:text-4  md:items-center md:leading-15 leading-93px mt-40.5 font-normal not-italic font-poppins  text-[#2F3750]">
                        <li className=" 3xl:font-semibold">
                            <Link to="/">WORK</Link>
                        </li>
                        <li>
                            <Link to="/">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/">INSIGHTS</Link>
                        </li>
                        <li>
                            <Link to="/">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/">LABS</Link>
                        </li>
                        <li>
                            <button className="rounded-full bg-blue-700 text-sm px-8 text-white py-5 md:px-4 md:py-2">
                                CONTACT US
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
