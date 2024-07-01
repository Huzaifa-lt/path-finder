import CheckBox from "@/components/ui/CheckBox";
import { DatePicker } from "@/components/ui/DatePicker";
import RadioBox, { radioOptions } from "@/components/ui/RadioBox";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const FlightEngineer = () => {
  return (
    <div>
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label=" Any flight engineer certificates?"
      />

      <div className=" mt-5 pb-5  flex items-center gap-5 border-b border-[#E4E7EC]">
        <div className=" py-4 flex-grow h-[302px] border border-[#E4E7EC] rounded-lg">
          <h3 className="  px-4 pb-4 border-b border-[#E4E7EC] text-base font-medium text-black">
            Specify all types that apply*
          </h3>
          <div className=" px-4 mt-4 ">
            <div className=" grid grid-cols-2 gap-x-4">
              <DatePicker className="" label="Flight Engineer Certificate*" />
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

            <RadioBox
              isOutline
              options={radioOptions}
              className="flex gap-4"
              label=" Is it current IAW FAR's? *"
            />
            <DatePicker label="TurboJet Test Date*" />

            <RadioBox
              isOutline
              options={radioOptions}
              className="flex gap-4"
              label=" Is it current IAW FAR's? *"
            />
            <DatePicker label="Reciprocating Test Date*" />

            <RadioBox
              isOutline
              options={radioOptions}
              className="flex gap-4"
              label="   Is it current IAW FAR's? *"
            />
          </div>
        </div>
      </div>

      <div className=" mt-5">
        <h3 className=" mb-4 text-base font-medium text-black">
          Flight Engineer Written
        </h3>
        <div className="pb-5 border-b border-[#E4E7EC]  grid grid-cols-3 gap-x-3 gap-y-5 ">
          <RadioBox
            isOutline
            options={radioOptions}
            className="flex gap-4"
            label="FEB?*"
          />
          <RadioBox
            isOutline
            options={radioOptions}
            className="flex gap-4"
            label="FEJ? *"
          />
          <RadioBox
            isOutline
            options={radioOptions}
            className="flex gap-4"
            label="Flight Engineer FEX? *"
          />

          <DatePicker label="Reciprocating Test Date*" />
          <DatePicker label="Solo Date*" />
        </div>
      </div>
    </div>
  );
};

export default FlightEngineer;
