import React from "react";

import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <div className=" flex  items-center  justify-center  px-5">
      <div className="  mt-8 md:mt-[60px]  relative z-10 flex flex-col gap-9 text-white max-w-[1280px]  w-full">
        <div className="flex flex-col gap-3 md:flex-row max-w-[1280px] w-full items-end justify-between ">
          <div className="text-[40px] md:text-[54px] font-semibold  leading-[48px] md:leading-[64.8px]  font-plusjakarta  ">
            Discover Your Next{" "}
            <br className="text-[54px] font-semibold  leading-[64.8px] font-plusjakarta md:text-[54px]" />{" "}
            Handpicked Journey
          </div>
          <div className="text-16px text-left  font-plusjakarta  font-normal max-w-[516px] tracking-[1%] w-full md:text-right">
            From serene beaches to bustling cities, Travrip offers exclusive
            travel experiences tailored just for you. Dive into a world of
            discovery, where every adventure is crafted to perfection
          </div>
        </div>

        <div className=" mt-0  md:mt-4">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
