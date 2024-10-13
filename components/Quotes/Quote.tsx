"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Quote = ({
  quote,
  index,
}: {
  quote: {
    img: string;
    quote: string;
    name: string;
    title: string;
  };
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl bg-primary group
      [&:nth-child(1)]:bg-primary 
      [&:nth-child(2)]:bg-secondary 
      [&:nth-child(3)]:bg-neutral-200 [&:nth-child(3)]:text-black 
        [&:nth-child(4)]:bg-accent 
        [&:nth-child(5)]:bg-primary
        [&:nth-child(6)]:bg-secondary [&:nth-child(6)]:flex-col-reverse"
    >
      <motion.div
        variants={{
          hidden: {
            clipPath: "polygon(0 100%, 0 100%, 100% 100%, 0 100%)",
          },
          visible: {
            clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duation: 2, delay: 0.2 + index / 6 }}
        className="flex flex-col-reverse justify-between lg:group-[&:nth-child(2)]:flex-col h-full"
      >
        <Image
          width={400}
          height={300}
          src={quote.img}
          alt={quote.name}
          className="aspect-video w-full object-cover"
        />
        <div className="flex flex-col gap-4 p-8">
          <p className="text-xl font-medium">&quot;{quote.quote}&quot;</p>
          <p className="text-lg font-medium">
            {quote.name + " "} <span className="font-light">{quote.title}</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Quote;
