import React from "react";
import ResumeTempates from "./ResumeTempates";

const ResumeBuilder = () => {
  return (
    <div>
      <div className=" py-5 px-6 flex items-center justify-between border-b border-[#E7E9EB]">
        <h3 className=" text-xl leading-6 font-medium text-black">
          Resume Builder
        </h3>
        <div className=" flex items-center gap-4 ">
          <button className=" py-2 px-3 text-sm font-normal text-black border border-[#8FC521] rounded-lg shadow-sm shadow-[#1018280D] flex items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.84297 11.5749L5.83464 19.1666L10.0013 16.6666L14.168 19.1666L13.1596 11.5666M15.8346 6.66658C15.8346 9.88825 13.223 12.4999 10.0013 12.4999C6.77964 12.4999 4.16797 9.88825 4.16797 6.66658C4.16797 3.44492 6.77964 0.833252 10.0013 0.833252C13.223 0.833252 15.8346 3.44492 15.8346 6.66658Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Recommendations
          </button>
          <button className=" py-2 px-3 text-sm font-normal text-black border border-[#E7E9EB] rounded-lg shadow-sm shadow-[#1018280D] flex items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6654 1.66675H4.9987C4.55667 1.66675 4.13275 1.84234 3.82019 2.1549C3.50763 2.46746 3.33203 2.89139 3.33203 3.33341V16.6667C3.33203 17.1088 3.50763 17.5327 3.82019 17.8453C4.13275 18.1578 4.55667 18.3334 4.9987 18.3334H14.9987C15.4407 18.3334 15.8646 18.1578 16.1772 17.8453C16.4898 17.5327 16.6654 17.1088 16.6654 16.6667V6.66675M11.6654 1.66675L16.6654 6.66675M11.6654 1.66675V6.66675H16.6654M9.9987 15.0001V10.0001M7.4987 12.5001H12.4987"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Import Data
          </button>
        </div>
      </div>

      <div className=" my-5 mx-6">
        <div className=" p-6 bg-gradient-to-tr from-[#FFFFFF00] to-[#F0F1F3] rounded-xl space-y-1">
          <h6>Hello, Welcome to resume builder!</h6>
          <p>
            Your brand-new creative space for designing your professional
            resume! Choose from pre-built templates or create your own custom
            design.
          </p>
        </div>

        <ResumeTempates />
      </div>
    </div>
  );
};

export default ResumeBuilder;
