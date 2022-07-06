import { ArrowRightAlt, AssignmentTurnedIn } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
const Successful = () => {
  const { shipment } = useSelector((state) => state.shipment);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-center items-center  w-full space-y-4">
      <div className="bg-pry-100  drop-shadow flex flex-col items-center w-full md:w-3/5 space-y-8 justify-center px-12 py-8 md:py-16 border-2 border-pry-50">
        <span className="text-pry-50">
          <AssignmentTurnedIn sx={{ fontSize: 56 }} />
        </span>
        <h2 className="text-pry-50 text-2xl text-center font-body">
          Your payment was successful{" "}
        </h2>

        <p className="font-body  text-pry-50 text-center text-md">
          {currentUser.name.toUpperCase()}, your shipment with{" "}
          {shipment.trackingNo} tracking number has been scheduled for pickup
          from {shipment.location} to {shipment.destination}.
        </p>

        <div className="flex justify-between items-center space-x-8">
          <Link href="/shipment">
            <a className="text-pry-50 font-body text-base hover:text-sec transition duration-300">
              View shipments
            </a>
          </Link>
          <Link href="/account">
            <a className=" border border-pry-50 text-pry-50 py-2 px-8 font-body text-base hover:bg-pry-50 hover:text-pry-100 transition duration-300">
              Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Successful;
