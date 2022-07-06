import Image from "next/image";
import React from "react";
import about from "../images/about.svg";
import { FadeDownAnimation, FadeUpAnimation } from "./Animations";
import { Button } from "./Buttons";
import { SectionTitle, Paragraph } from "./FontStyles";

const About = () => {
  return (
    <div className="bg-pry-100 lg:px-36 px-8 py-24 flex flex-col lg:flex-row justify-between gap-4">
      <FadeDownAnimation className="flex justify-center items-center  w-full lg:w-2/5">
        <Image src={about} alt="About" />
      </FadeDownAnimation>
      <FadeUpAnimation className="flex flex-col  w-full lg:w-2/5 space-y-4 justify-center">
        <SectionTitle title="About" />
        <h3 className="text-pry-50 text-3xl font-bold font-heading">
          <span className="text-sec">Efficient</span> handling of goods and
          shipments
        </h3>
        <Paragraph
          color="pry-50"
          align="justify"
          title="Manage your business’ logistics needs more efficiently with our state of
            the art logistics services.Manage your business’ logistics needs more efficiently with our state of
            the art logistics services.Manage your business’ logistics needs more efficiently with our state of
            the art logistics services.Manage your business’ logistics needs more efficiently with our state of
            the art logistics services."
        />
        <Button
          name="Read more"
          bgColor="sec"
          py="4"
          text="pry-50"
          hoverText="pry-100"
          hoverBg="pry-50"
          path="/about"
        />
      </FadeUpAnimation>
    </div>
  );
};

export default About;
