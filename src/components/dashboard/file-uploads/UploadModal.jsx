import SelectBox from "@/components/ui/SelectBox";
import React from "react";
import { Progress } from "@/components/ui/progress";

const UploadModal = () => {
  return (
    <div>
      <h4 className=" pb-6 border-b border-[#E4E7EC] text-xl font-medium text-black ">
        Upload documents
      </h4>
      <div className=" mt-6 space-y-3">
        <div className=" flex gap-3 justify-between items-center">
          <div className=" flex-grow">
            <SelectBox
              label="Select document type"
              placeholder="Interview document"
            />
          </div>
          <div className=" flex-grow">
            <SelectBox label="Select airline" placeholder="Emirates" />
          </div>
        </div>
        <div className=" py-4 px-6 bg-white rounded-lg border border-[#E7E9EB] flex flex-col gap-3 items-center text-center">
          <div className="  py-[12.5px] px-[10.83px] w-fit rounded-full bg-[#F2F4F7] border-[6px] border-[#F9FAFB] cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_780_4116)">
                <path
                  d="M13.3335 13.3332L10.0002 9.9999M10.0002 9.9999L6.66688 13.3332M10.0002 9.9999V17.4999M16.9919 15.3249C17.8047 14.8818 18.4467 14.1806 18.8168 13.3321C19.1868 12.4835 19.2637 11.5359 19.0354 10.6388C18.807 9.7417 18.2865 8.94616 17.5558 8.37778C16.8251 7.80939 15.9259 7.50052 15.0002 7.4999H13.9502C13.698 6.52427 13.2278 5.61852 12.5752 4.85073C11.9225 4.08295 11.1042 3.47311 10.182 3.06708C9.25967 2.66104 8.25734 2.46937 7.25031 2.50647C6.24328 2.54358 5.25777 2.80849 4.36786 3.28129C3.47795 3.7541 2.7068 4.42249 2.1124 5.23622C1.51799 6.04996 1.11579 6.98785 0.936028 7.9794C0.756269 8.97095 0.803632 9.99035 1.07456 10.961C1.34548 11.9316 1.83291 12.8281 2.50021 13.5832"
                  stroke="#475467"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_780_4116">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-sm font-normal text-[#687382]">
            <strong className=" text-[#71A703] ">Click to upload</strong> or
            drag and drop <br /> DOCX, PDF, RTF, TXT, JPG, PNG, BMP (max 10MB)
          </p>
        </div>
        <div className=" p-4 bg-white rounded-lg border border-[#E7E9EB] flex items-start justify-between">
          <div className=" flex-grow flex items-start gap-4">
            <div className=" p-1.5 w-fit bg-[#DCEDBA] border-4 border-[#F0F7E2] rounded-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66675 1.33398H4.00008C3.64646 1.33398 3.30732 1.47446 3.05727 1.72451C2.80722 1.97456 2.66675 2.3137 2.66675 2.66732V13.334C2.66675 13.6876 2.80722 14.0267 3.05727 14.2768C3.30732 14.5268 3.64646 14.6673 4.00008 14.6673H12.0001C12.3537 14.6673 12.6928 14.5268 12.9429 14.2768C13.1929 14.0267 13.3334 13.6876 13.3334 13.334V6.00065M8.66675 1.33398L13.3334 6.00065M8.66675 1.33398V6.00065H13.3334"
                  stroke="#8FC521"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className=" flex-grow">
              <h5 className=" text-sm font-medium text-[#475467]">
                Interview document.pdf
              </h5>
              <h6 className="text-sm font-normal text-[#687382]">200 KB</h6>

              <div className=" mt-1 flex items-center gap-3">
                <Progress value={10} /> <span>10%</span>
              </div>
            </div>
          </div>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 4.99935H4.16667M4.16667 4.99935H17.5M4.16667 4.99935V16.666C4.16667 17.108 4.34226 17.532 4.65482 17.8445C4.96738 18.1571 5.39131 18.3327 5.83333 18.3327H14.1667C14.6087 18.3327 15.0326 18.1571 15.3452 17.8445C15.6577 17.532 15.8333 17.108 15.8333 16.666V4.99935H4.16667ZM6.66667 4.99935V3.33268C6.66667 2.89065 6.84226 2.46673 7.15482 2.15417C7.46738 1.84161 7.89131 1.66602 8.33333 1.66602H11.6667C12.1087 1.66602 12.5326 1.84161 12.8452 2.15417C13.1577 2.46673 13.3333 2.89065 13.3333 3.33268V4.99935M8.33333 9.16602V14.166M11.6667 9.16602V14.166"
                stroke="#D92D20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" mt-5 flex items-center justify-between  gap-2">
        <button className=" py-2 px-3 w-full bg-white border border-[#E7E9EB] rounded-lg shadow-sm shadow-[#1018280D] text-sm font-normal text-[#252525]">
          Cancel
        </button>
        <button className=" py-2 px-3 w-full bg-[#8FC521] border border-[#E7E9EB] rounded-lg shadow-sm shadow-[#1018280D] text-sm font-medium text-white flex items-center justify-center gap-1">
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
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadModal;
