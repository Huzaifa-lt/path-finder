import React from "react";
import UploadTable from "./UploadTable";
import UploadModal from "./UploadModal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const FileUploads = () => {
  return (
    <div className=" mt-5 mx-6 border border-[#E4E7EC] rounded-lg">
      <div className=" py-5 px-6">
        <div className=" flex items-center justify-between">
          <h2 className=" text-lg font-medium text-[#2E2E2E]">
            Upload interview documents
          </h2>
          <Dialog>
            <DialogTrigger>
              <button className=" py-2 px-3 bg-[#8FC521] text-sm font-medium shadow-sm text-white shadow-[#1018280D] rounded-lg flex items-center gap-1 ">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M14.1667 6.66667L10 2.5M10 2.5L5.83333 6.66667M10 2.5V12.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Upload files
              </button>
            </DialogTrigger>
            <DialogContent className=" max-w-[560px]">
              <UploadModal />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <UploadTable />
    </div>
  );
};

export default FileUploads;
