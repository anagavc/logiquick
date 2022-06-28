import React from "react";
import { Button } from "./Buttons";
import { HeadingSix, Paragraph } from "./FontStyles";

const TrackShipment = () => {
  return (
    <div className="bg-pry-50 flex flex-col w-full justify-start items-center px-24 py-24 space-y-12">
      <div className=" flex flex-col justify-between w-full md:w-4/5 bg-pry-100 border-2 border-sec rounded py-12 space-y-8 px-24">
        <div className="flex flex-col items-center justify-center border-b border-b-sec pb-4">
          <h3 className="text-pry-50 text-3xl font-bold font-heading">
            Track Your <span className="text-sec">Shipment</span>
          </h3>
          <Paragraph
            color="pry-50"
            align="center"
            title="Track your shipment with our state of the art order tracking system"
          />
        </div>

        <form className="flex flex-col space-y-6 justify-between items-center">
          <div className="flex flex-col w-full" key="name">
            <label htmlFor="name" className="text-base text-pry-50 font-normal">
              Tracking Number
            </label>
            <input
              placeholder="Enter the tracking number"
              name="trackingNo"
              id="trackingNo"
              type="text"
              className="px-4  py-2  placeholder:text-pry-100 text-pry-100 bg-pry-50 border-b-2 border-b-sec focus:outline-none focus:border-b-sec transition duration-300 w-full"
            />
            <p className="text-pry-100 font-normal text-sm font-body py-"></p>
          </div>
          <Button
            name="Track order"
            py="4"
            hoverText="pry-100"
            hoverBg="pry-50"
            bgColor="sec"
            text="pry-50"
            width="2/5"
          />
        </form>
      </div>
    </div>
  );
};

export default TrackShipment;