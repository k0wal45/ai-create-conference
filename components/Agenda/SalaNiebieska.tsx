import React, { Fragment } from "react";
import { FaCircle } from "react-icons/fa";

const STOP_CLASSES = `w-full px-6 py-4 text-white rounded-full text-center text-3xl font-bold relative flex items-center justify-between text-2xl`;

const SalaNiebieska = () => {
  return (
    <Fragment>
      {/* spliter */}
      <div className={STOP_CLASSES + " bg-blue-600"}>
        <FaCircle className="text-sm" />
        Stoiska
        <FaCircle className="text-sm" />
      </div>
      <p className="text-3xl mt-6">hAI Magazine</p>
      <div className="w-36 h-[1px] bg-white"></div>
      <p className="text-3xl">QuickChat AI</p>
      <div className="w-36 h-[1px] bg-white"></div>
      <p className="text-3xl">Accorp</p>
    </Fragment>
  );
};

export default SalaNiebieska;
