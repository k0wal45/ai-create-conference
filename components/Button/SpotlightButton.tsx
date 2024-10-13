"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLElement)?.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current!.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current!.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef?.current?.addEventListener("mousemove", handleMouseMove);
    btnRef?.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener("mousemove", handleMouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      btnRef?.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={`relative w-full overflow-hidden rounded-lg ${index ? "bg-secondary" : "bg-accent"} px-4 py-3 text-xl font-semibold`}
    >
      <span className="pointer-events-none relative z-10">{children}</span>
      <span
        ref={spanRef}
        className={`pointer-events-none absolute left-[50%] top-[50%] h-32 w-72 -translate-x-[50%] -translate-y-[50%] rounded-full ${!index ? "bg-secondary" : "bg-primary"}`}
      />
    </motion.button>
  );
};

export default SpotlightButton;
