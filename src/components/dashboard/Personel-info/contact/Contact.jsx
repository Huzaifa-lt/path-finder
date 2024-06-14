import React from "react";
import Input from "../../../ui/Input";
import EmailInputBox from "../../../ui/EmailInputBox";
import PhoneSelectField from "../../../ui/PhoneSelectField";

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
