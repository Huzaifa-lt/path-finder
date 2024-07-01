import React from "react";
import RadioBox from "../../ui/RadioBox";
import PhoneSelectField from "../../ui/PhoneSelectField";
import SelectBox from "../../ui/SelectBox";
import { countries } from "@/components/constants";

const GeneralInfo = () => {
  const radioOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  return (
    <>
      <div className=" pt-6 px-6 pb-2 border border-[#E4E7EC] rounded-lg">
        <h2 className=" text-xl font-medium text-black">General Information</h2>

        <div className=" mt-5 pb-6 border-b border-[#E4E7EC] grid grid-cols-4 gap-x-3 gap-y-[21px]">
          <RadioBox
            options={radioOptions}
            className="flex gap-4"
            isOutline
            label=" Fluent in English?*"
          />
          <PhoneSelectField
            label="Years of College  *"
            placeholder="+1 (555) 000-0000"
          />
          <SelectBox options={countries} label="Highest Level of Education *" />
          <PhoneSelectField
            label="Languages you speak fluently *"
            placeholder="+1 (555) 000-0000"
          />

          <RadioBox
            options={radioOptions}
            isOutline
            className="flex gap-4"
            label="Diploma / G.E.D. Obtained? *"
          />
          <PhoneSelectField
            label="Formal Flight Training *"
            placeholder="+1 (555) 000-0000"
          />
          <SelectBox options={countries} label="What is your GPA Scale? *" />
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
    </>
  );
};

export default GeneralInfo;
