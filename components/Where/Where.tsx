"use client";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import React from "react";
import DotExpandButton from "../Button/DotExpandButton";

const Where = () => {
  const [scale, setScale] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScale(0.5 + latest * 2);
  });
  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row gap-12 justify-center py-24 w-full relative overflow-hidden"
    >
      <div className="max-w-lg w-full flex flex-col gap-8 items-start justify-between">
        <h6 className="text-3xl font-bold">
          Hotel Bellotto <br />
          ul. Senatorska 13/15
          <br /> Warszawa
        </h6>
        <DotExpandButton>Dowiedz się więcej</DotExpandButton>
        <Image
          width={700}
          height={700}
          src="/assets/img/bellotto2.png"
          alt="Hotel Bellotto"
          className="w-full max-w-2xl h-[15rem] rounded-2xl object-cover"
        />
      </div>
      <Image
        width={1000}
        height={1000}
        src="/assets/img/bellotto1.png"
        alt="Hotel Bellotto"
        className="w-full max-w-lg aspect-square rounded-2xl object-cover"
      />
      <motion.div
        style={{ scaleY: scale }}
        className="absolute w-screen bottom-0 left-0 h-2/3 bg-gradient-to-br from-secondary to-accent z-[-1]"
      ></motion.div>
    </section>
  );
};

export default Where;
