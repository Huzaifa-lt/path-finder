import React from "react";
import FlyingSummary from "./FlyingSummary";
import FlyingTabs from "./FlyingTabs";
import FlyingTimeConditions from "./FlyingTimeConditions";
import FlyingExperience from "./FlyingExperience";
import FlyingInstrument from "./FlyingInstrument";
import FlyingTotal from "./FlyingTotal";

const Flying = () => {
  return (
    <div>
      <FlyingTabs />

      <div className="mt-5 mx-6 ">
        {/* <FlyingSummary /> */}
        <FlyingTimeConditions />
        {/* <FlyingExperience /> */}
        {/* <FlyingInstrument /> */}
        {/* <FlyingTotal /> */}
      </div>
    </div>
  );
};

export default Flying;
