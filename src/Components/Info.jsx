import React from 'react';
import vector from '../Images/Vector.png';
import vector1 from '../Images/Vector (1).png';
import vector2 from '../Images/Vector (2).png';
import vector3 from '../Images/Vector (3).png';


const Info = () => {
    const infoContent=[{image:vector,number:"03",content:"Awards"},
        {image:vector1,number:"100+",content:"Clients"},
        {image:vector2,number:"02 Years+",content:"Experience"},
        {image:vector3,number:"100+",content:"Projects"}
    ]
  return (
    <div>
      <div className='w-[90%] h-[680px] mx-auto mt-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:mt-0 lg:h-[280px] lg:justify-center lg:items-center lg:ml-[100px]'>
        {infoContent.map((items,index)=>{
            return (
            <div className='w-[50%] h-[120px] mt-6 relative hover:scale-110 transition-all duration-[.5s]'>
                <div className='w-[192px] h-[112px] rounded-lg bg-slate-200 flex flex-col justify-center items-center text-[25px] leading-7 font-semibold'><p className='mt-6'>{items.number}</p><p>{items.content}</p></div>
                <div className='w-[51px] h-[51px] bg-[#0C7FB0] rounded-full absolute -top-[25px] left-[70px] flex justify-center items-center'><img src={items.image} alt="" /></div>
            </div>
            )
        })}
        </div> 
      </div>
  )
}

export default Info;
