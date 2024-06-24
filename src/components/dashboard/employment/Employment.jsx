import React, { useState } from "react";
import EmploymentTabs from "./EmploymentTabs";
import EmploymentSummary from "./EmploymentSummary";
import EmploymentGeneral from "./EmploymentGeneral";
import CurrentEmployment from "./CurrentEmployment";
import FurloughHistory from "./FurloughHistory";
import Misc from "./Misc";

const Employment = () => {
  const [currentTab, setCurrentTab] = useState("EmploymentSummary");

  const renderContent = () => {
    switch (currentTab) {
      case "EmploymentSummary":
        return <EmploymentSummary />;
      case "EmploymentGeneral":
        return <EmploymentGeneral />;
      case "CurrentEmployment":
        return <CurrentEmployment />;
      case "FurloughHistory":
        return <FurloughHistory />;
      case "Misc":
        return <Misc />;
      default:
        return <EmploymentSummary />;
    }
  };

  return (
    <>
      <EmploymentTabs currentTab={currentTab} onTabClick={setCurrentTab} />
      <div className="mt-5 mx-6">{renderContent()}</div>
    </>
  );
};

export default Employment;
