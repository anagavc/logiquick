import { client } from "../lib/client";
import {
  Header,
  Services,
  About,
  Reviews,
  Team,
  TrackShipment,
  Blog,
  Contact,
} from "../components";

export default function Home({ reviewsData, blogData, teamData }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Services />
        <About />
        <Team teamData={teamData.length && teamData} />
        <Reviews reviews={reviewsData.length && reviewsData} />
        <TrackShipment />
        <Blog blogData={blogData.length && blogData} />
        <Contact />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const reviewsQuery = '*[_type=="reviews"]';
  const reviewsData = await client.fetch(reviewsQuery);
  const blogData = await client.fetch(`*[_type=="blog"]`);
  const teamData = await client.fetch(`*[_type=="team"]`);
  return {
    props: { reviewsData, blogData, teamData },
  };
};
