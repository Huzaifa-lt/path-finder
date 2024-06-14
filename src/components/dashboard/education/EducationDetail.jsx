import { DatePicker } from "@/components/ui/DatePicker";
import Input from "@/components/ui/Input";
import RadioBox from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import React from "react";

const EducationDetail = () => {
  return (
    <div className="">
      <div className=" flex justify-between items-center">
        <h4 className=" text-xl font-medium text-black">Education</h4>
        <button className=" py-1 px-2.5 bg-white border border-[#E7E9EB] rounded flex items-center gap-1">
          Delete
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4.00004H3.33333M3.33333 4.00004H14M3.33333 4.00004V13.3334C3.33333 13.687 3.47381 14.0261 3.72386 14.2762C3.97391 14.5262 4.31304 14.6667 4.66667 14.6667H11.3333C11.687 14.6667 12.0261 14.5262 12.2761 14.2762C12.5262 14.0261 12.6667 13.687 12.6667 13.3334V4.00004H3.33333ZM5.33333 4.00004V2.66671C5.33333 2.31309 5.47381 1.97395 5.72386 1.7239C5.97391 1.47385 6.31304 1.33337 6.66667 1.33337H9.33333C9.68696 1.33337 10.0261 1.47385 10.2761 1.7239C10.5262 1.97395 10.6667 2.31309 10.6667 2.66671V4.00004M6.66667 7.33337V11.3334M9.33333 7.33337V11.3334"
                stroke="#D92D20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className=" py-5 grid grid-cols-4 gap-x-3 gap-y-[21px]">
        <div className=" col-span-full">
          <SelectBox label="Select Category" />
        </div>
        <Input type="text" label="School Name*" />
        <SelectBox label="School Type*" />
        <Input type="text" label="Street*" />
        <Input type="text" label="State*" />
        <Input type="text" label="Zip Code*" />
        <SelectBox label="Country*" />
        <DatePicker label="Start Date*" />
        <DatePicker label="End Date*" />
        <Input type="text" label="Program Type*" />
        <SelectBox label="GPA*" />
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Did you Graduate from this school *
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <DatePicker label="Educational Honors*" />
        <Input type="text" label="Your Last Name while at School*" />
        <SelectBox label="Education Level" />
        <Input type="text" label="Major Name*" />
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Currently Attending *
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
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

export default EducationDetail;
