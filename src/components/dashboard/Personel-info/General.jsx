import React from "react";


import RadioBox from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import { DatePicker } from "@/components/ui/DatePicker";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import InputField from "@/components/ui/InputField";

const General = () => {
  const radioOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return (
    <div className=" mt-5 pb-6 border-b border-[#E4E7EC] grid grid-cols-4 gap-x-3 gap-y-[21px]">
      <InputField type="text" label="First Name*" />
      <InputField type="text" label="Middle Name*" />
      <InputField type="text" label="Last Name*" />
      <InputField type="text" label="Suffix" />
      <InputField type="text" label="Maiden Name" />
      <InputField type="number" label="Passport No.*" />
      <DatePicker label="Passport Issue Date *" />
      <DatePicker label="Passport Expiration Date*" />
      <InputField type="text" label="Country of Issuance*" />
      <InputField type="text" label="Country of Legal Residence*" />
      <SelectBox label="Birth Country*" />
      {/* <div className=" flex flex-col justify-center gap-1.5">
        <label htmlFor="" className=" text-sm font-normal text-[#475467]">
          Are You 21 or Older?*
        </label>
        <RadioGroup
          defaultValue="yes"
          className=" py-1.5 px-3.5 h-9 flex items-center gap-4 border border-[#E7E9EB] rounded-lg shadow-sm shadow-[#1018280D]"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="option-one" />
            <Label htmlFor="option-one" className="font-normal">
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="option-two" />
            <Label htmlFor="option-two" className="font-normal">
              No
            </Label>
          </div>
        </RadioGroup>
      </div> */}
      <RadioBox
        label="Are You 21 or Older?*"
        isOutline
        className="flex"
        options={radioOptions}
      />
      <DatePicker label="Employment Availability*" />
    </div>
  );
};

export default General;
