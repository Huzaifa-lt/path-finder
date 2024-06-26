import React from "react";
import ApplicationLinkHeader from "./ApplicationLinkHeader";
import ApplicationLinkCard from "./ApplicationLinkCard";

const ApplicationLinks = () => {
  return (
    <div>
      <ApplicationLinkHeader />

      <div className=" mt-6 mx-6 space-y-8">
        <div className=" ">
          <div className=" mb-5  bg-[#E7E9EB] h-[1px] flex items-center   ">
            <h6 className="  pr-2 bg-white  text-sm font-medium text-black">
              My Favorites
            </h6>
          </div>
          <div className=" grid grid-cols-4 gap-x-4 gap-y-5">
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./aegean.png"
              isFavourite
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./aer-lingus.png"
              isFavourite
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./aeroflot.png"
              isFavourite
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./aerolineas.png"
              isFavourite
            />
          </div>
        </div>
        <div className=" ">
          <div className=" mb-5  bg-[#E7E9EB] h-[1px] flex items-center   ">
            <h6 className="  pr-2 bg-white  text-sm font-medium text-black">
              All airlines
            </h6>
          </div>
          <div className=" grid grid-cols-4 gap-x-4 gap-y-5">
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./aeromexico.png"
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./empty.png"
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./aeronaves.png"
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./empty.png"
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./empty.png"
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./aeromexico-connect.png"
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./empty.png"
            />
            <ApplicationLinkCard
              planeName="Aegean Airlines"
              imgSrc="./algeria.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationLinks;
