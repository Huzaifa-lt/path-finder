import React from "react";
import Cources from "./Cources";
import Pie from "../Pie";

const InterviewPrep = () => {
  return (
    <>
      <div className=" py-5 px-6  border-b border-[#E7E9EB]">
        <h3 className=" text-xl leading-6 font-medium text-black">
          Interview preparation
        </h3>
      </div>
      <div className=" my-5 mx-6">
        <div className=" p-6 bg-gradient-to-tr from-[#FFFFFF00] to-[#F0F1F3] rounded-xl space-y-1">
          <h6>Interview preparation</h6>
          <p>
            Enhance your interview preparation with the following curated
            courses!
          </p>
        </div>
        <Cources />
      </div>
    </>
  );
};

export default InterviewPrep;
