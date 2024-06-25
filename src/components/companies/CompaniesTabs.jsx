import React from "react";

const CompaniesTabs = (currentTab, onTabClick) => {
  const tabs = [
    { name: "Airline Application Links", id: "ApplicationLinks" },
    { name: "Domicile Map", id: "DomicileMap" },
    { name: "Interactive Fleet/Route Map", id: "RouteMap" },
    { name: "Hiring Requirements", id: "HiringRequirments" },
  ];

  return (
    <div className="pl-6 py-3 bg-white flex items-center gap-2 sticky top-0 border-b border-[#E7E9EB]">
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.id}>
          <button
            className={`py-2 px-3 rounded-md text-xs font-normal text-black ${
              currentTab === tab.id
                ? "bg-[#F0F7E2] border border-[#8FC521]"
                : "bg-[#F8F8F9]"
            }`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.name}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CompaniesTabs;
