import React, { useState } from "react";
import FlyingTabs from "./FlyingTabs";
import FlyingSummary from "./FlyingSummary";
import FlyingTimeConditions from "./FlyingTimeConditions";
import FlyingExperience from "./FlyingExperience";
import FlyingInstrument from "./FlyingInstrument";
import FlyingTotal from "./FlyingTotal";
import NavigationButtons from "@/components/NavigationBtns";

const Flying = () => {
  const [currentTab, setCurrentTab] = useState("FlyingSummary");

  const renderContent = () => {
    switch (currentTab) {
      case "FlyingSummary":
        return <FlyingSummary />;
      case "FlyingTimeConditions":
        return <FlyingTimeConditions />;
      case "FlyingExperience":
        return <FlyingExperience />;
      case "FlyingInstrument":
        return <FlyingInstrument />;
      case "FlyingTotal":
        return <FlyingTotal />;
      default:
        return <FlyingSummary />;
    }
  };

  return (
    <div>
      <FlyingTabs currentTab={currentTab} onTabClick={setCurrentTab} />
      <div className="mt-5 mx-6">{renderContent()}</div>
      <NavigationButtons nextLabel="" />
    </div>
  );
};

export default Flying;
