import React from "react";
import Input from "@/components/ui/Input";
import RadioBox from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import { DatePicker } from "@/components/ui/DatePicker";

const General = () => {
  return (
    <div className=" mt-5 pb-6 border-b border-[#E4E7EC] grid grid-cols-4 gap-x-3 gap-y-[21px]">
      <Input type="text" label="First Name*" />
      <Input type="text" label="Middle Name*" />
      <Input type="text" label="Last Name*" />
      <Input type="text" label="Suffix" />
      <Input type="text" label="Maiden Name" />
      <Input type="number" label="Passport No.*" />
      <DatePicker label="Passport Issue Date *" />
      <DatePicker label="Passport Expiration Date*" />
      <Input type="text" label="Country of Issuance*" />
      <Input type="text" label="Country of Legal Residence*" />
      <SelectBox label="Birth Country*" />
      <RadioBox label="Are You 21 or Older?*" />
      <DatePicker label="Employment Availability*" />
    </div>
  );
};

export default General;
