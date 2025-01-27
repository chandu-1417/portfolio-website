import React from 'react';
import vector4 from '../Images/Vector (4).png';
import vector5 from '../Images/Group.png';
import vector6 from '../Images/Group (1).png';

const Myservices = () => {
    const serviceContent=[{image:vector4,title:"Website Design",caption:"I create website design as per the need of my clients."},
        {image:vector5,title:"Application Design",caption:"I create app design as per the need of my clients."},
        {image:vector6,title:"Dashboard Design",caption:"I create dashboard design as per the need of my clients."}]

  return (
    <div className='flex flex-col items-center mt-6 lg:mt-10'>
      <div>
        <p className='font-sans text-[#0C7FB0] text-[16px] text-center font-semibold lg:text-[18px]'>Services | Provide</p>
        <h2 className='font-semibold font-sans text-center text-[30px] lg:text-[35px]'>My Services</h2>
      </div>
      <div className='lg:flex gap-[150px]'>
      {serviceContent.map((items,index)=>{
            return (
            <div className='w-[50%] h-[140px] mt-[50px] relative hover:scale-110 transition-all duration-[.5s]'>
                <div className='w-[192px] h-[140px] lg:w-[230px] rounded-lg bg-slate-200 flex flex-col justify-center items-center text-[19px] leading-7 font-sans font-semibold'><p className='mt-2 mb-2'>{items.title}</p><p className='text-center leading-4 text-[14px] px-2 text-slate-600'>{items.caption}</p></div>
                <div className='w-[51px] h-[51px] rounded-full absolute -top-[25px] left-[70px] lg:left-[88px] flex justify-center items-center'><img src={items.image} alt="" /></div>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default Myservices
