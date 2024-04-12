import Instagram from '../../assets/images/icon-instagram.svg';
import Linkedin from '../../assets/images/icon-linkedin.svg';
import Twitter from '../../assets/images/icon-twitter.svg';

const SocialLinks = () => {
    return (
        <ul className="flex justify-between">
            <li className="w-6 lg:w-8 lg:h-8">
                <a href="https://www.instagram.com" target="_">
                    <img src={Instagram} alt="instagram-icon" className="w-full" />
                </a>
            </li>
            <li className="w-6 lg:w-8 lg:h-8">
                <a href="#" target="_">
                    <img src={Linkedin} alt="linkedin-icon" className="w-full" />
                </a>
            </li>
            <li className="w-6 lg:w-8 lg:h-8">
                <a href="#" target="_">
                    <img src={Twitter} alt="twitter-icon" className="w-full" />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
