import React from "react";

const StepsAction = () => {
  return (
    <div className="  pr-6 py-3 bg-white w-full fixed bottom-0 right-0 flex items-center justify-end gap-2 border-t border-[#E7E9EB]">
      <button className=" py-2 px-3 flex items-center gap-1 border border-[#E7E9EB] rounded-lg shadow-sm shadow-[#1018280D] text-sm text-black font-normal ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8334 9.99996H4.16675M4.16675 9.99996L10.0001 15.8333M4.16675 9.99996L10.0001 4.16663"
            stroke="black"
            // style="stroke:black;stroke-opacity:1;"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </button>
      <button className=" py-2 px-3 bg-[#8FC521] flex items-center gap-1 border border-[#E7E9EB] rounded-lg shadow-sm shadow-[#1018280D] text-sm text-white font-medium ">
        Save & next
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16675 9.99996H15.8334M15.8334 9.99996L10.0001 4.16663M15.8334 9.99996L10.0001 15.8333"
            stroke="white"
            // style="stroke:white;stroke-opacity:1;"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default StepsAction;
