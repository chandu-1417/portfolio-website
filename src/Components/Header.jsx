import React from 'react';
import rectangle from '../Images/Rectangle 2.png';
import headerImage from '../Images/Friendly handsome man pointing fingers left at advertisement.png';
import headerIcon from '../Images/Group 20.png';
import headerIcon2 from '../Images/Group 19.png';
import headerIcon3 from '../Images/Group 2.png';
import headerIcon4 from '../Images/Group 22.png';
import headerIcon5 from '../Images/Group 21.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='md:flex md:flex-row-reverse md:px-9 relative'>
      <div className='w-[90%] h-[420px] m-auto relative '>
        <img src={headerImage} alt=""className='absolute z-10 bottom-0 right-[55px]'/>
        <img src={rectangle} alt="" className='absolute bottom-0 right-[50px] z-0'/>
        <img src={headerIcon} alt="" className='absolute top-[20%] left-6 md:left-[320px] lg:left-[650px]'/>
        <img src={headerIcon2} alt="" className='absolute bottom-0 right-[10px]'/>
        <img src={headerIcon3} alt="" className='absolute right-[20px] top-[15%]'/>
        <img src={headerIcon4} alt="" className='absolute bottom-[50px] left-5 md:left-[340px] lg:left-[660px]'/>
      </div>
      <div><img src={headerIcon5} alt="" className='hidden md:block lg:w-[130px] lg:absolute lg:left-[580px] lg:bottom-[90px]'/></div>
      <div className='flex flex-col items-center mt-2 leading-[40px] md:items-start md:justify-center md:pl-[50px] md:pr-[200px]'>
        <p className='text-[20px] text-[#0C7FB0] font-serif font-medium lg:text-[22px]'>Hello, I'm</p>
        <h2 className='text-[40px] font-semibold font-sans'>Hassan Ali</h2>
        <h3 className='text-[25px] text-[#0C7FB0] font-serif font-medium'>UI/UX Designer</h3>
        <p className='leading-6 text-[16px] text-center font-sans px-6 mt-3 text-[#06182092] md:text-left md:px-0'>I solve problems of my clients by translating complex ideas into designs that look beautiful and are easy to use.</p>
        <div className='mt-5 flex gap-3'>
          <Link to='/contactme'>
            <button className='text-[20px] font-sans bg-[#0C7FB0] hover:bg-[#095a87] text-white px-6 rounded-lg'>Hire Me</button>
          </Link>
          <Link to='/portfolio'>
            <button className='text-[20px] font-sans text-[#0C7FB0] hover:text-[#095a87] hover:border-[#095a87] px-6 border-[1px] border-[#0C7FB0] rounded-lg'> See Portfolio</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
