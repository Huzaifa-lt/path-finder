import { DatePicker } from "@/components/ui/DatePicker";
import Input from "@/components/ui/Input";
import SelectBox from "@/components/ui/SelectBox";
import React from "react";

const EditAddressModal = () => {
  return (
    <div>
      <h4 className=" text-xl font-medium text-black">Update address</h4>
      <div>
        <div className=" py-6 grid grid-cols-2 gap-x-3 gap-y-[21px] border-b border-[#E4E7EC] ">
          <Input type="text" label="Address  1*" />
          <Input type="text" label="Address  2*" />
          <Input type="text" label="City *" />
          <SelectBox label="State*" />
          <Input type="number" label="Zip Code*" />
          <SelectBox label="Country*" />
          <DatePicker label="Start Date*" />
          <DatePicker label="End Date*" />
        </div>
        <div className=" mt-5 flex items-center gap-3">
          <button className=" py-2 px-3 w-full text-base font-normal text-black border border-[#E7E9EB] shadow-sm shadow-[#1018280D] rounded-lg ">
            Cancel
          </button>
          <button className=" py-2 px-3 w-full bg-[#8FC521] text-center shadow-sm shadow-[#1018280D] text-base font-normal text-white rounded-lg">
            Update address
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAddressModal;
