import React from "react";
import RefrencesTable from "./RefrencesTable";

const RefrencesSummary = () => {
  return (
    <>
      <div className=" mt-5 border border-[#E4E7EC] rounded-lg">
        <div className=" py-5 px-6">
          <h2 className=" text-lg font-medium text-[#2E2E2E]">
            Reference Summary
          </h2>
        </div>

        <RefrencesTable />
      </div>
      <div className=" mt-5  flex justify-end">
        <button className=" py-2 px-3 rounded-lg  flex items-center justify-end gap-1 bg-[#F0F7E2] border border-[#8FC521] ">
          Next:
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66667 11.8333L12 8.49996L8.66667 5.16663M4 11.8333L7.33333 8.49996L4 5.16663"
              stroke="#8FC521"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          General References
        </button>
      </div>
    </>
  );
};

export default RefrencesSummary;
