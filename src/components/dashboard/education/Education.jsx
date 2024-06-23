import React, { useState } from "react";
import EducationTabs from "./EducationTabs";
import SummaryTable from "./SummaryTable";
import EducationSummary from "./EducationSummary";
import GeneralInfo from "./GeneralInfo";
import EducationDetail from "./EducationDetail";
import Achievements from "./Achievements";

const Education = () => {
  const [currentTab, setCurrentTab] = useState("EducationSummary");

  const renderContent = () => {
    switch (currentTab) {
      case "EducationSummary":
        return <EducationSummary />;
      case "GeneralInfo":
        return <GeneralInfo />;
      case "EducationDetail":
        return <EducationDetail />;
      case "Achievements":
        return <Achievements />;
      default:
        return <EducationSummary />;
    }
  };

  return (
    <>
      <EducationTabs currentTab={currentTab} onTabClick={setCurrentTab} />

      <div className=" mt-5   mx-6  ">
        {renderContent()}
        {/* <EducationSummary /> */}
        {/* <GeneralInfo /> */}
        {/* <EducationDetail /> */}
        {/* <Achievements /> */}

        {/* <div className="  mx-6  flex justify-end">
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
            General
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Education;
