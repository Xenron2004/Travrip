// import React from 'react';
// import { HiMiniArrowUpRight } from "react-icons/hi2";

// const Card = ({ image, heading, paragraph, price, buttonText, footerText }) => {
//   return (
//     <div className="bg-white rounded-lg gap-[8px]   flex flex-col items-start text-center">
//       <img src={image} alt={heading} className="w-full max-w-[411px] h-full max-h-[400px] mb-4" />
//       <h3 className="text-[20px] text-sectionHeading font-plusjakarta font-medium mb-2">{heading}</h3>
//       <p className="text-paragraph text-[14px] font-plusjakarta font-medium tracking-[-2%] mb-2">{paragraph}</p>
//       <p className="text-[20px] tracking-[-2%] text-sectionHeading font-plusjakarta font-medium  mb-3">{price}</p>

//       <div className='flex items-center justify-center gap-[12px]'>
//       <button className=" border border-primary text-[14px] flex gap-3 items-center font-plusjakarta  hover:text-white text-sectionHeading transition-colors duration-300 py-2 px-4 rounded-[24px] mb-2 hover:bg-primary">
//         {buttonText} <HiMiniArrowUpRight/> </button>
//       <p className="text-[14px] font-plusjakarta font-normal text-paragraph">{footerText}</p>
//       </div>
//     </div>
//   ); 
// };

// export default Card;













import React from 'react';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { useInView } from 'react-intersection-observer';

const Card = ({ image, heading, paragraph, price, buttonText, footerText,delay }) => {
  return (
    <div  className={`bg-white rounded-lg gap-[8px] flex flex-col items-start text-center transform opacity-0 animate-fade-in transition duration-500`}
    style={{ animationDelay: `${delay}s` }}  >
      <img src={image} alt={heading} className="w-full max-w-[411px] h-full max-h-[400px] mb-4" />
      <h3 className="text-[20px] text-sectionHeading font-plusjakarta font-medium mb-2">{heading}</h3>
      <p className="text-paragraph text-[14px] font-plusjakarta font-medium tracking-[-2%] mb-2">{paragraph}</p>
      <p className="text-[20px] tracking-[-2%] text-sectionHeading font-plusjakarta font-medium  mb-3">{price}</p>

      <div className='flex items-center justify-center gap-[12px]'>
      <button className=" border border-primary text-[14px] flex gap-3 items-center font-plusjakarta  hover:text-white text-sectionHeading transition-colors duration-300 py-2 px-4 rounded-[24px] mb-2 hover:bg-primary">
        {buttonText} <HiMiniArrowUpRight/> </button>
      <p className="text-[14px] font-plusjakarta font-normal text-paragraph">{footerText}</p>
      </div>
    </div>
  ); 
};

export default Card;
