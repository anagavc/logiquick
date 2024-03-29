import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Paragraph } from "./FontStyles";
import Input from "./Input";
import Image from "next/image";
import { Button } from "./Buttons";
import axios from "axios";
import contact from "../images/contact.svg";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FadeDownAnimation } from "./Animations";
const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [isFetching, setisFetching] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    setisFetching(true);
    try {
      const res = await axios.post("/api/contact/info", { data });
      setisFetching(false);
      reset();
      toast.success(`Your request has been sent,we will get back to you soon.`);
    } catch (error) {
      console.log(error);
      setisFetching(false);
    }
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
      title: "Freight type",
      inputName: "freightType",
      placeholder: "Enter the type of item",
      type: "select",
      options: ["Road", "Air", "Bike"],
      register: register,
      errors: errors,
    },
  ];
  const contactDetails = [
    {
      icon: <LocationCityIcon />,
      name: "our office address",
      info: "    No.2 Shelter Afrique, Uyo,AkwaIbom State",
    },

    {
      icon: <QuestionAnswerIcon />,
      name: "Let us talk",
      info: "+234-123-4567-890",
    },
    {
      icon: <EmailIcon />,
      name: "Mail us",
      info: "support@logiquick.netlify.app",
    },
    {
      icon: <LanguageIcon />,
      name: "Our website",
      info: "www.logiquick.netlify",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-pry-50 flex flex-col w-full justify-between items-center py-24 px-4 lg:px-24  space-y-12"
    >
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
      <div className=" flex  lg:flex-row flex-col justify-between w-full  bg-pry-100  rounded py-12 space-y-8 px-4 lg:px-12">
        <form
          className=" w-full lg:w-2/5 space-y-4  flex flex-col bg-pry-50 rounded py-6 px-6 lg:pt-6 border-y-4 border-y-sec"
          onSubmit={handleSubmit(onSubmit)}
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h6 className="text-xl text-center text-pry-100 tracking-tight font-body    w-full">
            Request a quote
          </h6>
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
          <Button
            name="Request"
            bgColor="pry-100"
            square="true"
            py="2"
            isFetching={isFetching}
            text="pry-50"
            hoverText="pry-50"
            hoverBg="sec"
          />
        </form>
        <FadeDownAnimation className="w-full lg:w-3/5 px-4 lg:px-12 flex flex-col space-y-6 ">
          <h6 className="text-lg text-center text-pry-50 tracking-tight font-body uppercase   border-b border-b-pry-50 w-full">
            Our contact information
          </h6>
          <div className="flex flex-wrap flex-col lg:flex-row space-y-2 w-full justify-between ">
            {contactDetails.map((detail, index) => {
              return (
                <div
                  className="flex flex-col space-y-4 justify-between w-full lg:w-3/6"
                  key={index}
                >
                  <div className="bg-pry-100 w-8 h-8 text-sec flex justify-center items-center px-4 py-4">
                    {detail.icon}
                  </div>
                  <h5 className="font-body uppercase tracking-widest font-medium text-pry-50">
                    {detail.name}
                  </h5>
                  <p className="font-body text-base text-pry-50">
                    {detail.info}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full lg:w-2/5 self-end justify-self-end">
            <Image src={contact} alt="contact" />
          </div>
        </FadeDownAnimation>
      </div>
    </div>
  );
};

export default Contact;
