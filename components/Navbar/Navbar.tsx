"use client";
import Link from "next/link";
import "./hamburger.css";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const hamburger = useRef<HTMLInputElement>(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [visible, setVisible] = useState(false);
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

  const handleLinkClick = () => {
    setVisible(false);
    if (hamburger.current) {
      hamburger.current.checked = false;
    }
  };

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
          className="h-4 lg:h-6 w-auto object-contain"
        />
      </Link>
      <label className="flex lg:hidden z-50">
        <input
          ref={hamburger}
          type="checkbox"
          id="check"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={(e: any) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            e.target.checked ? setVisible(true) : setVisible(false);
          }}
          className="hidden"
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
      {/* mobile navigation */}
      <div
        onClick={handleLinkClick}
        className={`fixed top-0 right-0 h-screen w-screen bg-black pt-32 bg-opacity-90 border-l-2 border-white transition-all duration-1000 origin-right ease-in-out
        ${visible ? "scale-x-1" : "scale-x-0"}
      `}
      >
        <ul className="flex flex-col justify-center items-center gap-8 text-xl font-bold text-white">
          <li>
            <Link href="#about">O wydarzeniu</Link>
          </li>
          <li>
            <Link href="#speakers">Prelegenci</Link>
          </li>
          <li>
            <Link href="#agenda">Agenda</Link>
          </li>

          <li>
            <Link href="#pricing">Kup Bilet</Link>
          </li>
          <li className="w-48 border-b-2 border-white my-6"></li>
        </ul>
      </div>
      {/* desktop nav */}
      <ul className="hidden lg:flex gap-8 items-center font-[500] justify-center text-white">
        <li>
          <Link href="#about" className="hover:underline">
            O wydarzeniu
          </Link>
        </li>
        <li>
          <Link href="#speakers" className="hover:underline">
            Prelegenci
          </Link>
        </li>
        <li>
          <Link href="#agenda" className="hover:underline">
            Agenda
          </Link>
        </li>
        <li>
          <Link href="#pricing" className="hover:underline">
            Kup Bilet
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
