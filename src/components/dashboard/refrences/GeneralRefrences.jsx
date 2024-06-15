import React from "react";

const GeneralRefrences = () => {
  return (
    <div>
      <div className=" px-6 pt-6 pb-5 border border-[#E4E7EC] rounded-lg ">
        <h4 className=" text-xl font-medium text-black  flex items-center gap-2">
          General References{" "}
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
        </h4>
        <p className=" mt-4 text-base font-normal  text-[#505D6F]">
          If you know any pilots who you would like to use as a reference,
          please list them below. Selection of the employer and the entry of the
          employee number for any reference is not required but will help in
          validating the reference. You will Upload the PDF or Word Document in
          the 'File Uploads' Tab and attach it to the specific person for easy
          storage.
        </p>
      </div>

      <div className=" mt-5 border border-[#E4E7EC] rounded-lg">
        <div className=" py-5 px-6">
          <h2 className=" text-lg font-medium text-[#2E2E2E]">References</h2>
        </div>

        <table className=" w-full">
          <tr className=" bg-[#F9FAFB]">
            <th>Name</th>
            <th>Relationship</th>
            <th>Company</th>
            <th>Beginning</th>
            <th>Actions</th>
          </tr>
          <tr className="  ">
            <td>
              <div className="pt-[67px] pb-[75px] flex flex-col items-center justify-center gap-[22px] ">
                <h6 className=" text-lg font-medium text-[#2E2E2E]">
                  You don’t have any reference yet, add your first reference
                  below
                </h6>

                <button className=" py-2 px-3 bg-[#F0F7E2] border border-[#8FC521] rounded-md text-sm font-medium text-black flex items-center gap-1">
                  <span>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.50016 3.83398V13.1673M3.8335 8.50065H13.1668"
                        stroke="#8FC521"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Add reference
                </button>
              </div>
            </td>
          </tr>
        </table>
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
          General References
        </button>
      </div>
    </div>
  );
};

export default GeneralRefrences;
