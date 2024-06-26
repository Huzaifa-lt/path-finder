import React from "react";
import { Switch } from "@/components/ui/switch";
import CheckBox from "../ui/CheckBox";

const SwitchCard = ({ label, className, checkboxes, layout }) => {
  return (
    <div className={` pb-8 border border-[#E4E7EC] rounded-lg ${className} `}>
      <div className=" p-4 flex items-center justify-between border-b border-[#E4E7EC]">
        <h5 className=" text-base font-medium text-black">{label}</h5>
        <div className="flex items-center space-x-2">
          <Switch />
          <label htmlFor="" className=" text-xs font-medium text-[#475467]">
            Check all
          </label>
        </div>
      </div>
      <div
        className={` pl-4 mt-4 ${
          layout === "row" ? "grid grid-cols-2 gap-4 " : "space-y-4"
        }  `}
      >
        {checkboxes.map((checkbox) => (
          <CheckBox label={checkbox.label} />
        ))}
      </div>
    </div>
  );
};

export default SwitchCard;
