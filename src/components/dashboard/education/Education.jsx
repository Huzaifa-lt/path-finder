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
      case "Achievements":
        return <Achievements />;
      default:
        return <EducationSummary />;
    }
  };

  return (
    <>
      <EducationTabs currentTab={currentTab} onTabClick={setCurrentTab} />

      <div className=" mt-5   mx-6  ">{renderContent()}</div>
    </>
  );
};

export default Education;
