import Instagram from '../../assets/images/Icon-instagram.png';
import Linkedin from '../../assets/images/Icon-linkedin.png';
import Twitter from '../../assets/images/Icon-twitter.png';

const SocialLinks = () => {
    return (
        <ul className='flex justify-between'>
            <li className='w-[24px] lg:w-[30px] lg:h-[30px]'><a href="https://www.instagram.com" target='_' ><img src={Instagram} alt="instagram-icon" className='w-full' /></a></li>
            <li className='w-[24px] lg:w-[30px] lg:h-[30px]'><a href="#" target='_'><img src={Linkedin} alt="linkedin-icon" className='w-full' /></a></li>
            <li className='w-[24px] lg:w-[30px] lg:h-[30px]'><a href="#" target='_'><img src={Twitter} alt="twitter-icon" className='w-full' /></a></li>
        </ul>
    )
}

export default SocialLinks