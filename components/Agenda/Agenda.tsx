"use client";
import React, { useState } from "react";
import AgendaElement from "./AgendaElement";

const Agenda = () => {
  const [agenda, setAgenda] = useState("konferencja");

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 max-w-6xl mx-auto my-12 p-4"
      id="agenda"
    >
      <p className="uppercase text-lg px-6 py-2 w-fit rounded-full border-2 border-white ">
        agenda
      </p>
      <h3 className="text-4xl font-bold">Agenda Konferencji</h3>
      <div className="flex flex-col md:flex-row gap-12 w-full py-4">
        <button
          onClick={() => setAgenda("konferencja")}
          className="flex w-full text-center justify-center rounded-xl px-6 items-center gap-4 p-2 font-semibold text-xl text-white duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20"
        >
          Panele
          <div
            className={`absolute w-full h-full bottom-0 right-0 bg-gradient-to-r from-primary to-primary/0  ${agenda === "konferencja" ? "translate-x-0 " : "translate-x-[-110%]"} transition-transform duration-700 z-[-1]`}
          />
          <div className="absolute inset-0 bg-secondary z-[-2]" />
        </button>
        <button
          onClick={() => setAgenda("warsztaty")}
          className="flex w-full text-center justify-center rounded-xl px-6 items-center gap-4 p-2 font-semibold text-xl text-white duration-300 transition-transform active:scale-90 relative overflow-hidden group z-20"
        >
          Warsztaty
          <div
            className={`absolute w-full h-full bottom-0 right-0 bg-gradient-to-r from-primary to-primary/0  ${agenda === "warsztaty" ? "translate-x-0" : "translate-x-[-110%]"} transition-transform duration-700 z-[-1]`}
          />
          <div className="absolute inset-0 bg-accent z-[-2]" />
        </button>
      </div>
      <AgendaElement option={agenda} />
    </section>
  );
};

export default Agenda;
