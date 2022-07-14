import React from "react";
import Image from "next/image";
import postman from "../public/postman.webp";
import {
  AtSymbolIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-[calc(100vh-3.5rem)] px-5 max-w-6xl flex justify-center flex-col mx-auto lg:h-[calc(100vh-4rem)] "
    >
      <div>
        <div className="flex items-center mb-6 ">
          <div className="w-1/2 flex justify-center">
            <div className="relative mt-3 h-40 w-40 md:h-56 md:w-56 lg:h-60 lg:w-60 xl:h-64 xl:w-64">
              <Image objectFit="contain" src={postman} layout="fill" />
            </div>
          </div>
          <div className=" w-1/2 flex flex-col items-center my-auto ">
            <div>
              <h3>Öppettider</h3>
              <p>
                <span className="font-bold">Måndag - Fredag:</span> 08:00-16:00
              </p>
              <p>
                <span className="font-bold">Lördag - Söndag:</span> Stängt
              </p>
              <p>
                <span className="font-bold">Lunch:</span> 12:00-13:00
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:hidden gap-y-4">
          <div className="flex flex-col items-center w-1/2  space-y-1 ">
            <PhoneIcon className="h-6 w-6 md:h-7 md:w-7" />
            <p className="">070-650 38 56</p>
          </div>
          <div className="flex flex-col items-center w-1/2 space-y-1">
            <LocationMarkerIcon className="h-6 w-6 md:h-7 md:w-7" />
            <p className="">Hjortnäsvägen 5, 79331 Leksand</p>
          </div>

          <div className="flex flex-col  items-center w-1/2 space-y-1">
            <AtSymbolIcon className="h-6 w-6 md:h-7 md:w-7" />
            <a href="mailto:wh@hjortkonsultbyra.se">
              <p className="">wh@hjortkonsultbyra.se</p>
            </a>
          </div>
          <div className="flex flex-col  items-center w-1/2 space-y-1">
            <MailIcon className="h-6 w-6 md:h-7 md:w-7" />
            <a href="mailto:wh@hjortkonsultbyra.se">
              <p className="">Siljansvägen 21, 79331 Leksand</p>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-between ">
          <div className="flex flex-col items-center space-y-1">
            <PhoneIcon className="h-8 w-8" />
            <p className="">070-650 38 56</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <AtSymbolIcon className="h-8 w-8" />
            <a href="mailto:wh@hjortkonsultbyra.se">
              <p className="">wh@hjortkonsultbyra.se</p>
            </a>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <LocationMarkerIcon className="h-8 w-8" />
            <a href="https://www.google.com/maps/place/Hjortn%C3%A4sv%C3%A4gen+5,+793+31+Leksand/@60.7351257,14.9908269,17z/data=!3m1!4b1!4m5!3m4!1s0x466791121578186b:0x9a0e62b6f95ada5c!8m2!3d60.7351257!4d14.9908269">
              <p className="">Hjortnäsvägen 5, 79331 Leksand</p>
            </a>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <MailIcon className="h-8 w-8" />
            <p className="">Siljansvägen 21, 79331 Leksand</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
