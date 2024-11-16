
import React from 'react';
import { BiExpandVertical } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react';

const SearchForm = () => {

  const [selectedFilter, setSelectedFilter] = useState('Mountains'); // Default selected button

  const filters = ['Mountains', 'Sea', 'Hotels', 'Parks'];

  const [selectedOption, setSelectedOption] = useState('Tour'); // Default selected button

  const options = ['Tour', 'Hotels', 'Apartments'];

  return (
    <div className="bg-white flex flex-col gap-2 p-5 rounded-lg shadow-md max-w-7xl w-full">
      {/* Title */}
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
      <h2 className="text-2xl font-normal font-plusjakarta  text-sectionHeading mb-4">Find the best Trip</h2>
     
      <div className="flex gap-2 mb-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelectedOption(option)}
          className={`w-full text-[13px] flex justify-center px-[10px] py-[4px] h-full font-plusjakarta font-normal rounded-[6px] ${
            selectedOption === option
              ? 'bg-primary text-white' // Active state
              : 'border text-sectionHeading' // Default state
          }`}
        >
          {option}
        </button>
      ))}
    </div>
      </div>
      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {/* Trip Name Input */}
        <div className="flex-1">
          <label className="block text-sm text-sectionHeading font-normal font-plusjakarta mb-1" htmlFor="tripName">Looking For</label>
          <input
            id="tripName"
            type="text"
            placeholder="Trip name"
            className="w-full text-[12px] outline-primary font-plusjakarta font-normal text-formText p-3 bg-[#F5F5F5] rounded-lg"
          
          />
           
        </div>

        {/* Price Input */}
        <div className="flex-1">
          <label className="flex items-center justify-between  text-sm text-sectionHeading font-normal font-plusjakarta mb-1" htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            placeholder="Price"
            className="w-full text-[12px] outline-primary tracking-[-2%] font-plusjakarta font-normal text-formText p-3 bg-[#F5F5F5] rounded-lg"
          />
            {/* <BiExpandVertical className="text-sectionHeading" /> */}
        </div>

        {/* Location Input */}
        <div className="flex-1">
          <label className="block text-sm text-sectionHeading font-normal font-plusjakarta mb-1" htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="All Cities"
            className="w-full text-[12px] outline-primary font-plusjakarta font-normal  text-formText p-3 bg-[#F5F5F5] rounded-lg"
          />
        </div>

        {/* Departure Month Input */}
        <div className="flex-1">
          <label className="block text-sm text-sectionHeading font-normal font-plusjakarta mb-1" htmlFor="departureMonth">Departure Month</label>
          <input
            id="departureMonth"
            type="text"
            placeholder="Any Time"
            className="w-full text-[12px] outline-primary font-plusjakarta font-normal text-formText p-3 bg-[#F5F5F5] rounded-lg"
          />
        </div>
      </div>

      {/* Filters and Search */}
      <div className="mt-4 flex flex-col md:flex-row items-center gap-5 md:items-center justify-between">
        {/* Filters */}
        <div className="flex flex-row items-center gap-2 md:gap-3">
        <span className="text-gray-700 font-plusjakarta font-medium">Filter:</span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3 py-1 text-[12px] font-plusjakarta font-normal rounded-[6px] ${
              selectedFilter === filter
                ? 'bg-primary text-white' // Active state
                : 'text-formText' // Default state
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
        {/* Search Button */}
        <div className="flex  items-center justify-center gap-4">
          <button className="text-sm font-normal font-plusjakarta text-formText">Clear Filter</button>
          <button className="px-6 py-2 bg-primary text-[15px] text-white font-plusjakarta tracking-[-2%] rounded-lg font-medium flex items-center">
            Search
            <span className="ml-2"><FaArrowRightLong/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;