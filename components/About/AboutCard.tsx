"use client";
import { animate, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const AboutCard = ({
  num,
  index,
  suffix = "",
  text,
  img,
}: {
  num: number;
  index: number;
  suffix: string | undefined;
  text: string;
  img: string;
}) => {
  return (
    <div className="border-2 border-black rounded-2xl p-4 flex flex-col gap-16 py-36 items-center justify-center duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20 text-white text-center shadow-lg">
      <Stat num={num} index={index} suffix={suffix} />
      <p className="text-3xl font-semibold">{text}</p>
      {/* hover */}
      <div className="absolute w-full h-1/2 top-0 left-0 bg-gradient-to-r from-neutral-400/30 to-neutral-200/30 translate-x-[-110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
      <div className="absolute w-full h-1/2 bottom-0 right-0 bg-gradient-to-r from-neutral-400/30 to-neutral-200/30 translate-x-[110%] group-hover:translate-x-[0%] transition-transform duration-700 z-[-1]" />
      <div className="absolute group-even:bg-primary/40 bg-secondary/40 inset-0 z-[-2]"></div>
      <Image
        width={500}
        height={700}
        src={img}
        alt="Zdjęcia z konferencji"
        className="absolute inset-0 z-[-3] object-cover size-full "
      />
    </div>
  );
};

export default AboutCard;

const Stat = ({
  num,
  index,
  suffix,
}: {
  num: number;
  suffix: string | undefined;
  index: number;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      delay: 0.2 * index,
      duration: 1.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(0);
      },
    });
  }, [num, index, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
    </div>
  );
};
