import Image from "next/image";
import React from "react";
import { HeadingSix } from "./FontStyles";
import reviewer from "../../images/staff1.png";
const Reviews = () => {
  return (
    <div className="bg-pry-100 flex flex-col justify-center items-center py-24 px-24 space-y-6">
      <div className="w-full flex justify-between">
        <div className="flex flex-col w-2/5 py-8 px-8 rounded justify-around bg-pry-50 ">
          <div className="flex space-x-2">
            <div>
              <div className="rounded bg-sec w-40 h-40 flex justify-center items-center skew-y-12">
                <Image src={reviewer} alt="reviewer" />
              </div>
            </div>

            <HeadingSix title="Chris Jake" color="pry-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
