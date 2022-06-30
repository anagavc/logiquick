import React, { useState } from "react";
import Link from "next/link";
import { Close, Menu } from "@mui/icons-material";
import NavItem from "./NavItem";
import { Button } from "../Buttons";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const currentUser = true;
  const handleClose = () => {
    setOpen(!open);
  };
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="border-b-4 border-b-sec flex justify-between w-full fixed top-0 left-0 bg-pry-100 px-12 z-50">
      <div className="flex justify-start items-center lg:py-3 lg:px-10  py-4 z-10">
        <Link href="/">
          <span className="text-lg space-x-2 cursor-pointer text-pry-50 font-heading justify-center hover:text-sec transition duration-300  flex items-center">
            LogiQuick
          </span>
        </Link>
        <div
          className="text-3xl text-pry-50 absolute right-4 lg:hidden  top-2 cursor-pointer transition duration-300 "
          onClick={() => setOpen(!open)}
        >
          {open ? <Close /> : <Menu />}
        </div>
      </div>
      {/* mobile navigation  begins*/}
      <div
        className={`lg:hidden   flex flex-col lg:flex-row -z-10 translate-y-0 justify-between space-y-4 divide pt-12 pb-16 mt-16 items-center px-12   absolute  bg-pry-100  left-0 w-full  transition-all duration-500 ease-in ${
          open ? `translate-y-0` : `-translate-y-full`
        }`}
      >
        {navItems.map((link) => {
          return (
            <NavItem
              name={link.name}
              path={link.path}
              id={link.name}
              click={handleClose}
            />
          );
        })}
      </div>
      {/* mobile navigation  ends*/}

      <div className="lg:flex justify-between items-center space-x-8 hidden">
        {navItems.map((link) => (
          <NavItem name={link.name} path={link.path} id={link.name} />
        ))}
      </div>
      <div className="lg:flex  items-center hidden  space-x-8  justify-center  px-12 lg:py-2 pb-12  lg:static bg-pry-100 lg:z-40 z-40 w-full lg:w-auto lg:px-0">
        <div className="flex justify-center items-center space-x-8">
          <NavItem path="/login" key="loginButton" name="Login" />
          <Button
            name="Register"
            bgColor="sec"
            py="2"
            text="pry-50"
            hoverText="pry-100"
            hoverBg="pry-50"
            path="/register"
          />
        </div>
      </div>
    </div>
  );
};
