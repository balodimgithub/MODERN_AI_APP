import React from "react";
import { Section } from "./Section";
import { Heading } from "./Heading";
import { benefits } from "../Constants";
import Arrow from "../assets/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/assets/svg/ClipPath";

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
              className={`block bg-style  relative border-[2px] rounded-[30px] rounded-tr-[71px] p-0.5 bg-no-repeat bg-[length:100%_100%]
            md:max-w-[24rem] border-color-1 first:border-[#89baf9]  last:border-color-3 odd:border-[#FACB7B]`}
            >
              {/* Light purple #D87CEE, Light Green #89F9E8, biege #FACB7B,#9099FC Violet purple, #89baf9 blue */}
              <div
                className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]
              pointer-events-none"
              >
                <h5 className="h5 mb-5 ">{benefit.title}</h5>
                <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={benefit.iconUrl}
                    width={48}
                    height={48}
                    alt={benefit.title}
                  />
                  <p
                    className="ml-auto font-code text-xs 
                   font-bold text-n-1 uppercase tracking-wider"
                  >
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              <div>{benefit.light && <GradientLight />}</div>
              <div
                className="absolute inset-0.5 bg-n-8
              "
                style={{
                  clipPath: "url(#benefits)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity
                hover:opacity-10"
                >
                  {benefit.imageUrl && (
                    <img
                      width={380}
                      height={362}
                      src={benefit.imageUrl}
                      className="w-full h-full object-cover"
                      alt={benefit.title}
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
