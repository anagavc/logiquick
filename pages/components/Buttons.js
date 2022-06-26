import Link from "next/link";

export const Button = ({
  name,
  path,
  click,
  py,
  bgColor,
  borderColor,
  text,
  hoverText,
  hoverBg,
}) => {
  const buttonStyle = `
  md:mr-0 text-base ${bgColor && `bg-${bgColor}`} py-${py} ${
    borderColor && `border border-${borderColor}`
  }  text-${text}  hover:text-${hoverText} hover:bg-${hoverBg} rounded-full flex  justify-center   w-full md:w-auto  md:space-x-12 items-center  px-8 font-heading md:my-0 my-7   transition duration-500`;
  return (
    <>
      {path ? (
        <Link key={name + "button"} href={path}>
          <a className={buttonStyle}>{name}</a>
        </Link>
      ) : (
        <button className={buttonStyle} key="logoutButton" onClick={click}>
          {name}
        </button>
      )}
    </>
  );
};
