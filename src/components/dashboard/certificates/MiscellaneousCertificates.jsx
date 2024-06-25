import { DatePicker } from "@/components/ui/DatePicker";
import Input from "@/components/ui/InputField";
import React from "react";

const MiscellaneousCertificates = () => {
  return (
    <div className=" py-5 border-b border-[#E4E7EC] grid  grid-cols-4 gap-x-4 ">
      <Input type="text" label="A & P Mechanic Certificate*" />
      <DatePicker label="Issued Date*" />
      <DatePicker label="Dispatcher Certificate*" />
      <DatePicker label="Issued Date*" />
    </div>
  );
};

export default MiscellaneousCertificates;
