import gridImg from '../../assets/Images/grid-image.jpg'
import cardImage from '../../assets/Images/card-image.png';

function Ourservices() {
  return (
    <div className=' bg-gray-75 w-full flex flex-col justify-center items-center gap-1 xs:gap-x-2.5 xs:gap-y-2 3xl:gap-3 px-5 md:px-14 lg:px-20 xl:px-25 2xl:px-28 3xl:px-182 xs:pb-23'>
      <div className="absolute left-0 hidden 2xl:block w-3/4 h-51.5 scale-x-100 bg-cover bg-center"style={{ backgroundImage: `url(${gridImg})` }}></div>
      <div className='flex flex-col xs:pt-25 py-5'>
        <div className='text-xl italic font-normal w-fit px-2 font-serif  text-white  bg-blue-850 '>Our Approach</div>
        <div className='xs:text-4xl text-2xl py-5  font-poppins font-medium  text-zinc-850 xs:w-11/12 xs:py-4 lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
          High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love.
        </div>
      </div>

      <div className='flex flex-col xs:py-14 p-5 bg-white sm:items-center  md:flex-row-reverse md:justify-between xl:w-4/5'>
      
        <img src={cardImage} alt="" className='w-full max-w-xs md:w-1/2 md:pr-10 xl:w-full xl:h-full ' />
        <div className='flex flex-col sm:w-1/2 md:pl-10 '>
          <h3 className=' text-slate-925 font-poppins font-medium text-3xl leading-34 pt-10 xs:w-full md:w-1/2 mb-5 md:mb-0'>Deeper Insight</h3>
          <p className='text-lg text-left font-normal font-roboto  text-slate-550 leading-22 pt-3 xs:w-full md:w-4/5 opacity-80'>
            Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems.
          </p>
        </div>
      </div>

      <div className='hidden lg:flex  w-full bg-white h-1 xl:w-4/5 my-5'>
      <div className='  w-1/3 bg-blue-850'></div>
      <div className='  w-1/3'></div>
      <div className='  w-1/3'></div>
      </div>
    </div>
  );
}

export default Ourservices;    

