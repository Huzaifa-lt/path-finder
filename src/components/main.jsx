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
          <button className=" p-[3.63px] flex justify-center items-center bg-[#E48B3D] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0]  before:absolute before:left-[60%] before:top-[30%] before:-z-10  lg:before:w-full 2xl:before:w-[200px]  ">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-[38.74px] h-[38.74px] transform -rotate-90">
                <circle
                  className="text-white opacity-20"
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="16" /* Adjusted for stroke width */
                  cx="19.37"
                  cy="19.37"
                />
                <circle
                  className="text-white"
                  strokeWidth="5"
                  strokeDasharray="90.2" /* Calculated circumference for r=14.37 */
                  strokeDashoffset="80" /* Adjust based on percentage (0% = 90.2, 100% = 0) */
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                  style={{ opacity: 1 }}
                />
              </svg>
              <div className="absolute text-xs font-semibold text-white">
                0%
              </div>
            </div>
          </button>
          <p className=" mt-[11px] text-[#2E2E2E] text-sm font-semibold">
            Personal Information
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10 lg:before:w-full 2xl:before:w-[200px]  ">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-[38.74px] h-[38.74px] rotate -rotate-90">
                <circle
                  className="text-[#AFD661] opacity-20 "
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                />
                <circle
                  className="text-[#AFD661]"
                  strokeWidth="5"
                  strokeDasharray="90.2" /* Calculated circumference for r=14.37 */
                  strokeDashoffset="5" /* Adjust for 95% (100% - 95% of circumference) */
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                  style={{ opacity: 1 }}
                />
              </svg>
              <div className="absolute text-xs font-semibold text-black">
                95%
              </div>
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Address History
          </p>
        </div>

        <div className=" relative flex flex-col items-center">
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  lg:before:w-full 2xl:before:w-[200px] ">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-[38.74px] h-[38.74px] rotate -rotate-90">
                <circle
                  className="text-[#AFD661] opacity-20 "
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                />
                <circle
                  className="text-[#AFD661]"
                  strokeWidth="5"
                  strokeDasharray="90.2" /* Calculated circumference for r=14.37 */
                  strokeDashoffset="17" /* Adjust for 95% (100% - 95% of circumference) */
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                  style={{ opacity: 1 }}
                />
              </svg>
              <div className="absolute text-xs font-semibold text-black">
                83%
              </div>
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Education History
          </p>
        </div>

        <div className=" relative flex flex-col items-center">
          {" "}
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-[''] before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  lg:before:w-full 2xl:before:w-[200px] ">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-[38.74px] h-[38.74px] rotate -rotate-90">
                <circle
                  className="text-[#AFD661] opacity-20 "
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                />
                <circle
                  className="text-[#AFD661]"
                  strokeWidth="5"
                  strokeDasharray="90.2" /* Calculated circumference for r=14.37 */
                  strokeDashoffset="52" /* Adjust for 95% (100% - 95% of circumference) */
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                  style={{ opacity: 1 }}
                />
              </svg>
              <div className="absolute text-xs font-semibold text-black">
                48%
              </div>
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Employment History
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          {" "}
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10 lg:before:w-full 2xl:before:w-[200px]  ">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-[38.74px] h-[38.74px] rotate -rotate-90">
                <circle
                  className="text-[#AFD661] opacity-20 "
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                />
                <circle
                  className="text-[#AFD661]"
                  strokeWidth="5"
                  strokeDasharray="90.2" /* Calculated circumference for r=14.37 */
                  strokeDashoffset="35" /* Adjust for 95% (100% - 95% of circumference) */
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                  style={{ opacity: 1 }}
                />
              </svg>
              <div className="absolute text-xs font-semibold text-black">
                55%
              </div>
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Certificates & Ratings
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          {" "}
          <button className="  p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10  lg:before:w-full 2xl:before:w-[200px] ">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-[38.74px] h-[38.74px] rotate -rotate-90">
                <circle
                  className="text-[#AFD661] opacity-20 "
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                />
                <circle
                  className="text-[#AFD661]"
                  strokeWidth="5"
                  strokeDasharray="90.2" /* Calculated circumference for r=14.37 */
                  strokeDashoffset="70" /* Adjust for 95% (100% - 95% of circumference) */
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                  style={{ opacity: 1 }}
                />
              </svg>
              <div className="absolute text-xs font-semibold text-black">
                30%
              </div>
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Flying History
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          {" "}
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full before:content-['']  before:h-0.5 before:bg-[#C6CAD0] before:absolute before:left-[60%] before:top-[30%] before:-z-10 lg:before:w-full 2xl:before:w-[180px] ">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-[38.74px] h-[38.74px] rotate -rotate-90">
                <circle
                  className="text-[#AFD661] opacity-20 "
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                />
                <circle
                  className="text-[#AFD661]"
                  strokeWidth="5"
                  strokeDasharray="90.2" /* Calculated circumference for r=14.37 */
                  strokeDashoffset="85" /* Adjust for 95% (100% - 95% of circumference) */
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                  style={{ opacity: 1 }}
                />
              </svg>
              <div className="absolute text-xs font-semibold text-black">
                15%
              </div>
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            Refrences
          </p>
        </div>
        <div className=" relative flex flex-col items-center">
          {" "}
          <button className=" p-[3.63px] bg-[#F0F7E2] size-[46px] rounded-full   ">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-[38.74px] h-[38.74px] rotate -rotate-90">
                <circle
                  className="text-[#AFD661] opacity-20 "
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                />
                <circle
                  className="text-[#AFD661]"
                  strokeWidth="5"
                  strokeDasharray="90.2" /* Calculated circumference for r=14.37 */
                  strokeDashoffset="80" /* Adjust for 95% (100% - 95% of circumference) */
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="19.37"
                  cy="19.37"
                  style={{ opacity: 1 }}
                />
              </svg>
              <div className="absolute text-xs font-semibold text-black">
                20%
              </div>
            </div>
          </button>
          <p className=" mt-[11px] text-[#7C8693] text-sm font-semibold">
            File Uploads
          </p>
        </div>
      </div>

      <div>
        {/* <Stepper /> */}
        {/* <AddressHistory /> */}
        {/* <Education /> */}
        {/* <Employment /> */}
        {/* <Certificates /> */}
        {/* <Flying /> */}
        {/* <Refrences /> */}
        <FileUploads />
      </div>

      <StepsAction />
    </div>
  );
};

export default Main;








// import React, { useState } from "react";
// import FormWizard from "react-form-wizard-component";
// import "react-form-wizard-component/dist/style.css";
// import Stepper from "./Stepper";
// import StepsAction from "./StepsAction";
// import Education from "./dashboard/education/Education";
// import Employment from "./dashboard/employment/Employment";
// import Certificates from "./dashboard/certificates/Certificates";
// import Flying from "./dashboard/flying/Flying";
// import Refrences from "./dashboard/refrences/Refrences";
// import FileUploads from "./dashboard/file-uploads/FileUploads";
// import AddressHistory from "./dashboard/address-history/AddressHistory";
// import Pie from "./Pie";

// const items = [
//   {
//     percentage: 0,
//     bg: "#E48B3D",
//     textColor: "white",
//     label: "Personal Information",
//   },
//   {
//     percentage: 95,
//     bg: "#F0F7E2",
//     textColor: "#8FC521",
//     label: "Address History",
//   },
//   {
//     percentage: 83,
//     bg: "#F0F7E2",
//     textColor: "#8FC521",
//     label: "Education History",
//   },
//   {
//     percentage: 48,
//     bg: "#F0F7E2",
//     textColor: "#8FC521",
//     label: "Employment History",
//   },
//   {
//     percentage: 55,
//     bg: "#F0F7E2",
//     textColor: "#8FC521",
//     label: "Certificates & Ratings",
//   },
//   {
//     percentage: 30,
//     bg: "#F0F7E2",
//     textColor: "#8FC521",
//     label: "Flying History",
//   },
//   { percentage: 15, bg: "#F0F7E2", textColor: "#8FC521", label: "References" },
//   {
//     percentage: 20,
//     bg: "#F0F7E2",
//     textColor: "#8FC521",
//     label: "File Uploads",
//   },
// ];

// const Main = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <Stepper />;
//       case 1:
//         return <AddressHistory />;
//       case 2:
//         return <Education />;
//       case 3:
//         return <Employment />;
//       case 4:
//         return <Certificates />;
//       case 5:
//         return <Flying />;
//       case 6:
//         return <Refrences />;
//       case 7:
//         return <FileUploads />;
//       default:
//         return <Stepper />;
//     }
//   };

//   return (
//     <div className="h-full">
//       <h2 className="pl-6 py-5 border-b border-[#F0F1F3]">
//         {items[currentStep].label}
//       </h2>

//       <div className="py-6 px-6 relative flex items-center justify-between gap-12 border-b border-[#F0F1F3]">
//         {items.map((item, index) => (
//           <div key={index} className="relative flex flex-col items-center">
//             <button
//               onClick={() => setCurrentStep(index)}
//               className={`p-[3.63px] bg-[${
//                 item.bg
//               }] w-[46px] h-[46px] rounded-full relative ${
//                 index !== 0
//                   ? "before:content-[''] before:h-0.5 before:w-full before:bg-[#C6CAD0] before:absolute before:top-1/2 before:right-10 before:-z-30 before:transform before:-translate-y-1/2 lg:before:w-[200px]"
//                   : ""
//               }`}
//             >
//               <div className="flex items-center justify-center">
//                 <Pie percentage={item.percentage} colour={item.textColor} />
//               </div>
//             </button>
//             <p className="mt-[11px] text-[#7C8693] text-sm font-semibold">
//               {item.label}
//             </p>
//           </div>
//         ))}
//       </div>

//       <div>{renderStepContent(currentStep)}</div>

//       <StepsAction />
//     </div>
//   );
// };

// export default Main;

