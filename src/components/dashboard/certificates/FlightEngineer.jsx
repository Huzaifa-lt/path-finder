import CheckBox from "@/components/ui/CheckBox";
import { DatePicker } from "@/components/ui/DatePicker";
import RadioBox from "@/components/ui/RadioBox";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const FlightEngineer = () => {
  return (
    <div>
      <div className=" w-fit">
        <label htmlFor="" className=" text-sm font-normal text-[#475467]">
          Any flight engineer certificates?
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>

      <div className=" mt-5 pb-5  flex items-center gap-5 border-b border-[#E4E7EC]">
        <div className=" py-4 flex-grow h-[302px] border border-[#E4E7EC] rounded-lg">
          <h3 className="  px-4 pb-4 border-b border-[#E4E7EC] text-base font-medium text-black">
            Specify all types that apply*
          </h3>
          <div className=" px-4 mt-4 ">
            <div className=" flex gap-4">
              <DatePicker label="Flight Engineer Certificate*" />
              <DatePicker label="Date of Issue*" />
            </div>

            <div className=" mt-5 flex items-center gap-4">
              <CheckBox label="Turbojet" />
              <CheckBox label="Turboprop" />
              <CheckBox label="Reciprocating" />
            </div>
          </div>
        </div>

        <div className="py-4 flex-grow min-h-[302px] border border-[#E4E7EC] rounded-lg">
          <h3 className="  px-4 pb-4 border-b border-[#E4E7EC] text-base font-medium text-black">
            Check all Instrument Ratings that apply
          </h3>

          <div className=" px-4 mt-4 grid grid-cols-2 gap-4">
            <DatePicker label="TurboJet Test Date*" />
            <div className=" ">
              <label htmlFor="" className=" text-sm font-normal text-[#475467]">
                Is it current IAW FAR's? *
              </label>
              <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
                <RadioBox label="Yes" />
                <RadioBox label="No" />
              </div>
            </div>
            <DatePicker label="TurboJet Test Date*" />
            <div className=" ">
              <label htmlFor="" className=" text-sm font-normal text-[#475467]">
                Is it current IAW FAR's? *
              </label>
              <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
                <RadioBox label="Yes" />
                <RadioBox label="No" />
              </div>
            </div>
            <DatePicker label="Reciprocating Test Date*" />
            <div className=" ">
              <label htmlFor="" className=" text-sm font-normal text-[#475467]">
                Is it current IAW FAR's? *
              </label>
              <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
                <RadioBox label="Yes" />
                <RadioBox label="No" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-5">
        <h3 className=" mb-4 text-base font-medium text-black">
          Flight Engineer Written
        </h3>
        <div className="pb-5 border-b border-[#E4E7EC]  grid grid-cols-3 gap-x-3 gap-y-5 ">
          <div>
            <label htmlFor="" className=" text-sm font-normal text-[#475467]">
              FEB?*
            </label>
            <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
              <RadioBox label="Yes" />
              <RadioBox label="No" />
            </div>
          </div>
          <div>
            <label htmlFor="" className=" text-sm font-normal text-[#475467]">
              FEJ? *
            </label>
            <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
              <RadioBox label="Yes" />
              <RadioBox label="No" />
            </div>
          </div>
          <div>
            <label htmlFor="" className=" text-sm font-normal text-[#475467]">
              Flight Engineer FEX? *
            </label>
            <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
              <RadioBox label="Yes" />
              <RadioBox label="No" />
            </div>
          </div>

          <DatePicker label="Reciprocating Test Date*" />
          <DatePicker label="Solo Date*" />
        </div>
      </div>
    </div>
  );
};

export default FlightEngineer;
