import React from "react";

const EducationTabs = () => {
  return (
    <div className=" pl-6 py-3 bg-white flex items-center gap-2 sticky top-0 border-b border-[#E7E9EB]">
      <button className=" py-2 px-3 bg-[#F0F7E2] border border-[#8FC521] rounded-md text-xs font-normal text-black">
        Education Summary
      </button>
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.66667 11.3334L12 8.00008L8.66667 4.66675M4 11.3334L7.33333 8.00008L4 4.66675"
            stroke="#8FC521"
            // style="stroke:#8FC521;stroke:color(display-p3 0.5608 0.7725 0.1294);stroke-opacity:1;"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <button className="py-2 px-3 bg-[#F8F8F9] rounded-md text-xs font-normal text-black">
        General
      </button>
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.66667 11.3334L12 8.00008L8.66667 4.66675M4 11.3334L7.33333 8.00008L4 4.66675"
            stroke="#8FC521"
            // style="stroke:#8FC521;stroke:color(display-p3 0.5608 0.7725 0.1294);stroke-opacity:1;"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <button className="py-2 px-3 bg-[#F8F8F9] rounded-md text-xs font-normal text-black">
        Education
      </button>
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.66667 11.3334L12 8.00008L8.66667 4.66675M4 11.3334L7.33333 8.00008L4 4.66675"
            stroke="#8FC521"
            // style="stroke:#8FC521;stroke:color(display-p3 0.5608 0.7725 0.1294);stroke-opacity:1;"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <button className="py-2 px-3 bg-[#F8F8F9] rounded-md text-xs font-normal text-black">
        Achievements
      </button>
    </div>
  );
};

export default EducationTabs;
