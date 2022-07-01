import React, { useState } from "react";
import { HeadingSix, Paragraph } from "./components/FontStyles";
import shipmentImage from "../images/about.svg";
import { Button } from "./components/Buttons";
import Image from "next/image";
import Link from "next/link";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
const MakeShipment = () => {
  const [shipment, setShipment] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setShipment(data);
    console.log(shipment);
  };
  const inputs = [
    {
      title: "Email",
      inputName: "email",
      placeholder: "Enter your email address",
      type: "email",
      register: register,
      errors: errors,
    },
    {
      title: "Your location",
      inputName: "location",
      placeholder: "Enter your location",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      title: "Destination",
      inputName: "destination",
      placeholder: "Enter the destination of the item",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      title: "Item type",
      inputName: "itemType",
      placeholder: "Enter the type of item",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      title: "Estimated weight of item",
      inputName: "itemWeight",
      placeholder: "Enter the estimated weight of the item",
      type: "text",
      register: register,
      errors: errors,
    },
    {
      title: "Freight type",
      inputName: "Freight type",
      placeholder: "Enter the type of item",
      type: "select",
      options: ["Road", "Air", "Bike"],
      register: register,
      errors: errors,
    },
  ];
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-lg font-medium ">
        Make shipment
      </p>
      {/* {error && (
        <p className="text-pry-100 font-normal text-sm font-body">
          You have entered an invalid Shipmentname or password
        </p>
      )} */}
      <div className="flex justify-between h-full w-full drop-shadow rounded  ">
        <div className="md:flex-1 px-4 py-12 w-full md:p-12 space-y-6 bg-pry-50">
          <HeadingSix
            title="Shipment information"
            color="pry-100"
            size="text-2xl text-center border-b border-pry-100"
          />
          <form
            className="flex w-full flex-col  justify-between space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputs.map((input) => (
              <Input
                title={input.title}
                inputName={input.inputName}
                placeholder={input.placeholder}
                type={input.type}
                options={input.options}
                key={input.inputName}
                register={input.register}
                errors={input.errors}
              />
            ))}

            <div>
              <Button
                name="Make Shipment"
                bgColor="pry-100"
                square="true"
                py="3"
                width="full"
                text="pry-50"
                hoverText="pry-50"
                hoverBg="sec"
              />
            </div>
            <div className="w-full flex  justify-center flex-row md:mx-auto">
              <Link href="/account">
                <a className="text-pry-100 font-body ml-2 font-bold text-base hover:text-sec transition duration-300">
                  Back
                </a>
              </Link>
            </div>
          </form>
        </div>

        <div className="bg-pry-100 flex-1 p-12 hidden md:flex flex-col items-center justify-center space-y-4 ">
          <HeadingSix color="pry-50" title="Make a shipment" align="center" />
          <div className="h-3/5 w-3/5">
            <Image src={shipmentImage} alt="welcome" />
          </div>
          <Paragraph
            color="pry-50"
            title=" At Logiquick, we are commited to ensure you have a blissful courier
            handling."
            align="center"
          />
        </div>
      </div>
    </div>
  );
};

export default MakeShipment;
