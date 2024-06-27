import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Stepper from "./Stepper";
import StepsAction from "./StepsAction";
import Education from "./dashboard/education/Education";
import { Button } from "./ui/button";
import Employment from "./dashboard/employment/Employment";
import Certificates from "./dashboard/certificates/Certificates";
import Flying from "./dashboard/flying/Flying";
import Refrences from "./dashboard/refrences/Refrences";
import FileUploads from "./dashboard/file-uploads/FileUploads";
import AddressHistory from "./dashboard/address-history/AddressHistory";

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

      <div className=" py-6 px-6 relative flex items-center justify-between gap-12 border-b border-[#F0F1F3]">
        <div className=" relative flex flex-col items-center">
          <button className=" p-[3.63px] bg-[#E48B3D] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0]  before:absolute before:left-[60%] before:top-[30%] before:-z-10  lg:before:w-full 2xl:before:w-[200px]  ">
            <div className=" size-[38.74px] bg-transparent border-[4px] border-white border-opacity-20 rounded-full text-xs font-semibold flex items-center justify-center text-white  ">
              0%
            </div>
          </button>
          <p className=" mt-[11px] text-[#2E2E2E] text-sm font-semibold">
            Personal Information
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10 lg:before:w-full 2xl:before:w-[200px]  ">
            <div className=" size-[38.74px]  border-[4px] border-[#AFD661] border-opacity-20  rounded-full text-xs font-semibold flex items-center justify-center text-black ">
              95%
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Address History
          </p>
        </div>

        <div className=" relative flex flex-col items-center">
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  lg:before:w-full 2xl:before:w-[200px] ">
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
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-[''] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  lg:before:w-full 2xl:before:w-[200px] ">
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
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10 lg:before:w-full 2xl:before:w-[200px]  ">
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
          <button className="  p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  lg:before:w-full 2xl:before:w-[200px] ">
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
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10 lg:before:w-full 2xl:before:w-[180px] ">
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

      <div>
        <Stepper />
        {/* <AddressHistory /> */}
        {/* <Education /> */}
        {/* <Employment /> */}
        {/* <Certificates /> */}
        {/* <Flying /> */}
        {/* <Refrences /> */}
        {/* <FileUploads /> */}
      </div>

      <StepsAction />
    </div>
  );
};

export default Main;
