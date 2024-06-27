import React from "react";

const UnemployedRefrence = () => {
  return (
    <div>
      <div className=" px-6 pt-6 pb-5 border border-[#E4E7EC] rounded-lg ">
        <h4 className=" text-xl font-medium text-black ">
          Unemployed References
        </h4>
        <p className=" mt-4 text-base font-normal  text-[#505D6F]">
          Please enter your unemployment references on this page. An
          unemployment reference is simply someone who is able to verify a
          particular period of unemployment in your career.
        </p>
      </div>

      <div className=" mt-11 border border-[#E4E7EC] rounded-lg">
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
        </table>
        <div className="pt-[67px] pb-[75px] flex flex-col items-center justify-center gap-[22px] ">
          <h6 className=" text-lg font-medium text-[#2E2E2E]">
            You don’t have any reference yet, add your first reference below
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
      </div>

      {/* <div className=" mt-5  flex justify-end">
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
      </div> */}
    </div>
  );
};

export default UnemployedRefrence;
