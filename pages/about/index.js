import React from "react";
import { urlFor, client } from "../../lib/client";
import about from "../../images/about.svg";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

import {
  HeadingSix,
  Paragraph,
  SectionTitle,
} from "../../components/FontStyles";
import { Button } from "../../components/Buttons";
const About = ({ teamData }) => {
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <HeadingSix title="About Us" color="pry-100" />
      <div className="bg-pry-50 drop-shadow p-4 lg:px-8 lg:py-12 flex flex-col space-y-12 justify-between gap-4">
        <div className=" flex lg:flex-row flex-col bg-pry-100 p-4 lg:p-12 justify-between gap-4 w-full">
          <div className="flex justify-center items-center  w-full lg:w-2/5">
            <Image src={about} alt="About" />
          </div>
          <div className="flex flex-col  w-full lg:w-2/5 space-y-4 items-center lg:items-start justify-center">
            <h3 className="text-pry-50 text-xl text-center lg:text-justify lg:text-3xl font-bold font-heading">
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
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-pry-100 text-3xl text-center font-bold font-heading">
            Meet the <span className="text-sec">Team</span>
          </h3>
          <Paragraph
            color="pry-100"
            align="center"
            title="The amazing team that is here to ensure you have an amazing courier experience"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-between w-full lg:space-x-4">
          {teamData.map((team) => (
            <div
              className="bg-pry-100 flex flex-col lg:w-96 w-full px-8 py-12 rounded space-y-4 justify-center items-center border-y-4 border-y-sec"
              key={team.teamMate}
            >
              <div className="rounded-full w-36 h-36 py-2 px-2 bg-pry-50 flex flex-col justify-center items-center ">
                <div className="bg-sec rounded-full w-4/5 h-4/5 py-4">
                  <img src={urlFor(team.image)} alt={team.teamMate} />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full items-center space-y-4">
                <h6 className="text-xl text-sec font-heading text-center  font-bold border-b border-b-sec w-full">
                  {team.teamMate}
                </h6>
                <h5 className="text-pry-50  font-body uppercase">
                  {team.designation}
                </h5>
                <Paragraph color="pry-50" align="center" title={team.about} />
                <div className="flex justify-between space-x-2 ">
                  <Link href={team.facebookLink}>
                    <a className="text-sec hover:text-pry-50 transition duration-300">
                      <FacebookOutlinedIcon />
                    </a>
                  </Link>
                  <Link href={team.twitterLink}>
                    <a className="text-sec hover:text-pry-50 transition duration-300">
                      <TwitterIcon />
                    </a>
                  </Link>
                  <Link href={team.linkedinLink}>
                    <a className="text-sec hover:text-pry-50 transition duration-300">
                      <LinkedInIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        name="Back"
        bgColor="pry-100"
        py="4"
        square="true"
        text="pry-50"
        hoverText="pry-50"
        hoverBg="sec"
        path="/"
      />
    </div>
  );
};

export const getServerSideProps = async () => {
  const teamData = await client.fetch(`*[_type=="team"]`);
  return {
    props: { teamData },
  };
};

export default About;
