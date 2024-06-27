import React from "react";
import RadioBox from "@/components/ui/RadioBox";
import Input from "@/components/ui/InputField";
import TextArea from "@/components/ui/TextArea";

const Tsr = () => {
  const radioOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  return (
    <div className="  my-5 pb-6 border-b border-[#E4E7EC] ">
      <p className=" text-[#505D6F] text-base font-normal">
        In accordance with Transportation Security Regulation (TSR) 49 CFR, ll
        employees that are granted unescorted access to a Security
        Identification Display Area (SIDA) and employees that have access to
        aircraft must undergo a fingerprint based Criminal History Record Check
        (CHRC). The following is a list of disqualifying crimes:
      </p>
      <div className=" mt-5  list-decimal text-[#505D6F] text-base font-normal space-y-[11px]">
        <li>
          Forgery of certificates, false marking of aircraft and other aircraft
          registration violation; 49 U.S.C 46306.
        </li>
        <li> Interference with air navigation; 49 U.S.C.46308.</li>
        <li>
          Improper transportation of a hazardous material; 49 U.S.C. 46312.
        </li>
        <li> Aircraft piracy; 49 U.S.C 46502 .</li>
        <li>
          Interference with flight crewmembers or flight attendants; 49 U.S.C
          46504.
        </li>
        <li>
          Commission of certain crimes aboard aircraft in flight; 49
          U.S.C.46506.
        </li>
        <li>
          Carrying a weapon or explosive aboard aircraft ; 49 U.S.C. 46505.
        </li>
        <li> Conveying false information and threats ; 49 U.S.C. 46507.</li>
        <li>
          Aircraft piracy outside the special aircraft jurisdiction of the
          United States; 49 U.S.C 46402 (b).
        </li>
        <li>
          Lighting violations involving transporting controlled substances; 49
          U.S.C.46315.
        </li>
        <li>
          Unlawful entry into an aircraft or airport area that serves air
          carriers or foreign carriers contrary to established security
          requirements; 49 U.S.C. 46314.
        </li>
        <li> Destruction of an aircraft or aircraft facility; 18 U.S.C 32 .</li>
        <li> Murder.</li>
        <li> Assault with intent to murder.</li>
        <li> Espionage.</li>
        <li> Sedition.</li>
        <li> Kidnapping or hostage taking.</li>
        <li> Treason.</li>
        <li> Rape or aggravated sexual abuse.</li>
        <li>
          Unlawful possession, use, sale, distribution, or manufacture of an
          explosive or weapon.
        </li>
        <li> Extortion.</li>
        <li> Armed or felony unarmed robbery.</li>
        <li>Distribution of or intent to distribute a controlled substance.</li>
        <li> Felony arson.</li>
        <li> Felony involving a threat.</li>
        <li> Felony involving willful destruction of property .</li>
        <li>
          Felony involving importation or manufacture of a controlled substance.
        </li>
        <li> Felony involving burglary.</li>
        <li> Felony involving theft.</li>
        <li> Felony involving dishonesty, fraud and misrepresentation.</li>
        <li>Felony involving possession or distribution of stolen property.</li>
        <li> Felony involving aggravated assault.</li>
        <li> Felony involving bribery.</li>
        <li>
          Felony involving illegal possession of a controlled substance
          punishable by a maximum term of imprisonment of more than 1 year.
        </li>
        <li> Violence at international airport; 18 U.S.C. 37.</li>
        <li>
          Conspiracy or attempt to commit any of the criminal acts listed above.
        </li>
      </div>
      {/* <div>
        <div className=" mt-5 py-4 pl-4  border border-[#E7E9EB] rounded-xl">
          <label className=" text-base  font-normal text-black" htmlFor="">
            In the past ten (10) years, have you ever been convicted or found
            not guilty by reason of insanity of any of the above listed crimes?
          </label>
          <div className=" mt-4">
            <RadioBox label="No" />
          </div>
        </div>
      </div> */}
      <div className=" mt-5">
        <RadioBox
          options={radioOptions}
          label="  In the past ten (10) years, have you ever been convicted or found
            not guilty by reason of insanity of any of the above listed crimes?"
        />
      </div>

      <div className=" mt-4">
        <TextArea
          label="If yes, please explain all details:"
          placeholder="Enter a description..."
        />
      </div>
    </div>
  );
};

export default Tsr;
