import brainwave from "../assets/assets/brainwave.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { navigation } from "../Constants";
import Button from "./Button";
import MenuSvg from "../assets/assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const ToggleMenu = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleMenuClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed w-[100%] left-0  top-0 z-50  border-b
  border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm  ${
    openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm "
  }`}
    >
      <div
        className="flex items-center px-5 lg:px-7.5
    xl:px-10 max-py-4"
      >
        <a className="block w-[12rem] xl:mr-8 " href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0
        bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className="relative z-2 flex flex-col items-center justify-center
   m-auto lg:flex lg:flex-row"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                onClick={handleMenuClick}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 
                transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                }
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors 
        hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={ToggleMenu}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};
export default Header;
