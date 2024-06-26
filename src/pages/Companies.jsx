import ApplicationLinks from "@/components/companies/ApplicationLinks";
import CompaniesTabs from "@/components/companies/CompaniesTabs";
import DomicileMap from "@/components/companies/DomicileMap";
import InteractiveFleet from "@/components/companies/InteractiveFleet";
import React, { useState } from "react";

const Companies = () => {
  const [currentTab, setCurrentTab] = useState("Application-links");

  const renderContent = () => {
    switch (currentTab) {
      case "Application-links":
        return <ApplicationLinks />;
      case "DomicileMap":
        return <DomicileMap />;
      case "RouteMap":
        return <InteractiveFleet />;
      case "HiringRequirments":
        return <FurloughHistory />;

      default:
        return <ApplicationLinks />;
    }
  };
  return (
    <div>
      <CompaniesTabs currentTab={currentTab} onTabClick={setCurrentTab} />
      {renderContent()}
      {/* <ApplicationLinks /> */}
    </div>
  );
};

export default Companies;
