
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Headerlogo from '../assets/Group 5086.png';
import Headerlogoname from '../assets/Group 36652.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" px-5 md:px-16 lg:px-[80px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[182px] md:flex md:items-center md:justify-between  md:h-[77px]  lg:h-[82px]  xl:h-[87px]  2xl:h-[92 px] 3xl:h-[96px]   "  >
            <div className="flex h-[72px] md:border-0 justify-between items-center">
                <div className="flex gap-4 items-center md:gap-2 ">
                    <div className='h-6 w-[18px] md:h-[24px] md:w-[16px] lg:h-[28px] lg:w-[20px] xl:h-[30px] xl:w-[21px] 2xl:h-[32px] 2xl:w-[22px] 3xl:h-[32px] 3xl:w-[24px]  '   >
                        {' '}
                        {/* Adjust width as per your logo size */}
              
                        <img src={Headerlogo} alt="" />
                    </div>
                    <span className='h-5 w-[140px] md:h-[21px] md:w-[148px]  lg:h-[22px] lg:w-[156px] xl:h-[23px] xl:w-[164px] 2xl:h-[24px] 2xl:w-[172px] 3xl:h-[25px] 3xl:w-[182
                        
                        px]'>
                        <img src={Headerlogoname} alt="" />
                    </span>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Use React icons */}
                    </button>
                </div>
            </div>
            <nav
                className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'} `}>
                <ul className="flex flex-col md:gap-2 lg:gap-6 xl:gap-[48px] 2xl:gap-[64px] md:mt-0 3xl:gap-[80px] md:flex-row text-[28px]  md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[18px] 3xl:text-[16px]  md:items-center md:leading-[60px] leading-[93px] mt-[162px] font-normal not-italic font-poppins  text-[#2F3750]">
                    <li className=' 3xl:font-semibold'>
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
                        <button className="rounded-full bg-blue-700 text-sm px-8 text-white py-5 md:px-4 md:py-2">CONTACT US</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
