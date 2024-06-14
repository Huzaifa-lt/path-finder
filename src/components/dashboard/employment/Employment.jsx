import React from "react";
import EmploymentTabs from "./EmploymentTabs";
import EmploymentSummary from "./EmploymentSummary";
import EmploymentGeneral from "./EmploymentGeneral";
import CurrentEmployment from "./CurrentEmployment";
import FurloughHistory from "./FurloughHistory";
import Misc from "./Misc";

const Employment = () => {
  return (
    <>
      <EmploymentTabs />

      <div className=" mt-5   mx-6  ">
        {/* <EmploymentSummary /> */}
        {/* <EmploymentGeneral /> */}
        {/* <CurrentEmployment /> */}
        {/* <FurloughHistory /> */}
        <Misc />
      </div>
    </>
  );
};

export default Employment;
