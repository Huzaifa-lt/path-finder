import React from "react";
import RadioBox from "@/components/ui/RadioBox";

const Disability = () => {
  return (
    <div className="pb-5 border-b border-[#E4E7EC]">
      <p className=" py-5 text-[#505D6F] text-base font-normal border-b border-[#E4E7EC]">
        You are considered to have a disability if you have a physical or mental
        impairment or medical condition that substantially limits a major life
        activity, or if you have a history or record of such an impairment or
        medical condition.
      </p>
      <div className=" my-5 list-disc grid grid-cols-4">
        <div className=" text-[#505D6F] text-base font-normal">
          <li>Blindness</li>
          <li>Deafness</li>
          <li>Cancer</li>
          <li>Diabetes</li>
          <li>Epilepsy</li>
        </div>

        <div className=" text-[#505D6F] text-base font-normal">
          <li>Autism</li>
          <li>Cerebral palsy</li>
          <li>HIV/AIDS</li>
          <li>Schizophrenia</li>
          <li>Muscular dystrophy</li>
        </div>

        <div className=" text-[#505D6F] text-base font-normal">
          <li>Bipolar disorder</li>
          <li>Major depression</li>
          <li>Multiple sclerosis (MS)</li>
          <li>Missing limbs or partially missing limbs</li>
        </div>

        <div className=" text-[#505D6F] text-base font-normal">
          <li>Post - traumatic stress disorder (PTSD)</li>
          <li>Obsessive compulsive disorder</li>
          <li>Impairments requiring the use of a wheelchair</li>
          <li>
            Intellectual disability (previously called mental retardation)
          </li>
        </div>
      </div>

      <div className=" py-4 pl-4  border border-[#E7E9EB] rounded-xl">
        <label
          //   className=" py-[7px] px-3.5   rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D]"
          htmlFor=""
        >
          Select one from the list below:
        </label>
        <div>
          <RadioBox label="Yes, I have a disability (or had a disability)" />
          <RadioBox label="No, I do not have a disability" />
          <RadioBox label="I do not wish to answer" />
        </div>
      </div>
    </div>
  );
};

export default Disability;
