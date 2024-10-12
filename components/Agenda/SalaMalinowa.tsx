import React, { Fragment } from "react";
import { FaCircle } from "react-icons/fa";
import OpacityOnScroll from "../OpacityOnScroll";

const STOP_CLASSES = `w-full px-6 py-4 text-white rounded-full text-center text-3xl font-bold relative flex items-center justify-between text-2xl`;

const SalaMalinowa = () => {
  return (
    <Fragment>
      {/* spliter */}
      <div className={STOP_CLASSES + " bg-secondary"}>
        <FaCircle className="text-sm" />
        Warsztaty
        <FaCircle className="text-sm" />
      </div>
      <OpacityOnScroll>
        <p className="text-3xl">10.00 – 12.30 Warsztaty Eleven Labs</p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p className="text-3xl">
          14.00 – 15.00 QuickChat.AI warsztaty – agenci AI
        </p>
      </OpacityOnScroll>
    </Fragment>
  );
};

export default SalaMalinowa;
