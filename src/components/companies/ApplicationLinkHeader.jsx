import React from "react";

const ApplicationLinkHeader = () => {
  return (
    <div className=" py-5 px-6 flex items-center justify-between border-b border-[#E7E9EB]">
      <div className=" space-y-1">
        <div className=" flex items-center gap-2 ">
          <h3 className=" text-xl font-medium text-black">Airline companies</h3>
          <h5 className=" self-center py-0.5 px-2 bg-[#F6FAED] rounded-2xl text-[#039855] text-xs font-medium">
            250+ companies
          </h5>
        </div>
        <p className=" text-sm font-normal text-[#717B8A]">
          Find your preferred airline, click, and off you go to their
          application
        </p>
      </div>
      <div className=" flex items-center gap-3">
        <div className=" py-1.5 px-3 flex items-center gap-2 border border-[#E7E9EB] shadow-sm shadow-[#1018280D] rounded-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
              stroke="#687382"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className=" text-sm font-normal text-[#9CA3AD] focus:outline-none"
            placeholder="Search companies..."
          />
        </div>
        <button className=" h-9 py-2 px-3 flex items-center gap-1  border border-[#E7E9EB] shadow-sm shadow-[#1018280D] rounded-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          View as: All
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className=" py-2 px-3 text-white text-sm font-medium bg-[#8FC521] shadow-sm shadow-[#1018280D] rounded-lg">
          Pay Calculator
        </button>
      </div>
    </div>
  );
};

export default ApplicationLinkHeader;
