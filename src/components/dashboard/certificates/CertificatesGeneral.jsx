import RadioBox, { radioOptions } from "@/components/ui/RadioBox";
import React from "react";

const CertificatesGeneral = () => {
  return (
    <div className=" mt-5 pb-5 border-b border-[#E4E7EC]  grid grid-cols-4 gap-x-3 gap-y-[21px]">
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="A Chief Pilot (Military) *"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="A Director of Operations? *"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="A Director of  Safety?*"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="A Check Airman (Part 135)?*"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="FAA Examiner? *"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="FAA Approved Program?*"
      />

      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="A Chief Pilot ?*"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="Radio Telephone Operators License? *"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="A Check Airman (Part 121)? *"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="A Chief Pilot (Military) *"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label="A Chief Pilot (Part 135) ? *"
      />
      <RadioBox
        isOutline
        options={radioOptions}
        className="flex gap-4"
        label=" A Chief Pilot (Part 121)?*"
      />
    </div>
  );
};

export default CertificatesGeneral;
