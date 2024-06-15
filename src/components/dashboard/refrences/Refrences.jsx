import React from "react";
import RefrencesTabs from "./RefrencesTabs";
import RefrencesSummary from "./RefrencesSummary";
import GeneralRefrences from "./GeneralRefrences";

const Refrences = () => {
  return (
    <>
      <RefrencesTabs />

      <div className="mt-5 mx-6 ">
        {/* <RefrencesSummary /> */}
        <GeneralRefrences />
      </div>
    </>
  );
};

export default Refrences;
