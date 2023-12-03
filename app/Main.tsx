import React from "react";
import HeroOne from "./HeroOne";
import Herotwo from "./Herotwo";
import HeroThree from "./HeroThree";

function Main() {
  return (
    <div className="lg:w-7/12 w-full lg:overflow-y-scroll h-full lg:h-full pt-[5.4rem] pl-5 pr-5 lg:pr-0 md:pl-[3.8rem] bg-black from-black via-black to-transparent bg-custom-svg bg-no-repeat bg-cover bg-center">
      <HeroOne />
      <Herotwo />
      <HeroThree/>
    </div>
  );
}

export default Main;
