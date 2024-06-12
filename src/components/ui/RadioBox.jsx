import React from "react";

const RadioBox = ({ label }) => {
  return (
    <div>
      <label htmlFor="" className=" mb-2 text-sm font-normal text-[#344054] ">
        {label}
      </label>

      <div className=" py-[7px] px-3.5 flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D]">
        <div>
          <input type="radio" /> yes
        </div>
        <div>
          <input type="radio" /> No
        </div>
      </div>
    </div>
  );
};

export default RadioBox;
