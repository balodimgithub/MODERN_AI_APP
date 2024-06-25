import React from "react";
import { Section } from "./Section";
import { smallSphere, stars } from "../assets/assets";
import { Heading } from "./Heading";
import { PricingList } from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

export const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <div
          className="hidden relative lg:flex 
        justify-center mb-[6.5rem]"
        >
          <img
            src={smallSphere}
            className="relative  z-1"
            width={255}
            height={255}
            alt="Sphere"
          />

          <div
            className="absolute top-1/2
         left-1/2 w-full 
         -translate-x-1/2 
         -translate-y-1/2 pointer-events-none"
          >
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with brainWave"
          title="Pay once Use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase
    border-b"
            href="/pricing"
          >
            See the full detais
          </a>
        </div>
      </div>
    </Section>
  );
};
