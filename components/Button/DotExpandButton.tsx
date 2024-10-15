import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DotExpandButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <a
      href="https://www.hotelbellotto.pl"
      target="_blank"
      className="group flex h-10 items-center gap-2 rounded-full bg-accent pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-primary hover:pl-2 hover:text-white"
    >
      <span className="rounded-full bg-primary p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-primary group-active:-rotate-45" />
      </span>
      <span>{children}</span>
    </a>
  );
};

export default DotExpandButton;
