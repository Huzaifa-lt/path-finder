import { DatePicker } from "@/components/ui/DatePicker";
import Input from "@/components/ui/InputField";
import RadioBox from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import React from "react";

const radioOptions = [
  { label: "Asia/Pacific", value: "asia" },
  { label: "South America/Central America", value: "america" },
  { label: "North Atlantic/Europe", value: "europe" },
  { label: "Africa/Middle East", value: "africa" },
];

const FlyingTotal = () => {
  return (
    <div className="px-6 pt-6 pb-5  border border-[#E4E7EC] rounded-lg">
      <h3 className=" pb-6 border-b border-[#E4E7EC] text-xl font-medium text-black">
        Flight Time Totals
      </h3>

      <div className=" mt-6 space-y-6">
        <div className="   pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">
            Total by Category And Class
          </h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="Airplane SEL*" />
            <Input type="text" label="Airplane SES*" />
            <Input type="text" label="Airplane MEL*" />
            <Input type="text" label="Airplane MES*" />
            <Input type="text" label="Airplane Multi-Engine*" />
            <SelectBox label="Helicopter*" />
          </div>
        </div>
        <div className="   pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">
            Total by Type of Time
          </h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="PIC*" />
            <Input type="text" label="Instructor*" />
            <Input type="text" label="SIC*" />
            <Input type="text" label="Dual*" />
            <Input type="text" label="Dual*" />
            <Input type="text" label="Fligh Engineer*" />
          </div>
        </div>
        <div className="   pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">Total Summary:</h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="Total Past 12 Months*" />
            <Input type="text" label="Total Past 13-24  Months*" />
            <Input type="text" label="Total Past 25-36  Months*" />
            <Input type="text" label="Total Past 36 Months*" />
            <Input type="text" label="Total Past 5 Years*" />
            <Input type="text" label="Airplane PIC*" />
            <Input type="text" label="Airplane - Turbine*" />
            <Input type="text" label="Turbine Fixed-Wing*" />
            <Input type="text" label="Airplane Total*" />
            <Input type="text" label="Total PIC = PIC  + Instructor*" />
            <Input type="text" label="Total Time*" />
          </div>
        </div>
        <div className="   pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">
            Turbine PIC Breakdown by Each Aircraft Type
          </h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="C-32A*" />
            <Input type="text" label="E-3G*" />
            <Input type="text" label="T-1A*" />
            <Input type="text" label="T-6A*" />
            <DatePicker
              showInfoButton
              infoText="Date reached 1,000 hours Fixed-Wing Turbine"
              label="Date reached*"
            />
            <DatePicker
              showInfoButton
              infoText="Date reached 1,000 PIC hours Fixed-Wing Turbine"
              label="Date reached*"
            />
            <Input
              type="text"
              showInfoButton
              infoText="Total hours in an aircraft that requires two or more pilots"
              tooltipSide="right"
              label="Total hours in an aircraft*"
            />
            <Input type="text" label="Date last flight*" />
            <DatePicker label="Last Flight Aircraft*" />
            <DatePicker
              showInfoButton
              infoText="Total hours in an aircraft that requires two or more pilots"
              label="Total fixed hours*"
            />
            <Input
              type="text"
              showInfoButton
              infoText="Total fixed wing jet and/or fixed wing multi-engine turbine powered flight time in the last 24 months (PIC & SIC Time)"
              tooltipSide="top"
              label="Total fixed (PIC & SIC Time) "
            />
            <Input type="text" label="Date last flight:*" />
          </div>
        </div>
        <div className="   pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">
            FAR Part 121/135 Experience
          </h3>

          <div className=" mt-4 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="Total Flight Hours*" />
            <Input type="text" label="Total Years Active Flight Duty*" />
          </div>
        </div>
        <div className="   pb-6 border-b border-[#E4E7EC]">
          <h3 className=" text-base font-medium text-black">
            FAR Part 91 Experience
          </h3>

          <div className=" mt-4 mb-6 grid grid-cols-4 gap-x-3 gap-y-[21px] ">
            <Input type="text" label="Total Flight Hours*" />
            <Input type="text" label="Total Years Active Flight Duty*" />
          </div>

          <RadioBox
            options={radioOptions}
            className=" gap-3"
            label="1. Are you available for employment with a two-week notice? If no,
              what date are you available? *"
          />
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

export default FlyingTotal;
