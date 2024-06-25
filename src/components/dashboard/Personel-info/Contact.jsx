import React from "react";
import Input from "@/components/ui/InputField";
import PhoneSelectField from "@/components/ui/PhoneSelectField";
import EmailInputBox from "@/components/ui/EmailInputBox";

const Contact = () => {
  return (
    <div className=" mt-5 pb-6 border-b border-[#E4E7EC] grid grid-cols-4 gap-x-3 gap-y-[21px]">
      <EmailInputBox label="Primary Email *" />
      <PhoneSelectField
        label="Primary Phone*"
        placeholder="+1 (555) 000-0000"
      />
      <EmailInputBox label="Primary Email *" />
      <PhoneSelectField
        label="Primary Phone*"
        placeholder="+1 (555) 000-0000"
      />
      <EmailInputBox label="Primary Email *" />
      <PhoneSelectField
        label="Primary Phone*"
        placeholder="+1 (555) 000-0000"
      />
    </div>
  );
};

export default Contact;
