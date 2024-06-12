import React from "react";

const Input = ({ label, type, ...rest }) => {
  return (
    <div className=" flex flex-col">
      <label className=" mb-1.5 text-sm font-normal text-[#344054] " htmlFor="">
        {label}
      </label>
      <input
        className=" py-1.5 px-3.5 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] focus:outline-none"
        type={type}
        {...rest}
        placeholder="----"
      />
    </div>
  );
};

export default Input;
