import RadioBox from "@/components/ui/RadioBox";
import React from "react";

const CertificatesGeneral = () => {
  return (
    <div className=" mt-5 pb-5 border-b border-[#E4E7EC]  grid grid-cols-4 gap-x-3 gap-y-[21px]">
      <div>
        <label htmlFor="" className=" text-sm font-normal text-[#475467]">
          A Chief Pilot (Military) *
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>

      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          A Director of Operations? *
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          A Director of Safety?*
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          A Check Airman (Military)*
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          A Check Airman (Part 135)?*
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          FAA Examiner? *
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>

      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          FAA Approved Program?*
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          A Chief Pilot ?*
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          Radio Telephone Operators License? *
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          A Check Airman (Part 121)? *
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          A Chief Pilot (Part 135) ? *
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div>
        <label htmlFor="" className="  text-sm font-normal text-[#475467]">
          A Chief Pilot (Part 121)?*
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
    </div>
  );
};

export default CertificatesGeneral;
