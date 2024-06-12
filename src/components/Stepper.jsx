import React, { useState } from "react";
import "./stepper.css";
import StepsTabs from "./StepsTabs";
import General from "./General";
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
      <div className=" py-6 px-6 relative flex items-center justify-between gap-12 border-b border-[#F0F1F3]">
        <div className=" relative flex flex-col items-center">
          <button className=" p-[3.63px] bg-[#E48B3D] size-[46px] rounded-full before:content-[''] before:w-[200px] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10   ">
            <div className=" size-[38.74px] bg-transparent border-[4px] border-white border-opacity-20 rounded-full text-xs font-semibold flex items-center justify-center text-white  ">
              0%
            </div>
          </button>
          <p className=" mt-[11px] text-[#2E2E2E] text-sm font-semibold">
            Personal Information
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-[''] before:w-[200px] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  ">
            <div className=" size-[38.74px]  border-[4px] border-[#AFD661] border-opacity-20  rounded-full text-xs font-semibold flex items-center justify-center text-black ">
              95%
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Address History
          </p>
        </div>

        <div className=" relative flex flex-col items-center">
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-[''] before:w-[200px] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  ">
            <div className=" size-[38.74px]  border-[4px] border-[#AFD661] border-opacity-20  rounded-full text-xs font-semibold flex items-center justify-center text-black ">
              83%
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Education History
          </p>
        </div>

        <div className=" relative flex flex-col items-center">
          {" "}
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-[''] before:w-[200px] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  ">
            <div className=" size-[38.74px]  border-[4px] border-[#AFD661] border-opacity-20  rounded-full text-xs font-semibold flex items-center justify-center text-black ">
              48%
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Employment History
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          {" "}
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-[''] before:w-[200px] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  ">
            <div className=" size-[38.74px]  border-[4px] border-[#AFD661] border-opacity-20  rounded-full text-xs font-semibold flex items-center justify-center text-black ">
              55%
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Certificates & Ratings
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          {" "}
          <button className="  p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-[''] before:w-[200px] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  ">
            <div className=" size-[38.74px]  border-[4px] border-[#AFD661] border-opacity-20  rounded-full text-xs font-semibold flex items-center justify-center text-black ">
              30%
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Flying History
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          {" "}
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-[''] before:w-[190px] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  ">
            <div className=" size-[38.74px]  border-[4px] border-[#AFD661] border-opacity-20  rounded-full text-xs font-semibold flex items-center justify-center text-black ">
              15%
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Refrences
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          {" "}
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full   ">
            <div className=" size-[38.74px]  border-[4px] border-[#AFD661] border-opacity-20  rounded-full text-xs font-semibold flex items-center justify-center text-black ">
              20%
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            File Uploads
          </p>
        </div>
      </div>
      <StepsTabs />

      <div className=" mt-5 p-6 mx-6 rounded-lg border border-[#E4E7EC] ">
        <h3 className=" text-xl font-medium text-black">General Information</h3>
        <General />
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
