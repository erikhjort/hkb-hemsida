import React, { useState } from "react";
import Image from "next/image";
import redovisning from "../public/redovisning.webp";
import skatt from "../public/skatt.webp";
import arsredovisning from "../public/arsredovisning.webp";
import bolagsservice from "../public/bolagsservice.webp";
import radgivning from "../public/radgivning.webp";
import ovrigt from "../public/ovrigt.webp";

const Service = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <section
      id="service"
      className="h-[calc(100vh-3.5rem)] flex items-center lg:h-[calc(100vh-4rem)]"
    >
      <div className="flex flex-wrap">
        <div className="w-screen">
          <ul className="flex list-none flex-wrap " role="tablist">
            <li className="flex-auto text-center w-[calc(33.333333%-0.25rem)] lg:w-[calc(16.666667%-0.416666rem)]">
              <a
                className={
                  "flex justify-center items-center min-h-[8vh] px-2 " +
                  (openTab === 1
                    ? "text-hkbdarkmodetext bg-hkbred"
                    : "hover:bg-hkbgray dark:hover:bg-hkbgraydarkmode")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <h2>Redovisning & Bokföring</h2>
              </a>
            </li>
            <li className="my-auto w-1 h-1 lg:w-2 bg-hkbgray dark:bg-hkbgraydarkmode"></li>
            <li className="flex-auto text-center w-[calc(33.333333%-0.25rem)] lg:w-[calc(16.666667%-0.416666rem)]">
              <a
                className={
                  "flex justify-center items-center min-h-[8vh] px-2 " +
                  (openTab === 2
                    ? "text-hkbdarkmodetext bg-hkbred"
                    : "hover:bg-hkbgray dark:hover:bg-hkbgraydarkmode")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <h2>Skatt & Deklaration</h2>
              </a>
            </li>

            <li className=" my-auto w-1 h-1 lg:w-2 bg-hkbgray dark:bg-hkbgraydarkmode"></li>
            <li className="flex-auto text-center w-[calc(33.333333%-0.25rem)] lg:w-[calc(16.666667%-0.416666rem)]">
              <a
                className={
                  "flex justify-center items-center min-h-[8vh] px-2 " +
                  (openTab === 3
                    ? "text-hkbdarkmodetext bg-hkbred"
                    : "hover:bg-hkbgray dark:hover:bg-hkbgraydarkmode")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <h2>Årsredovisning & Bokslut</h2>
              </a>
            </li>

            <li className="hidden my-auto w-1 h-1 lg:flex lg:w-2 bg-hkbgray dark:bg-hkbgraydarkmode"></li>
            <li className="flex-auto text-center w-[calc(33.333333%-0.25rem)] lg:w-[calc(16.666667%-0.416666rem)]">
              <a
                className={
                  "flex justify-center items-center min-h-[8vh] px-2 " +
                  (openTab === 4
                    ? "text-hkbdarkmodetext bg-hkbred"
                    : "hover:bg-hkbgray dark:hover:bg-hkbgraydarkmode")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <h2>Bolags & Företagsservice</h2>
              </a>
            </li>

            <li className="my-auto w-1 h-1 lg:w-2 bg-hkbgray dark:bg-hkbgraydarkmode"></li>
            <li className="flex-auto text-center w-[calc(33.333333%-0.25rem)] lg:w-[calc(16.666667%-0.416666rem)]">
              <a
                className={
                  "flex justify-center items-center min-h-[8vh] px-2 " +
                  (openTab === 5
                    ? "text-hkbdarkmodetext bg-hkbred"
                    : "hover:bg-hkbgray dark:hover:bg-hkbgraydarkmode")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <h2>Rådgivning</h2>
              </a>
            </li>

            <li className="my-auto w-1 h-1 lg:w-2 bg-hkbgray dark:bg-hkbgraydarkmode"></li>
            <li className="text-center w-[calc(33.333333%-0.25rem)] lg:w-[calc(16.666667%-0.416666rem)]">
              <a
                className={
                  "flex justify-center items-center min-h-[8vh] px-2 " +
                  (openTab === 6
                    ? "text-hkbdarkmodetext bg-hkbred"
                    : "hover:bg-hkbgray dark:hover:bg-hkbgraydarkmode")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                <h2>Övriga tjänster</h2>
              </a>
            </li>
          </ul>
          <div className="flex justify-center w-full border-t">
            <div>
              <div className="tab-content tab-space px-6 pt-6 max-w-6xl min-h-[38vh] lg:min-h-[35vh]">
                <div
                  className={openTab === 1 ? "block sm:flex" : "hidden"}
                  id="link1"
                >
                  <div className="space-y-2">
                    <p>
                      Vi tillgodoser hela ditt behov av tjänster inom
                      redovisning och bokförings området. Du får alltid en
                      återkoppling och rapporter efter varje gång vi utfört ett
                      jobb för ditt företag.
                    </p>
                    <ul className="list-disc list-inside pl-5 font-medium text-hkbgraydarkmode dark:text-hkbgray text-base md:text-lg xl:text-xl">
                      <li>Löpande Bokföring</li>
                      <li>Momsdeklaration</li>
                      <li>Arbetsgivardeklaration</li>
                      <li>Löneadministration</li>
                      <li>Fakturering</li>
                      <li>Betalningsbevakning</li>
                      <li>Rot och Rut ansökan</li>
                    </ul>
                  </div>
                  <div className="hidden lg:flex">
                    <div className="relative h-40 w-40 md:h-56 md:w-56 lg:h-60 lg:w-60 xl:h-64 xl:w-64">
                      <Image src={redovisning} />
                    </div>
                  </div>
                </div>
                <div
                  className={openTab === 2 ? "block sm:flex " : "hidden"}
                  id="link2"
                >
                  <div className="space-y-2">
                    <p>
                      Vi har god kunskap inom skatteområdet och hjälper dig och
                      ditt företag att ta tillvara på alla möjligheter och inte
                      missar viktiga delar.
                    </p>
                    <ul className="list-disc list-inside pl-5 font-medium text-hkbgraydarkmode dark:text-hkbgray text-base md:text-lg xl:text-xl">
                      <li>Privat inkomsdeklaration</li>
                      <li>Bolagets inkomstdeklaration</li>
                      <li>Skatteplanering</li>
                    </ul>
                  </div>
                  <div className="hidden lg:flex">
                    <div className="relative lg:h-52 lg:w-52 xl:h-64 xl:w-64">
                      <Image src={skatt} />
                    </div>
                  </div>
                </div>
                <div
                  className={openTab === 3 ? "block sm:flex " : "hidden"}
                  id="link3"
                >
                  <div className="space-y-2">
                    <p>
                      Vi gör bokslut till enskild firma, årsbokslut och
                      årsredovisningar till aktiebolag och handelsbolag. Vi
                      säkerställer kvalitén och följer svensk lag i vårt arbete.
                      Om företaget är i behov av en extern revisor har vi
                      kontakter och förmedlar den tjänsten. Kriterier för en
                      extern revisor är om företagets två senaste räkneskapsår
                      når upp till två av nedanstående punkter:
                    </p>
                    <ul className="list-disc list-inside pl-5 font-medium text-hkbgraydarkmode dark:text-hkbgray text-base md:text-lg xl:text-xl">
                      <li>Fler än 3 anställda (i medtal)</li>
                      <li>Mer än 1,5 miljoner kronor i balansomslutning</li>
                      <li>Mer än 3 miljoner kronor i nettoomsättning</li>
                    </ul>
                  </div>
                  <div className="hidden lg:flex">
                    <div className="relative lg:h-52 lg:w-52 xl:h-64 xl:w-64">
                      <Image src={arsredovisning} />
                    </div>
                  </div>
                </div>
                <div
                  className={openTab === 4 ? "block sm:flex " : "hidden"}
                  id="link4"
                >
                  <div className="space-y-2">
                    <p>
                      Vi hjälper till med ändringar i ert befintliga företag, om
                      ni vill starta företag, avveckla, sälja eller överlåta
                      till någon annan. Vi har kompetens inom följande områden:
                    </p>
                    <ul className="list-disc list-inside pl-5 font-medium text-hkbgraydarkmode dark:text-hkbgray text-base md:text-lg xl:text-xl">
                      <li>Bolagsärenden</li>
                      <li>Bolagsbildning</li>
                      <li>Bolagsavveckling</li>
                      <li>Fusion</li>
                      <li>Aktiebok</li>
                      <li>Kapitalförändring</li>
                    </ul>
                  </div>
                  <div className="hidden lg:flex">
                    <div className="relative lg:h-52 lg:w-52 xl:h-64 xl:w-64">
                      <Image src={bolagsservice} />
                    </div>
                  </div>
                </div>
                <div
                  className={openTab === 5 ? "block sm:flex " : "hidden"}
                  id="link5"
                >
                  <div className="space-y-2">
                    <p>
                      Det dyker alltid upp frågor kring ert företag. Vi sätter
                      oss gärna ner och lyssnar och kommer med lösningar kring
                      följande:
                    </p>
                    <ul className="list-disc list-inside pl-5 font-medium text-hkbgraydarkmode dark:text-hkbgray text-base md:text-lg xl:text-xl">
                      <li>Ekonomiska frågeställningar</li>
                      <li>Personalfrågor</li>
                      <li>Olika avtal inom företaget</li>
                      <li>Budget</li>
                      <li>Analys och utredning</li>
                    </ul>
                  </div>
                  <div className="hidden lg:flex lg:items-center">
                    <div className="relative lg:h-52 lg:w-52 xl:h-64 xl:w-64">
                      <Image src={radgivning} />
                    </div>
                  </div>
                </div>
                <div
                  className={openTab === 6 ? "block sm:flex " : "hidden"}
                  id="link6"
                >
                  <div className="space-y-2">
                    <p>
                      Vi hjälper våra kunder i företagets och ägarnas olika
                      faser. Det kan vara händelser inom bolaget som gör att
                      ägarstrukturen ändras och hjälp behövs. Vi utför:
                    </p>
                    <ul className="list-disc list-inside pl-5 font-medium text-hkbgraydarkmode dark:text-hkbgray text-base md:text-lg xl:text-xl">
                      <li>Bolagsvärdering</li>
                      <li>Kompetensutveckling/utbildning</li>
                      <li>Generationsskiften</li>
                      <li>Bouppteckning</li>
                    </ul>
                  </div>
                  <div className="hidden lg:flex lg:items-center">
                    <div className="relative lg:h-52 lg:w-52 xl:h-64 xl:w-64">
                      <Image src={ovrigt} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
