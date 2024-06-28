import React from "react";

const CreateResume = () => {
  return (
    <div className=" min-h-[250px] bg-[#FBFDF6] border-[1.5px] border-dashed border-[#8FC521] rounded-xl flex flex-col items-center justify-center gap-3">
      <button className=" p-3.5 w-fit bg-white border border-[#DCEDBA] rounded-md ">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49585 4.88924V11.1112M5.38485 8.00024H11.6069M3.0516 1.00049H13.9401C14.7992 1.00049 15.4956 1.69691 15.4956 2.55599V13.4445C15.4956 14.3036 14.7992 15 13.9401 15H3.0516C2.19252 15 1.49609 14.3036 1.49609 13.4445V2.55599C1.49609 1.69691 2.19252 1.00049 3.0516 1.00049Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h3 className=" text-sm font-normal text-black leading-4">
        Create from scratch
      </h3>
    </div>
  );
};

export default CreateResume;
