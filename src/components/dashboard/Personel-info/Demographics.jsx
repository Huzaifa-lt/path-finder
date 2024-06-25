import React from "react";
import RadioBox from "@/components/ui/RadioBox";
import SelectBox from "@/components/ui/SelectBox";
import { DatePicker } from "@/components/ui/DatePicker";

const Demographics = () => {
  const radioOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  return (
    <div className="mt-5 pb-6 border-b border-[#E4E7EC] flex flex-col gap-5 ">
      <p className=" pr-8 text-[#313131] text-base font-normal">
        The U.S. Equal Employment Opportunity Commission (EEOC) was established
        by Title VII of the Civil Rights Act of 1964 and began operating on July
        2, 1965. The EEOC enforces the principal federal statutes prohibiting
        employment discrimination. Providing demographic information is optional
        and will be used for research purposes only. The information you provide
        in this section (or your decision not to complete this section) will not
        be used in any employment decision by the hiring organization.
      </p>

      <RadioBox
        options={radioOptions}
        label="Do you wish to answer the following?*"
        className=" flex gap-4"
      />

      <div
        className=" mt-5 grid grid-cols-3 gap-x-3
         "
      >
        <SelectBox label="Gender *" />
        <DatePicker label="Date of Birth *" />
        <SelectBox label="Race and Ethnic Identification *" />
      </div>
    </div>
  );
};

export default Demographics;
