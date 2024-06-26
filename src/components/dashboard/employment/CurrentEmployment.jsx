import { countries, states } from "@/components/constants";
import CheckBox from "@/components/ui/CheckBox";
import { DatePicker } from "@/components/ui/DatePicker";
import Input from "@/components/ui/InputField";
import RadioBox, { radioOptions } from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const leavingReason = [
  { label: "Part 121 Carrier", value: "121 Carrier" },
  { label: "Part 121 Carrier", value: "121 Carrier" },
  { label: "Part 121 Carrier", value: "121 Carrier" },
];

const CurrentEmployment = () => {
  return (
    <div className=" pt-6 px-6 pb-5 border border-[#E4E7EC] rounded-lg">
      <h2 className=" pb-6 text-xl font-medium text-black border-b border-[#E4E7EC]">
        Current Employment
      </h2>

      <div className=" py-6 space-y-4 border-b border-[#E4E7EC]">
        <h5 className="  text-base font-medium text-black">Employer Contact</h5>
        <div className=" grid grid-cols-4 gap-x-3 gap-y-[21px]">
          <Input type="text" label="Employer Name *" />
          <Input type="text" label="Employer Name *" />
          <SelectBox options={leavingReason} label="Supervisor Name & Title*" />
          <Input type="text" label="Employer Address*" />
          <Input type="text" label="City*" />
          <SelectBox options={states} label="State*" />
          <Input type="number" label="Zip Code*" />
          <SelectBox options={countries} label="Country*" />
          <Input type="number" label="Phone*" />
        </div>
      </div>
      <div className=" py-6 space-y-4 border-b border-[#E4E7EC]">
        <h5 className="  text-base font-medium text-black">Job Description</h5>
        <div className=" grid grid-cols-3 gap-x-3 gap-y-[21px]">
          <Input type="text" label="Positions Held *" />
          <Input type="number" label="Aircraft Flown *" />
          <Input type="number" label="Avg Flight Hours per Month*" />

          <RadioBox
            options={radioOptions}
            isOutline
            className="flex gap-4"
            label="Part 121 Carrier*"
          />
          <RadioBox
            options={radioOptions}
            isOutline
            className="flex gap-4"
            label="Part 125 Carrier*"
          />
          <RadioBox
            options={radioOptions}
            isOutline
            className="flex gap-4"
            label="Part 135 Carrier*"
          />

          <div className=" col-span-full">
            <TextArea
              label="Duties Description *"
              placeholder="*Add a few bullets of job information then click the 'Generate Duty' button., then voila!"
            />
          </div>
        </div>
      </div>
      <div className=" py-6 space-y-4 border-b border-[#E4E7EC]">
        <h5 className="  text-base font-medium text-black">
          Dates of Employment
        </h5>
        <div className=" grid grid-cols-4 gap-x-3 gap-y-[21px]">
          <DatePicker label="From Date*" />
          <DatePicker label="To Date*" />

          <SelectBox options={leavingReason} label="Reason for Leaving  *" />

          <RadioBox
            options={radioOptions}
            isOutline
            className="flex gap-4"
            label="DOT covered position?*"
          />
        </div>
        <CheckBox label="I am currently employee" />
      </div>

      <div className=" mt-5  bg-[#E4E7EC] h-[1px] w-full flex justify-center items-center">
        <button className=" py-2 bg-white text-sm font-medium text-[#8FC521] rounded-lg flex items-center gap-1">
          <span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5001 4.16675V15.8334M4.66675 10.0001H16.3334"
                stroke="#8FC521"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Add a new address
        </button>
      </div>

      <div className="  mx-6  flex justify-end">
        <button className=" mt-4 py-2 px-3 rounded-lg  flex items-center justify-end gap-1 bg-[#F0F7E2] border border-[#8FC521] ">
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
          General
        </button>
      </div>
    </div>
  );
};

export default CurrentEmployment;
