import Image from "next/image";
import React from "react";
import news1 from "../images/news1.jpg";
import { HeadingSix, Paragraph } from "./FontStyles";
import { Button } from "./Buttons";
const Blog = () => {
  return (
    <div className="bg-pry-100 flex flex-col w-full justify-between items-center py-24 px-8 lg:px-24  space-y-12">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-pry-50 text-3xl font-bold text-center font-heading">
          Latest <span className="text-sec">News</span>
        </h3>
        <Paragraph
          color="pry-50"
          align="center"
          title="Here are some of things we have recently been up to at LogiQuick"
        />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-4 lg:space-x-8 w-full">
        <div className="flex flex-col items-center space-y-4  py-4 px-4 bg-pry-50 border-y-2 border-y-sec  w-full lg:w-2/6">
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
            width="3/5"
            text="pry-50"
            hoverText="pry-50"
            hoverBg="sec"
            path="/readMore"
          />
        </div>
        <div className="flex flex-col items-center space-y-4  py-4 px-4 bg-pry-50 border-y-2 border-y-sec w-full lg:w-2/6">
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
            width="3/5"
            text="pry-50"
            hoverText="pry-50"
            hoverBg="sec"
            path="/readMore"
          />
        </div>
        <div className="flex flex-col items-center space-y-4  py-4 px-4 bg-pry-50 border-y-2 border-y-sec w-full lg:w-2/6">
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
