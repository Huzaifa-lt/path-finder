import React, { useState } from "react";
import "./stepper.css";
import StepsTabs from "./StepsTabs";

import General from "./dashboard/Personel-info/General";
import Contact from "./dashboard/Personel-info/Contact";
import Emergency from "./dashboard/Personel-info/Emergency";
import Demographics from "./dashboard/Personel-info/Demographics";
import Disability from "./dashboard/Personel-info/Disability";
import Tsr from "./dashboard/Personel-info/Tsr";
import NonTsrCriminal from "./dashboard/Personel-info/NonTsrCriminal";
import Veteran from "./dashboard/Personel-info/Veteran";
import NavigationButtons from "./NavigationBtns";

const steps = [
  { id: "General", label: "General" },
  { id: "Contact", label: "Contact" },
  { id: "Emergency", label: "Emergency" },
  { id: "Demographics", label: "Demographics" },
  { id: "Disability", label: "Disability" },
  { id: "Tsr", label: "TSR" },
  { id: "NonTsrCriminal", label: "Non-TSR Criminal" },
  { id: "Veteran", label: "Veteran Status" },
];

const stepTitles = {
  General: "General Information",
  Contact: "Contact Information",
  Emergency: "Emergency Contact",
  Demographics: "Demographics",
  Disability: "Disability",
  Tsr: "Transportation Security",
  NonTsrCriminal: "Non-TSR Criminal",
  Veteran: "Veteran Status",
};

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState("General");

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const getCurrentStepComponent = () => {
    switch (currentStep) {
      case "General":
        return <General />;
      case "Contact":
        return <Contact />;
      case "Emergency":
        return <Emergency />;
      case "Demographics":
        return <Demographics />;
      case "Disability":
        return <Disability />;
      case "Tsr":
        return <Tsr />;
      case "NonTsrCriminal":
        return <NonTsrCriminal />;
      case "Veteran":
        return <Veteran />;
      default:
        return <General />;
    }
  };

  const currentIndex = steps.findIndex((step) => step.id === currentStep);
  const nextLabel =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1].label : null;
  const backLabel = currentIndex > 0 ? "Back" : null;

  return (
    <>
      <div className="pl-6 py-3 bg-white flex items-center gap-2 sticky top-0 border-b border-[#E7E9EB]">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <button
              className={`py-2 px-3 rounded-md text-xs font-normal text-black ${
                currentStep === step.id
                  ? "bg-[#F0F7E2] border border-[#8FC521]"
                  : "bg-[#F8F8F9]"
              }`}
              onClick={() => setCurrentStep(step.id)}
            >
              {step.label}
            </button>
            {index < steps.length - 1 && (
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66667 11.3334L12 8.00008L8.66667 4.66675M4 11.3334L7.33333 8.00008L4 4.66675"
                    stroke="#8FC521"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-5 p-6 mx-6 rounded-lg border border-[#E4E7EC]">
        <h3 className="text-xl font-medium text-black">
          {stepTitles[currentStep]}
        </h3>

        {getCurrentStepComponent()}

        <NavigationButtons
          nextLabel={nextLabel}
          backLabel={backLabel}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>
    </>
  );
};

export default Stepper;
