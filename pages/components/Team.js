import React from "react";
import { Paragraph } from "./FontStyles";
import Image from "next/image";
import staff1 from "../../images/staff1.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
const Team = () => {
  return (
    <div className="bg-pry-50 flex flex-col justify-center items-center py-24 px-24 space-y-6">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-pry-100 text-3xl font-bold font-heading">
          Meet the <span className="text-sec">Team</span>
        </h3>
        <Paragraph
          color="pry-100"
          align="center"
          title="The amazing team that is here to ensure you have an amazing courier experience"
        />
      </div>
      <div className="flex justify-between w-full space-x-4">
        <div className="bg-pry-100 flex flex-col w-96 px-8 py-12 rounded space-y-4 justify-center items-center border-y-4 border-y-sec">
          <div className="rounded-full w-36 h-36 py-2 px-2 bg-pry-50 flex flex-col justify-center items-center ">
            <div className="bg-sec rounded-full w-4/5 h-4/5 py-4">
              <Image src={staff1} alt="boss" objectFit="cover" />
            </div>
          </div>
          <div className="flex flex-col h- justify-between w-full items-center space-y-4">
            <h6 className="text-xl text-sec font-heading text-center  font-bold border-b border-b-sec w-full">
              Anaga Victor
            </h6>
            <h5 className="text-pry-50  font-body uppercase">
              Chief Logistics Officer
            </h5>
            <Paragraph
              color="sec"
              align="center"
              title="An experienced hand in the logistics industry with over 20 years of experience"
            />
          </div>
        </div>
        <div className="bg-pry-100 flex flex-col w-96 px-8 py-12 rounded space-y-4 justify-center items-center border-y-4 border-y-sec">
          <div className="rounded-full w-36 h-36 py-2 px-2 bg-pry-50 flex flex-col justify-center items-center ">
            <div className="bg-sec rounded-full w-4/5 h-4/5 py-4">
              <Image src={staff1} alt="boss" />
            </div>
          </div>
          <div className="flex flex-col h- justify-between w-full items-center space-y-4">
            <h6 className="text-xl text-sec font-heading text-center  font-bold border-b border-b-sec w-full">
              Anaga Victor
            </h6>
            <h5 className="text-pry-50  font-body uppercase">
              Chief Logistics Officer
            </h5>
            <Paragraph
              color="pry-50"
              align="center"
              title="An experienced hand in the logistics industry with over 20 years of experience"
            />
            <div className="flex justify-between space-x-2 ">
              <Link href="www.facebook.com">
                <a className="text-sec hover:text-pry-50 transition duration-300">
                  <FacebookOutlinedIcon />
                </a>
              </Link>
              <Link href="www.facebook.com">
                <a className="hover:text-pry-50">
                  <TwitterIcon />
                </a>
              </Link>
              <Link href="www.facebook.com">
                <a className="hover:text-pry-50">
                  <LinkedInIcon />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-pry-100 flex flex-col w-96 px-8 py-12 rounded space-y-4 justify-center items-center border-y-4 border-y-sec">
          <div className="rounded-full w-36 h-36 py-2 px-2 bg-pry-50 flex flex-col justify-center items-center ">
            <div className="bg-sec rounded-full w-4/5 h-4/5 py-4">
              <Image src={staff1} alt="boss" />
            </div>
          </div>
          <div className="flex flex-col h- justify-between w-full items-center space-y-4">
            <h6 className="text-xl text-sec font-heading text-center  font-bold border-b border-b-sec w-full">
              Anaga Victor
            </h6>
            <h5 className="text-pry-50  font-body uppercase">
              Chief Logistics Officer
            </h5>
            <Paragraph
              color="sec"
              align="center"
              title="An experienced hand in the logistics industry with over 20 years of experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
