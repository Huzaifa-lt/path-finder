import React from "react";

const Profile = () => {
  return (
    <div className=" w-fit flex flex-col gap-3 items-center">
      <div className="  size-[132px]">
        <img className="" src="/profile-lg.png" alt="" />
      </div>
      <div>
        <h3 className=" text-xl text-center font-bold ">
          Bryan's Pilot Profile
        </h3>
        <h6 className=" text-base font-normal text-center text-boldGrey">
          C-32A | E-3A | ATP
        </h6>
      </div>
    </div>
  );
};

export default Profile;
