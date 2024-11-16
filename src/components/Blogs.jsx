import React from "react";
import TextBlock from "../reuse/TextBlock";
import Blog from "../reuse/Blog";
import planning from "../assets/Planning Last.jpg";
import packing from "../assets/PackingTips.jpg";
import travelacc from "../assets/Travel Acc.jpg";

const Blogs = () => {
  const BlogsData = [
    {
      image: packing,
      heading: "Top 10 Packing Tips for Minimalist Travelers",
      date: "Nov 13, 2023",
      blog: "Traveling light is more than just freeing up suitcase space; it’s a way to travel more flexibly and focus on the experience rather than the luggage.",
    },
    {
      image: travelacc,
      heading: "5 Must-Have Travel Accessories for Stress-Free Tips",
      date: "Nov 13, 2023",
      blog: "Traveling can be stressful, but packing the right accessories can make all the difference. From a versatile travel pillow to these essentials help you stay comfortable ",
    },
    {
      image: planning,
      heading: "Bali, Island of Indonesia",
      date: "Nov 13, 2023",
      blog: "Planning a spontaneous trip can be thrilling but requires a bit of strategy. Start by focusing on flexible booking options for flights and accommodations. Prioritize must-see ...",
    },
  ];

  return (
    <div className="flex flex-col items-start  gap-[56px] max-w-[1280px] w-11/12 h-auto">
      <div className="flex items-start">
        <TextBlock
          text1="BLOGS"
          heading="Travel Tips & Inspiration"
          subheading="Stay updated with the latest insights and inspiration."
        />
      </div>
      {/* thrre blogs */}
      <div className="flex flex-col items-center md:gap-6 gap-10">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-[20px] lg:grid-cols-3 max-w-[1280px] w-full items-center justify-between ">
        {BlogsData.map((blog, index) => (
          <Blog
            key={index}
            image={blog.image}
            heading={blog.heading}
            date={blog.date}
            blog={blog.blog}
          />
        ))}
      </div>
      <button className="w-full max-w-[140px] h-[42px] rounded-lg font-plusjakarta text-base font-normal text-white bg-primary">
            View More
            </button>
      </div>
    
    
    </div>
  );
};

export default Blogs;
