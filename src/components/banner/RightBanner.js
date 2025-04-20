import React from 'react';
import { bannerImg2 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[80%] h-auto lgl:w-[500px] lgl:h-[680px] object-contain z-10" // Using object-contain to ensure the image maintains aspect ratio
        src={bannerImg2}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[80%] h-[50%] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
