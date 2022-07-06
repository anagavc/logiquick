import React from "react";
import Image from "next/image";
import shipmentImage from "../../images/shipment.svg";
import { useDispatch, useSelector } from "react-redux";
import { HeadingSix, Paragraph } from "../../components/FontStyles";
import { Button } from "../../components/Buttons";
import { useRouter } from "next/router";

const ShipmentInformation = () => {
  const router = useRouter();
  const shipment = useSelector((state) => state.shipment.shipment[0]);

  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-lg font-medium ">
        Shipment Information
      </p>
      <div className="lg:bg-pry-50 lg:drop-shadow h-full lg:p-12 rounded flex flex-col">
        <div className="bg-pry-100 py-6 lg:py-4 px-4 lg:px-12 space-y-4 border-b-4 border-b-sec flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center">
            <div className="flex flex-col lg:flex-row space-x-0  space-y-4 lg:space-y-0 lg:space-x-4 items-center">
              <div className="w-40 h-40">
                <Image
                  src={shipmentImage}
                  alt="shipment"
                  className="w-full scale-x-flip"
                />
              </div>
              <div className="flex flex-col">
                <HeadingSix title="On the way" size="2xl" color="sec" />
                <Paragraph
                  title={`Item: ${shipment.itemType}`}
                  color="pry-50"
                />
                <Paragraph
                  title={`Receiver: ${shipment.receiverName}`}
                  color="pry-50"
                />
                <Paragraph title="Friday, 1st July 2022" color="pry-50" />
              </div>
            </div>
            <div className="w-full lg:w-1/5">
              <div className="bg-sec w-full text-center px-6 py-3 rounded-full font-bold text-pry-50 font-heading text-2xl">
                {" "}
                {shipment.trackingNo}
              </div>
            </div>
          </div>
          <div className="w-full bg-sec rounded-full border border-sec"> </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between w-full">
            <div className="flex flex-col">
              <HeadingSix size="xl" color="sec" title="From" />

              <Paragraph title={shipment.location} color="pry-50" />
            </div>
            <div className="flex flex-col">
              <HeadingSix size="xl" color="sec" title="Destination" />

              <Paragraph title={shipment.destination} color="pry-50" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col ">
            {shipment.locationUpdate?.map((update) => (
              <div className="flex flex-col w-full" key={update.status}>
                <div className="py-3 mx-20 bg-pry-100 border border-pry-100 w-0"></div>
                <div className="bg-pry-100 w-40 text-center flex justify-center items-center px-6 py-2 text-pry-50 font-body font-bold text-base">
                  {update?.date}
                </div>
                <div className="flex mx-20 space-x-4">
                  <div className="py-6  bg-pry-100 border border-pry-100 w-0"></div>
                  <div className="w-full py-2 px-6 border border-pry-100 my-4 text-base font-body text-pry-100">
                    {update?.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button
        name="Back"
        bgColor="pry-100"
        square="true"
        py="4"
        width="full"
        text="pry-50"
        hoverText="pry-50"
        hoverBg="sec"
        path="/"
      />
    </div>
  );
};

export default ShipmentInformation;
