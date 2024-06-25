import Input from "@/components/ui/InputField";
import RadioBox from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import React from "react";

const FlyingExperience = () => {
  return (
    <div className=" px-6 pt-6 pb-5  border border-[#E4E7EC] rounded-lg">
      <h3 className=" text-xl font-medium text-black">Military Experience</h3>

      <div className="mt-4 space-y-6">
        <div className="  pb-6 border-b border-[#E4E7EC]">
          <label htmlFor="" className=" text-sm font-normal text-[#475467]">
            Military Experience?
          </label>
          <div className=" mt-3 flex  items-center gap-4">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>

        <div className="  pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">
            Military Sorties Flown{" "}
            <span className=" text-sm font-normal text-[#687382]">
              (Fixed Wing Only)
            </span>
          </h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="PIC*" />
            <Input type="text" label="Instructor*" />
            <Input type="text" label="SIC*" />
            <Input type="text" label="Dual Rec/Student*" />
            <Input type="text" label="Total*" />
            <SelectBox label="Turbine Powered  (Pilot Only)*" />
            <Input type="text" label="Multi- Engine (Pilot Only)*" />
          </div>
        </div>
        <div className="  pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">
            Military Experience{" "}
            <span className=" text-sm font-normal text-[#687382]">
              (Heavy/Cargo)
            </span>
          </h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="Total Flight Hours*" />
            <Input type="text" label="Total Year: Active Flight Duty*" />
            <Input type="text" label="Combat Time*" />
          </div>
        </div>
        <div className="  pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">
            Military Experience{" "}
            <span className=" text-sm font-normal text-[#687382]">
              (Fighter/Jet Trainer)
            </span>
          </h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="Total Flight Hours*" />
            <Input type="text" label="Total Year: Active Flight Duty*" />
            <Input type="text" label="Combat Time*" />
          </div>
        </div>
        <div className="  pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">Simulator Time</h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="PIC*" />
            <Input type="text" label="Instructor*" />
            <Input type="text" label="SIC*" />
            <Input type="text" label="Dual Rec/Student*" />
            <Input type="text" label="Total*" />
          </div>
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

export default FlyingExperience;
