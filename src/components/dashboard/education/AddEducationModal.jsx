import { countries } from "@/components/constants";
import { DatePicker } from "@/components/ui/DatePicker";
import InputField from "@/components/ui/InputField";
import RadioBox, { radioOptions } from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import React from "react";

const AddEducationModal = () => {
  return (
    <div>
      <h2 className=" text-xl leading-6 text-black font-medium">
        Add Education
      </h2>

      <div className=" py-5 border-b border-[#E4E7EC] grid grid-cols-4 gap-x-3 gap-y-[21px]">
        <div className="col-span-full w-2/6">
          <SelectBox options={countries} label="Select Category" />
        </div>
        <InputField type="text" label="School Name*" />
        <SelectBox options={countries} label="School Type*" />
        <InputField type="text" label="Street*" />
        <InputField type="text" label="State*" />
        <InputField type="text" label="Zip Code*" />
        <SelectBox options={countries} label="Country*" />
        <DatePicker label="Start Date*" />
        <DatePicker label="End Date*" />
        <InputField type="text" label="Program Type*" />
        <SelectBox options={countries} label="GPA*" />

        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label="Did you Graduate from this school *"
        />
        <DatePicker label="Educational Honors*" />
        <InputField type="text" label="Your Last Name while at School*" />
        <SelectBox options={countries} label="Education Level" />
        <InputField type="text" label="Major Name*" />

        <RadioBox
          options={radioOptions}
          isOutline
          className="flex gap-4"
          label="Currently Attending *"
        />
      </div>

      <div className=" mt-5  flex items-center justify-end gap-3">
        <button className=" p-3 w-fit border bg-white text-base leading-5 text-black font-normal border-[#E7E9EB] shadow-sm shadow-[#1018280D] rounded-lg">
          Cancel
        </button>
        <button className=" p-3 w-fit border bg-[#8FC521] text-base leading-5 text-white font-normal border-[#E7E9EB] shadow-sm shadow-[#1018280D] rounded-lg">
          Add education
        </button>
      </div>
    </div>
  );
};

export default AddEducationModal;
