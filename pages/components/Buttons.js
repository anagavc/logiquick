import Link from "next/link";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
export const Button = ({
  name,
  path,
  click,
  py,
  bgColor,
  borderColor,
  hoverText,
  hoverBg,
  text,
  width,
  isLoading,
  square,
}) => {
  let loading = true;
  let color = { text };
  const buttonStyle = `
  md:mr-0 text-base ${bgColor && `bg-${bgColor}`} py-${py} ${
    borderColor && `border border-${borderColor}`
  }  text-${text}  hover:text-${hoverText} hover:bg-${hoverBg} ${
    square ? "rounded-none" : "rounded-full"
  } flex  justify-center  w-full md:w-${
    width ? width : "auto"
  } md:space-x-12 items-center  px-8 font-heading md:my-0 my-7   transition duration-500`;
  return (
    <>
      {path ? (
        <Link href={path}>
          <a className={buttonStyle} key={name + "button"}>
            {name}
          </a>
        </Link>
      ) : (
        <button type="submit" className={buttonStyle} onClick={click}>
          {name}
        </button>
      )}
    </>
  );
};

export const FooterIcon = ({ path, icon }) => {
  return (
    <Link href={path}>
      <a className="text-pry-50 hover:text-sec transition duration-300">
        {icon}
      </a>
    </Link>
  );
};
