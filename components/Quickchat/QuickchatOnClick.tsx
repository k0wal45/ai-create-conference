"use client";
import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import Quickchat from "./Quickchat";

const QuickchatOnClick = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className=" p-4 bg-secondary rounded-full fixed bottom-4 md:bottom-12 right-4 md:right-12 z-30 group"
      onClick={() => setVisible(!visible)}
    >
      <div className="group-hover:scale-125 group-active:scale-75 duration-300">
        <FaMessage />
      </div>
      <Quickchat visible={visible} />
    </div>
  );
};

export default QuickchatOnClick;
