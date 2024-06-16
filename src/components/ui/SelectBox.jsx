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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectBox = ({ label, className, placeholder }) => {
  return (
    <div className="  flex flex-col">
      <label className="mb-1.5 text-sm font-normal text-[#344054]" htmlFor="">
        {label}
      </label>
      <Select>
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
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
