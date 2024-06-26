import React from "react";
import SwitchCard from "./SwitchCard";

const cargoCheckboxes = [
  { label: "UPS" },
  { label: "FedEx" },
  { label: "Mountain Air Cargo" },
  { label: "Freight Runners Express" },
];
const legacyCheckboxes = [
  { label: "United" },
  { label: "Delta Air Lines" },
  { label: "Alaska Airlines" },
  { label: "American Airlines" },
];
const fractionalCheckboxes = [{ label: "Plane Sense" }];

const majorCheckboxes = [
  { label: "Southwest Airlines" },
  { label: "JetBlue" },
  { label: "Hawaiian Airlines" },
  { label: "Frontier Airlines" },
  { label: "Spirit" },
  { label: "Mountain Air Cargo" },
  { label: "Sun Country" },
  { label: "Avelo" },
  { label: "Breeze Airways" },
];
const partCheckboxes = [
  { label: "Ameriflight" },
  { label: "Cape Air" },
  { label: "Cape Air" },
  { label: "Key Lime Air" },
  { label: "Sierra West Airlines" },
  { label: "Ameristar" },
  { label: "Air Choice One" },
  { label: "JSX" },
  { label: "Trade Wind Aviation" },
  { label: "West Coast Aviation" },
  { label: "Martinair" },
  { label: "Jet Linx" },
  { label: "STA Jets" },
  { label: "fly Exclusive" },
  { label: "Moser Aviation" },
  { label: "Justice Air" },
  { label: "Castle Aviation" },
  { label: "XOJET" },
  { label: "Kalitta Charters" },
  { label: "Wheels Up" },
  { label: "Castle Aviation" },
  { label: "CSA Air" },
];
const regionalCheckboxes = [
  { label: "Endeavor Air" },
  { label: "SkyWest Airlines" },
  { label: "PSA Airlines" },
  { label: "Piedmont" },
  { label: "Air Wisconsin" },
  { label: "Mesa Airlines" },
  { label: "CommuteAir" },
  { label: "Horizon Air" },
  { label: "Envoy Air" },
  { label: "GoJet Airlines" },
  { label: "Republic Airways" },
  { label: "Peninsula Airways" },
];

const DomicileMap = () => {
  return (
    <>
      <div className=" py-5 px-6 flex items-center justify-between border-b border-[#E7E9EB]">
        <h3 className=" text-xl font-medium text-black">Domicile Map</h3>
      </div>
      <div className=" mt-5 mx-6 mb-9">
        <div className=" max-w-full  h-[474px]">
          <img
            src="./map.png"
            className=" w-full h-full object-cover rounded-2xl "
            alt=""
          />
        </div>
        <div className=" mt-5  grid grid-cols-3 gap-x-4 gap-y-5">
          <SwitchCard
            label="Cargo"
            className="min-h-[212px]"
            checkboxes={cargoCheckboxes}
          />
          <SwitchCard
            label="Legacy"
            className="min-h-[212px]"
            checkboxes={legacyCheckboxes}
          />
          <SwitchCard
            label="Fractional"
            className="min-h-[212px]"
            checkboxes={fractionalCheckboxes}
          />
          <SwitchCard
            label="Major"
            className="min-h-[436px]"
            layout="row"
            checkboxes={majorCheckboxes}
          />
          <SwitchCard
            label="Part 135"
            className="min-h-[436px]"
            layout="row"
            checkboxes={partCheckboxes}
          />
          <SwitchCard
            label="Regional"
            className="min-h-[436px]"
            layout="row"
            checkboxes={regionalCheckboxes}
          />
        </div>
      </div>
    </>
  );
};

export default DomicileMap;
