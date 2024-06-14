import CheckBox from "@/components/ui/CheckBox";
import { DatePicker } from "@/components/ui/DatePicker";
import Input from "@/components/ui/Input";
import RadioBox from "@/components/ui/RadioBox";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const PilotCertificates = () => {
  return (
    <div>
      <div className=" w-fit">
        <label htmlFor="" className=" text-sm font-normal text-[#475467]">
          Any pilot certificates?
        </label>
        <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
          <RadioBox label="Yes" />
          <RadioBox label="No" />
        </div>
      </div>
      <div className="py-5 border-b border-[#E4E7EC]  grid grid-cols-4 gap-x-3 gap-y-5 ">
        <div>
          <label htmlFor="" className=" text-sm font-normal text-[#475467]">
            Commercial with Instrument (AMEL)?*
          </label>
          <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label htmlFor="" className=" text-sm font-normal text-[#475467]">
            Unrestricted ATP Certificate (AMEL)? *
          </label>
          <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label htmlFor="" className=" text-sm font-normal text-[#475467]">
            Restricted ATP Certificate (AMEL)? *
          </label>
          <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label htmlFor="" className=" text-sm font-normal text-[#475467]">
            IFR Certified (Instrument Rating)? *
          </label>
          <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <div>
          <label htmlFor="" className=" text-sm font-normal text-[#475467]">
            Current ATP Written (AMEL)?*
          </label>
          <div className=" mt-1.5 pl-3.5 py-[9.5px] flex items-center gap-4 rounded-lg border border-[#E7E9EB] shadow-sm shadow-[#1018280D] ">
            <RadioBox label="Yes" />
            <RadioBox label="No" />
          </div>
        </div>
        <Input type="number" label="ATP Certificate Number*" />
        <DatePicker label="ATP Date of Issue*" />
        <DatePicker label="ATP Written Date*" />
      </div>

      <div className="py-5 border-b border-[#E4E7EC] ">
        <div>
          <h3 className=" text-base font-medium text-black">
            Pilot Category, Class, & Type
          </h3>
          <p className=" mt-2 py-1.5 px-2 bg-[#FCF3EB] flex items-center gap-[5px] rounded-md text-[#DE7010] text-sm font-normal w-fit ">
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_203_31645)">
                  <path
                    d="M8 2C6.71442 2 5.45772 2.38122 4.3888 3.09545C3.31988 3.80968 2.48676 4.82484 1.99479 6.01256C1.50282 7.20028 1.37409 8.50721 1.6249 9.76809C1.8757 11.029 2.49477 12.1872 3.40381 13.0962C4.31285 14.0052 5.47104 14.6243 6.73192 14.8751C7.99279 15.1259 9.29972 14.9972 10.4874 14.5052C11.6752 14.0132 12.6903 13.1801 13.4046 12.1112C14.1188 11.0423 14.5 9.78558 14.5 8.5C14.4982 6.77665 13.8128 5.12441 12.5942 3.90582C11.3756 2.68722 9.72335 2.00182 8 2ZM7.75 5C7.89834 5 8.04334 5.04399 8.16668 5.1264C8.29002 5.20881 8.38615 5.32594 8.44291 5.46299C8.49968 5.60003 8.51453 5.75083 8.48559 5.89632C8.45665 6.0418 8.38522 6.17544 8.28033 6.28033C8.17544 6.38522 8.04181 6.45665 7.89632 6.48559C7.75083 6.51453 7.60003 6.49968 7.46299 6.44291C7.32595 6.38614 7.20881 6.29001 7.1264 6.16668C7.04399 6.04334 7 5.89834 7 5.75C7 5.55109 7.07902 5.36032 7.21967 5.21967C7.36032 5.07902 7.55109 5 7.75 5ZM8.5 12C8.23479 12 7.98043 11.8946 7.7929 11.7071C7.60536 11.5196 7.5 11.2652 7.5 11V8.5C7.36739 8.5 7.24022 8.44732 7.14645 8.35355C7.05268 8.25978 7 8.13261 7 8C7 7.86739 7.05268 7.74021 7.14645 7.64645C7.24022 7.55268 7.36739 7.5 7.5 7.5C7.76522 7.5 8.01957 7.60536 8.20711 7.79289C8.39465 7.98043 8.5 8.23478 8.5 8.5V11C8.63261 11 8.75979 11.0527 8.85356 11.1464C8.94732 11.2402 9 11.3674 9 11.5C9 11.6326 8.94732 11.7598 8.85356 11.8536C8.75979 11.9473 8.63261 12 8.5 12Z"
                    fill="#E28330"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_31645">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Check all Categories that apply: (You must select at least one.)
          </p>
        </div>
      </div>

      <div className=" mt-5  flex items-center gap-5">
        <div className=" py-4 flex-grow h-64 border border-[#E4E7EC] rounded-lg">
          <h3 className="  px-4 pb-4 border-b border-[#E4E7EC] text-base font-medium text-black">
            Check all Type Ratings that apply
          </h3>
          <div className=" px-4 mt-4 ">
            <div className=" flex gap-4">
              <CheckBox label="Turbojet Airplane" />
              <CheckBox label="Large Aircraft Other than Lighter-than-Air" />
              <CheckBox label="B-737 Type Rating" />
            </div>

            <div className=" mt-4">
              <TextArea
                label="List all awarded Type Ratings *"
                placeholder="List all your awards..."
              />
            </div>
          </div>
        </div>

        <div className="py-4 flex-grow h-64 border border-[#E4E7EC] rounded-lg">
          <h3 className="  px-4 pb-4 border-b border-[#E4E7EC] text-base font-medium text-black">
            Check all Instrument Ratings that apply
          </h3>

          <div className=" px-4 mt-4 flex gap-4">
            <CheckBox label="Airplane" />
            <CheckBox label="Helicopter" />
            <CheckBox label="Powered Lift" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilotCertificates;
