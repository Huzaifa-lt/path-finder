import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Stepper from "./Stepper";
import StepsAction from "./StepsAction";

const handleComplete = () => {
  console.log("Form completed!");
  // Handle form completion logic here
};

const FormTitles = [
  "Personal Information",
  "Address History",
  "Education History",
  "Employment History",
  "Certificates & Ratings",
  "Flying History",
  "Refrences",
  "File Uploads",
];

export function ProgressCircleBar() {
  return (
    <div className=" p-[3.63px] bg-orange-600 size-[46px] rounded-full ">
      <div className=" size-[38.74px] bg-transparent border-[4px] border-[#E48B3D] rounded-full text-xs font-semibold flex items-center justify-center  ">
        0%
      </div>
    </div>
  );
}

const Main = () => {
  return (
    <div className=" h-full">
      <h2 className="  pl-6 py-5 border-b border-[#F0F1F3] ">
        Personal Information
      </h2>

      <div>
        <Stepper />
      </div>

      <StepsAction />
    </div>
  );
};

export default Main;
