import TextArea from "@/components/ui/TextArea";
import React from "react";

const Achievements = () => {
  return (
    <>
      <div className=" px-6 py-6 border border-[#E4E7EC] rounded-lg">
        <h2 className=" mb-5 text-xl font-medium text-black">
          Education Summary
        </h2>

        <TextArea
          label="If you have any achievements list them below"
          placeholder="Enter a achievements..."
        />
        <div className=" mt-5 flex justify-end">
          <button className="  py-2 px-3 rounded-lg   bg-white border border-[#E4E7EC] shadow-sm shadow-[#1018280D]  ">
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Achievements;
