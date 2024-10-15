"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Quote = ({
  children,
  index,
}: {
  children: React.ReactNode;
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
        [&:nth-child(6)]:bg-secondary"
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
        className="flex flex-col justify-start h-full px-8 py-12 gap-12"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Quote;
