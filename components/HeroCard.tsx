import Image from "next/image";
import React from "react";

function HeroCard() {
  return (
    <div className="relative flex flex-1 items-start hidden sm:block">
      <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-gray-900 px-7 py-8">
        <div className="flex flex-col ">
          <div className="flexBetween">
            <p className="regular-16 text-gray-200">Location</p>
            <Image src="/close.svg" alt="close button" width={24} height={24} />
          </div>
          <p className="bold-20 text-white">Aguas Clientas</p>
        </div>
        <div className="flexBetween">
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-200">Distance</p>
            <p className="bold-20 text-white">178.3 Miles</p>
          </div>
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-200">Elevation</p>
            <p className="bold-20 text-white">2.040 km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
