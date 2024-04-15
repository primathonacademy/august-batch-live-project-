import { Link } from 'react-router-dom';
import logo from '../../assets/images/footer-logo.svg';

const BottomFooter = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:py-4 xl:p-6 2xl:items-center 2xl:p-8 3xl:items-center 3xl:py-12">
            <Link to={'/'} className="mb-4 md:mb-0 lg:mb-0">
                <img src={logo} alt="yume labs logo" className="w-36 md:w-48 lg:h-8 lg:w-60" />
            </Link>

            <ul className="grid grid-cols-3 gap-5 font-poppins text-sxs font-semibold text-253F9C md:flex md:text-xs lg:text-sm lg:leading-6 3xl:text-base">
                <Link to={'/privacy-policy'}>Privacy Policy</Link>
                <Link to={'/terms-of-use'}>Terms of Use</Link>
                <Link to={'/copyright-yume-labs'}>Copyright Yume Labs</Link>
            </ul>
        </div>
    );
};

export default BottomFooter;
