import React from 'react';
import portfolioImg1 from '../Images/a 1.png';
import portfolioImg2 from '../Images/d 1.png';
import portfolioImg3 from '../Images/e 1.png';
import portfolioImg4 from '../Images/a 1.png';
import portfolioImg5 from '../Images/d 1.png';
import ContactMe from '../Components/ContactMe';



const Portfolio = () => {
    const portfolioContent=[{image:portfolioImg1,title:"BioLite Landing Page"},
                            {image:portfolioImg2,title:"eShop Mobile Application"},
                            {image:portfolioImg3,title:"Food Ride"},
                            {image:portfolioImg4,title:"BioLite Landing Page"},
                            {image:portfolioImg5,title:"eShop Mobile Application"}]

  return (
    <div>
      <div>
        <div className='mt-10'>
            <p className='font-sans text-[#0C7FB0] text-[16px] text-center font-semibold lg:text-[18px]'>Recent Projects</p>
            <h2 className='font-semibold font-sans text-center text-[30px] lg:text-[35px]'>My Portfolio</h2>
        </div>
       <div className='hidden lg:block'>
        {portfolioContent.map((items,index)=>{
            return(
                index%2===0 ? 
            <div>
                <div className='h-[330px] w-[75%] mx-auto bg-slate-200 my-7 gap-2 flex justify-center items-center rounded-lg'>
                    <div className='w-40%'>
                        <img src={items.image} alt="" className='w-[320px]'/>
                    </div>
                    <div className='w-[60%] pl-10 flex flex-col gap-2'>
                        <h2 className='font-sans font-semibold text-[25px] '>{items.title}</h2>
                        <p className='text-left pr-[100px] text-[17px]'>It is an Ecommerce website where people can buy renewable stuff at cheap prices...Innovative website design that allows you to create stunning websites in an easy and intuitive way. With Ethereum, you can quickly and easily develop high-quality, interactive websites that are optimized for search engines and mobile devices. </p>
                    </div>
                </div>
            </div>:
            <div className='h-[330px] w-[75%] mx-auto bg-slate-200 my-7 gap-2 flex justify-center items-center rounded-lg'>
                <div className='w-[60%] pl-10 flex flex-col gap-2'>
                    <h2 className='font-sans font-semibold text-[25px] '>{items.title}</h2>
                    <p className='text-left pr-[100px] text-[17px]'>It is an Ecommerce website where people can buy renewable stuff at cheap prices...Innovative website design that allows you to create stunning websites in an easy and intuitive way. With Ethereum, you can quickly and easily develop high-quality, interactive websites that are optimized for search engines and mobile devices. </p>
                </div>
                <div className='w-40%'>
                    <img src={items.image} alt="" className='w-[320px]'/>
                </div>
            </div>
            )
        })}
       </div>
        <div className='lg:hidden'>
            {portfolioContent.slice(0,3).map((items,index)=>{
                return(
                    <div className='py-[20px] w-100% bg-slate-200 my-7 gap-2 flex flex-col  px-8'>
                        <img src={items.image} alt="" className='w-full'/>
                        <h2 className='font-sans font-semibold text-[25px] text-left'>{items.title}</h2>
                        <p className='text-left px-[0px]'>It is an Ecommerce website where people can buy renewable stuff at cheap prices...Innovative website design that allows you to create stunning websites in an easy and intuitive way. With Ethereum, you can quickly and easily develop high-quality, interactive websites that are optimized for search engines and mobile devices. </p>
                    </div>
                )
            })}
        </div>
      </div>
      <ContactMe/>
    </div>
  )
}

export default Portfolio;
