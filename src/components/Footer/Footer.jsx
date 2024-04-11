import { Link } from 'react-router-dom';
import { FooterNavItems } from '../../constants/constant';
import BottomFooter from './BottomFooter';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className='bg-[#F7F7F7] px-5 w-[100vw] md:w-full md:px-[56px] md:pt-20 lg:px-[80px] lg:pt-[100px] xl:px-[100px] 2xl:px-[120px] 2xl:pt-[120px] 3xl:px-[182px]'>


            <section className='flex flex-col gap-10 items-start text-[#2F3750] pb-10 pt-14 mb-10 border-b-2 border-opacity-80 md:flex-row md:pb-20 lg:pb-[100px] 2xl:pb-[120px]'>

                <div className="flex items-center md:w-[418px]">
                    <ul className='flex flex-col gap-3 text-lg lg:leading-8  2xl:text-[18px] 3xl:text-[24px]'>
                        {
                            FooterNavItems.map((item,index) => {
                                return(
                                    <Link to={item.href} key={index}>{item.nav}</Link>
                                )
                            })
                        }

                    </ul>
                </div>


                <div className="text-2xl flex flex-col gap-9 md:w-[508px]">
                    <div className='lg:leading-7'>
                        <p className='text-[#555555] text-[12px] font-poppins font-semibold  lg:text-sm '>WRITE TO US</p>
                        <p className="text-lg lg:leading-7 2xl:text-[18px] 3xl:text-[24px]">hello@yumelabs.com</p>
                    </div>
                    <div className='lg:leading-7'>
                        <p className='text-[#555555] text-[12px] font-poppins font-semibold  lg:text-sm lg:leading-7'>ADDRESS</p>
                        <p className="text-lg  2xl:text-[18px] 3xl:text-[24px]">4th Floor, Qubical Coworking Space, <br /> Kormanagala Bangalore - 560033 Karnataka, India
                            <span className='block mt-7'>+91 9562332441</span>
                        </p>
                    </div>
                </div>


                <div className='md:w-[298px] w-[208px] mb-10'>
                    <SocialLinks />
                </div>


            </section>


            {/* Bottom Footer Component  */}
            <BottomFooter />

        </footer>
    )
}

export default Footer