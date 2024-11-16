import React from "react";
import TextBlock from "../reuse/TextBlock";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FiArrowLeftCircle } from "react-icons/fi";
import { BsArrowRightCircle } from "react-icons/bs";
import reviewone from "../assets/reviewone.jpg";
import stars from "../assets/stars.svg";
import reviewerone from "../assets/reviewerone.png";
import reviewtwo from "../assets/reviewtwo.jpg"
import reviewthree from "../assets/reviewthree.jpg"
import Review from "../reuse/Review"
import starsfour from "../assets/fourstars.svg"

const Testimonials = () => {
  const FeatureData = [
    {
      place: "Cape Town, South Africa",
      image: reviewone, // Image of the place
      review:
        "Had a fantastic trip! The itinerary was flexible, and the accommodation was comfortable and close to all the sights. A wonderful experience I’d recommend to anyone!",
      reviewimg: stars, // Image for the review section, if different
      name: "James P.",
      position: "Founder",
      customerimg: reviewerone, // Image of the customer
    },
    {
      place: "Paris, France",
      image: reviewtwo,
      review:
        "A flawless vacation! Every detail was covered, making it so easy to relax and enjoy. The personalized travel plan was exactly what I needed. Highly recommended!",
      reviewimg: starsfour,
      name: "Sarah L.",
      position: "Travel Enthusiast",
      customerimg: reviewerone,
    },
    {
      place: "Kyoto, Japan",
      image: reviewthree,
      review:
        "Had a fantastic trip! The itinerary was flexible, and the accommodation was comfortable and close to all the sights. A wonderful experience I’d recommend to anyone!",
      reviewimg: stars,
      name: "Liam K.",
      position: "Photographer",
      customerimg: reviewerone,
    },
  ];

  return (
    <div className="flex flex-col gap-[56px] h-auto max-w-[1280px] w-11/12 justify-between ">
      <div className="flex flex-col  md:flex-row items-start md:items-end  gap-7 max-w-[1280px] w-full justify-between ">
        <TextBlock
          text1="TESTIMONIALS"
          heading="What Our Travelers say"
          subheading="Embrace unique experiences at every destination and uncover exciting, budget-friendly adventures along the way."
        />
        <div className="flex  gap-3">
          <button className="w-9 h-9 ">
            <BsArrowLeftCircle
              width={36}
              height={36}
              className="w-full h-full text-primary"
            />
          </button>
          <button className="w-9 h-9 ">
            <BsArrowRightCircle className="w-full h-full text-primary" />
          </button>
        </div>
      </div>

      {/* three reviews */}

      <div className="grid  grid-cols-1 md:grid-cols-2 gap-[32px] lg:grid-cols-3 max-w-[1280px] w-full items-center justify-between ">
        {FeatureData.map((review, index) => (
          <Review
            key={index}
            image={review.image}
            place={review.place}
            review={review.review}
            customerimg={review.customerimg}
            position={review.position}
            reviewimg={review.reviewimg}
            name={review.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
