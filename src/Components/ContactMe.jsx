import React from 'react';

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] w-full">
      <div>
        <p className="font-sans text-[#0C7FB0] text-[17px] text-center font-semibold lg:text-[18px]">
          Have something in your mind?
        </p>
        <h2 className="font-semibold font-sans text-center text-[40px] lg:text-[35px]">
          Contact Me
        </h2>
      </div>
      <div className='flex flex-col'>
        <input type="text" placeholder='Full Name' className='w-[380px] h-[48px] rounded-md mt-6 bg-gray-200 px-4 font-sans outline-none lg:w-[580px]'/>
        <input type="email" placeholder='Email' className='w-[380px] h-[48px] rounded-md mt-4 bg-gray-200 px-4 font-sans outline-none lg:w-[580px]'/>
        <input type="text" placeholder='Message' className='w-[380px] h-[148px] rounded-md mt-4 bg-gray-200 px-4 font-sans outline-none lg:w-[580px]'/>
      </div>
      <div className='mt-8'>
        
        <button className='bg-[#0C7FB0] hover:bg-[#095a87] hover:scale-110 transition-all duration-[.3s] text-white font-sans text-[16px] px-[60px] py-[9px] rounded-md'>Submit</button>
        
      </div>
    </div>
  )
}

export default ContactMe;
