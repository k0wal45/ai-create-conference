"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const Quote = ({
  quote,
  view,
  index,
}: {
  quote: {
    img: string;
    quote: string;
    name: string;
    title: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  view: any;
  index: number;
}) => {
  const isInView = useInView(view, { once: true, amount: 0.2 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
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
      className="overflow-hidden rounded-xl flex flex-col bg-primary
        [&:nth-child(1)]:bg-primary 
        [&:nth-child(2)]:bg-secondary [&:nth-child(2)]:flex-col-reverse
        [&:nth-child(3)]:bg-neutral-200 [&:nth-child(3)]:text-black 
        [&:nth-child(4)]:bg-accent 
        [&:nth-child(5)]:bg-primary
        [&:nth-child(6)]:bg-secondary [&:nth-child(6)]:flex-col-reverse
          "
    >
      <Image
        width={400}
        height={300}
        src={quote.img}
        alt={quote.name}
        className="aspect-video w-full object-cover "
      />
      <div className="flex flex-col gap-4 p-8 py-12">
        <p className="text-2xl font-medium">&quot;{quote.quote}&quot;</p>
        <p className="text-xl font-medium">
          {quote.name + " "} <span className="font-light">{quote.title}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Quote;
