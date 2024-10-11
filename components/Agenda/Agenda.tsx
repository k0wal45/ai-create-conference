"use client";
import React, { useState } from "react";
import SpotlightButton from "../Button/SpotlightButton";
import SalaKolumnowa from "./SalaKolumnowa";
import SalaMalinowa from "./SalaMalinowa";

const returnAgenda = (num: number) => {
  if (num === 1) {
    return <SalaKolumnowa />;
  } else if (num === 2) {
    return <SalaMalinowa />;
  }

  return <h4 className="text-4xl font-bold">Wybierz salę</h4>;
};

const Agenda = () => {
  const [agenda, setAgenda] = useState(1);

  return (
    <section className="flex flex-col items-center justify-center gap-4 max-w-6xl mx-auto my-12 p-4">
      <h3 className="text-4xl font-bold">Agenda wydarzenia</h3>
      <div className="flex flex-col md:flex-row gap-12 w-full py-4">
        <div className="w-full" onClick={() => setAgenda(1)}>
          <SpotlightButton>Część Konferencyjna</SpotlightButton>
        </div>
        <div className="w-full" onClick={() => setAgenda(2)}>
          <SpotlightButton>Warsztaty</SpotlightButton>
        </div>
      </div>
      {returnAgenda(agenda)}
    </section>
  );
};

export default Agenda;
