import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Headerlogo from '../assets/images/header-logo.svg';
import Headerlogoname from '../assets/images/header-logo-name-image.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header className=" px-5 md:px-16 lg:px-20 xl:px-25 2xl:px-30 3xl:px-45.5 md:flex md:items-center md:justify-between  md:h-19.25  lg:h-20.5  xl:h-21.75  2xl:h-23 3xl:h-24">
                <div className="flex h-18 md:border-0 justify-between items-center">
                    <div className="flex gap-4  items-center md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-4 3xl:gap-5">
                        <div>
                            <img
                                src={Headerlogo}
                                alt="header logo image"
                                className="h-6 w-4.5 md:h-6 md:w-4 lg:h-7 lg:w-5 xl:h-7.5 xl:w-5.25 2xl:h-8 2xl:w-5.5 3xl:h-8 3xl:w-6"
                            />
                        </div>
                        <span>
                            <img
                                src={Headerlogoname}
                                alt=" header logoname image"
                                className="md:w-32 h-5 w-36 md:h-5.25   lg:h-5.5 lg:w-39 xl:h-5.75 xl:w-41 2xl:h-6 2xl:w-43 3xl:h-6.25 3xl:w-45.5"
                            />
                        </span>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Use React icons */}
                        </button>
                    </div>
                </div>
                <nav
                    className={`md:flex items-center lg:flex 2xl:flex 3xl:flex 4xl:flex ${isMenuOpen ? 'block' : 'hidden'} `}>
                    <ul className="flex flex-col md:gap-4 lg:gap-6 xl:gap-12 2xl:gap-16 md:mt-0 lg:mt-0 2xl:mt-0 3xl:mt-0 4xl:mt-0 3xl:gap-20 4xl:gap-24 md:flex-row lg:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row text-7  md:text-3 lg:text-5 xl:text-5 2xl:text-4.5 3xl:text-4 4xl:text-5 md:items-center lg:items-center 2xl:items-center 3xl:items-center 4xl:items-center md:leading-15 lg:leading-16 2xl:leading-17 3xl:leading-18 4xl:leading-20 leading-23 mt-40.5 font-normal not-italic font-poppins  text-#828796 md:text-#2F3750 xl:text-#2F3750 2xl:text-#2F3750 3xl:text-#2F3750">
                        <li className=" 3xl:font-semibold font-poppins font-semibold">
                            <Link to="/">WORK</Link>
                        </li>
                        <li>
                            <Link to="/services">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/insights">INSIGHTS</Link>
                        </li>
                        <li>
                            <Link to="/about-us">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/labs">LABS</Link>
                        </li>
                        <li>
                            <button className="rounded-8 bg-#0A66EC text-sm px-8 text-white py-5 md:px-4 md:py-2 lg:px-4.2 lg:py-4.2 xl:px-4.3 xl:py-4.3 4xl:px-6 4xl:py-5  ">
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
