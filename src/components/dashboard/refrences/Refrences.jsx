import React, { useState } from "react";
import RefrencesTabs from "./RefrencesTabs";
import RefrencesSummary from "./RefrencesSummary";
import GeneralRefrences from "./GeneralRefrences";
import RefrencesPopup from "./RefrencesPopup";
import UnemployedRefrence from "./UnemployedRefrence";

const Refrences = () => {
  const [currentTab, setCurrentTab] = useState("RefrenceSummary");

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
  return (
    <>
      <RefrencesTabs currentTab={currentTab} onTabClick={setCurrentTab} />

      <div className="mt-5 mx-6 ">
        {renderContent()}
        {/* <RefrencesSummary /> */}
        {/* <GeneralRefrences /> */}
        {/* <UnemployedRefrence /> */}
      </div>
    </>
  );
};

export default Refrences;
