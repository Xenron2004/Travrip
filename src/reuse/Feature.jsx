import React from 'react';

const Feature = ({ heading, paragraph }) => {
  return (
    <div className=" flex flex-col  max-w-[628px] w-full  text-left">
      <h2 className="text-2xl tracking-[-2%] leading-[31.2px] font-medium font-plusjakarta text-primary mb-4">{heading}</h2>
      <p className="text-paragraph leading-[22.5px] tracking-[-2%]  font-plusjakarta font-normal text-[15px]">{paragraph}</p>
    </div>
  );
};

export default Feature;
