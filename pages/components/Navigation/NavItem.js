import React from "react";
import Link from "next/link";
const Navitem = ({ name, id, path, click }) => {
  return (
    <Link href={path} key={id} onClick={click}>
      <a
        href={path}
        className="md:mr-0 text-base  flex md:justify-between justify-center  md:border-0 w-full md:w-auto  md:space-x-12 items-center py-2 font-heading  text-pry-50  hover:text-sec border-b border-b-pry-50 md:border-bnone transition duration-500"
      >
        {name}
      </a>
    </Link>
  );
};

export default Navitem;
