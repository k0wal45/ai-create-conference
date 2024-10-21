"use client";
import { useEffect } from "react";

const Quickchat = ({ visible }: { visible: boolean }) => {
  useEffect(() => {
    // Tworzymy element script
    const script = document.createElement("script");
    script.src = "https://widget.quickchat.ai/embed.js";
    script.async = true;

    // Wstawiamy skrypt do body
    document.body.appendChild(script);

    // Inicjalizacja widżetu po załadowaniu skryptu
    script.onload = () => {
      _quickchat_embedded("host", "app.quickchat.ai");
      _quickchat_embedded("init", "jqgudqmxnq");
    };

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`absolute bottom-[3.2rem] right-4 md:right-12 bg-white rounded-xl overflow-hidden origin-bottom-right ${visible ? "scale-100" : "scale-0"} duration-500`}
    >
      <div id="quickchat-embedded" className=" w-72 h-[25rem]"></div>
    </div>
  );
};

export default Quickchat;
