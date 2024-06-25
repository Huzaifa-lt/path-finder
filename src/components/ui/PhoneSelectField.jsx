import React from "react";

const PhoneSelectField = ({ label, placeholder }) => {
  return (
    <div className="  w-full flex flex-col">
      <label htmlFor="" className=" mb-1.5 text-sm font-normal text-[#344054] ">
        {label}
      </label>
      <div className="rounded-lg w-full border  border-[#E7E9EB] shadow-sm shadow-[#1018280D] flex">
        <select
          className=" py-1.5  pl-3.5 pr-3 bg-transparent focus:outline-none"
          name=""
          id=""
        >
          <option value=""> US</option>
        </select>
        <input
          className=" py-1.5 pl-3.5 pr-3 w-full  bg-transparent focus:outline-none "
          type="number"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default PhoneSelectField;
