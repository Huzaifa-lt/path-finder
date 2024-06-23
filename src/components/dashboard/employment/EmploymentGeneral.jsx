import RadioBox from "@/components/ui/RadioBox";
import TextArea from "@/components/ui/TextArea";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const EmploymentGeneral = () => {
  return (
    <div className=" pt-6 px-6 pb-5 border border-[#E4E7EC] rounded-lg">
      <h2 className=" text-xl font-medium text-black">General Information</h2>

      <div className=" mt-5 pb-6  grid grid-cols-4 gap-x-3 gap-y-[21px]">
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Can you legally work in the U.S.?*
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>

        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Are you unemployed?*
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Can you relocate*
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Can we contact your present employer?*
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Can we contact your previous employers?*
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Have you ever been misconduct?*
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Are you currently on furlough? *
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>

        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467]"
          >
            Do you have any employment history? *
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className=" mb-1.5 text-sm font-normal text-[#475467] flex items-center gap-1 "
          >
            Previous employer?*
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_217_8518)">
                        <path
                          d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29972 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75978 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z"
                          fill="#8FC521"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_217_8518">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </TooltipTrigger>
                <TooltipContent className=" bg-[#F4F5F9]" side="right">
                  <p className="text-[#252525] text-sm font-normal">
                    Have you ever been discharged by a previous employer?
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <div className=" pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
      </div>
      <div>
        <TextArea
          label="Please provide explanations below, if necessary:*"
          placeholder="Enter a explanations..."
        />
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
    </div>
  );
};

export default EmploymentGeneral;
