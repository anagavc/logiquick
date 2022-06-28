import React from "react";
import { HeadingSix, Paragraph } from "./FontStyles";
import Input from "./Input";
import { Button } from "./Buttons";
const Contact = () => {
  const inputs = [
    {
      title: "Email",
      inputName: "email",
      placeholder: "Enter your email address",
      type: "email",
    },
    {
      title: "Your location",
      inputName: "location",
      placeholder: "Enter your location",
      type: "text",
    },
    {
      title: "Destination",
      inputName: "destination",
      placeholder: "Enter the destination of the item",
      type: "text",
    },
    {
      title: "Item type",
      inputName: "itemType",
      placeholder: "Enter the type of item",
      type: "text",
    },
    {
      title: "Freight type",
      inputName: "Freight type",
      placeholder: "Enter the type of item",
      type: "select",
      options: ["Road", "Air", "Bike"],
    },
  ];
  return (
    <div className="bg-pry-50 flex flex-col w-full justify-between items-center py-24 px-24  space-y-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-pry-100 text-3xl font-bold font-heading">
          <span className="text-sec">Contact</span> Us
        </h3>
        <Paragraph
          color="pry-100"
          align="center"
          title="Send us a request to get a cost estimate for your shipment"
        />
      </div>
      <div className=" flex  justify-between w-full  bg-pry-100  rounded py-12 space-y-8 px-12">
        <form className="w-2/5 space-y-4  flex flex-col bg-pry-50 rounded px-6 py-6 border-y-4 border-y-sec">
          <HeadingSix
            title="Request a quote"
            color="pry-100"
            size="lg"
            align="center"
          />
          {inputs.map((input) => (
            <Input
              title={input.title}
              inputName={input.inputName}
              placeholder={input.placeholder}
              type={input.type}
              options={input.options}
            />
          ))}
          <Button
            name="Request"
            bgColor="pry-100"
            square="true"
            py="2"
            text="pry-50"
            hoverText="pry-50"
            hoverBg="sec"
          />
        </form>
        <div className="w-3/5 px-12 flex flex-col space-y-2">
          <h6 className="text-lg text-center text-pry-50 tracking-tight font-heading  font-bold border-b border-b-pry-50 w-full">
            Our contact information
          </h6>
          <div className="flex justify-between"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
