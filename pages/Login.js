import React, { useState } from "react";
import { HeadingSix, Paragraph } from "../components/FontStyles";
import loginImage from "../images/login.svg";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
import { Button } from "../components/Buttons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FadeDownAnimation, FadeUpAnimation } from "../components/Animations";
const Login = () => {
  const { error, isFetching } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("/api/users/login", data);
      dispatch(loginSuccess(res.data));
      router.push("/account");
    } catch (error) {
      console.log(error);
      dispatch(loginFailure());
    }
  };
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-lg font-medium ">Login</p>
      {error && (
        <p className="text-pry-100 font-normal text-sm font-body">
          You have entered an invalid username or password
        </p>
      )}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-full w-full drop-shadow rounded bg-pry-50 ">
        <FadeUpAnimation className="md:flex-1 px-4 py-12 w-full md:p-12 space-y-6">
          <HeadingSix
            title="Login information"
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
              type="email"
              title="Email address"
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
                name="Login"
                isFetching={isFetching}
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
              <p className="text-pry-100 font-body text-base">
                Don&apos;t have an account?
              </p>
              <Link href="/Register">
                <a className="text-pry-100 font-body ml-2 font-bold text-base hover:text-sec transition duration-300">
                  Register
                </a>
              </Link>
            </div>
          </form>
        </FadeUpAnimation>

        <FadeDownAnimation className="bg-pry-100 flex-1 p-12 flex flex-col items-center justify-center space-y-4 ">
          <HeadingSix color="pry-50" title="Welcome Back" align="center" />
          <div className="h-3/5 w-full lg:w-3/5">
            <Image src={loginImage} alt="welcome" />
          </div>
          <Paragraph
            color="pry-50"
            title="At Logiquick, we are commited to ensure you have a blissful courier
            handling."
            align="center"
          />
        </FadeDownAnimation>
      </div>
    </div>
  );
};

export default Login;
