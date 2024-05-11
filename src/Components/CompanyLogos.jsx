import React from "react";
import { companyLogos } from "../Constants";

export const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/15">
        <ul className="flex">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={index}
            >
              <img src={logo} width={134} height={28} alt={logo} />
            </li>
          ))}
        </ul>
      </h5>
    </div>
  );
};
