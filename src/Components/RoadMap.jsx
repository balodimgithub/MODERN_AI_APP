import React from "react";
import { Section } from "./Section";
import { Heading } from "./Heading";
import { roadmap } from "../Constants";
import { grid } from "../assets/assets";
import { TagLine } from "./TagLine";
import { check2, loading1 } from "../assets/assets";

export const RoadMap = () => {
  return (
    <Section crosses className={`overflow-hidden`} id="roadmap">
      <div className="container md:pb-10 ">
        <Heading tag="Ready to get started" title="What we're working on" />
        <div className="relative grid gap-6  md:pb-[7rem] md:grid-cols-2 md:gap-4">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "Progress";
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.0rem]
              ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
              >
                <div
                  className="relative p-8 bg-n-8 
                  rounded-[2rem] overflow-hidden xl:p-15"
                >
                  <div className="absolute  top-0 left-0  max-w-4">
                    <img
                      className="w-full "
                      width={550}
                      height={550}
                      src={grid}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    {/* DATE, STATUS AND */}
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      {/* Tagline */}
                      <TagLine>{item.date}</TagLine>
                      <div
                        className="flex items-center px-4 py-1
                       bg-n-1 rounded text-n-8"
                      >
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt={status}
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    {/* CHECK-BOX IMAGE */}
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-10">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>

                  {/* THE DIV BENEATH IS THE SECOND DIV OF THE MAPPED ELEMENTS */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
