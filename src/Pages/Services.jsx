import React from 'react';
import vector4 from '../Images/Vector (6).png';
import vector5 from '../Images/Group (3).png';
import vector6 from '../Images/Group (4).png';
import Testimonials from '../Components/Testimonials';


const Services = () => {
    const serviceContent=[{image:vector4,title:"Website Design"},
        {image:vector5,title:"Application Design"},
        {image:vector6,title:"Dashboard Design"}]

  return (
    <>
      <div className='mt-10'>
        <p className='font-sans text-[#0C7FB0] text-[16px] text-center font-semibold lg:text-[18px]'>Services | Provide</p>
        <h2 className='font-semibold font-sans text-center text-[30px] lg:text-[35px]'>My Services</h2>
      </div>
      <div className='lg:hidden'>
        {serviceContent.map((items,index)=>{
            return(
                <div className='h-[380px] bg-slate-200 my-7 gap-2 flex flex-col justify-center items-center'>
                    <img src={items.image} alt="" className='w-[150px]'/>
                    <h2 className='font-sans font-semibold text-[20px]'>{items.title}</h2>
                    <p className='text-center px-[70px]'>Innovative website design that allows you to create stkly and easily develop high-quality, interactive websites that are optimized for search engines and mobile devices. </p>
                </div>
            )
        })}
      </div>
      <div className='hidden lg:block'>
                <div className='h-[330px] w-[75%] mx-auto bg-slate-200 my-7 gap-2 flex justify-center items-center rounded-lg'>
                    <div className='w-40%'>
                        <img src={vector4} alt="" className='w-[220px]'/>
                    </div>
                    <div className='w-[60%] pl-10 flex flex-col gap-2'>
                        <h2 className='font-sans font-semibold text-[25px] '>Website Design</h2>
                        <p className='text-left pr-[100px] text-[17px]'>Innovative website design that allows you to create stunning websites in an easy and intuitive way. With Ethereum, you can quickly and easily develop high-quality, interactive websites that are optimized for search engines and mobile devices. </p>
                    </div>
                </div>
                <div className='h-[330px] w-[75%] mx-auto bg-slate-200 my-7 gap-2 flex justify-center items-center rounded-lg'>
                    <div className='w-[60%] pl-10 flex flex-col gap-2'>
                        <h2 className='font-sans font-semibold text-[25px] '>Application Design</h2>
                        <p className='text-left pr-[100px] text-[17px]'>Innovative app design that allows you to create stunning websites in an easy and intuitive way. With Ethereum, you can quickly and easily develop high-quality, interactive websites that are optimized for search engines and mobile devices. I create app design as per the need of my clients. </p>
                    </div>
                    <div className='w-40%'>
                        <img src={vector5} alt="" className='w-[220px]'/>
                    </div>
                </div>
                <div className='h-[330px] w-[75%] mx-auto bg-slate-200 my-7 gap-2 flex justify-center items-center rounded-lg'>
                    <div className='w-40%'>
                        <img src={vector6} alt="" className='w-[220px]'/>
                    </div>
                    <div className='w-[60%] pl-10 flex flex-col gap-2'>
                        <h2 className='font-sans font-semibold text-[25px] '>Dashboard Design</h2>
                        <p className='text-left pr-[100px] text-[17px]'>Innovative dashboard design that allows you to create stunning websites in an easy and intuitive way. With Ethereum, you can quickly and easily develop high-quality, interactive websites that are optimized for search engines and mobile devices. </p>
                    </div>
                </div>
        </div>

      <div className='flex gap-3 justify-center mt-8 mb-[80px]'>
            <button className='text-[20px] font-sans bg-[#0C7FB0] text-white px-6 rounded-md'>Hire Me</button>
            <button className='text-[20px] font-sans text-[#0C7FB0] px-6 border-[1px] border-[#0C7FB0] rounded-md'> See Portfolio</button>
      </div>
      <Testimonials/>
    </>
  )
}

export default Services;
