"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Blob from "./Blob";
import { motion, useAnimation, useInView } from "framer-motion";

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
      className="h-screen p-4 py-24 relative pt-16 overflow-x-clip"
      id="home"
    >
      <div className="sm:w-1/2 lg:min-w-[40rem] flex flex-col items-start justify-end h-full sm:float-right text-4xl gap-2 font-semibold">
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              rotate: "60deg",
              x: -60,
              y: 60,
            },
            visible: {
              opacity: 1,
              rotate: 0,
              x: 0,
              y: 0,
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duation: 1, delay: 0.3, ease: "easeOut" }}
          className="origin-bottom-left"
        >
          29.10.2024
        </motion.p>
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              rotate: "60deg",
              x: -60,
              y: 60,
            },
            visible: {
              opacity: 1,
              rotate: 0,
              x: 0,
              y: 0,
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duation: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-2 origin-bottom-left"
        >
          Hotel Bellotto,
        </motion.p>
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              rotate: "60deg",
              x: -60,
              y: 60,
            },
            visible: {
              opacity: 1,
              rotate: 0,
              x: 0,
              y: 0,
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duation: 1, delay: 0.7, ease: "easeOut" }}
          className="origin-bottom-left"
        >
          Warszawa
        </motion.p>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              rotate: "60deg",
              x: -60,
              y: 60,
            },
            visible: {
              opacity: 1,
              rotate: 0,
              x: 0,
              y: 0,
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duation: 1, delay: 0.9, ease: "easeOut" }}
          className="origin-bottom-left"
        >
          <Link
            href=""
            className="py-2 px-8 border-white border-2 rounded-full text-xl bg-white/10 hover:scale-105 duration-200 md:-translate-x-4 active:scale-100 hover:shadow-xl"
          >
            Kup Bilet
          </Link>
        </motion.div>
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
