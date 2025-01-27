import React, { useState } from 'react';
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { FiFacebook } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [text, setText] =useState('');
  const handleText=()=>{
    setText('');
    alert("Thank You For Joining.")
  }

  return (
    <div className='bg-[#061820] text-white flex flex-col font-sans lg:px-[120px] lg:py-10 mt-10'>
      <div className='flex lg:justify-between lg:flex-row p-5 flex-col gap-3 leading-7'>
        <div>
            <h1 className='font-medium text-[21px]'>Customer Support</h1>
            <p className='text-[14px]'>Contact me and get consultation on your design.</p>
        </div>
        <div>
            <h1 className='font-medium text-[21px]'>Get Deals & Reveals</h1>
            <p className='text-[14px]'>Sign up for the Email Newsletter</p>
        </div>
        <div>
            <input type="email" className='w-[240px] py-2 px-4 outline-none text-black' value={text} placeholder='Enter Email' onChange={(e)=>setText(e.target.value)}/>
            <button className='bg-[#0C7FB0] px-7 py-2' onClick={handleText}>Join</button>
        </div>
      </div>
      <div className='flex justify-between lg:my-8 px-5 lg:flex-row flex-col'>
        <div className='flex flex-col justify-center gap-1'>
            <h1 className='font-bold text-[#0C7FB0] text-[20px]'>HASSAN ALI</h1>
            <h1>UI/UX DESIGNER</h1>
        </div>
        <div className='py-2 lg:hidden'>
          <h2>SERVICES</h2>
          <h2>ABOUT</h2>
          <h2>CONTACT</h2>
          <h2>SOCIAL MEDIA</h2>
          <div className='flex gap-4 py-2'>
                <FiFacebook/>
                <IoLogoTwitter/>
                <PiYoutubeLogoBold/>
                <FaInstagram/>
            </div>
        </div>
        <div className='lg:flex lg:flex-col hidden'>
            <h2 className='font-semibold pb-1'>SERVICES</h2>
            <p className='text-[14px]'>Web Design</p>
            <p className='text-[14px]'>App Design</p>
            <p className='text-[14px]'>Dashboard Design</p>
        </div>
        <div className='lg:flex lg:flex-col hidden'>
            <h2 className='font-semibold pb-1'>ABOUT</h2>
            <p className='text-[14px]'>Blog</p>
            <p className='text-[14px]'>Mission</p>
            <p className='text-[14px]'>My Story</p>
        </div>
        <div className='lg:flex lg:flex-col hidden'>
            <h2 className='font-semibold pb-1'>CONTACT</h2>
            <p className='text-[14px] flex items-center gap-2'><PiPhoneCall className='text-[18px]'/>+92 XXXXXXXXXX</p>
            <p className='text-[14px] flex items-center gap-2'><MdOutlineMailOutline className='text-[18px]'/>hassanali.ui/ux@gmail.com</p>
            <p className='text-[14px] flex items-center gap-2'><TiSocialSkypeOutline className='text-[18px]'/>XXXXXXXXXXX</p>
        </div>
        <div className='lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-2 hidden'>
            <h1 className='font-semibold'>SOCIAL MEDIA</h1>
            <div className='flex gap-2'>
                <FiFacebook/>
                <IoLogoTwitter/>
                <PiYoutubeLogoBold/>
                <FaInstagram/>
            </div>
        </div>
      </div>
      <div className='mt-5 mb-4 flex justify-center'>
        <p className='text-[12px] lg:text-end text-center px-8'>Copyright 2023 Inc. All rights reserved. | Terms of Use | Updated Privacy Policy | Accessibility</p>
      </div>
    </div>
  )
}

export default Footer;
