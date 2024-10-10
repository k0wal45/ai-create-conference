import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <header className="h-screen p-4 lg:py-24 pt-16 w-full">
      <div className="sm:w-1/2 lg:min-w-[40rem] flex flex-col items-start justify-end h-full sm:float-right text-4xl gap-2 font-semibold">
        <p>29.10.2024</p>
        <p>Hotel Bellotto, Warszawa</p>
        <Link href="" className="">
          Kup Bilet
        </Link>
      </div>
    </header>
  );
};

export default Hero;
