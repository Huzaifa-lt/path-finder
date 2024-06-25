import React, { useState } from "react";
import CertificatesTabs from "./CertificatesTabs";
import CertificatesGeneral from "./CertificatesGeneral";
import MiscellaneousCertificates from "./MiscellaneousCertificates";
import PilotCertificates from "./PilotCertificates";
import InstructorCertificate from "./InstructorCertificate";
import FlightEngineer from "./FlightEngineer";
import MedicalCertificate from "./MedicalCertificate";
import PilotQuestionnaire from "./PilotQuestionnaire";

const Certificates = () => {
  const [currentTab, setCurrentTab] = useState("CertificatesGeneral");

  const renderContent = () => {
    switch (currentTab) {
      case "CertificatesGeneral":
        return <CertificatesGeneral />;
      case "PilotCertificates":
        return <PilotCertificates />;
      case "InstructorCertificate":
        return <InstructorCertificate />;
      case "FlightEngineer":
        return <FlightEngineer />;
      case "MedicalCertificate":
        return <MedicalCertificate />;
      case "MiscellaneousCertificates":
        return <MiscellaneousCertificates />;
      case "PilotQuestionnaire":
        return <PilotQuestionnaire />;
      default:
        return <CertificatesGeneral />;
    }
  };

  return (
    <>
      <CertificatesTabs currentTab={currentTab} onTabClick={setCurrentTab} />
      <div className="mt-5 p-6 mx-6 rounded-lg border border-[#E4E7EC]">
        <h3 className=" mb-5 text-xl font-medium text-black">
          {currentTab === "CertificatesGeneral" && "General Certificates"}
          {currentTab === "PilotCertificates" && "Pilot Certificates"}
          {currentTab === "InstructorCertificate" && "Instructor Certificates"}
          {currentTab === "FlightEngineer" && "Flight Engineer Certificates"}
          {currentTab === "MedicalCertificate" && "Medical Certificates"}
          {currentTab === "MiscellaneousCertificates" &&
            "Miscellaneous Certificates"}
          {currentTab === "PilotQuestionnaire" && "Questionnaire Certificates"}
        </h3>
        {renderContent()}
        <div className="mt-5 flex justify-end">
          <button className="py-2 px-3 rounded-lg flex items-center justify-end gap-1 bg-[#F0F7E2] border border-[#8FC521]">
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
            {currentTab === "CertificatesGeneral" && "Pilot Certificates"}
            {currentTab === "PilotCertificates" && "Instructor Certificates"}
            {currentTab === "InstructorCertificate" && "Flight Engineer"}
            {currentTab === "FlightEngineer" && "Medical Certificates"}
            {currentTab === "MedicalCertificate" &&
              "Miscellaneous Certificates"}
            {currentTab === "MiscellaneousCertificates" &&
              "Questionnaire Certificates"}
            {currentTab === "PilotQuestionnaire" && "General Certificates"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Certificates;
