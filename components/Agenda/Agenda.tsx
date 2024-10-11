import React from "react";
import { FaCircle } from "react-icons/fa";

const STOP_CLASSES = `w-full px-6 py-4 text-white rounded-full text-center text-3xl font-bold relative flex items-center justify-between text-2xl`;

const Agenda = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 max-w-6xl mx-auto my-12">
      {/* spliter */}
      <div className={STOP_CLASSES + " bg-primary"}>
        <FaCircle className="text-sm" />
        Agenda wydarzenia
        <FaCircle className="text-sm" />
      </div>
      <p>9.30 – 9.40 – Przywitanie</p>
    </section>
  );
};

export default Agenda;
