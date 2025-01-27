import React from "react";
import portfolioImg1 from "../Images/a 1.png";
import portfolioImg2 from "../Images/d 1.png";
import portfolioImg3 from "../Images/e 1.png";
import { Link } from "react-router-dom";

const Myportfolio = () => {
  const portfolioContent = [
    {
      image: portfolioImg1,
      title: "BioLite Landing Page",
      caption:
        "It is an Ecommerce website where people can buy renewable stuff at cheap prices...",
    },
    {
      image: portfolioImg2,
      title: "eshop Mobile Application",
      caption:
        "It is an Ecommerce Mobile app where people can buy renewable stuff at che...",
    },
    {
      image: portfolioImg3,
      title: "Food Ride",
      caption:
        "It is an food delivery mobile application where people can buy renewable stuff....",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-[60px] lg:mt-[80px] lg:mb-[50px]">
      <div>
        <p className="font-sans text-[#0C7FB0] text-[16px] text-center font-semibold lg:text-[18px]">
          Recent Projects
        </p>
        <h2 className="font-semibold font-sans text-center text-[30px] lg:text-[35px]">
          My Portfolio
        </h2>
      </div>
      <div className="lg:flex gap-[50px] hidden">
        {portfolioContent.map((items, index) => {
          return (
            <div className="w-[300px] h-[370px] mt-10 rounded-lg shadow-xl">
              <img src={items.image} alt="" className="rounded-t-lg" />
              <h2 className="font-sans px-2 font-medium text-[19px] my-1">
                {items.title}
              </h2>
              <p className="font-sans px-2 text-[14px]">{items.caption}</p>
              <Link to="/portfolio">
                <button className="bg-[#0C7FB0] hover:bg-[#095a87] text-white w-[96%] text-[17px] py-[4px] rounded-md ml-[6px] mt-2 font-sans">
                  View
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="lg:flex gap-[50px] lg:hidden">
        {portfolioContent.slice(0, 2).map((items, index) => {
          return (
            <div className="w-[300px] h-[370px] mt-10 rounded-lg shadow-xl">
              <img src={items.image} alt="" className="rounded-t-lg" />
              <h2 className="font-sans px-2 font-medium text-[19px] my-1">
                {items.title}
              </h2>
              <p className="font-sans px-2 text-[14px]">{items.caption}</p>
              <Link to="/portfolio">
                <button className="bg-[#0C7FB0] hover:bg-[#095a87] text-white w-[96%] text-[17px] py-[4px] rounded-md ml-[6px] mt-2 font-sans">
                  View
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <Link to="/portfolio">
          <button className="bg-[#0C7FB0] hover:bg-[#095a87] text-white font-sans text-[16px] px-[60px] py-[6px] rounded-md hover:scale-110 transition-all duration-[.3s]">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Myportfolio;