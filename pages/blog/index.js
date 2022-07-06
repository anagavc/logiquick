import React from "react";
import { client, urlFor } from "../../lib/client";
import { HeadingSix, Paragraph } from "../../components/FontStyles";
import { Button } from "../../components/Buttons";
import { FadeUpAnimation } from "../../components/Animations";
const Blog = ({ blogData }) => {
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <HeadingSix title="Latest News" color="pry-100" />

      <FadeUpAnimation className="flex lg:flex-row flex-col justify-between gap-4 lg:space-x-8 w-full">
        {blogData.map((data) => (
          <div className="flex flex-col items-center justify-between space-y-4  py-4 px-4 bg-pry-50 border-y-2 drop-shadow border-y-sec w-full lg:w-2/6">
            <div className="w-full h-80">
              <img
                src={urlFor(data.image && data.image)}
                className="h-64 w-full"
                alt={data.title}
              />
            </div>
            <h6 className="text-lg text-center text-pry-100 tracking-tight font-heading  font-bold border-b border-b-pry-100 w-full">
              {data.heading}
            </h6>

            <Paragraph
              color="pry-100"
              align="justify"
              title={data.story.substring(0, 200) + "..."}
            />
            <Button
              name="Read more"
              bgColor="pry-100"
              square="true"
              py="4"
              width="full"
              path={`blog/${data.slug.current}`}
              text="pry-50"
              hoverText="pry-50"
              hoverBg="sec"
            />
          </div>
        ))}
      </FadeUpAnimation>
    </div>
  );
};
export const getServerSideProps = async () => {
  const blogData = await client.fetch(`*[_type=="blog"]`);
  return {
    props: { blogData },
  };
};

export default Blog;
