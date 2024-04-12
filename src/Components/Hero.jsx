import { Section } from "./Section";
import Button from "./Button";
import { curve, heroBackground } from "../assets/assets";
import { robot } from "../assets/assets";
export const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative ">
        <div
          className="relative z-1 max-w-[62rem] mx-auto
      text-center mb-[4rem] md:mb-20 lg:mb-[6rem]"
        >
          <h1 className="h1 mb-6 ">
            Explore the Possibilities of AI Chatting with BrainwaveCurve
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                width={624}
                height={28}
                className="absolute top-full w-full left-0 xl:-mt-2"
                alt="curve"
              />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave.Upgrade your productivity
            with Brainwave, the open AI chat app{" "}
          </p>
          <Button href="/pricing" className="" white>
            Get Started
          </Button>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 md:mt-[40%] mt-[70%]">
            <div className="relative  z-1 rounded-2xl p-0.5 bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                {/* Container of the image */}
                <div
                  className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490]
lg:aspect-[1024/490]"
                >
                  <img
                    src={robot}
                    className="w-full"
                    width={1024}
                    height={490}
                    alt="AI"
                  />
                </div>
              </div>
            </div>
            {/* Img background */}
            <div
              className="absolute bg-blue-400 -top-[40%] left-1/2 md:left-1/2 w-[100%]
            -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] overflow-hidden"
            >
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
