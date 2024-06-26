import React from "react";
import Input from "@/components/ui/InputField";
import PhoneSelectField from "@/components/ui/PhoneSelectField";
import SelectBox from "@/components/ui/SelectBox";
import { states } from "@/components/constants";

const Emergency = () => {
  return (
    <div className=" my-5 pb-6 border-b border-[#E4E7EC] grid grid-cols-4 gap-x-3 gap-y-[21px]">
      <Input type="text" label="First Name *" />
      <Input type="text" label="Middle Name *" />
      <Input type="text" label="Last Name  *" />
      <Input type="text" label="Relationship  * " />
      <Input type="text" label="Address*" />
      <Input type="text" label="City *" />
      <SelectBox options={states} label="State*" />
      <Input type="number" label="Zip code  * " />
      <PhoneSelectField
        label="Primary phone*"
        placeholder="+1 (555) 000-0000"
      />
    </div>
  );
};

export default Emergency;
