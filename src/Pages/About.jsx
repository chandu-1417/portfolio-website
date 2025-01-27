import React from 'react';
import ManStanding from '../Images/Young happy man standing isolated.png'
import Info from '../Components/Info';
import Choose from '../Components/Choose';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div>
      <div className='mb-5 mt-12'>
        <p className='font-sans text-[#0C7FB0] text-[16px] text-center font-semibold lg:text-[18px]'>My Introduction</p>
        <h2 className='font-semibold font-sans text-center text-[30px] lg:text-[35px]'>About Me</h2>
      </div>
      <div className='bg-slate-100 flex flex-col justify-center items-center lg:py-7'>
         <div className=' lg:flex lg:justify-end lg:pr-8'><img src={ManStanding} alt="" className='h-[377px] w-[302px]' /></div>
        <div className='flex flex-col items-center lg:mt-[20px]'>
            <h2 className='text-[30px] text-center px-[90px] leading-8 text-slate-600 lg:text-left lg:px-[0px] lg:text-[#0C7FB0]'>02 Years Experience in UI/UX Designing</h2>
            <p className='text-center px-7 py-3 text-slate-500 font-sans lg:text-center lg:px-[300px]'>Hello, I'm a UI/UX designer named Hassan Ali. I'm an expert in creating Interface Wireframes, (UI) User Interface Design, (UX) User Experience Design, Prototypes etc. In my work, I constantly strive to reduce highly complicated ideas to clear, approachable, simple-to-use, and visually appealing applications. I think making things that are beautiful and satisfying to use is crucial.</p>
        </div>
      </div>
      <Info/>
      <Choose/>
      <div className='flex gap-3 justify-center mt-12 mb-[80px]'>
        <Link to='/contactme'>
            <button className='text-[20px] font-sans bg-[#0C7FB0] hover:bg-[#095a87] text-white px-6 rounded-md'>Hire Me</button>
        </Link>
        <Link to='/portfolio'>
            <button className='text-[20px] font-sans text-[#0C7FB0] px-6 border-[1px] border-[#0C7FB0] rounded-md'> See Portfolio</button>
        </Link>
      </div>
    </div>
  )
}

export default About;
