"use client";
import React, { useState } from "react";
import SpotlightButton from "../Button/SpotlightButton";
import AgendaElement from "./AgendaElement";

const Agenda = () => {
  const [agenda, setAgenda] = useState("konferencja");

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 max-w-6xl mx-auto my-12 p-4"
      id="agenda"
    >
      <h3 className="text-4xl font-bold">Agenda wydarzenia</h3>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <p className="text-lg text-neutral-400">*Agenda może ulec zmianie*</p>
      <div className="flex flex-col md:flex-row gap-12 w-full py-4">
        <div className="w-full" onClick={() => setAgenda("konferencja")}>
          <SpotlightButton index={0}>Część Konferencyjna</SpotlightButton>
        </div>
        <div className="w-full" onClick={() => setAgenda("warsztaty")}>
          <SpotlightButton index={1}>Warsztaty</SpotlightButton>
        </div>
      </div>
      <AgendaElement option={agenda} />
    </section>
  );
};

export default Agenda;
