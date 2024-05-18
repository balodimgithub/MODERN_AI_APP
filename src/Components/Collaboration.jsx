import React from "react";
import { Section } from "./Section";
import { collabContent } from "../Constants";
import { check } from "../assets/assets";
import Button from "./Button";

export const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamlesss transaction
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((collab) => (
              <li className="mb-3 py-3" key={collab.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="" />
                  <h6 className="body-2 ml-5">{collab.title}</h6>
                  {collab.text && (
                    <p className="body-2 mt-3 text-n-4">{collab.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Button> Try it Now</Button>
        </div>
      </div>
    </Section>
  );
};
