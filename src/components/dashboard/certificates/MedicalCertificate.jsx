import { DatePicker } from "@/components/ui/DatePicker";
import RadioBox, { radioOptions } from "@/components/ui/RadioBox";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const MedicalCertificate = () => {
  return (
    <div>
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="Any pilot certificates?"
      />

      <div className=" py-5 border-b border-[#E4E7EC]">
        <h3 className=" text-base font-medium text-black">
          First Class Medical Certificate? *
        </h3>
        <div className=" mt-4 grid grid-cols-3 gap-4 ">
          <RadioBox
            isOutline
            options={radioOptions}
            className="flex gap-4"
            label="Do you have any first class medical certificates?"
          />
          <DatePicker label="Issued Date*" />
          <DatePicker label="Expiration Date*" />
        </div>
      </div>
      <div className=" py-5 border-b border-[#E4E7EC]">
        <h3 className=" text-base font-medium text-black">
          Second Class Medical Certificate ? *
        </h3>
        <div className=" mt-4 grid grid-cols-3 gap-4 ">
          <RadioBox
            isOutline
            options={radioOptions}
            className="flex gap-4"
            label="Do you have any second class medical certificates?"
          />
          <DatePicker label="Issued Date*" />
          <DatePicker label="Expiration Date*" />
        </div>
      </div>
      <div className=" py-5 ">
        <h3 className=" text-base font-medium text-black">
          Military Physical Certificate? *
        </h3>
        <div className=" mt-4 grid grid-cols-3 gap-4 ">
          <RadioBox
            isOutline
            options={radioOptions}
            className="flex gap-4"
            label="Do you have any military physical certificate?*"
          />
          <DatePicker label="Issued Date*" />
          <DatePicker label="Expiration Date*" />
        </div>
      </div>
      <TextArea label="Limitations*" placeholder="List any limitations..." />
    </div>
  );
};

export default MedicalCertificate;
