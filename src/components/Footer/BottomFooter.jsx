import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.svg';

const BottomFooter = () => {
    return (
        <div className="flex flex-col md:py-4 md:flex-row md:justify-between md:items-center xl:p-6 2xl:p-8 2xl:items-center 3xl:items-center 3xl:py-12">
            <Link to={'/'} className="mb-4 md:mb-0 lg:mb-0">
                <img src={logo} alt="yume labs logo" className="w-36 md:w-48 lg:w-60 lg:h-8" />
            </Link>

            <ul className="grid grid-cols-3 gap-5 font-poppins font-semibold text-blue text-sxs md:text-xs lg:text-sm 3xl:text-base lg:leading-6 md:flex">
                <Link to={'/privacy-policy'}>Privacy Policy</Link>
                <Link to={'/terms-of-use'}>Terms of Use</Link>
                <Link to={'/copyright-yume-labs'}>Copyright Yume Labs</Link>
            </ul>
        </div>
    );
};

export default BottomFooter;
