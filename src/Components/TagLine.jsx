import React from "react";
import brackets from "../assets/assets/svg/Brackets";
export const TagLine = ({ className, children }) => {
  return (
    <div
      className={`tagline flex items-center
    ${className || ""}`}
    >
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};
