"use client";
import React, { useEffect, useRef } from "react";
import Blob from "./Blob";
import { useAnimation, useInView } from "framer-motion";

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <header
      ref={ref}
      className="h-screen p-4 pt-24 relative overflow-x-clip flex flex-col gap-4 items-center justify-center"
      id="home"
    >
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
        Konferencja
      </h1>
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold pb-24">
        AI - media - branża kreatywna
      </h2>
      <div className="flex w-full">
        <div className="flex-1 w-full"></div>
        <div className="flex-1 w-full">
          <p className="text-xl lg:text-2xl xl:text-3xl font-semibold">
            29.10.2024 Hotel Bellotto, Warszawa
          </p>
        </div>
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
