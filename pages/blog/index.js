import Image from "next/image";
import React from "react";
import news1 from "../../images/news1.jpg";
import { HeadingSix, Paragraph } from "../../components/FontStyles";
import { Button } from "../../components/Buttons";
const Blog = () => {
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <HeadingSix title="Latest News" color="pry-100" />

      <div className="flex lg:flex-row flex-col justify-between gap-4 lg:space-x-8 w-full">
        <div className="flex flex-col items-center space-y-4  py-4 px-4 bg-pry-50 border-y-2 drop-shadow border-y-sec  w-full lg:w-2/6">
          <div className="w-full">
            <Image src={news1} alt="news" />
          </div>
          <h6 className="text-lg text-center text-pry-100 tracking-tight font-heading  font-bold border-b border-b-pry-100 w-full">
            Road,air and sea transport are available for conveying your products
            to its final destination
          </h6>

          <Paragraph
            color="pry-100"
            align="justify"
            title="Here are some of things we have recently been up to at LogiQuick, because road,air and sea transport are 
available for conveying your products to its final destination"
          />
          <Button
            name="Read more"
            bgColor="pry-100"
            square="true"
            py="4"
            width="full"
            text="pry-50"
            hoverText="pry-50"
            hoverBg="sec"
            path="/readMore"
          />
        </div>
        <div className="flex flex-col items-center space-y-4  py-4 px-4 bg-pry-50 border-y-2 border-y-sec drop-shadow w-full lg:w-2/6">
          <div className="w-full">
            <Image src={news1} alt="news" />
          </div>
          <h6 className="text-lg text-center text-pry-100 tracking-tight font-heading  font-bold border-b border-b-pry-100 w-full">
            Road,air and sea transport are available for conveying your products
            to its final destination
          </h6>

          <Paragraph
            color="pry-100"
            align="justify"
            title="Here are some of things we have recently been up to at LogiQuick, because road,air and sea transport are 
available for conveying your products to its final destination"
          />
          <Button
            name="Read more"
            bgColor="pry-100"
            square="true"
            py="4"
            width="full"
            text="pry-50"
            hoverText="pry-50"
            hoverBg="sec"
            path="/readMore"
          />
        </div>
        <div className="flex flex-col items-center space-y-4 drop-shadow py-4 px-4 bg-pry-50 border-y-2 border-y-sec w-full lg:w-2/6">
          <div className="w-full">
            <Image src={news1} alt="news" />
          </div>
          <h6 className="text-lg text-center text-pry-100 tracking-tight font-heading  font-bold border-b border-b-pry-100 w-full">
            Road,air and sea transport are available for conveying your products
            to its final destination
          </h6>

          <Paragraph
            color="pry-100"
            align="justify"
            title="Here are some of things we have recently been up to at LogiQuick, because road,air and sea transport are 
available for conveying your products to its final destination"
          />
          <Button
            name="Read more"
            bgColor="pry-100"
            square="true"
            py="4"
            width="full"
            text="pry-50"
            hoverText="pry-50"
            hoverBg="sec"
            path="/readMore"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
