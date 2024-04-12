import ButtonGradients from "./assets/assets/svg/ButtonGradient";
// import Button from "./Components/Button";
import Header from "./Components/Header";
import { Hero } from "./Components/Hero";

const App = () => {
  return (
    <>
      <ButtonGradients />
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        {/* <Button className="mt-[20px]">Something</Button> */}
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default App;
