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

export default function Home({ reviewsData }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Services />
        <About />
        <Team />
        <Reviews reviews={reviewsData.length && reviewsData} />
        <TrackShipment />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const reviewsQuery = '*[_type=="reviews"]';
  const reviewsData = await client.fetch(reviewsQuery);
  return {
    props: { reviewsData },
  };
};
