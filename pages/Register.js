import React, { useState } from "react";
import axios from "axios";
import { HeadingSix, Paragraph } from "../components/FontStyles";
import {
  registrationStart,
  registrationSuccess,
  registrationFailure,
} from "../redux/userSlice";
import registerImage from "../images/register.svg";
import { Button } from "../components/Buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FadeDownAnimation, FadeUpAnimation } from "../components/Animations";
const Register = () => {
  const { error, isFetching } = useSelector((state) => state.user);
  const router = useRouter();
  const { redirect } = router.query;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ email, name, password }) => {
    dispatch(registrationStart());
    try {
      const { data } = await axios.post("/api/users/register", {
        email,
        name,
        password,
      });
      dispatch(registrationSuccess(data));
      router.push(redirect || "/account");
    } catch (error) {
      console.log(error);
      dispatch(registrationFailure());
    }
  };
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-lg font-medium ">Register</p>
      {error && (
        <p className="text-pry-100 font-normal text-sm font-body">
          The email address you have entered is already registered
        </p>
      )}
      <div className="flex flex-col-reverse lg:flex-row justify-between  h-full w-full drop-shadow rounded ">
        <FadeUpAnimation className="md:flex-1 px-4 py-12 w-full md:p-12 space-y-6 bg-pry-50 ">
          <HeadingSix
            title="Registration information"
            color="pry-100"
            size="text-2xl text-center border-b border-pry-100"
          />
          <form
            className="flex w-full flex-col  justify-between space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Enter your email address"
              inputName="email"
              id="email"
              type="text"
              title="Email Address"
              register={register}
              errors={errors}
            />
            <Input
              placeholder="Enter your name"
              inputName="name"
              id="name"
              type="text"
              title="Name"
              register={register}
              errors={errors}
            />

            <Input
              title="Password"
              placeholder="Enter your password"
              inputName="password"
              id="password"
              type="password"
              register={register}
              errors={errors}
            />

            <div>
              <Button
                name="Register"
                bgColor="pry-100"
                square="true"
                py="3"
                isFetching={isFetching}
                width="full"
                text="pry-50"
                hoverText="pry-50"
                hoverBg="sec"
              />
            </div>
            <div className="w-full flex  justify-center flex-row md:mx-auto">
              <p className="text-pry-100 font-body text-base">
                Already have an account?
              </p>
              <Link href="/Login">
                <a className="text-pry-100 font-body ml-2 font-bold text-base hover:text-sec transition duration-300">
                  Login
                </a>
              </Link>
            </div>
          </form>
        </FadeUpAnimation>

        <FadeDownAnimation className="bg-pry-100 flex-1 p-12 flex flex-col items-center justify-center space-y-4 h-full">
          <HeadingSix
            color="pry-50"
            title="We are glad to have you"
            align="center"
          />
          <div className="h-3/5 w-full lg:w-3/5">
            <Image src={registerImage} alt="welcome" />
          </div>
          <Paragraph
            color="pry-50"
            title=" At Logiquick, we are commited to ensure you have a blissful courier
            handling."
            align="center"
          />
        </FadeDownAnimation>
      </div>
    </div>
  );
};

export default Register;
