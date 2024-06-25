import Input from "@/components/ui/InputField";
import React from "react";

const FlyingInstrument = () => {
  return (
    <div className="px-6 pt-6 pb-5  border border-[#E4E7EC] rounded-lg">
      <h3 className=" pb-6 border-b border-[#E4E7EC] text-xl font-medium text-black">
        Instrument Approaches
      </h3>
      <div className=" mt-6  pb-5 border-b border-[#E4E7EC]">
        <h3 className=" text-base font-medium text-black">
          Total Instrument Approaches:
        </h3>

        <div className=" mt-4 grid grid-cols-2 gap-x-3 gap-y-[21px] ">
          <Input type="text" label="Within 6 Months*" />
          <Input type="text" label="Within 12 Months*" />
        </div>
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
          Flight time by conditions
        </button>
      </div>
    </div>
  );
};

export default FlyingInstrument;
