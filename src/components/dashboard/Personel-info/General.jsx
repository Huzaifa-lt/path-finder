import React from "react";


import RadioBox from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import { DatePicker } from "@/components/ui/DatePicker";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import InputField from "@/components/ui/InputField";
import { countries } from "@/components/constants";

const General = () => {
  const radioOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return (
    <div className=" mt-5 mb-4 pb-6 border-b border-[#E4E7EC] grid grid-cols-4 gap-x-3 gap-y-[21px]">
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
      <SelectBox options={countries} label="Birth Country*" />
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
