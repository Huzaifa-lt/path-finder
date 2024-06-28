import React from "react";

const ResumeCard = () => {
  return (
    <div className=" min-h-[250px] border-[1.5px] border-[#E7E9EB] bg-gradient-to-b from-[#F0F1F3] to-[#FBFDF6] rounded-xl">
      <div className=" pt-5  flex justify-center   bg-gradient-to-b from-[#F0F1F3] to-[#FBFDF6] overflow-y-hidden rounded-t-xl ">
        <img className="" src="./creative-blue-template.png" alt="" />
      </div>
      <div className=" py-3 px-5 bg-white flex justify-between items-center border-t border-[#E7E9EB] rounded-b-xl">
        <h4 className=" text-sm font-medium text-[#3B3B3B]">Creative blue</h4>
        <div className=" flex items-center gap-1.5">
          <span className=" cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 13.3334H14M11 2.3334C11.2652 2.06819 11.6249 1.91919 12 1.91919C12.1857 1.91919 12.3696 1.95577 12.5412 2.02684C12.7128 2.09791 12.8687 2.20208 13 2.3334C13.1313 2.46472 13.2355 2.62063 13.3066 2.79221C13.3776 2.96379 13.4142 3.14769 13.4142 3.3334C13.4142 3.51912 13.3776 3.70302 13.3066 3.8746C13.2355 4.04618 13.1313 4.20208 13 4.3334L4.66667 12.6667L2 13.3334L2.66667 10.6667L11 2.3334Z"
                stroke="#717B8A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className=" cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1075_13263)">
                <path
                  d="M0.667969 8.00008C0.667969 8.00008 3.33464 2.66675 8.0013 2.66675C12.668 2.66675 15.3346 8.00008 15.3346 8.00008C15.3346 8.00008 12.668 13.3334 8.0013 13.3334C3.33464 13.3334 0.667969 8.00008 0.667969 8.00008Z"
                  stroke="#717B8A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.0013 10.0001C9.10587 10.0001 10.0013 9.10465 10.0013 8.00008C10.0013 6.89551 9.10587 6.00008 8.0013 6.00008C6.89673 6.00008 6.0013 6.89551 6.0013 8.00008C6.0013 9.10465 6.89673 10.0001 8.0013 10.0001Z"
                  stroke="#717B8A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1075_13263">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
