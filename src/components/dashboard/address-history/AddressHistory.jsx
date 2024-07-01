import React from "react";
import AddressHistoryTable from "./AddressHistoryTable";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddAddressModal from "./AddAddressModal";

const AddressHistory = () => {
  return (
    <div className="mt-5 mx-6 mb-11">
      <div className=" border border-[#E4E7EC] rounded-lg">
        <div className=" mx-6 flex justify-between items-center">
          <div className=" py-5  flex items-center gap-2">
            <h2 className=" text-xl font-medium text-black">Address History</h2>
            <h5 className=" self-center py-0.5 px-2 bg-[#F6FAED] rounded-2xl text-[#039855] text-xs font-medium">
              08 Addresses
            </h5>
          </div>

          <Dialog>
            <DialogTrigger>
              <button className="  py-2 px-3 bg-[#8FC521] shadow-sm shadow-[#1018280D] rounded-lg text-sm font-medium text-white flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 4.16663V15.8333M4.16675 9.99996H15.8334"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                New address
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[560px]">
              <AddAddressModal />
            </DialogContent>
          </Dialog>
        </div>

        <AddressHistoryTable />
      </div>
    </div>
  );
};

export default AddressHistory;
