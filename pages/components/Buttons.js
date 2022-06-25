import Link from "next/link";

export const PrimaryButton = ({ name, path, click }) => {
  return (
    <>
      {path ? (
        <Link key={name + "button"} href={path}>
          <a className="md:mr-0 text-base bg-sec rounded-full flex md:justify-between justify-center   w-full md:w-auto  md:space-x-12 items-center py-2 px-8 font-heading md:my-0 my-7 text-pry-50  hover:text-pry-100 hover:bg-pry-50  transition duration-500">
            {name}
          </a>
        </Link>
      ) : (
        <button
          className="md:mr-0 text-base bg-sec rounded-full flex md:justify-between justify-center   w-full md:w-auto  md:space-x-12 items-center py-2 px-8 font-heading md:my-0 my-7 text-pry-50  hover:text-pry-100 hover:bg-pry-50  transition duration-500"
          key="logoutButton"
        >
          {name}
        </button>
      )}
    </>
  );
};
export const SecondaryButton = ({ name, path, click }) => {
  return (
    <>
      {path ? (
        <Link key={name + "button"} href={path}>
          <a className="md:mr-0 text-base border border-pry-50 rounded-full flex md:justify-between justify-center   w-full md:w-auto  md:space-x-12 items-center py-2 px-8 font-heading md:my-0 my-7 text-pry-50  hover:text-pry-100 hover:bg-pry-50  transition duration-500">
            {name}
          </a>
        </Link>
      ) : (
        <button
          className="md:mr-0 text-base border border-pry-50 rounded-full flex md:justify-between justify-center   w-full md:w-auto  md:space-x-12 items-center py-2 px-8 font-heading md:my-0 my-7 text-pry-50  hover:text-pry-100 hover:bg-pry-50  transition duration-500"
          key="logoutButton"
        >
          {name}
        </button>
      )}
    </>
  );
};
