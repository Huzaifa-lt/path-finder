import React from "react";
import { Input } from "@/components/ui/input";

const InputField = ({ label, type, ...rest }) => {
  return (
    <div className=" flex flex-col gap-1.5">
      <label className="  text-sm font-normal text-[#344054] " htmlFor="">
        {label}
      </label>

      <Input type={type} placeholder="---" {...rest} />
    </div>
  );
};

export default InputField;
