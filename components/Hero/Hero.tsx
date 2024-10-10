import Link from "next/link";
import React from "react";
import Blob from "./Blob";

const Hero = () => {
  return (
    <header className="h-screen p-4 lg:py-24 pt-16 relative w-full overflow-hidden">
      <div className="sm:w-1/2 lg:min-w-[40rem] flex flex-col items-start justify-end h-full sm:float-right text-4xl gap-2 font-semibold">
        <p>29.10.2024</p>
        <p className="mt-2">Hotel Bellotto,</p>
        <p>Warszawa</p>
        <Link
          href=""
          className="py-2 px-8 border-black border-2 rounded-full text-xl bg-white/10 hover:scale-105 duration-200 md:-translate-x-4"
        >
          Kup Bilet
        </Link>
      </div>
      <Blob />
    </header>
  );
};

export default Hero;
