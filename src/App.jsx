import ButtonGradients from "./assets/assets/svg/ButtonGradient";
import { Benefit } from "./Components/Benefit";
import { Collaboration } from "./Components/Collaboration";
// import Button from "./Components/Button";
import Header from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Pricing } from "./Components/Pricing";
import { Services } from "./Components/Services";

const App = () => {
  return (
    <>
      <ButtonGradients />
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        {/* <Button className="mt-[20px]">Something</Button> */}
        <Header />
        <Hero />
        <Benefit />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
    </>
  );
};

export default App;
