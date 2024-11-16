import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Merge from "./Merge";
import Services from "./Services";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import TryNow from "./TryNow";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex items-center  flex-col gap-[100px]  ">
      <Merge />

      <Destinations />
      <Services />
      <Blogs/>
      <Testimonials/>
      <TryNow/>
      <Footer/>
    </div>
  );
};

export default Home;
