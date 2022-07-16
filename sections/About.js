import React from "react";
import Image from "next/image";
import qmark from "../public/qmark.webp";

const About = () => {
  return (
    <section
      id="about"
      className="h-[calc(100vh-3.5rem)] flex flex-col px-5 max-w-6xl mx-auto justify-center lg:h-[calc(100vh-4rem)]"
    >
      <div className="flex flex-col space-y-1 md:pb-6">
        <h3 className="">Spara tid</h3>
        <p className="text-left ">
          Att sköta den löpande redovisningen själv kan vara både tidskrävande,
          svårt och dyrt. Ge istället ditt företag chansen att växa och
          utvecklas genom att frigöra tid och resurser till din kärnverksamhet.
          Det är inte bara den löpande redovisningen som kräver tid, det uppstår
          ibland olika frågeställningar kring företagets ekonomi, personal och
          ägarna som ska lösas. Vi har lång erfarenhet så du kan tryggt överlåta
          de delar till oss.
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:w-1/2 md:flex md:justify-center">
          <div className="relative mt-3 h-40 w-40 md:h-56 md:w-56 lg:h-60 lg:w-60 xl:h-64 xl:w-64">
            <Image src={qmark} />
          </div>
        </div>
        <div className=" space-y-1  md:w-1/2">
          <h3 className="">Det vi gör</h3>
          <p className="text-left ">
            Vi biträder externa uppdragsgivare med redovisningstjänster,
            rådgivning, bokslut och årsredovisning. Arbetsuppgifterna kan
            variera från att biträda en mindre organisation med delar av
            bokföringen eller till att helt sköta all löpande redovisning, göra
            årsbokslut, deklaration, årsredovisning och upprätthålla kontakter
            med myndigheter. Vi hjälper även med att starta och avveckla företag
            samt överlåtelser mm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
