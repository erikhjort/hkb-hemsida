import React from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const cookies = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-3.5rem)] flex flex-col max-w-3xl mx-auto justify-center space-y-5 lg:h-[calc(100vh-4rem)]">
        <div className="space-y-1">
          <h1>Cookies</h1>
          <p>
            Vi använder cookies för att förbättra din upplevelse på
            hjortkonsultbyra.se. En cookie är en liten textfil som skickas från
            en webbserver till en webbläsare. Denna cookie möjliggör att
            webbplatsen eller webbservern kan samla och spara specifik, men
            begränsad, information från webbläsaren om hur du använder den. När
            du besöker vår webbplats kan vi komma att skicka, och lagra en
            cookie på din dator, surfplatta eller mobiltelefon.
          </p>
        </div>

        <h3 className="underline">Varför vi använder cookies</h3>
        <div className="space-y-1">
          <h2>Sessionscookies</h2>
          <p>
            Den här webbplatsen använder sig av sessioncookies för att hålla
            reda på användaren under besöket på hemsidan. Denna cookie
            försvinner så fort användaren lämnar webbplatsen och stänger ner
            webbläsaren. Session-cookies innehåller ingen information om din
            dator, IP-adress eller personuppgifter. Om du inte vill använda
            cookies kan du stänga av cookies i webbläsarens inställningar.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default cookies;
