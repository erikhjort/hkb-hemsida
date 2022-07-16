import React from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const gdpr = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col max-w-3xl mx-auto justify-center space-y-5 py-56 px-5 lg:px-0">
        <div className="space-y-1">
          <h1>GDPR</h1>
          <p>
            Den allmänna dataskyddsförordningen (GDPR) är en rättslig ram som
            anger riktlinjer för insamling och behandling av personuppgifter
            från individer som bor i Europeiska unionen (EU). Eftersom
            förordningen gäller oavsett var webbplatser är baserade, måste den
            beaktas av alla webbplatser som lockar europeiska besökare, även om
            de inte specifikt marknadsför varor eller tjänster till EU-invånare.
            GDPR kräver att EU-besökare ska lämnas ut ett antal uppgifter.
            Webbplatsen måste också vidta åtgärder för att underlätta sådana
            EU-konsumenträttigheter som ett snabbt meddelande i händelse av
            intrång i personuppgifter. Förordningen antogs i april 2016 och
            trädde i full effekt i maj 2018, efter en tvåårig övergångsperiod.
          </p>
        </div>

        <h3 className="underline">Behandling av personuppgifter</h3>
        <div className="space-y-1">
          <h2>
            Vad är en personuppgift och vad är behandling av personuppgifter?
          </h2>
          <p>
            En personuppgift är varje upplysning som avser en identifierad eller
            identifierbar fysisk person som är i livet, t.ex. kontaktuppgifter,
            personnummer, org. nr för enskild firma, fastighetsbeteckning,
            kundnummer och fotografier där personer går att känna igen. Det är
            enbart uppgifter om fysiska personer som är personuppgifter. För
            juridiska personer är organisationsnumret inte en personuppgift.
            Uppgifter om anställda och styrelseledamöter är däremot
            personuppgifter. Behandling av personuppgifter är i princip all
            hantering av personuppgifter, oberoende av om den utförs
            automatiserat eller ej. Exempel på vanliga behandlingar är
            insamling, registrering, organisering, strukturering, lagring,
            bearbetning, överföring och radering.
          </p>
        </div>
        <div className="space-y-1">
          <h2>Hur vi samlar in personuppgifter</h2>
          <p>
            De personuppgifter vi samlar in kommer normalt direkt från dig eller
            generas i samband med att du använder våra tjänster. Ibland krävs
            ytterligare information för att hålla uppgifterna aktuella eller
            kontrollera att uppgifterna vi har samlat in är korrekta. Vi kan
            även komma att samla in personuppgifter om dig som kund via publikt
            tillgängliga personuppgifter som t.ex. kontaktuppgifter,
            personnummer och betalningsanmärkningar, via bland annat
            Transportstyrelsen och andra samarbetspartners. Med ditt medgivande
            kan vi även samla in uppgifter som kan innehålla personuppgifter
            från t.ex. banker, Skatteverket och Klarna.
          </p>
        </div>
        <div className="space-y-1">
          <h2>Vilka personuppgifter vi behandlar</h2>
          <p>
            För dig som är kund är de typer av personuppgifter vi har samlat in
            kopplat till den tjänst vi utför, t.ex. namn, titel,
            kontaktuppgifter, arbetsplats, personnummer (tillika org.nr för
            enskild firma), fastighetsbeteckning/innehav, registrerade bilar,
            skatteuppgifter och andra ekonomiska uppgifter,
            betalningsinformation, kontonummer och kontoinformation och
            faktureringsuppgifter. Det kan även vara information om vilka
            tjänster du har och hur du använder dem, beställningar, användar-id,
            lösenord och annan information som du har lämnat vid dina kontakter
            med oss. Vidare kan vi komma att behandla uppgift om kund eller
            närstående eller känd medarbetare till denne är person i politisk
            utsatt ställning och namn och yrke/position för sådan politiskt
            utsatt person.
            <br /> Vi behandlar också uppgifter om andra personer som är
            aktuella inom ramen för våra uppdrag. Dessa personer kan vara
            konsulter, sakkunniga, anställda hos bolag som förvärvas eller
            säljs, avtalsparter eller liknande.
          </p>
        </div>
        <div className="space-y-1">
          <h2>Vem ansvarar för de personuppgifter vi samlar in?</h2>
          <p>Personuppgiftsansvarig är Hjort Konsultbyrå AB, 556585-1853.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default gdpr;
