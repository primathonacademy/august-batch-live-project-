import { Link } from 'react-router-dom';
import { FOOTER_NAV_ITEMS } from '../../constants/constant';
import BottomFooter from './BottomFooter';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className="bg-bgPrimary px-5 w-screen md:w-full md:px-14 md:pt-20 lg:px-20 lg:pt-24 xl:px-24 2xl:px-28 2xl:pt-28 3xl:px-46">
            <section className="flex flex-col gap-10 items-start text-primary pb-10 pt-14 mb-10 border-b-2 border-opacity-80 md:flex-row md:pb-20 lg:pb-24 2xl:pb-28">
                <div className="flex items-center md:w-97">
                    <ul className="flex flex-col gap-3 text-lg lg:leading-8  2xl:text-xl 3xl:text-2xl">
                        {
                        FOOTER_NAV_ITEMS.map((item, index) => {
                            return (
                                <Link to={item.href} key={index}>
                                    {item.nav}
                                </Link>
                            );
                        })
                        }
                    </ul>
                </div>

                <div className="text-2xl flex flex-col gap-9 md:w-98">
                    <div className="lg:leading-7">
                        <p className="text-secondary text-xs font-poppins font-semibold  lg:text-sm">
                            WRITE TO US
                        </p>
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
                    <SocialLinks />
                </div>
            </section>

            {/* Bottom Footer Component  */}
            <BottomFooter />
        </footer>
    );
};

export default Footer;
