import React from "react";
import SummaryTable from "./SummaryTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddEducationModal from "./AddEducationModal";

const EducationSummary = () => {
  return (
    <>
      <div className=" border border-[#E4E7EC] rounded-lg">
        <div className=" py-4 mx-6 flex items-center justify-between gap-2">
          <h2 className=" text-xl font-medium text-black">Education Summary</h2>

          <Dialog>
            <DialogTrigger>
              {" "}
              <button className=" py-2 px-3 border bg-[#8FC521] text-sm font-medium text-white  border-[#E7E9EB] shadow-sm shadow-[#1018280D] rounded-lg flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 4.1665V15.8332M4.16675 9.99984H15.8334"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add education
              </button>
            </DialogTrigger>
            <DialogContent className=" max-w-[1112px]">
              <AddEducationModal />
            </DialogContent>
          </Dialog>
        </div>

        <SummaryTable />
      </div>
      <div className="  mx-6  flex justify-end">
        <button className=" mt-4 py-2 px-3 rounded-lg  flex items-center justify-end gap-1 bg-[#F0F7E2] border border-[#8FC521] ">
          Next:
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66667 11.8333L12 8.49996L8.66667 5.16663M4 11.8333L7.33333 8.49996L4 5.16663"
              stroke="#8FC521"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          General
        </button>
      </div>
    </>
  );
};

export default EducationSummary;
