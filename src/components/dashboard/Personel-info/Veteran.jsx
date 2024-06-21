import React from "react";
import RadioBox from "@/components/ui/RadioBox";
import Input from "@/components/ui/Input";

const Veteran = () => {
  return (
    <div className=" mt-5 pb-6 border-b border-[#E4E7EC] space-y-5">
      <p className="  text-[#505D6F] text-base font-normal">
        You a considered to be a Protected Veteran if you believe you belong to
        any of the categories below:
      </p>
      <div className="  list-none text-[#505D6F] text-base font-normal space-y-8">
        <li>
          • Disabled veterans defined as (a) veterans of the U.S. military,
          ground, naval or air service who are entitled to compensation (or who
          but for the receiptof military retired pay would be entitled to
          compensation) under laws administered by the Secretary of Veterans
          Affairs; or (b) persons who were discharged or released from active
          duty because of a service-connected disability.
        </li>
        <li>
          • Active duty wartime or campaign badge veterans defined as veterans
          who served on active duty in the U.S. military, ground, naval or air
          service during a war, or in a campaign or expedition for which a
          campaign badge has been authorized under the laws administered by the
          Department of Defense.
        </li>
        <li>
          •Armed Forces service medal veterans defined as veterans who, while
          serving on active duty in the U.S. military, ground, naval or air
          service, participated in a United States military operation for which
          an Armed Forces service medal was awarded pursuant to Executive Order
          12985.
        </li>
      </div>
      <div className="  py-4 pl-4  border border-[#E7E9EB] rounded-xl">
        <label className=" text-base  font-normal text-black" htmlFor="">
          In the past ten (10) years, have you ever been convicted or found not
          guilty by reason of insanity of any of the above listed crimes?
        </label>
        <div className=" mt-4">
          <RadioBox label="Yes, I identify as one or more of the classifications of Protected Veteran listed above" />
          <RadioBox label="I choose not to self identify" />
        </div>
      </div>
      <p className="   text-[#505D6F] text-base font-normal">
        As a Government contractor subject to VEVRAA, we are required to submit
        a report to the US Department of Labor each years identifying the number
        of our employees belonging to each specified "protected veteran"
        category. If you believe you belong to any of the categories of
        protected veterans listed below, please indicate.
      </p>
      <div className=" w-fit">
        <Input type="date" label="Veteran Discharge Date*" />
      </div>

      <div className="  p-4  border border-[#E7E9EB] rounded-xl">
        <label className=" text-base  font-normal text-black" htmlFor="">
          One Selection is Required :
        </label>
        <div className=" mt-4 space-y-4">
          <div>
            <RadioBox label="Disabled Veteran" />
            <p className=" ml-5 mt-1.5 text-sm text-[#505D6F] font-normal">
              A Veteran of the U.S. military, ground, naval or air service who
              is entitled to compensation (or who but for the receipt of
              military retired pay would be entitled to compensation) under laws
              administered by the Secretary of Veterans Affairs; A person who
              was discharged or released from active duty because of a
              service-connected disability.
            </p>
          </div>
          <div>
            <RadioBox label="Active-duty wartime or campaign badge Veteran   " />
            <p className=" ml-5 mt-1.5 text-sm text-[#505D6F] font-normal">
              A Veteran who served on active duty in the U.S. military, ground,
              naval or air service during a war, or in a laws administered by
              the Department of Defense.
            </p>
          </div>
          <div>
            <RadioBox label="Armed Forces Service Medal" />
            <p className=" ml-5 mt-1.5 text-sm text-[#505D6F] font-normal">
              A Veteran who, while serving on active duty in the U.S. military,
              ground, naval or air service, participated in a United States
              military operation for which an Armed Forces Service Medal was
            </p>
          </div>
          <div>
            <RadioBox label="Recently separated Veteran" />
            <p className=" ml-5 mt-1.5 text-sm text-[#505D6F] font-normal">
              Any Veteran during the three-year period beginning on the date of
              such veterans discharge or release from active duty in the U.S.
              military,ground, naval, or air service.
            </p>
          </div>
          <div>
            <RadioBox label="No, I am not a Protected Veteran" />
            <p className=" ml-5 mt-1.5 text-sm text-[#505D6F] font-normal">
              A Veteran who has served honorably in the "U.S. armed
              forces"(including National Guard/Reserves regardless of activation
              status) and does not identify as being one or more of the veteran
              designations listed above.
            </p>
          </div>
          <RadioBox label="l am a Protected Veteran but choose not to self-identify" />
          <RadioBox label="Non-Veteran" />
          <RadioBox label="Choose not to self-identify" />
        </div>
      </div>
    </div>
  );
};

export default Veteran;
