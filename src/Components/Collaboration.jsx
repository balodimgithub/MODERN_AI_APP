import React from "react";
import { Section } from "./Section";
import { collabApps, collabContent } from "../Constants";
import { brainwaveSymbol, check } from "../assets/assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { collabText } from "../Constants";
export const Collaboration = () => {
  return (
    <Section crossesOffset crosses>
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
                </div>
                {collab.text && (
                  <p className="body-2 mt-3 text-n-4">{collab.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button> Try it Now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p
            className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32
       lg:w-[22rem] lg:mx-auto"
          >
            {collabText}
          </p>
          <div
            className="relative left-1/2 flex w-[22rem] aspect-square border-n-6 border rounded-full
          -translate-x-1/2 scale-75 md:scale-100"
          >
            <div
              className="flex w-60 aspect-square rounded-full border-n-6  border
            m-auto"
            >
              <div
                className="w-[6rem] m-auto  aspect-square p-[0.2rem] 
              rounded-full  bg-conic-gradient"
              >
                <div
                  className="flex items-center justify-center w-full
                h-full bg-n-8 rounded-full"
                >
                  <img
                    width={48}
                    height={48}
                    className=""
                    src={brainwaveSymbol}
                    alt="brainWave"
                  />
                </div>
              </div>
            </div>
            <ul className="bg-blue-300">
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem]
    origin-bottom  rotate-${index * 45}`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem]  h-[3.2rem]
                  border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      src={app.icon}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};
