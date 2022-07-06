import { Paragraph } from "./FontStyles";
import { Button } from "./Buttons";
import { urlFor } from "../lib/client";
import { FadeDownAnimation, FadeUpAnimation } from "./Animations";
const Blog = ({ blogData }) => {
  return (
    <div className="bg-pry-100 flex flex-col w-full justify-between items-center py-24 px-8 lg:px-24  space-y-12">
      <FadeDownAnimation className="flex flex-col items-center justify-center">
        <h3 className="text-pry-50 text-3xl font-bold text-center font-heading">
          Latest <span className="text-sec">News</span>
        </h3>
        <Paragraph
          color="pry-50"
          align="center"
          title="Here are some of things we have recently been up to at LogiQuick"
        />
      </FadeDownAnimation>
      <div className="flex lg:flex-row flex-col justify-between gap-4 lg:space-x-8 w-full">
        {blogData.map((data) => (
          <FadeUpAnimation className="flex flex-col items-center space-y-4  py-4 px-4 bg-pry-50 border-y-2 border-y-sec w-full lg:w-2/6">
            <div className="w-full h-64">
              <img
                src={urlFor(data.image && data.image)}
                className="h-full w-full"
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
          </FadeUpAnimation>
        ))}
      </div>
    </div>
  );
};

export default Blog;
