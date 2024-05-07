import { Link } from 'react-router-dom';
import { IMPORTANT_PAGES } from '../constants';

const BottomFooter = () => {
    return (
        <div className="grid grid-cols-3 gap-5 font-poppins text-xs font-semibold text-blue-850 md:text-sm lg:text-base lg:leading-6">
            {IMPORTANT_PAGES.map((item, i) => (
                <Link key={`index-${i}`} to={item.link}>
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default BottomFooter;
