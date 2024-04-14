import { Link } from 'react-router-dom';
import { footerItems } from '../../constants/constant';
import Instagram from '../../assets/icons/instagram-icon.svg';
import Linkedin from '../../assets/icons/linkedin-icon.svg';
import Twitter from '../../assets/icons/twitter-icon.svg';
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <footer className="bg-bgPrimary px-5 w-screen md:w-full md:px-14 md:pt-20 lg:px-20 lg:pt-24 xl:px-24 2xl:px-28 2xl:pt-28 3xl:px-46">
            <section className="flex flex-col gap-10 items-start justify-between text-primary pb-10 pt-14 mb-10 border-b-2 border-opacity-80 md:flex-row md:pb-20 lg:pb-24 2xl:pb-28">

                <div className="flex items-center md:w-97">
                    <ul className="flex flex-col gap-3">
                        {footerItems.map((item, index) => {
                            return (
                                <Link to={item.href} key={index} className='text-lg lg:leading-8 2xl:text-xl 3xl:text-2xl'>
                                    {item.nav}
                                </Link>
                            );
                        })}
                    </ul>
                </div>

                <div className="text-2xl flex flex-col gap-9 md:w-98">
                    <div className="lg:leading-7">
                        <p className="text-secondary text-xs font-poppins font-semibold  lg:text-sm">WRITE TO US</p>
                        <p className="text-lg lg:leading-7 2xl:text-lg 3xl:text-2xl">hello@yumelabs.com</p>
                    </div>
                    <div className="lg:leading-7">
                        <p className="text-secondary text-xs font-poppins font-semibold lg:text-sm lg:leading-7">
                            ADDRESS
                        </p>
                        <p className="text-lg  2xl:text-xl 3xl:text-2xl">
                            4th Floor, Qubical Coworking Space, <br /> Kormanagala Bangalore - 560033 Karnataka, India
                            <span className="block mt-7">+91 9562332441</span>
                        </p>
                    </div>
                </div>

                <div className="md:w-73 w-52 mb-10">
                    <ul className="flex justify-between">
                        <li className="w-6 lg:w-8 lg:h-8">
                            <a href="https://www.instagram.com" target="_">
                                <img src={Instagram} alt="instagram icon" className="w-full" />
                            </a>
                        </li>
                        <li className="w-6 lg:w-8 lg:h-8">
                            <a href="#" target="_">
                                <img src={Linkedin} alt="linkedin icon" className="w-full" />
                            </a>
                        </li>
                        <li className="w-6 lg:w-8 lg:h-8">
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
