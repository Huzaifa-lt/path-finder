import React from "react";
import FaaRequirments from "./FaaRequirments";

const HiringRequirements = () => {
  return (
    <>
      <div className=" py-5 px-6 flex items-center justify-between border-b border-[#E7E9EB]">
        <h3 className=" text-xl leading-6 font-medium text-black">
          Hiring Requirements
        </h3>
      </div>
      <div className=" py-3 px-8 border-b border-[#E7E9EB]">
        <button className=" py-2.5 px-3 bg-[#F0F7E2]   border border-[#8FC521] rounded-l-md text-sm font-medium text-black">
          FAA Requirements
        </button>
        <button className=" py-2.5 px-3 bg-white border-l-0 border border-[#E7E9EB]  text-sm font-medium text-black">
          Flying requirements USA
        </button>
        <button className=" py-2.5 px-3 bg-white border-l-0 border border-[#E7E9EB]  text-sm font-medium text-black">
          Flying requirement out of USA
        </button>
        <button className=" py-2.5 px-3 bg-white border-l-0 border border-[#E7E9EB]  text-sm font-medium text-black">
          View all projects
        </button>
      </div>

      <div className=" my-5 mx-6">
        <FaaRequirments />
      </div>
    </>
  );
};

export default HiringRequirements;
