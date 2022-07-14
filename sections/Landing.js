import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import stol from "../public/stol.png";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 90;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <section
      id="home"
      className="h-[calc(100vh-3.5rem)] text-center w-screen lg:h-[calc(100vh-4rem)] "
    >
      <div className="h-full mx-auto flex flex-col justify-center items-center">
        <div className="px-5 space-y-1">
          <h1>Redovisnings & konsultbyrå</h1>
          <p className="pb-3 font-bold">
            Vi tar hand om ditt företags ekonomi så att du kan fokusera på det
            du gör bäst
          </p>
        </div>
        <div className="relative h-40 w-40 md:h-56 md:w-56 lg:h-60 lg:w-60 xl:h-64 xl:w-64">
          <Image
            objectFit="contain"
            src={stol}
            className={` transition duration-1000  ${
              isReady ? "scale-100  " : "scale-120 "
            }`}
            onLoadingComplete={onLoadCallback}
            layout="fill"
            priority="true"
          />
        </div>
        <div className="absolute bottom-6">
          <ChevronDownIcon
            className={isVisible ? "h-8 w-8 animate-bounce" : "hidden"}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
