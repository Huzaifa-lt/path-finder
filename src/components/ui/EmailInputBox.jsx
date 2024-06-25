import React from "react";

const EmailInputBox = ({ label, ...rest }) => {
  return (
    <div className="  w-full flex flex-col">
      <label className=" mb-1.5 text-sm font-normal text-[#344054] " htmlFor="">
        {label}
      </label>
      <div className=" relative ">
        <svg
          width="16"
          height="16"
          className=" absolute left-3.5 top-2.5
          "
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6668 4.00008C14.6668 3.26675 14.0668 2.66675 13.3335 2.66675H2.66683C1.9335 2.66675 1.3335 3.26675 1.3335 4.00008M14.6668 4.00008V12.0001C14.6668 12.7334 14.0668 13.3334 13.3335 13.3334H2.66683C1.9335 13.3334 1.3335 12.7334 1.3335 12.0001V4.00008M14.6668 4.00008L8.00016 8.66675L1.3335 4.00008"
            stroke="#687382"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          className="py-1.5 px-3.5 pl-9 h-9 w-full  rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] focus:outline-none"
          type="email"
          {...rest}
          placeholder="---"
        />
      </div>
    </div>
  );
};

export default EmailInputBox;
