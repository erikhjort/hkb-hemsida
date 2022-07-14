import Head from "next/head";
import Header from "../sections/Header";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Service from "../sections/Service";
import Landing from "../sections/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hjort Konsultbyrå </title>
        <meta
          name="description"
          content="Redovisning | Bokföring | Skatt | Deklaration"
        />
      </Head>
      <main>
        <Header />
        <Landing />
        <About />
        <Service />
        <Contact />
      </main>
    </>
  );
}
