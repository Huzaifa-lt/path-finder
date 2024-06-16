import SelectBox from "@/components/ui/SelectBox";
import React from "react";

const UploadTable = () => {
  return (
    <table className=" w-full  ">
      <tr className=" bg-[#F9FAFB]">
        <th>Name</th>
        <th>Type</th>
        <th>Company</th>

        <th>Actions</th>
      </tr>
      <tbody>
        <tr>
          <td className=" flex items-center gap-3">
            <div className=" p-[6.3px] size-7 bg-[#F0F1F3] rounded-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_738_15982)">
                  <path
                    d="M13.2937 9.44531H11.3687V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8124 11.3691H11.3687"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 11.8516H4.14976C4.46884 11.8516 4.77486 11.7248 5.00049 11.4992C5.22612 11.2735 5.35288 10.9675 5.35288 10.6484C5.35288 10.3293 5.22612 10.0233 5.00049 9.7977C4.77486 9.57207 4.46884 9.44531 4.14976 9.44531H3.18726V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.03711 9.44531V12.8141H7.99961C8.44633 12.8141 8.87476 12.6366 9.19064 12.3207C9.50652 12.0048 9.68398 11.5764 9.68398 11.1297C9.68398 10.683 9.50652 10.2545 9.19064 9.93865C8.87476 9.62277 8.44633 9.44531 7.99961 9.44531H7.03711Z"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 7.03906V2.70781C3.18726 2.58018 3.23796 2.45777 3.32821 2.36752C3.41846 2.27727 3.54087 2.22656 3.66851 2.22656H9.44351L12.8123 5.59531V7.03906"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.44336 2.22656V5.59531H12.8121"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_738_15982">
                    <rect
                      width="15.4"
                      height="15.4"
                      fill="white"
                      transform="translate(0.300049 0.300781)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            interview documents.pdf
          </td>
          <td>
            <SelectBox
              className=" py-0.5 px-2 bg-[#F5FBF8] w-fit h-fit border-none gap-0.5 text-xs font-medium text-[#039855] rounded-2xl  "
              placeholder="Airplane"
            />
          </td>
          <td>
            <SelectBox
              placeholder="Military - Transport"
              className=" w-fit bg-transparent border-none font-medium text-[#667085]  gap-3 "
            />
          </td>
          <td>
            <div className=" flex items-center gap-3">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.99996H4.16667M4.16667 4.99996H17.5M4.16667 4.99996V16.6666C4.16667 17.1087 4.34226 17.5326 4.65482 17.8451C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666V4.99996H4.16667ZM6.66667 4.99996V3.33329C6.66667 2.89127 6.84226 2.46734 7.15482 2.15478C7.46738 1.84222 7.89131 1.66663 8.33333 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M8.33333 9.16663V14.1666M11.6667 9.16663V14.1666"
                    stroke="#E25D53"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td className=" flex items-center gap-3">
            <div className=" p-[6.3px] size-7 bg-[#F0F1F3] rounded-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_738_15982)">
                  <path
                    d="M13.2937 9.44531H11.3687V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8124 11.3691H11.3687"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 11.8516H4.14976C4.46884 11.8516 4.77486 11.7248 5.00049 11.4992C5.22612 11.2735 5.35288 10.9675 5.35288 10.6484C5.35288 10.3293 5.22612 10.0233 5.00049 9.7977C4.77486 9.57207 4.46884 9.44531 4.14976 9.44531H3.18726V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.03711 9.44531V12.8141H7.99961C8.44633 12.8141 8.87476 12.6366 9.19064 12.3207C9.50652 12.0048 9.68398 11.5764 9.68398 11.1297C9.68398 10.683 9.50652 10.2545 9.19064 9.93865C8.87476 9.62277 8.44633 9.44531 7.99961 9.44531H7.03711Z"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 7.03906V2.70781C3.18726 2.58018 3.23796 2.45777 3.32821 2.36752C3.41846 2.27727 3.54087 2.22656 3.66851 2.22656H9.44351L12.8123 5.59531V7.03906"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.44336 2.22656V5.59531H12.8121"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_738_15982">
                    <rect
                      width="15.4"
                      height="15.4"
                      fill="white"
                      transform="translate(0.300049 0.300781)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            interview documents.pdf
          </td>
          <td>
            <SelectBox
              className=" py-0.5 px-2 bg-[#F5FBF8] w-fit h-fit border-none gap-0.5 text-xs font-medium text-[#039855] rounded-2xl  "
              placeholder="Airplane"
            />
          </td>
          <td>
            <SelectBox
              placeholder="Military - Transport"
              className=" w-fit bg-transparent border-none font-medium text-[#667085]  gap-3 "
            />
          </td>
          <td>
            <div className=" flex items-center gap-3">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.99996H4.16667M4.16667 4.99996H17.5M4.16667 4.99996V16.6666C4.16667 17.1087 4.34226 17.5326 4.65482 17.8451C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666V4.99996H4.16667ZM6.66667 4.99996V3.33329C6.66667 2.89127 6.84226 2.46734 7.15482 2.15478C7.46738 1.84222 7.89131 1.66663 8.33333 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M8.33333 9.16663V14.1666M11.6667 9.16663V14.1666"
                    stroke="#E25D53"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td className=" flex items-center gap-3">
            <div className=" p-[6.3px] size-7 bg-[#F0F1F3] rounded-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_738_15982)">
                  <path
                    d="M13.2937 9.44531H11.3687V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8124 11.3691H11.3687"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 11.8516H4.14976C4.46884 11.8516 4.77486 11.7248 5.00049 11.4992C5.22612 11.2735 5.35288 10.9675 5.35288 10.6484C5.35288 10.3293 5.22612 10.0233 5.00049 9.7977C4.77486 9.57207 4.46884 9.44531 4.14976 9.44531H3.18726V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.03711 9.44531V12.8141H7.99961C8.44633 12.8141 8.87476 12.6366 9.19064 12.3207C9.50652 12.0048 9.68398 11.5764 9.68398 11.1297C9.68398 10.683 9.50652 10.2545 9.19064 9.93865C8.87476 9.62277 8.44633 9.44531 7.99961 9.44531H7.03711Z"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 7.03906V2.70781C3.18726 2.58018 3.23796 2.45777 3.32821 2.36752C3.41846 2.27727 3.54087 2.22656 3.66851 2.22656H9.44351L12.8123 5.59531V7.03906"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.44336 2.22656V5.59531H12.8121"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_738_15982">
                    <rect
                      width="15.4"
                      height="15.4"
                      fill="white"
                      transform="translate(0.300049 0.300781)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            interview documents.pdf
          </td>
          <td>
            <SelectBox
              className=" py-0.5 px-2 bg-[#F5FBF8] w-fit h-fit border-none gap-0.5 text-xs font-medium text-[#039855] rounded-2xl  "
              placeholder="Airplane"
            />
          </td>
          <td>
            <SelectBox
              placeholder="Military - Transport"
              className=" w-fit bg-transparent border-none font-medium text-[#667085]  gap-3 "
            />
          </td>
          <td>
            <div className=" flex items-center gap-3">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.99996H4.16667M4.16667 4.99996H17.5M4.16667 4.99996V16.6666C4.16667 17.1087 4.34226 17.5326 4.65482 17.8451C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666V4.99996H4.16667ZM6.66667 4.99996V3.33329C6.66667 2.89127 6.84226 2.46734 7.15482 2.15478C7.46738 1.84222 7.89131 1.66663 8.33333 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M8.33333 9.16663V14.1666M11.6667 9.16663V14.1666"
                    stroke="#E25D53"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td className=" flex items-center gap-3">
            <div className=" p-[6.3px] size-7 bg-[#F0F1F3] rounded-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_738_15982)">
                  <path
                    d="M13.2937 9.44531H11.3687V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8124 11.3691H11.3687"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 11.8516H4.14976C4.46884 11.8516 4.77486 11.7248 5.00049 11.4992C5.22612 11.2735 5.35288 10.9675 5.35288 10.6484C5.35288 10.3293 5.22612 10.0233 5.00049 9.7977C4.77486 9.57207 4.46884 9.44531 4.14976 9.44531H3.18726V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.03711 9.44531V12.8141H7.99961C8.44633 12.8141 8.87476 12.6366 9.19064 12.3207C9.50652 12.0048 9.68398 11.5764 9.68398 11.1297C9.68398 10.683 9.50652 10.2545 9.19064 9.93865C8.87476 9.62277 8.44633 9.44531 7.99961 9.44531H7.03711Z"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 7.03906V2.70781C3.18726 2.58018 3.23796 2.45777 3.32821 2.36752C3.41846 2.27727 3.54087 2.22656 3.66851 2.22656H9.44351L12.8123 5.59531V7.03906"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.44336 2.22656V5.59531H12.8121"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_738_15982">
                    <rect
                      width="15.4"
                      height="15.4"
                      fill="white"
                      transform="translate(0.300049 0.300781)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            interview documents.pdf
          </td>
          <td>
            <SelectBox
              className=" py-0.5 px-2 bg-[#F5FBF8] w-fit h-fit border-none gap-0.5 text-xs font-medium text-[#039855] rounded-2xl  "
              placeholder="Airplane"
            />
          </td>
          <td>
            <SelectBox
              placeholder="Military - Transport"
              className=" w-fit bg-transparent border-none font-medium text-[#667085]  gap-3 "
            />
          </td>
          <td>
            <div className=" flex items-center gap-3">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.99996H4.16667M4.16667 4.99996H17.5M4.16667 4.99996V16.6666C4.16667 17.1087 4.34226 17.5326 4.65482 17.8451C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666V4.99996H4.16667ZM6.66667 4.99996V3.33329C6.66667 2.89127 6.84226 2.46734 7.15482 2.15478C7.46738 1.84222 7.89131 1.66663 8.33333 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M8.33333 9.16663V14.1666M11.6667 9.16663V14.1666"
                    stroke="#E25D53"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td className=" flex items-center gap-3">
            <div className=" p-[6.3px] size-7 bg-[#F0F1F3] rounded-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_738_15982)">
                  <path
                    d="M13.2937 9.44531H11.3687V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8124 11.3691H11.3687"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 11.8516H4.14976C4.46884 11.8516 4.77486 11.7248 5.00049 11.4992C5.22612 11.2735 5.35288 10.9675 5.35288 10.6484C5.35288 10.3293 5.22612 10.0233 5.00049 9.7977C4.77486 9.57207 4.46884 9.44531 4.14976 9.44531H3.18726V12.8141"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.03711 9.44531V12.8141H7.99961C8.44633 12.8141 8.87476 12.6366 9.19064 12.3207C9.50652 12.0048 9.68398 11.5764 9.68398 11.1297C9.68398 10.683 9.50652 10.2545 9.19064 9.93865C8.87476 9.62277 8.44633 9.44531 7.99961 9.44531H7.03711Z"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.18726 7.03906V2.70781C3.18726 2.58018 3.23796 2.45777 3.32821 2.36752C3.41846 2.27727 3.54087 2.22656 3.66851 2.22656H9.44351L12.8123 5.59531V7.03906"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.44336 2.22656V5.59531H12.8121"
                    stroke="black"
                    strokeWidth="0.9625"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_738_15982">
                    <rect
                      width="15.4"
                      height="15.4"
                      fill="white"
                      transform="translate(0.300049 0.300781)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            interview documents.pdf
          </td>
          <td>
            <SelectBox
              className=" py-0.5 px-2 bg-[#F5FBF8] w-fit h-fit border-none gap-0.5 text-xs font-medium text-[#039855] rounded-2xl  "
              placeholder="Airplane"
            />
          </td>
          <td>
            <SelectBox
              placeholder="Military - Transport"
              className=" w-fit bg-transparent border-none font-medium text-[#667085]  gap-3 "
            />
          </td>
          <td>
            <div className=" flex items-center gap-3">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.99996H4.16667M4.16667 4.99996H17.5M4.16667 4.99996V16.6666C4.16667 17.1087 4.34226 17.5326 4.65482 17.8451C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666V4.99996H4.16667ZM6.66667 4.99996V3.33329C6.66667 2.89127 6.84226 2.46734 7.15482 2.15478C7.46738 1.84222 7.89131 1.66663 8.33333 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M8.33333 9.16663V14.1666M11.6667 9.16663V14.1666"
                    stroke="#E25D53"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UploadTable;
