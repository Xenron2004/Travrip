import React from 'react';

const TextBlock = ({ text1, heading, subheading }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className='flex gap-[12px] items-center '>
        <div className='w-7 h-[1.5px] bg-primary'></div>
        <p className="text-[15px] capitalize  font-plusjakarta font-normal text-primary">{text1}</p>
        <div className='w-7 h-[1.5px] bg-primary'></div>
      </div>
     
      <div className='flex flex-col gap-4'></div>
      <h2 className="text-[40px] font-plusjakarta max-w-[450px] w-full text-sectionHeading font-medium">{heading}</h2>
      <p className="text-[15px] max-w-[620px] w-full font-medium font-plusjakarta text-subheading ">{subheading}</p>
    </div>
  );
};

export default TextBlock;
