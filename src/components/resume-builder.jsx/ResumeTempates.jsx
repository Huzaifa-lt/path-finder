import React from "react";
import CreateResume from "./CreateResume";
import ResumeCard from "./ResumeCard";

const ResumeTempates = () => {
  return (
    <div className=" mt-5">
      {/* <div className=" w-full h-[1px] bg-[#E7E9EB] flex items-center   ">
        <span className=" block pr-2 bg-white text-sm font-medium text-black leading-4">
          Choose from templates
        </span>
      </div> */}
      <div className="relative">
        <div className=" before:content-[''] before:absolute before:left-[179px] before:top-2.5 before:w-full before:h-[1px] before:bg-[#E7E9EB] ">
          Choose from templates
        </div>
      </div>

      <div className=" mt-5 grid grid-cols-4 gap-x-4  ">
        <CreateResume />
        <ResumeCard />
      </div>
    </div>
  );
};

export default ResumeTempates;
