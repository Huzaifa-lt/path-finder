import React from "react";
import CourcesCard from "./CourcesCard";

const Cources = () => {
  return (
    <div>
      <div>
        <div className=" mt-6 w-full h-[1px] bg-[#E7E9EB] flex items-center    ">
          <span className=" block pr-2 bg-white text-sm font-medium text-black leading-4">
            Recent courses
          </span>
        </div>

        <div className=" mt-7 grid grid-cols-4 gap-x-4">
          <CourcesCard />
          <CourcesCard />
        </div>
      </div>
      <div>
        <div className=" mt-6 w-full h-[1px] bg-[#E7E9EB] flex items-center   ">
          <span className=" block pr-2 bg-white text-sm font-medium text-black leading-4">
            Interview courses
          </span>
        </div>

        <div className=" mt-7 grid grid-cols-4 gap-x-4">
          <CourcesCard />
          <CourcesCard />
          <CourcesCard />
          <CourcesCard />
        </div>
      </div>
    </div>
  );
};

export default Cources;
