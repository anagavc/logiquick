import Image from "next/image";
import React from "react";
import Link from "next/link";
import { HeadingSix, Paragraph } from "../../components/FontStyles";
import { Button } from "../../components/Buttons";
import { client, urlFor } from "../../lib/client";
const Blog = ({ article, blogData }) => {
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 pt-36 flex flex-col justify-between  w-full space-y-12">
      <div className="flex justify-between bg-pry-50 drop-shadow flex-col lg:flex-row lg:space-x-6 w-full p-8">
        <div className="w-full lg:w-4/5 flex flex-col items-start h-full space-y-6">
          <HeadingSix title={article[0].heading} color="pry-100" size="2xl" />
          <img
            className="h-2/5 w-full"
            src={urlFor(article[0].image && article[0].image)}
            alt={article[0].heading}
          />
          <Paragraph
            color="pry-100 "
            align="justify"
            title={article[0].story}
          />
        </div>
        <div className="h-screen bg-sec w-1 hidden lg:block"></div>
        <div className="w-full items-center mt-4 lg:mt-0 lg:w-2/5 flex flex-col lg:justify-between h-full  lg:space-x-0 space-y-6">
          <HeadingSix title="Other related news" color="pry-100" size="xl" />

          {blogData.map((article) => (
            <div
              key={article.slug}
              className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center  justify-center rounded lg:space-x-4 bg-pry-50 drop-shadow p-6"
            >
              <img
                className="w-full lg:w-2/5 h-full bg-pry-50 drop-shadow p-4 rounded flex justify-center items-center"
                src={urlFor(article.image && article.image)}
                alt={article.heading}
              />
              <div className="flex flex-col justify-between space-y-2 lg:space-y-0">
                <HeadingSix
                  title={article.heading}
                  color="pry-100"
                  size="base"
                  align="justify"
                />
                <Paragraph
                  color="pry-100 "
                  align="justify"
                  title={article.story.substring(0, 60) + "..."}
                />
                <Link href={`${article.slug.current}`}>
                  <a className="text-base text-sec hover:text-pry-100 transition duration-300">
                    Read
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        name="Back"
        bgColor="pry-100"
        square="true"
        py="4"
        width="full"
        text="pry-50"
        hoverText="pry-50"
        hoverBg="sec"
        path="/blog"
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "blog"] {
    slug {
      current
    }
  }
  `;

  const news = await client.fetch(query);
  const paths = news.map((item) => ({
    params: {
      slug: item.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const article = await client.fetch(`
  *[_type == "blog" && slug.current == '${slug}']`);

  const blogData = await client.fetch(`*[_type=="blog"]`);

  return { props: { article, blogData } };
};

export default Blog;
