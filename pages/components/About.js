import Image from "next/image";
import React from "react";
import about from "../../images/about.svg";
import { SectionButton } from "./Buttons";
import { SectionTitle, Paragraph } from "./FontStyles";

const About = () => {
  return (
    <div className="bg-pry-100 px-36 py-24 flex justify-between">
      <div className="flex justify-center items-center w-2/5">
        <Image src={about} alt="About" />
      </div>
      <div className="flex flex-col w-2/5 space-y-4 justify-center">
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
        <SectionButton name="Read more" path="/about" />
      </div>
    </div>
  );
};

export default About;
