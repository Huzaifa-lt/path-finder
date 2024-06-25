import RadioBox from "@/components/ui/RadioBox";
import TextArea from "@/components/ui/TextArea";
import React from "react";


const EmploymentGeneral = () => {
  const radioOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  return (
    <div className=" pt-6 px-6 pb-5 border border-[#E4E7EC] rounded-lg">
      <h2 className=" text-xl font-medium text-black">General Information</h2>

      <div className=" mt-5 pb-6  grid grid-cols-4 gap-x-3 gap-y-[21px]">
        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label=" Can you legally work in the U.S.?*"
        />
        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label="Are you unemployed?*"
        />
        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label=" Can you relocate*"
        />
        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label="Can we contact your present employer?*"
        />
        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label=" Can we contact your present employer?*"
        />
        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label="Have you ever been misconduct?*"
        />
        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label="Are you currently on furlough? *"
        />
        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label=" Do you have any employment history? *"
        />
        <RadioBox
          options={radioOptions}
          isOutline
          layout="row"
          className="flex gap-4 "
          questionClass="gap-1"
          showInfoButton
          infoText={
            <p className="text-[#252525] text-sm font-normal">
              Have you ever been discharged by a previous employer?
            </p>
          }
          label="Previous employer?*"
        />
      </div>
      <div>
        <TextArea
          label="Please provide explanations below, if necessary:*"
          placeholder="Enter a explanations..."
        />
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

export default EmploymentGeneral;
