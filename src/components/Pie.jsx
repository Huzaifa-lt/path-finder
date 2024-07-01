import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct, r }) => {
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={19.37}
      cy={19.37}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth="2"
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <>
      {" "}
      <text
        x="50%"
        y="50%"
        className=" text-xs leading-[14px] font-normal text-black"
        dominantBaseline="central"
        textAnchor="middle"
      >
        {percentage.toFixed(0)}%
      </text>
    </>
  );
};

const Pie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  const r = 17; // Adjusted radius
  return (
    <svg width={38.74} height={38.74}>
      <g transform={`rotate(-90 19.37 19.37)`}>
        <Circle colour="lightgrey" r={r} />
        <Circle colour={colour} pct={pct} r={r} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default Pie;
