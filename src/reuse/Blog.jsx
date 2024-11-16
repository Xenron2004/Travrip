import React from 'react'

const Blog = ({image, heading, date, blog}) => {
  return (
    <div className="bg-white rounded-lg gap-[8px] shadow-md  flex flex-col items-start text-center">
    <img src={image} alt={heading} className="w-full max-w-[411px] h-full max-h-[304px] mb-2" />
     <div className='flex flex-col items-start px-[15px] py-[8px]'>
    <p className="text-paragraph text-[14px] font-plusjakarta font-normal  tracking-[-2%] mb-2">{date}</p>
    <h3 className="text-[20px] text-start text-sectionHeading font-plusjakarta font-medium mb-2">{heading}</h3>
    <p className="text-[14px] tracking-[-2%] max-w-[381px] w-full text-paragraph text-start font-plusjakarta font-normal  mb-3">{blog}</p>
    </div>
   
  </div>
  )
}

export default Blog
