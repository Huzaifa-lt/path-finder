import ApplicationLinks from "@/components/companies/ApplicationLinks";
import CompaniesTabs from "@/components/companies/CompaniesTabs";
import React, { useState } from "react";

const Companies = () => {
  const [currentTab, setCurrentTab] = useState("ApplicationLinks");

  const renderContent = () => {
    switch (currentTab) {
      case "ApplicationLinks":
        return <ApplicationLinks />;
      case "DomicileMap":
        return <EmploymentGeneral />;
      case "RouteMap":
        return <CurrentEmployment />;
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
