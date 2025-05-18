import React from "react";
import TextBlock from "../reuse/TextBlock";
import cape1 from "../assets/Cape Town.jpg";
import Card from "../reuse/Card";
import santor from "../assets/Santorini.jpg";
import bali from "../assets/Bali.jpg";
import { useInView } from "react-intersection-observer";

const Destinations = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const cardsData = [
    {
      image: cape1,
      heading: "Cape Town, Capital of South Africa",
      paragraph: "A week-long guided hike, include accomodation.",
      price: "$200-$400",
      buttonText: "Book Now",
      footerText: "456 people book in September",
    },
    {
      image: santor,
      heading: "Santorini, Aegan Sea",
      paragraph: "A week-long guided hike, include accomodation.",
      price: "$199-$299",
      buttonText: "Book Now",
      footerText: "297 people book in September",
    },
    {
      image: bali,
      heading: "Bali, Island of Indonesia",
      paragraph: "A week-long guided hike, include accomodation.",
      price: "$400-$500",
      buttonText: "Book Now",
      footerText: "4,453 people book in May",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col gap-[56px] items-center max-w-[1280px] w-11/12 h-auto transition-opacity duration-700 ${
        sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-end justify-between max-w-[1280px] w-full ">
        <TextBlock
          text1="DESTINATIONS"
          heading="Popular
         Destinations in 2024"
          subheading="Discover 2024’s popular destinations, offering stunning landscapes, vibrant culures, and unforgettable experiences for every traveler."
        />
      </div>

      {/* three cards destination */}
      {/* <div></div> */}

      <div className="grid gap-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1280px] w-full items-center justify-between ">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            heading={card.heading}
            paragraph={card.paragraph}
            price={card.price}
            buttonText={card.buttonText}
            footerText={card.footerText}
            delay={index * 0.4}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
