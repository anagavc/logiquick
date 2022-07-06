import React from "react";
import { Paragraph } from "./FontStyles";
import { urlFor } from "../lib/client";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { FadeUpAnimation } from "./Animations";
const Team = ({ teamData }) => {
  return (
    <div className="bg-pry-50 flex flex-col justify-center items-center py-24 px-8 lg:px-24 space-y-6 w-full">
      <FadeUpAnimation className="flex flex-col items-center justify-center">
        <h3 className="text-pry-100 text-3xl text-center font-bold font-heading">
          Meet the <span className="text-sec">Team</span>
        </h3>
        <Paragraph
          color="pry-100"
          align="center"
          title="The amazing team that is here to ensure you have an amazing courier experience"
        />
      </FadeUpAnimation>
      <div className="flex flex-col lg:flex-row gap-6 justify-between w-full lg:space-x-4">
        {teamData.map((team) => (
          <FadeUpAnimation
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
          </FadeUpAnimation>
        ))}
      </div>
    </div>
  );
};

export default Team;
