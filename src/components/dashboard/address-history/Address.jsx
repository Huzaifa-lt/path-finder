import React from "react";
import Input from "../../ui/Input";
import SelectBox from "../../ui/SelectBox";

const Address = ({ addressName }) => {
  return (
    <div>
      <div className=" border-b border-[#E4E7EC]">
        <div className=" flex justify-between items-center">
          <h4 className=" text-xl font-medium text-black">{addressName}</h4>
          <button className=" py-1 px-2.5 bg-white border border-[#E7E9EB] rounded flex items-center gap-1">
            Delete
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4.00004H3.33333M3.33333 4.00004H14M3.33333 4.00004V13.3334C3.33333 13.687 3.47381 14.0261 3.72386 14.2762C3.97391 14.5262 4.31304 14.6667 4.66667 14.6667H11.3333C11.687 14.6667 12.0261 14.5262 12.2761 14.2762C12.5262 14.0261 12.6667 13.687 12.6667 13.3334V4.00004H3.33333ZM5.33333 4.00004V2.66671C5.33333 2.31309 5.47381 1.97395 5.72386 1.7239C5.97391 1.47385 6.31304 1.33337 6.66667 1.33337H9.33333C9.68696 1.33337 10.0261 1.47385 10.2761 1.7239C10.5262 1.97395 10.6667 2.31309 10.6667 2.66671V4.00004M6.66667 7.33337V11.3334M9.33333 7.33337V11.3334"
                  stroke="#D92D20"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className=" py-5 grid grid-cols-4 gap-x-3 gap-y-[21px]">
          <Input type="text" label="Address  1*" />
          <Input type="text" label="Address  2*" />
          <Input type="text" label="City *" />
          <SelectBox label="State*" />
          <Input type="text" label="Zip Code*" />
          <SelectBox label="Country*" />
          <Input type="date" label="Start Date*" />
          <Input type="date" label="End Date*" />
        </div>
      </div>
    </div>
  );
};

export default Address;
