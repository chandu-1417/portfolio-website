import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import stars from '../Images/Stars.png';
import testimonialImg1 from '../Images/Ellipse 16.png';
import testimonialImg2 from '../Images/Ellipse 17.png';
import testimonialImg3 from '../Images/Ellipse 18.png';
import vector5 from '../Images/Vector (5).png';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const clients = [
    {
      image: testimonialImg1,
      name: "Stefhan Gill",
      stars: stars,
      caption: "He’s very good at working with our team and i’m glad that he joined our team.He’s very good at working with our team and i’m glad that he joined our team.",
      vector: vector5,
    },
    {
      image: testimonialImg2,
      name: "Ana Taylor",
      stars: stars,
      caption: "He’s very good at working with our team and i’m glad that he joined our team.He’s very good at working with our team and i’m glad that he joined our team.",
      vector: vector5,
    },
    {
      image: testimonialImg3,
      name: "John Steve",
      stars: stars,
      caption: "He’s very good at working with our team and i’m glad that he joined our team.He’s very good at working with our team and i’m glad that he joined our team.",
      vector: vector5,
    },
    {
        image: testimonialImg3,
        name: "Stefhan Gill",
        stars: stars,
        caption: "He’s very good at working with our team and i’m glad that he joined our team.He’s very good at working with our team and i’m glad that he joined our team.",
        vector: vector5,
      },
      
  ];

  return (
    <div className="flex flex-col items-center mt-[60px] w-full">
      <div>
        <p className="font-sans text-[#0C7FB0] text-[17px] text-center font-semibold lg:text-[18px]">
          Client's Feedback
        </p>
        <h2 className="font-semibold font-sans text-center text-[40px] lg:text-[35px]">
          Testimonials
        </h2>
      </div>

      <div className="w-full lg:w-[80%] mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {clients.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-200 w-[300px] h-[270px] mx-auto relative rounded-lg flex flex-col items-center justify-center mt-[65px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-[111px] absolute -top-[55px]"
                />
                <h1 className="font-sans font-medium text-[23px] mt-8 mb-1">
                  {item.name}
                </h1>
                <img src={item.stars} alt="" className="mb-3" />
                <p className="font-sans px-5 text-center text-[13px]">
                  {item.caption}
                </p>
                <img src={item.vector} alt="" className="absolute top-3 right-3" />
                <img src={item.vector} alt="" className="absolute top-3 right-[50px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='mt-8'>
        <Link to='/services'>
          <button className='bg-[#0C7FB0] hover:bg-[#095a87] text-white font-sans text-[16px] px-[60px] py-[6px] rounded-md hover:scale-110 transition-all duration-[.3s]'>View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
