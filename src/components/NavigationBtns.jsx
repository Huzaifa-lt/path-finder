import React from "react";

const NavigationButtons = ({ nextLabel, backLabel, onNext, onBack }) => {
  return (
    <div className="mx-6 flex gap-2 items-center justify-end">
      {backLabel && (
        <button
          className=" py-2 px-3.5 rounded-lg  bg-white border border-[#E4E7EC] shadow-sm shadow-[#1018280D]"
          onClick={onBack}
        >
          Back
        </button>
      )}
      {nextLabel && (
        <button
          className=" py-2 px-3 rounded-lg flex items-center justify-end gap-1 bg-[#F0F7E2] border border-[#8FC521]"
          onClick={onNext}
        >
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
          {nextLabel}
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
