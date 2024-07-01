import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";

const CourcesCard = () => {
  const [isLiked, setLike] = useState(false);

  function handleClick() {
    setLike((prev) => !prev);
  }

  return (
    <div className=" min-h-[248px] border border-[#E7E9EB] rounded-xl">
      <div className="">
        <img
          className=" w-full h-full object-cover rounded-t-xl"
          src="./aviation-roadmap.png"
          alt=""
        />
      </div>
      <div className=" p-4 space-y-2.5">
        <div className=" space-y-1.5">
          <div className=" flex justify-between items-center">
            <h5>Aviation roadmap</h5>
            <span className=" cursor-pointer " onClick={handleClick}>
              <svg
                className={`${isLiked ? "fill-[#8FC521]" : ""}`}
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 2L11.3175 6.695L16.5 7.4525L12.75 11.105L13.635 16.265L9 13.8275L4.365 16.265L5.25 11.105L1.5 7.4525L6.6825 6.695L9 2Z"
                  stroke="#8FC521"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <p className=" text-xs font-normal text-[#475467]">
            Enhance your interview preparation with <br /> the following curated
            courses!
          </p>
        </div>

        <div className=" space-y-1">
          <div className="flex items-center justify-between">
            <h6 className=" text-xs leading-[14px] font-normal text-[#868E9B]">
              10/7 completed
            </h6>
            <span className=" text-xs leading-[14px] font-normal text-[#868E9B]">
              83%
            </span>
          </div>
          <Progress className="h-1" value={83} />
        </div>
      </div>
    </div>
  );
};

export default CourcesCard;
