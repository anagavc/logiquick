import React from "react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import Image from "next/Image";
import heroImg from "../../images/heroImg.svg";
const Header = () => {
  return (
    <div className="flex  flex-col justify-between items-center bg-pry-100 py-28 px-24 h-screen w-full">
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex flex-col space-y-12 justify-between w-4/5">
          <p className="font-heading text-lg text-sec">
            Best courier company in Uyo
          </p>
          <h1 className="text-6xl font-heading font-bold text-pry-50">
            Courier <span className="text-sec">Handling</span>
          </h1>
          <h2 className="font-heading text-4xl text-pry-50">
            &amp; Logistics Solution
          </h2>
          <p className="font-heading text-sm text-pry-50 text-justify">
            Manage the logistics needs of your business more efficiently with
            our state of the art logistics services.
          </p>
          <div className="flex space-x-4">
            <PrimaryButton name="Track your order" />
            <SecondaryButton name="Request a quote" />
          </div>
        </div>
        <div className="2/5">
          <Image src={heroImg} alt="Hero" className="w-full scale-x-flip" />
        </div>
      </div>
    </div>
  );
};

export default Header;
