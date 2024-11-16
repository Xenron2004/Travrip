import React from "react";
import TextBlock from "../reuse/TextBlock";
import Feature from "../reuse/Feature";
import picture from "../assets/WhyUs.jpg"

const Services = () => {
  const FeatureData = [
    {
      heading: "1. Travel Plan",
      paragraph:
        "Our tailored travel plans are designed to make every trip unforgettable. From must-see attractions to hidden gems, we create itineraries that match your interests and schedule, ensuring a seamless experience from start to finish.",
    },
    {
      heading: "2. Flights booking",
      paragraph:
        "With access to hundreds of airlines and flexible options, we make booking flights simple and stress-free. Whether you're planning a quick getaway or a long adventure, we’ll find the best deals and schedules to suit your travel needs",
    },
    {
      heading: "3. Accomodation",
      paragraph:
        "Enjoy a wide range of accommodations, from luxury hotels to cozy guesthouses, all handpicked for quality and comfort. Let us find the perfect place to stay, so you can relax and focus on making memories.",
    },
  ];
  return (
    <div className="flex flex-col gap-[56px]   max-w-[1280px] w-11/12  h-auto ">
      <div className="flex items-center">
        <TextBlock
          text1="SERVICES"
          heading="Why Choose Us"
          subheading="Embrace unique experiences at every destination and uncover exciting, budget-friendly adventures along the way."
        />
      </div>

      <div className="flex flex-col gap-9   md:flex-row justify-between max-w-[1280px]  w-full items-center">
        <div className="w-full max-w-[546px] h-full">
            <img src={picture} alt="Why Us" />
        </div>
        <div className="flex flex-col gap-7">
          {FeatureData.map((feature, index) => (
            <Feature heading={feature.heading} paragraph={feature.paragraph} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
