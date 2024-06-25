import React from "react";

const ApplicationLinkCard = ({ planeName, imgSrc }) => {
  return (
    <div className=" min-h-[200px]  bg-white border border-[#E7E9EB] rounded-xl ">
      <div className=" min-h-[122px] ">
        <img
          className="w-full object-cover rounded-t-xl "
          src={imgSrc}
          alt=""
        />
      </div>
      <div className="  pt-4 pb-[18px] px-4">
        <div className=" flex items-center justify-between">
          <div className=" flex  items-center gap-1 ">
            <h4 className=" text-base font-medium text-black">{planeName}</h4>
            <span>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 8.08333V11.5833C10.5 11.8928 10.3771 12.1895 10.1583 12.4083C9.9395 12.6271 9.64275 12.75 9.33333 12.75H2.91667C2.60725 12.75 2.3105 12.6271 2.09171 12.4083C1.87292 12.1895 1.75 11.8928 1.75 11.5833V5.16667C1.75 4.85725 1.87292 4.5605 2.09171 4.34171C2.3105 4.12292 2.60725 4 2.91667 4H6.41667M8.75 2.25H12.25M12.25 2.25V5.75M12.25 2.25L5.83333 8.66667"
                  stroke="#7C8693"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_882_7045)">
                  <path
                    d="M8 5V6"
                    stroke="#7C8693"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 11V12"
                    stroke="#7C8693"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14.5C11.3137 14.5 14 11.8137 14 8.5C14 5.18629 11.3137 2.5 8 2.5C4.68629 2.5 2 5.18629 2 8.5C2 11.8137 4.68629 14.5 8 14.5Z"
                    stroke="#7C8693"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 11H8.75C9.08152 11 9.39946 10.8683 9.63388 10.6339C9.8683 10.3995 10 10.0815 10 9.75C10 9.41848 9.8683 9.10054 9.63388 8.86612C9.39946 8.6317 9.08152 8.5 8.75 8.5H7.25C6.91848 8.5 6.60054 8.3683 6.36612 8.13388C6.1317 7.89946 6 7.58152 6 7.25C6 6.91848 6.1317 6.60054 6.36612 6.36612C6.60054 6.1317 6.91848 6 7.25 6H9.5"
                    stroke="#7C8693"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_882_7045">
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
          </div>
          <button>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2L11.3175 6.695L16.5 7.4525L12.75 11.105L13.635 16.265L9 13.8275L4.365 16.265L5.25 11.105L1.5 7.4525L6.6825 6.695L9 2Z"
                fill="#8FC521"
                stroke="#8FC521"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className=" mt-2 text-sm font-normal text-[#9198A4]">
          Date added: June 9, 2024
        </p>
      </div>
    </div>
  );
};

export default ApplicationLinkCard;
