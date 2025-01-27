import React from 'react';
import ManStanding from '../Images/Young happy man standing isolated.png'

const Aboutme = () => {
  return (
    <div>
      <div className='bg-slate-100 flex flex-col justify-center items-center lg:flex-row lg:py-6 lg:justify-normal'>
         <div className='lg:w-[40%] lg:flex lg:justify-end lg:pr-8'><img src={ManStanding} alt="" className='h-[377px] w-[302px]' /></div>
      <div className='flex flex-col items-center lg:w-[40%] lg:items-start lg:mt-[40px]'>
        <h2 className='text-[38px] font-sans font-semibold'>About Me</h2>
        <h2 className='lg:text-[30px] text-[20px] font-semibold text-center px-[90px] leading-8 text-slate-600 lg:text-left lg:px-[0px] lg:text-[#0C7FB0]'>02 Years Experience in UI/UX Designing</h2>
        <p className='text-center px-7 py-3 text-slate-500 font-sans lg:text-left lg:px-[0px]'>Hello, I'm a UI/UX designer named Hassan Ali. I'm an expert in creating Interface Wireframes, (UI) User Interface Design, (UX) User Experience Design, Prototypes etc. In my work, I constantly strive to reduce highly complicated ideas to clear, approachable, simple-to-use, and visually appealing applications. I think making things that are beautiful and satisfying to use is crucial.</p>
      </div>
      </div>
    </div>
  )
}

export default Aboutme;
