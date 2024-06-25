import React from "react";
import RadioBox from "@/components/ui/RadioBox";

const Disability = () => {

  const RadioOptions = [
    {
      label: "Yes, I have a disability (or had a disability)",
      value: "yes",
    },
    { label: "No, I do not have a disability", value: "no" },
    { label: "I do not wish to answer", value: "no-answer" },
  ];

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

      {/* <label
          //   className=" py-[7px] px-3.5   rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D]"
          htmlFor=""
        >
          Select one from the list below:
        </label> */}

      <RadioBox
        label="Select one from the list below:"
        options={RadioOptions}
        questionClass=" text-black text-base"
      />
      {/* <RadioBox label="No, I do not have a disability" />
          <RadioBox label="I do not wish to answer" /> */}
    </div>
  );
};

export default Disability;
