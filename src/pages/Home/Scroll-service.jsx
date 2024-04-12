import Arrow from '../../assets/HomeImg/arrow.png';
import { NavLink } from 'react-router-dom';

function Scrollservice() {
    return (
        <section>
            <div className="w-full flex justify-center items-center pt-5 pb-12 sm:pb-5 z-10">
                <NavLink
                    to="/"
                    className="flex items-center justify-center cursor-pointer gap-8 xs:gap-14 2xl:gap-16 py-1 xl:py-2 pl-5 xl:pl-12 2xl:pl-16 bg-[#F4F8FF] rounded-full hover:bg-gradient-to-r hover:from-white hover:to-pink-100">
                    <h1 className="text-blue-500 text-xs sm:text-sm md:text-base xl:text-xl font-semibold hover:scale-110 transition-all duration-300">
                        ALL OUR SERVICES
                    </h1>
                    <div className="flex items-center justify-center rounded-full p-3.5 sm:p-4 xl:p-6 mr-1 xs:mr-1.5 xl:mr-2 bg-blue-700 hover:bg-gradient-to-r  hover:from-blue-500 hover:from-10% hover:to-pink-600 transition-all duration-300">
                        <img src={Arrow} alt="" className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-100" />
                    </div>
                </NavLink>
            </div>
        </section>
    );
}

export default Scrollservice;
