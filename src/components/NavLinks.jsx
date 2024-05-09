import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const NavLinks = () => {
    return (
        <ul className="flex flex-col gap-3 3xl:gap-y-7 text-lg lg:leading-8 2xl:text-xl 3xl:text-2xl 3xl:leading-7">
            {NAV_ITEMS.map((item, i) => {
                return (
                    <Link to={item.link} key={`index-${i}`}>
                        {item.title}
                    </Link>
                );
            })}
        </ul>
    );
};
export default NavLinks;
