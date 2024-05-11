import React from "react";
import { useRef } from "react";
import { Section } from "./Section";
import Button from "./Button";
import { curve, herobackground, robot } from "../assets/assets";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../Constants";
import { Gradient, BackgroundCircles, BottomLine } from "./design/Hero";
import { Generating } from "./Generating";
import { Notification } from "./Notification";
export const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative " ref={parallaxRef}>
        <div
          className="relative   max-w-[62rem] mx-auto
      text-center mb-[4rem] md:mb-20 lg:mb-[6rem]"
        >
          <div className="relative z-4 mb-6 md:mb-20 lg:mb-40">
            <h1 className="h1 mb-6 ">
              Explore the Possibilities of &nbsp;AI&nbsp;Chatting with {"  "}
              <span className="inline-block relative">
                Brainwave
                <img
                  src={curve}
                  width={624}
                  height={28}
                  className="absolute top-full w-full left-0 xl:-mt-2"
                  alt="curve"
                />
              </span>
            </h1>

            <p className="relative  body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the power of AI within Brainwave.Upgrade your productivity
              with Brainwave, the open AI chat app{" "}
            </p>
            <Button href="/pricing" className="" white>
              Get Started
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 ">
            <div className="relative z-2  rounded-2xl p-0.5 bg-conic-gradient">
              <div className="relative  bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.8rem]" />
                {/* Container of the image */}
                <div
                  className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490]
lg:aspect-[1024/490]"
                >
                  <img
                    src={robot}
                    className="w-full  scale-[1.7] translate-y-[8%] md:scale-[1] 
                    md:-translate-y-[10%] lg:-translate-y-[23%] "
                    width={1000}
                    height={300}
                    alt="AI"
                  />
                  <Generating
                    className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8
                  md:w-[31rem] md:-translate-x-1/2"
                  />
                  <ScrollParallax isAbsolutelyPositioned>
                    <ul
                      className="hidden  absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1
      bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl xl:flex"
                    >
                      {heroIcons.map((icons, index) => (
                        <li key={index} className="p-5">
                          <img src={icons} width={24} height={25} alt="" />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>
                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Code generation"
                    />
                  </ScrollParallax>
                </div>
              </div>
              <Gradient />
            </div>
            {/* Img background */}
            <div
              className="absolute  -top-[54%] left-1/2 md:left-1/2 w-[100%]
            -translate-x-1/2 md:w-[138%] md:-top-[46%] lg:-top-[104%] "
            >
              <img
                src={herobackground}
                className=" w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
            <BackgroundCircles />
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};
