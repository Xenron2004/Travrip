import React from "react";

const TryNow = () => {
  return (
    <div className="flex flex-col gap-[24px] lg:flex-row max-w-[1280px] rounded-[20px] items-center p-8 lg:p-16  justify-between w-11/12 rounded-20 bg-opacity-15  bg-[#D6E7E7] h-auto ">
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-col items-center lg:items-start gap-[10px] ">
         
          <div className="font-plusjakarta font-medium text-primary text-[32px] text-center lg:text-start max-w-[538px] w-full ">
           Limited-Time Offers on Dream Destinations!
          </div>
        </div>
        <div className="font-plusjakarta font-regular text-center lg:text-start max-w-[545px] w-full leading-[21px] tracking-[0.36px] text-[14px] text-paragraph">
        Grab exclusive deals on top destinations before they're gone! Travel smart and save
        </div>
      </div>

      <div className="flex flex-col md:flex-row   max-w-[300px] w-full  gap-4 md:gap-2 mt-4">
        <button className="w-full  md:max-w-[150px] font-plusjakarta font-normal text-base  h-[42px] rounded-lg text-white bg-primary">
          View Deals
        </button>
        <button className="w-full md:max-w-[150px] font-plusjakarta  font-normal text-base h-[42px] text-[#8E98A8] border border-[#8E98A8] rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TryNow;