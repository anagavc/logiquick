import Link from "next/link";
const Account = (props) => {
  // const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="w-full bg-pry-50 items-center justify-center  flex h-full pt-32 pb-20 px-4 lg:px-0">
      <div className="w-full  lg:w-2/5 bg-pry-100 flex  flex-col justify-center items-center lg:space-x-4 p-4 lg:p-4 ">
        <div className="p-4 lg:p-8 border-b border-b-pry-50 space-y-8 flex items-center justify-center flex-col">
          <div className="flex justify-center items-center w-full  divide-x divide-pry-50">
            <h2 className=" text-pry-50  font-body text-xl text-center border-b-pry-50 border-b w-full">
              Your information
            </h2>
          </div>
          <div className="flex justify-between px-2 lg:px-8 w-full lg:w-4/5 space-x-4">
            <div className="flex flex-col justify-between space-y-6">
              <p className="text-pry-50 text-base font-body ">Username</p>
              <p className="text-pry-50 text-base font-body ">Email </p>
            </div>
            <div className="border-l border-l-pry-50 justify-start"></div>
            <div className="flex flex-col justify-between space-y-6">
              <p className="text-pry-50 text-base font-body ">Emeka</p>
              <p className="text-pry-50 text-base font-body ">
                emeka@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <Link href="/MakeShipment">
              <a className="  text-pry-50 py-2 px-12 font-body text-md border  hover:bg-pry-50 hover:text-pry-100 transition duration-300">
                Make Shipment
              </a>
            </Link>
            <Link href="/shipments">
              <a className="  text-pry-50 py-2 px-12 font-body text-md border  hover:bg-pry-50 hover:text-pry-100 transition duration-300">
                Shipment History
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
