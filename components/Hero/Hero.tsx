import Link from "next/link";
import React from "react";
import Blob from "./Blob";

const Hero = () => {
  return (
    <header
      className="h-screen p-4 py-24 relative pt-16 overflow-x-clip"
      id="home"
    >
      <div className="sm:w-1/2 lg:min-w-[40rem] flex flex-col items-start justify-end h-full sm:float-right text-4xl gap-2 font-semibold">
        <p>29.10.2024</p>
        <p className="mt-2">Hotel Bellotto,</p>
        <p>Warszawa</p>
        <Link
          href=""
          className="py-2 px-8 border-white border-2 rounded-full text-xl bg-white/10 hover:scale-105 duration-200 md:-translate-x-4 active:scale-100 hover:shadow-xl"
        >
          Kup Bilet
        </Link>
      </div>
      {/* blob 1 */}
      <div className="blob fill-white/40 blur-2xl top-2/3 lg:top-0 left-1/2 animated-blob1 z-[-1] w-64 lg:w-[40rem]">
        <Blob />
      </div>
      {/* blob 2 */}
      <div className="blob fill-secondary/50 blur-xl top-1/4 lg:top-0 left-1/2 animated-blob2 z-[-2] w-72 lg:w-[40rem]">
        <Blob />
      </div>
      {/* blob 3 */}
      <div className="blob fill-accent/40 blur-2xl top-[-50px] lg:top-0 left-1/2 animated-blob3 z-[-3] w-56 lg:w-[40rem]">
        <Blob />
      </div>
    </header>
  );
};

export default Hero;
