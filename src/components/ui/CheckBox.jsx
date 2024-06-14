import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const CheckBox = ({ label }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-normal text-black  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
