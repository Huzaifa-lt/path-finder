import React from "react";
import CertificatesTabs from "./CertificatesTabs";
import CertificatesGeneral from "./CertificatesGeneral";
import MiscellaneousCertificates from "./MiscellaneousCertificates";
import PilotCertificates from "./PilotCertificates";
import InstructorCertificate from "./InstructorCertificate";
import FlightEngineer from "./FlightEngineer";
import MedicalCertificate from "./MedicalCertificate";
import PilotQuestionnaire from "./PilotQuestionnaire";

const Certificates = () => {
  return (
    <>
      <CertificatesTabs />
      <div className="  mt-5 p-6 mx-6 rounded-lg border border-[#E4E7EC]">
        <h3 className=" text-xl font-medium text-black">
          General Certificates
        </h3>

        {/* <CertificatesGeneral /> */}
        {/* <PilotCertificates /> */}
        {/* <InstructorCertificate /> */}
        {/* <FlightEngineer /> */}
        {/* <MedicalCertificate /> */}
        <PilotQuestionnaire />

        {/* <MiscellaneousCertificates /> */}

        <div className=" mt-5 flex justify-end">
          <button className=" py-2 px-3 rounded-lg  flex items-center justify-end gap-1 bg-[#F0F7E2] border border-[#8FC521] ">
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
            Pilot Certificates
          </button>
        </div>
      </div>
    </>
  );
};

export default Certificates;
