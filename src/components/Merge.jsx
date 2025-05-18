import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import heroImg from "../assets/HeroImg.jpg"
import heroVideo from "../assets/HeroesVideo.mp4"
import NewTheme from "../assets/NewTheme.mp4"
import SpaceInno from "../assets/HeroesVideo.mp4"

const Merge = () => {
  return (
    <div className='flex flex-col gap-[48px] lg:gap-[120px] h-full w-full'
    >
        {/* Video Background */}
        <video
        autoPlay
        loop
        muted
        className="absolute  top-0 left-0 w-full max-h-[700px] h-full object-cover"
      >
        <source src={SpaceInno} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Merge
