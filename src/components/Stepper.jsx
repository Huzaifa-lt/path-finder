import React, { useState } from "react";
import "./stepper.css";
import StepsTabs from "./StepsTabs";
import General from "./dashboard/Personel-info/general/General";
import Contact from "./dashboard/Personel-info/contact/Contact";
import Emergency from "./dashboard/Personel-info/emergency/Emergency";
import Demographics from "./dashboard/Personel-info/demographics/Demographics";
import Disability from "./dashboard/Personel-info/disability/Disability";
import Tsr from "./dashboard/Personel-info/tsr/Tsr";
import NonTsrCriminal from "./dashboard/Personel-info/non-tsr-criminal/NonTsrCriminal";
import Veteran from "./dashboard/Personel-info/veteran/Veteran";
import AddressHistory from "./dashboard/address-history/AddressHistory";
// import { TiTick } from "react-icons/ti";
const Stepper = () => {
  //   const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
  const steps = [
    "Personal Information",
    "Address History",
    "Education History",
    "Employment History",
    "Certificates & Ratings",
    "Flying History",
    "Refrences",
    "File Uploads",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <StepsTabs />

      <div className=" mt-5 p-6 mx-6 rounded-lg border border-[#E4E7EC] ">
        <h3 className=" text-xl font-medium text-black">General Information</h3>
        {/* <General /> */}
        <Contact />
        {/* <Emergency /> */}
        {/* <Demographics /> */}
        {/* <Disability /> */}
        {/* <Tsr /> */}
        {/* <NonTsrCriminal /> */}
        {/* <Veteran /> */}
        {/* <AddressHistory /> */}
        <div className="  mx-6  flex justify-end">
          <button className=" mt-4 py-2 px-3 rounded-lg  flex items-center justify-end gap-1 bg-[#F0F7E2] border border-[#8FC521] ">
            Next:
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66667 11.8333L12 8.49996L8.66667 5.16663M4 11.8333L7.33333 8.49996L4 5.16663"
                stroke="#8FC521"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Contact Information
          </button>
        </div>
      </div>
    </>
  );
};

export default Stepper;
