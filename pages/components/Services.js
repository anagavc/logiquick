import Image from "next/image";
import React from "react";
import { SectionButton } from "./Buttons";
import { Paragraph, SectionTitle } from "./FontStyles";
import FlightTakeoff from "@mui/icons-material/FlightTakeoff";
const Services = () => {
  return (
    <div className="bg-pry-50 flex flex-col justify-center items-center py-24 px-24 space-y-6">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-pry-100 text-3xl font-bold font-heading">
          <span className="text-sec">Services</span> that we offer
        </h3>
        <Paragraph
          color="pry-100"
          align="center"
          title="Guaranteed safety of your shipment through our efficient services."
        />
      </div>

      <div className="flex justify-between space-x-6 w-full">
        <div className="bg-pry-100 drop-shadow px-8 py-8  h-72 rounded flex-1 flex flex-col items-center  space-y-6">
          <div className="bg-sec rounded-full flex justify-center items-center text-pry-50 h-20 w-20 py-8">
            <FlightTakeoff sx={{ width: 100 }} />
          </div>

          <h5 className="text-sec font-heading font-bold text-xl">
            {" "}
            Freight forwarding
          </h5>
          <Paragraph
            color="pry-50"
            align="center"
            title="Manage your business’ logistics needs more efficiently with our state of
            the art logistics services."
          />
        </div>
        <div className="bg-pry-100 drop-shadow px-8 py-8  h-72 rounded flex-1 flex flex-col items-center  space-y-6">
          <div className="bg-sec rounded-full flex justify-center items-center text-pry-50 h-20 w-20 py-8">
            <FlightTakeoff sx={{ width: 100 }} />
          </div>

          <h5 className="text-sec font-heading font-bold text-xl">
            {" "}
            Freight forwarding
          </h5>
          <Paragraph
            color="pry-50"
            align="center"
            title="Manage your business’ logistics needs more efficiently with our state of
            the art logistics services."
          />
        </div>
        <div className="bg-pry-100 drop-shadow px-8 py-8  h-72 rounded flex-1 flex flex-col items-center  space-y-6">
          <div className="bg-sec rounded-full flex justify-center items-center text-pry-50 h-20 w-20 py-8">
            <FlightTakeoff sx={{ width: 100 }} />
          </div>

          <h5 className="text-sec font-heading font-bold text-xl">
            {" "}
            Freight forwarding
          </h5>
          <Paragraph
            color="pry-50"
            align="center"
            title="Manage your business’ logistics needs more efficiently with our state of
            the art logistics services."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
