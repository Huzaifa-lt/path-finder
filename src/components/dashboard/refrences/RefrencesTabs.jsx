import React from "react";

const RefrencesTabs = ({ currentTab, onTabClick }) => {
  const tabs = [
    { name: "Summary", id: "RefrenceSummary" },
    { name: "General References", id: "GeneralReferences" },
    { name: "Unemployed References", id: "UnemployedReferences" },
  ];
  return (
    <div className=" pl-6 py-3 bg-white flex items-center gap-2 sticky top-0 border-b border-[#E7E9EB]">
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
          {index < tabs.length - 1 && (
            <span>
              <svg
                width="16"
                FlyingExperience
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66667 11.3334L12 8.00008L8.66667 4.66675M4 11.3334L7.33333 8.00008L4 4.66675"
                  stroke="#8FC521"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RefrencesTabs;
