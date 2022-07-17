import Head from "next/head";
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
          content="Redovisning | Bokföring | Skatt | Deklaration "
        />
      </Head>
      <main>
        <Landing />
        <About />
        <Service />
        <Contact />
      </main>
    </>
  );
}
