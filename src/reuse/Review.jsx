import React from "react";
// import stars from "../assets/stars.svg"
// import fourstars from "../assets/fourstars.svg"

const Feature = ({ image,  place, review, reviewimg, name, position, customerimg }) => {
  return (
    <div className="bg-white rounded-lg gap-[16px] justify-between   flex flex-col items-start ">
      <img
        src={image}
        alt=""
        className="w-full max-w-[411px] h-full max-h-[304px] mb-2"
      />
      <div className="flex flex-col items-start gap-4 ">
        <div className="flex  w-full max-w-[500px] items-center  justify-between">
          <div className="font-plusjakarta font-normal  text-[14px] text-paragraph ">{place}</div>
          <div className="w-[100px] h-[15px]">
            <img src={reviewimg} alt="reviewimg" />
          </div>
        </div>

        <p className="text-[14px] tracking-[-2%] max-w-[381px] w-full text-paragraph text-start font-plusjakarta font-normal  mb-3">
          {review}
        </p>

        <div className="flex items-center justify-start text-start gap-2  w-full">
            <div className="w-[50px] h-full "><img src={customerimg} alt="" /></div>
            <div className="flex flex-col w-full max-w-[170px] h-auto">
                <div className="text-[13px] font-plusjakarta font-medium text-sectionHeading ">{name}</div>
                <div className="text-paragraph text-[12px] text-start font-plusjakarta font-normal ">{position}</div>
            </div>
        </div>
      
      </div>
    </div>
  );
};

export default Feature;
