import React from "react";

const InfoTooltip = ({ message, ...rest }) => {
  return (
    <p
      className=" py-1.5 px-2 bg-[#FCF3EB] text-[#DE7010] text-sm font-normal"
      {...rest}
    >
      {message}
    </p>
  );
};

export default InfoTooltip;
