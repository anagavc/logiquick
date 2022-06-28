import {
  Header,
  Services,
  About,
  Reviews,
  Team,
  TrackShipment,
  Blog,
  Contact,
} from "./components";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Services />
        <About />
        <Team />
        <Reviews />
        <TrackShipment />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
