import RadioBox from "@/components/ui/RadioBox";
import React from "react";

const NonTsrCriminal = () => {
  const radioOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  return (
    <div className=" my-5 pb-6 border-b border-[#E4E7EC] ">
      {/* <div className=" mt-5 py-4 pl-4  border border-[#E7E9EB] rounded-xl">
        <label className=" text-base  font-normal text-black" htmlFor="">
          In the past ten (10) years, have you ever been convicted of a crime
          involving a felony, misdemeanor, infraction, or violation of any law?
        </label>
        <div className=" mt-4">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div> */}
      <div className=" mt-5">
        <RadioBox
          options={radioOptions}
          label="   In the past ten (10) years, have you ever been convicted of a crime
          involving a felony, misdemeanor, infraction, or violation of any law?"
        />
      </div>
    </div>
  );
};

export default NonTsrCriminal;
