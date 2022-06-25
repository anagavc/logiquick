import { Header, Services, About, Reviews, Team } from "./components";

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
      </main>
    </>
  );
}
