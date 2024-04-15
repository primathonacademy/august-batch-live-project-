import { Link } from 'react-router-dom';
import { footerItems } from '../../constants/index';
import Instagram from '../../assets/icons/instagram-icon.svg';
import Linkedin from '../../assets/icons/linkedin-icon.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <footer className="w-screen bg-F7F7F7 px-5 md:w-full md:px-14 md:pt-20 lg:px-20 lg:pt-24 xl:px-24 2xl:px-28 2xl:pt-28 3xl:px-46">

            <section className="mb-10 flex flex-col items-start justify-between gap-10 border-b-2 border-opacity-80 pb-10 pt-14 text-2F3750 md:flex-row md:pb-20 lg:pb-24 2xl:pb-28">

                <div className="flex items-center md:w-97">
                    <ul className="flex flex-col gap-3">
                        {footerItems.map((item, index) => {
                            return (
                                <Link
                                    to={item.href}
                                    key={index}
                                    className="text-lg lg:leading-8 2xl:text-xl 3xl:text-2xl">
                                    {item.nav}
                                </Link>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex flex-col gap-9 text-2xl md:w-98">
                    <div className="lg:leading-7">
                        <p className="font-poppins text-xs font-semibold text-555555 lg:text-sm lg:leading-7">WRITE TO US</p>
                        <p className="text-lg lg:leading-7 2xl:text-lg 3xl:text-2xl">hello@yumelabs.com</p>
                    </div>
                    <div className="lg:leading-7">
                        <p className="font-poppins text-xs font-semibold text-555555 lg:text-sm lg:leading-7">
                            ADDRESS
                        </p>
                        <p className="text-lg  2xl:text-xl 3xl:text-2xl">
                            4th Floor, Qubical Coworking Space, <br /> Kormanagala Bangalore - 560033 Karnataka, India
                            <span className="mt-7 block">+91 9562332441</span>
                        </p>
                    </div>
                </div>

                <div className="mb-10 w-52 md:w-73">
                    <ul className="flex justify-between">
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

            {/* Bottom Footer Component  */}
            <BottomFooter />
        </footer>
    );
};

export default Footer;
