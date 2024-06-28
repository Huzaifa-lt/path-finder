import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FaaRequirments = () => {
  return (
    <div>
      <h4 className=" text-base leading-[19px] font-medium text-black flex items-center gap-1">
        FAA Requirements - United States{" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_550_16778)">
                  <path
                    d="M8 2C6.71442 2 5.45772 2.38122 4.3888 3.09545C3.31988 3.80968 2.48676 4.82484 1.99479 6.01256C1.50282 7.20028 1.37409 8.50721 1.6249 9.76809C1.8757 11.029 2.49477 12.1872 3.40381 13.0962C4.31285 14.0052 5.47104 14.6243 6.73192 14.8751C7.99279 15.1259 9.29972 14.9972 10.4874 14.5052C11.6752 14.0132 12.6903 13.1801 13.4046 12.1112C14.1188 11.0423 14.5 9.78558 14.5 8.5C14.4982 6.77665 13.8128 5.12441 12.5942 3.90582C11.3756 2.68722 9.72335 2.00182 8 2ZM7.75 5C7.89834 5 8.04334 5.04399 8.16668 5.1264C8.29002 5.20881 8.38615 5.32594 8.44291 5.46299C8.49968 5.60003 8.51453 5.75083 8.48559 5.89632C8.45665 6.0418 8.38522 6.17544 8.28033 6.28033C8.17544 6.38522 8.04181 6.45665 7.89632 6.48559C7.75083 6.51453 7.60003 6.49968 7.46299 6.44291C7.32595 6.38614 7.20881 6.29001 7.1264 6.16668C7.04399 6.04334 7 5.89834 7 5.75C7 5.55109 7.07902 5.36032 7.21967 5.21967C7.36032 5.07902 7.55109 5 7.75 5ZM8.5 12C8.23479 12 7.98043 11.8946 7.7929 11.7071C7.60536 11.5196 7.5 11.2652 7.5 11V8.5C7.36739 8.5 7.24022 8.44732 7.14645 8.35355C7.05268 8.25978 7 8.13261 7 8C7 7.86739 7.05268 7.74021 7.14645 7.64645C7.24022 7.55268 7.36739 7.5 7.5 7.5C7.76522 7.5 8.01957 7.60536 8.20711 7.79289C8.39465 7.98043 8.5 8.23478 8.5 8.5V11C8.63261 11 8.75979 11.0527 8.85356 11.1464C8.94732 11.2402 9 11.3674 9 11.5C9 11.6326 8.94732 11.7598 8.85356 11.8536C8.75979 11.9473 8.63261 12 8.5 12Z"
                    fill="#E28330"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_550_16778">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </TooltipTrigger>
            <TooltipContent className=" bg-[#FCF3EB] border-none" side="right">
              <p className="text-[#DE7010] text-sm leading-4 font-normal">
                To become an Airline Transport Pilot (ATP) in the U.S., the
                following requirements must be met.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h4>
      <div className=" mt-4  p-5 border border-[#E7E9EB] rounded-xl space-y-5">
        <div className=" space-y-3">
          <li className=" flex items-center gap-1">
            <strong className=" text-base leading-[19px]  font-medium text-black">
              1. Moral Character:
            </strong>
            <span className=" text-base font-normal text-[#505D6F]">
              The applicant must be of good moral character.
            </span>
          </li>
          <li className=" flex items-center gap-1">
            <strong className=" text-base leading-[19px] font-medium text-black">
              2. Age Requirement:
            </strong>
            <span className=" text-base font-normal text-[#505D6F]">
              Must be at least 23 years old.
            </span>
          </li>
          <li className=" flex items-center gap-1">
            <strong className=" text-base leading-[19px] font-medium text-black">
              3. Pilot Certificates:
            </strong>
            <span className=" text-base  font-normal text-[#505D6F]">
              Hold a commercial pilot certificate along with an instrument
              rating.
            </span>
          </li>
          <li className=" flex items-center gap-1">
            <strong className=" text-base leading-[19px] font-medium text-black">
              4. Examinations:
            </strong>
            <span className=" text-base font-normal text-[#505D6F]">
              Pass the ATP written and practical tests.
            </span>
          </li>
          <div>
            <li className=" flex items-center gap-1">
              <strong className=" text-base leading-[19px] font-medium text-black">
                5. Flight Hour Requirements:
              </strong>
              <span className=" text-base font-normal text-[#505D6F]">
                Meet the minimum flight hour requirements as specified in FAR
                Part 61, which includes:1,500 hours of total flight time.
              </span>
            </li>
            <div className=" mt-2 space-y-[1px]">
              <p className=" text-sm leading-6 font-normal text-[#505D6F]">
                1,500 hours of total flight time.
              </p>
              <p className=" text-sm leading-6 font-normal text-[#505D6F]">
                500 hours of cross-country flight time.
              </p>
              <p className=" text-sm leading-6 font-normal text-[#505D6F]">
                100 hours of night flight time.
              </p>
              <p className=" text-sm leading-6 font-normal text-[#505D6F]">
                50 hours in the class of airplane specific to the ATP rating
                sought.
              </p>
              <p className=" text-sm leading-6 font-normal text-[#505D6F]">
                75 hours of instrument flight time.
              </p>
              <p className=" text-sm leading-6 font-normal text-[#505D6F]">
                250 hours as pilot-in-command.
              </p>
            </div>
          </div>
        </div>
        <div className=" space-y-3">
          <h4 className=" text-base leading-[19px] text-black font-semibold">
            Additionally, since 2014, the following steps are required:
          </h4>
          <p className=" text-base font-normal text-[#505D6F]">
            ATP Certification Training Program (ATP CTP): Before taking the ATP
            knowledge test, an applicant must complete the ATP CTP. This course,
            usually lasting five days and costing about $5,000, covers advanced
            knowledge areas and includes simulator training. While airlines may
            sponsor the cost for applicants, a list of approved programs can be
            found on the FAA's website.
          </p>
        </div>
        <div className=" space-y-3">
          <h4 className=" text-base leading-[19px] text-black font-semibold">
            For those eligible for a Restricted ATP certificate:
          </h4>
          <div className=" space-y-3">
            <li className=" flex items-center gap-1">
              <strong className=" text-base leading-[19px]  font-medium text-black">
                Military Pilots:
              </strong>
              <span className=" text-base font-normal text-[#505D6F]">
                May obtain a restricted ATP with 750 hours of flight experience.
              </span>
            </li>
            <li className=" flex items-center gap-1">
              <strong className=" text-base leading-[19px]  font-medium text-black">
                Four-Year Aviation College Graduates
              </strong>
              <span className=" text-base font-normal text-[#505D6F]">
                Can get the restricted ATP at 1,000 hours.
              </span>
            </li>
            <li className=" flex items-center gap-1">
              <strong className=" text-base leading-[19px]  font-medium text-black">
                Two-Year Aviation College Graduates
              </strong>
              <span className=" text-base font-normal text-[#505D6F]">
                Eligible at 1,250 hours.
              </span>
            </li>
            <p className=" text-base font-normal text-[#505D6F]">
              Each of these paths also has specific sub-requirements related to
              flight time, including cross-country and pilot-in-command hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaaRequirments;
