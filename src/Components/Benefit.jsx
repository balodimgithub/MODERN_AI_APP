import React from "react";
import { Section } from "./Section";
import { Heading } from "./Heading";
import { benefits } from "../Constants";
export const Benefit = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, not Harder with BrainWave"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%]
            md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
            >
              <div
                className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]
              pointer-events-none"
              >
                <h5 className="h5 mb-5 ">{benefit.title}</h5>
                <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
