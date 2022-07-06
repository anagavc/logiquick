import React, { useState } from "react";
import { Button } from "./Buttons";
import { Paragraph } from "./FontStyles";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import {
  getShipmentStart,
  getShipmentSuccess,
  getShipmentFailure,
} from "../redux/shipmentSlice";
import axios from "axios";
import { useRouter } from "next/router";
import { FadeUpAnimation } from "./Animations";
const TrackShipment = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.shipment);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    dispatch(getShipmentStart());

    try {
      const res = await axios.post("/api/shipment/info", data);
      router.push(`/shipment/${res.data[0].trackingNo}`);
      dispatch(getShipmentSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(getShipmentFailure());
    }
  };
  return (
    <div
      id="track"
      className="bg-pry-50 flex flex-col w-full justify-start items-center px-8 lg:px-24 py-24 space-y-12"
    >
      <FadeUpAnimation className=" flex flex-col justify-between w-full md:w-4/5 bg-pry-100 border-2 border-sec rounded py-16 lg:py-12 space-y-6 lg:space-y-8 px-6 lg:px-24">
        <div className="flex flex-col items-center justify-center border-b border-b-sec pb-4">
          <h3 className="text-pry-50 text-3xl text-center font-bold font-heading">
            Track Your <span className="text-sec">Shipment</span>
          </h3>
          <Paragraph
            color="pry-50"
            align="center"
            title="Track your shipment with our state of the art order tracking system"
          />
        </div>

        <form
          className="flex flex-col space-y-6 justify-between items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Paragraph
            color="pry-50"
            align="justify"
            title="For demonstration, use: LOABBI284"
          />
          <Input
            title="Tracking Number"
            inputName="trackingNo"
            placeholder="Enter the tracking number"
            type="text"
            register={register}
            errors={errors}
            errorColor="text-pry-50"
          />

          <Button
            name="Track order"
            py="4"
            isFetching={isFetching}
            hoverText="pry-100"
            hoverBg="pry-50"
            bgColor="sec"
            text="pry-50"
            width="2/5"
          />
        </form>
      </FadeUpAnimation>
    </div>
  );
};

export default TrackShipment;
