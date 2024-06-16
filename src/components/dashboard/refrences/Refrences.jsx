import React from "react";
import RefrencesTabs from "./RefrencesTabs";
import RefrencesSummary from "./RefrencesSummary";
import GeneralRefrences from "./GeneralRefrences";
import RefrencesPopup from "./RefrencesPopup";
import UnemployedRefrence from "./UnemployedRefrence";

const Refrences = () => {
  return (
    <>
      <RefrencesTabs />

      <div className="mt-5 mx-6 ">
        {/* <RefrencesSummary /> */}
        {/* <GeneralRefrences /> */}
        {/* <RefrencesPopup /> */}
        <UnemployedRefrence />
      </div>
    </>
  );
};

export default Refrences;
