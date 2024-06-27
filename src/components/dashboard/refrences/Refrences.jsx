import React, { useState } from "react";
import RefrencesTabs from "./RefrencesTabs";
import RefrencesSummary from "./RefrencesSummary";
import GeneralRefrences from "./GeneralRefrences";
import UnemployedRefrence from "./UnemployedRefrence";
import NavigationButtons from "@/components/NavigationBtns";

const TABS = ["RefrenceSummary", "GeneralReferences", "UnemployedReferences"];
const LABELS = {
  RefrenceSummary: "Refrence Summary",
  GeneralReferences: "General References",
  UnemployedReferences: "Unemployed References",
};

const Refrences = () => {
  const [currentTab, setCurrentTab] = useState("RefrenceSummary");

  const handleNext = () => {
    const currentIndex = TABS.indexOf(currentTab);
    if (currentIndex < TABS.length - 1) {
      setCurrentTab(TABS[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = TABS.indexOf(currentTab);
    if (currentIndex > 0) {
      setCurrentTab(TABS[currentIndex - 1]);
    }
  };

  const renderContent = () => {
    switch (currentTab) {
      case "RefrenceSummary":
        return <RefrencesSummary />;
      case "GeneralReferences":
        return <GeneralRefrences />;
      case "UnemployedReferences":
        return <UnemployedRefrence />;
      default:
        return <RefrencesSummary />;
    }
  };

  const currentIndex = TABS.indexOf(currentTab);
  const nextLabel =
    currentIndex < TABS.length - 1 ? LABELS[TABS[currentIndex + 1]] : null;
  const backLabel = currentIndex > 0 ? "Back" : null;

  return (
    <>
      <RefrencesTabs currentTab={currentTab} onTabClick={setCurrentTab} />
      <div className="my-5 mx-6">{renderContent()}</div>
      <NavigationButtons
        nextLabel={nextLabel}
        backLabel={backLabel}
        onNext={handleNext}
        onBack={handleBack}
      />
    </>
  );
};

export default Refrences;
