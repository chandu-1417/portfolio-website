import React from 'react';
import chooseImg1 from '../Images/Group 30.png';
import chooseImg2 from '../Images/Group (2).png';
import chooseImg3 from '../Images/Group 29.png';


const Choose = () => {
    const chooseContent=[{image:chooseImg1,title:"Team Player",caption:"I’m good at working with team where people get and give feedbacks."},
              {image:chooseImg2,title:"Creative Design",caption:"I solve problems of my clients by making creative & easy to use designs."}
          ,{image:chooseImg3,title:"Responsive",caption:"I update my with progress of the projects and deliver them before the deadline."}]
  return (
    <div className='flex flex-col items-center mt-[60px] lg:mt-[20px]'>
      <div>
        <p className='font-sans text-[#0C7FB0] text-[17px] text-center font-semibold lg:text-[18px]'>Why You Should Choose Me</p>
        <h2 className='font-semibold font-sans text-center text-[40px] lg:text-[35px]'>Why Choose Me</h2>
      </div>
      <div className='lg:flex gap-[50px]'>
      {chooseContent.map((items,index)=>{
            return (
                <div className='mt-[100px] relative lg:mt-[70px] hover:scale-105 transition-all duration-[.3s]'>
                    <div className='w-[295px] h-[211px] rounded-lg bg-slate-200 flex flex-col justify-center items-center text-[19px] leading-7 font-sans font-semibold'><p className='mt-10 mb-4 text-[30px]'>{items.title}</p><p className='text-center leading-6 text-[17px] px-2 text-slate-600'>{items.caption}</p></div>
                    <div className='w-[77px] h-[77px] rounded-full absolute -top-[35px] left-[105px] flex justify-center items-center'><img src={items.image} alt="" /></div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Choose;
