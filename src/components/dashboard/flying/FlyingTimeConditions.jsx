import Input from "@/components/ui/Input";
import React from "react";

const FlyingTimeConditions = () => {
  return (
    <div className=" px-6 pt-6 pb-5  border border-[#E4E7EC] rounded-lg ">
      <div>
        <h3 className=" text-lg font-medium text-[#2E2E2E]">
          Flying Time by Conditions
        </h3>
        <p className=" mt-2 py-1.5 px-2 bg-[#FCF3EB] flex items-center gap-[5px] rounded-md text-[#DE7010] text-sm font-normal w-fit  ">
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
          Do not include any simulator time
        </p>
      </div>

      <div className=" mt-5   flex items-center gap-5 ">
        <div className=" py-4 flex-grow min-h-56 border border-[#E4E7EC] rounded-lg">
          <h3 className="  px-4 pb-4 border-b border-[#E4E7EC] text-base font-medium text-black">
            Airplane time
          </h3>
          <div className=" px-4 mt-4 grid grid-cols-2 gap-x-3 gap-y-4  ">
            <Input type="text" label="Night*" />
            <Input type="text" label="Actual Instrument*" />
            <Input type="text" label="Simulated Instrumet*" />
            <Input type="text" label="Cross Country*" />
          </div>
        </div>

        <div className="py-4 flex-grow min-h-56 border border-[#E4E7EC] rounded-lg">
          <h3 className="  px-4 pb-4 border-b border-[#E4E7EC] text-base font-medium text-black">
            Rotor time
          </h3>

          <div className=" px-4 mt-4 grid grid-cols-2 gap-x-3 gap-y-4  ">
            <Input type="text" label="Night*" />
            <Input type="text" label="Actual Instrument*" />
            <Input type="text" label="Simulated Instrumet*" />
            <Input type="text" label="Cross Country*" />
          </div>
        </div>
      </div>
      <div className=" mt-5  flex justify-end">
        <button className=" py-2 px-3 rounded-lg  flex items-center justify-end gap-1 bg-[#F0F7E2] border border-[#8FC521] ">
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
          Flight time by conditions
        </button>
      </div>
    </div>
  );
};

export default FlyingTimeConditions;
