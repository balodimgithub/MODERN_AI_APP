import SectionSvg from "../assets/assets/svg/SectionSvg";

export const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={` relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20
    ${crosses ? "lg:py-32 xl:py-40" : ""} ${className || ""}`
      }`}
    >
      {children}
      {/* left Devices */}
      <div
        className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none
     md:block lg:left-7.5
    xl:left-10"
      ></div>
      {/* Right Devices */}
      <div
        className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none
     md:block lg:right-7.5
    xl:right-10"
      ></div>
      {crosses && (
        <>
          <div
            className={`hidden absolute left-7.5 right-7.5 h-7.5 ${
              crossesOffset && crossesOffset
            } 
   pointer-events-none lg:block left-10 right-10`}
          ></div>
          <SectionSvg crossesOffset={` ${crossesOffset}`} />
        </>
      )}
    </div>
  );
};
