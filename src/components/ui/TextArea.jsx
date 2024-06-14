import React from "react";

const TextArea = ({ label, placeholder, ...rest }) => {
  return (
    <div className=" flex flex-col">
      <label className=" mb-1.5 text-sm font-normal text-[#475467] " htmlFor="">
        {label}
      </label>

      <textarea
        className=" relative py-2.5 px-3.5 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] focus:outline-none"
        {...rest}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
