import React from "react";

const RadioBox = ({ label, ...rest }) => {
  return (
    <div {...rest} className=" text-sm font-normal text-black">
      <input className=" mr-1.5" type="radio" />
      {label}
    </div>
  );
};

export default RadioBox;
