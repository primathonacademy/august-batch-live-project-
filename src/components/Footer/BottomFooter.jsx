import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const BottomFooter = () => {
  return (
    <div className='flex flex-col md:py-4 md:flex-row md:justify-between md:items-center xl:p-6 2xl:p-8 2xl:items-center 3xl:items-center 3xl:py-[50px]'>
        <Link to={'/'} className='mb-4 md:mb-0 lg:mb-0'>
            <img src={logo} alt="yume labs logo" className='w-[145px] md:w-[190px] lg:w-[238px] lg:h-8'/>
        </Link>

        <ul className='grid grid-cols-3 gap-5 font-poppins font-semibold text-[#253F9C] text-[10px] md:text-[12px] lg:text-[14px] 3xl:text-[16px] lg:leading-6 md:flex'>
            <Link to={'/privacy-policy'}>Privacy Policy</Link>
            <Link to={'/terms-of-use'}>Terms of Use</Link>
            <Link to={'/copyright-yume-labs'}>Copyright Yume Labs</Link>
        </ul>
    </div>
  )
}

export default BottomFooter