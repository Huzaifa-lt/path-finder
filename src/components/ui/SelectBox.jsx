import React from "react";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "../../../@/components/ui/select";

const SelectBox = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1.5 text-sm font-normal text-[#344054]" htmlFor="">
        {label}
      </label>
      <select
        name=""
        id=""
        className=" py-2 px-3.5 text-[#717B8A] bg-transparent rounded-lg border  border-[#E7E9EB] shadow-sm shadow-[#1018280D] focus:outline-none"
      >
        <option value="----">----</option>
      </select>
    </div>
    // <Select>
    //   <SelectTrigger className="w-[180px]">
    //     <SelectValue placeholder="---" />
    //   </SelectTrigger>
    //   <SelectContent>
    //     <SelectGroup>
    //       <SelectLabel>Fruits</SelectLabel>
    //       <SelectItem value="apple">Apple</SelectItem>
    //       <SelectItem value="banana">Banana</SelectItem>
    //       <SelectItem value="blueberry">Blueberry</SelectItem>
    //       <SelectItem value="grapes">Grapes</SelectItem>
    //       <SelectItem value="pineapple">Pineapple</SelectItem>
    //     </SelectGroup>
    //   </SelectContent>
    // </Select>
  );
};

export default SelectBox;
