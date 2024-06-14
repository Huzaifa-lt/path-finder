import React from "react";
import EmployersTable from "./EmployersTable";

const EmploymentSummary = () => {
  return (
    <div>
      <div className=" px-6 pt-6  pb-5 border border-[#E4E7EC] rounded-lg">
        <h5 className=" text-xl font-medium text-black flex items-center gap-2 ">
          Employment Summary
          <span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29972 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4982 5.27665 12.8128 3.62441 11.5942 2.40582C10.3756 1.18722 8.72335 0.50182 7 0.5ZM6.75 3.5C6.89834 3.5 7.04334 3.54399 7.16668 3.6264C7.29002 3.70881 7.38615 3.82594 7.44291 3.96299C7.49968 4.10003 7.51453 4.25083 7.48559 4.39632C7.45665 4.5418 7.38522 4.67544 7.28033 4.78033C7.17544 4.88522 7.04181 4.95665 6.89632 4.98559C6.75083 5.01453 6.60003 4.99968 6.46299 4.94291C6.32595 4.88614 6.20881 4.79001 6.1264 4.66668C6.04399 4.54334 6 4.39834 6 4.25C6 4.05109 6.07902 3.86032 6.21967 3.71967C6.36032 3.57902 6.55109 3.5 6.75 3.5ZM7.5 10.5C7.23479 10.5 6.98043 10.3946 6.7929 10.2071C6.60536 10.0196 6.5 9.76522 6.5 9.5V7C6.36739 7 6.24022 6.94732 6.14645 6.85355C6.05268 6.75978 6 6.63261 6 6.5C6 6.36739 6.05268 6.24021 6.14645 6.14645C6.24022 6.05268 6.36739 6 6.5 6C6.76522 6 7.01957 6.10536 7.20711 6.29289C7.39465 6.48043 7.5 6.73478 7.5 7V9.5C7.63261 9.5 7.75979 9.55268 7.85356 9.64645C7.94732 9.74021 8 9.86739 8 10C8 10.1326 7.94732 10.2598 7.85356 10.3536C7.75979 10.4473 7.63261 10.5 7.5 10.5Z"
                fill="#8FC521"
              />
            </svg>
          </span>
        </h5>
        <p className=" mt-4 text-base font-normal text-[#505D6F]">
          IF you have not been employed for 10 years, AND you are applying for
          job which requires a background check, your
          work/unemployment/education must account for the last 10 years.
          Include your entire flying career, even if beyond 10 years.
        </p>
      </div>

      <div className=" mt-5 border border-[#E4E7EC] rounded-lg">
        <div className=" py-5 px-6">
          <h2 className=" text-xl font-medium text-black">
            Attention Military
          </h2>
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
            Please enter each permanent station and/or extended temporary duty
            as a separate period of employment.
          </p>
        </div>

        <EmployersTable />
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

export default EmploymentSummary;
