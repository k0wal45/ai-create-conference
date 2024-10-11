"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const { scrollY } = useScroll();
  const [onTop, setOnTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 50) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  });

  return (
    <a
      href="#home"
      className={`fixed bottom-12 right-12 bg-white border-4 border-secondary border-dashed rounded-full p-2 text-xl text-black z-50 duration-300 ${
        onTop ? "translate-x-[100px]" : "translate-x-0"
      } hover:p-[0.7rem] active:scale-90`}
    >
      <FaArrowUp />
    </a>
  );
};

export default ScrollToTopButton;
