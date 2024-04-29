import LeftArrow from '../../assets/icons/arrow-left.svg';
import RightArrow from '../../assets/icons/arrow-right.svg';
function Arrowbtn() {
    return (
        <div>
            <div className="flex items-center md:gap-5  gap-2">
                <div className=" flex-1 h-px opacity-70" />
                <button
                    className="flex justify-center items-center  cursor-pointer rounded-full border-none bg-fade-white w-16 h-16"
                    type="button">
                    <img src={LeftArrow} alt="Left-Arrow" className="w-16 h-16" />
                </button>
                <button
                    className=" w-11 h-11 rounded-full border-none bg-blue-700 flex items-center justify-center align-middle"
                    type="button">
                    <img src={RightArrow} alt="Right-Arrow" className=" text-center lg:w-6 lg:h-6 sm:w-4 sm:h-4" />
                </button>
            </div>
        </div>
    );
}

export default Arrowbtn;
