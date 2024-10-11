"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [onTop, setOnTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() as number;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 50) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={` ${
        onTop ? "bg-transparent" : "bg-background"
      } fixed top-0 left-0 w-full px-4 z-4 flex justify-between items-center z-40 pr-8 transition-all duration-700`}
    >
      <Link
        href="#home"
        className="flex justify-center items-center p-4 gap-4 z-30 font-bold"
      >
        <Image
          width={500}
          height={100}
          src="/assets/img/aiCreate.png"
          alt="aI Create logo"
          className="h-4 md:h-6 lg:h-8 w-auto object-contain"
        />
      </Link>

      <ul className="flex gap-8 items-center font-[600] text-lg justify-center">
        <li>
          <Link
            href="/"
            className="hover:underline active:text-primary transition-colors duration-100"
          >
            Zakladki
          </Link>
        </li>
      </ul>

      <div
        className={` ${
          onTop ? "hidden" : "absolute"
        } bottom-0 left-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent w-full h-[1px]`}
      ></div>
    </motion.nav>
  );
};

export default Navbar;
