import React from "react";
import AddressHistoryTable from "./AddressHistoryTable";
import Address from "./Address";

const AddressHistory = () => {
  return (
    <>
      <div className=" border border-[#E4E7EC] rounded-lg">
        <div className=" py-5 ml-6 flex items-center gap-2">
          <h2 className=" text-xl font-medium text-black">Address History</h2>
          <h5 className=" self-center py-0.5 px-2 bg-[#F6FAED] rounded-2xl text-[#039855] text-xs font-medium">
            08 Addresses
          </h5>
        </div>

        <AddressHistoryTable />
      </div>
      <div className=" mt-5 px-6 pt-6 pb-5  border border-[#E4E7EC] rounded-lg space-y-5">
        <Address addressName="Current Address" />
        <Address addressName="Address 2" />
        <Address addressName="Address 3" />

        <d
          iv
          className=" mt-5  bg-[#E4E7EC] h-[1px] w-full flex justify-center items-center"
        >
          <button className=" py-2 bg-white text-sm font-medium text-[#8FC521] rounded-lg flex items-center gap-1">
            <span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5001 4.16675V15.8334M4.66675 10.0001H16.3334"
                  stroke="#8FC521"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Add a new address
          </button>
        </d>
      </div>
    </>
  );
};

export default AddressHistory;
