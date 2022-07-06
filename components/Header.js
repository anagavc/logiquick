import React from "react";
import { Button } from "./Buttons";
import Image from "next/image";
import heroImg from "../images/heroImg.svg";
import { FadeDownAnimation, FadeUpAnimation } from "./Animations";
const Header = () => {
  return (
    <div className="flex  flex-col justify-between items-center bg-pry-100 mt-16 lg:mt-0 lg:py-28 py-12 px-12 lg:px-24 lg:h-screen w-full">
      <div className="flex space-y-4 lg:space-y-0 lg:justify-between flex-col lg:flex-row items-center w-full h-full">
        <FadeDownAnimation className="flex flex-col space-y-8 lg:space-y-12 justify-between w-full lg:w-4/5">
          <p className="font-heading text-lg text-sec hidden lg:block">
            Best courier company in Uyo
          </p>
          <h1 className=" text-3xl lg:text-6xl text-center lg:text-left font-heading font-bold text-pry-50">
            Courier <span className="text-sec">Handling</span>
          </h1>
          <h2 className="font-heading lg:text-4xl text-xl text-center lg:text-left text-pry-50">
            <span className="block lg:inline">&amp;</span> Logistics Solution
          </h2>
          <p className="font-heading text-xs lg:text-sm text-center text-pry-50 lg:text-justify">
            Manage the logistics needs of your business more efficiently with
            our state of the art logistics services.
          </p>
          <div className="lg:flex flex-col hidden space-y-2 lg:flex-row lg:space-x-4">
            <Button
              name="Track your order"
              bgColor="sec"
              py="2"
              text="pry-50"
              hoverText="pry-100"
              hoverBg="pry-50"
              path="#track"
            />
            <Button
              name="Request a quote"
              borderColor="pry-50"
              py="2"
              text="pry-50"
              hoverText="pry-100"
              hoverBg="pry-50"
              path="#contact"
            />
          </div>
        </FadeDownAnimation>
        <FadeUpAnimation className="w-full flex items-center justify-center h-4/5 lg:w-2/5 lg:h-full">
          <Image src={heroImg} alt="Hero" className="w-full scale-x-flip" />
        </FadeUpAnimation>
        <FadeUpAnimation className="lg:hidden mb-12 w-full flex-col flex  space-y-2 lg:flex-row lg:space-x-4">
          <Button
            name="Track your order"
            bgColor="sec"
            py="4"
            text="pry-50"
            hoverText="pry-100"
            hoverBg="pry-50"
            path="/#track"
          />
          <Button
            name="Request a quote"
            borderColor="pry-50"
            py="4"
            text="pry-50"
            hoverText="pry-100"
            hoverBg="pry-50"
            path="/#contact"
          />
        </FadeUpAnimation>
      </div>
    </div>
  );
};

export default Header;
