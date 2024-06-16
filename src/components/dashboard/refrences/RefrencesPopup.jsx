import CheckBox from "@/components/ui/CheckBox";
import { DatePicker } from "@/components/ui/DatePicker";
import Input from "@/components/ui/Input";
import SelectBox from "@/components/ui/SelectBox";
import React from "react";

const RefrencesPopup = () => {
  return (
    <div className=" p-6 bg-white">
      <h4 className=" pb-6 text-xl font-medium text-black border-b border-[#E4E7EC]">
        Add a new reference
      </h4>

      <div className=" mt-6 pb-5 border-b border-[#E4E7EC] grid grid-cols-4 gap-x-3 gap-y-[21px]">
        <Input type="text" label="Name *" />
        <Input type="email" label="Email *" />
        <Input type="text" label="Employer  *" />
        <Input type="number" label="Employee ID  *" />
        <Input type="text" label="Address *" />
        <Input type="text" label="City*" />
        <SelectBox label="State  *" />
        <Input type="number" label="Zip Code*" />
        <Input type="text" label="Position*" />
        <Input type="number" label="Phone*" />
        <DatePicker label="Beginning Date  *" />
        <DatePicker label="Ending Date  *" />
        <Input type="text" label="Relationship *" />
        <Input type="text" label="Company*" />
      </div>

      <div className=" mt-5  flex  gap-5">
        <div className=" basis-[50%] pb-8  border border-[#E4E7EC] rounded-lg">
          <h5 className=" px-4 py-4 border-b border-[#E4E7EC]">
            How long have you known this individual?
          </h5>
          <div className=" pl-4 pr-[22px] mt-4 flex flex-wrap items-center gap-4">
            <CheckBox label="For several years" />
            <CheckBox label="Approximately one year" />
            <CheckBox label="A few months" />
            <CheckBox label="Just met the person" />
            <CheckBox label="Have never met the person" />
            <CheckBox label="They are a relative" />
          </div>
        </div>
        <div className=" basis-[50%] pb-8 border border-[#E4E7EC] rounded-lg">
          <h5 className=" px-4 py-4 border-b border-[#E4E7EC]">
            The majority of interaction with this individual has been?
          </h5>
          <div className=" pl-4 pr-[22px] mt-4 flex flex-wrap items-center gap-4">
            <CheckBox label="In college" />
            <CheckBox label="At a previous civilian job" />
            <CheckBox label="At a previous military job" />
            <CheckBox label="At social activities" />
          </div>
        </div>
      </div>

      <div className=" mt-5 flex justify-end gap-2">
        <button className=" py-2 px-3 text-sm font-normal text-black border border-[#E7E9EB] shadow-sm shadow-[#1018280D] rounded-lg ">
          Cancel
        </button>
        <button className=" py-2 px-3 bg-[#8FC521] flex items-center gap-1 shadow-sm shadow-[#1018280D] text-sm font-medium text-white rounded-lg">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 4.16602V15.8327M4.1665 9.99935H15.8332"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Add reference
        </button>
      </div>
    </div>
  );
};

export default RefrencesPopup;
