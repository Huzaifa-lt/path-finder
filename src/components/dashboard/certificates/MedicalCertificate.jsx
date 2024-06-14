import { DatePicker } from "@/components/ui/DatePicker";
import RadioBox from "@/components/ui/RadioBox";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const MedicalCertificate = () => {
  return (
    <div>
      <div className=" w-fit">
        <label htmlFor="" className=" text-sm font-normal text-[#475467]">
          Any pilot certificates?
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>

      <div className=" py-5 border-b border-[#E4E7EC]">
        <h3 className=" text-base font-medium text-black">
          First Class Medical Certificate? *
        </h3>
        <div className=" mt-4 grid grid-cols-3 gap-4 ">
          <div>
            <label htmlFor="" className=" text-sm font-normal text-[#475467]">
              Do you have any first class medical certificates?
            </label>
            <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
              <RadioBox label="Yes" />
              <RadioBox label="No" />
            </div>
          </div>
          <DatePicker label="Issued Date*" />
          <DatePicker label="Expiration Date*" />
        </div>
      </div>
      <div className=" py-5 border-b border-[#E4E7EC]">
        <h3 className=" text-base font-medium text-black">
          Second Class Medical Certificate ? *
        </h3>
        <div className=" mt-4 grid grid-cols-3 gap-4 ">
          <div>
            <label htmlFor="" className=" text-sm font-normal text-[#475467]">
              Do you have any second class medical certificates?
            </label>
            <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
              <RadioBox label="Yes" />
              <RadioBox label="No" />
            </div>
          </div>
          <DatePicker label="Issued Date*" />
          <DatePicker label="Expiration Date*" />
        </div>
      </div>
      <div className=" py-5 ">
        <h3 className=" text-base font-medium text-black">
          Military Physical Certificate? *
        </h3>
        <div className=" mt-4 grid grid-cols-3 gap-4 ">
          <div>
            <label htmlFor="" className=" text-sm font-normal text-[#475467]">
              Do you have any military physical certificate?*
            </label>
            <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
              <RadioBox label="Yes" />
              <RadioBox label="No" />
            </div>
          </div>
          <DatePicker label="Issued Date*" />
          <DatePicker label="Expiration Date*" />
        </div>
      </div>
      <TextArea label="Limitations*" placeholder="List any limitations..." />
    </div>
  );
};

export default MedicalCertificate;
