"use client";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _quickchat_embedded: any;
  }
}

const Quickchat = ({ visible }: { visible: boolean }) => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://widget.quickchat.ai/embed.js";
  //   script.async = true;

  //   // Inicjalizacja widżetu po załadowaniu skryptu
  //   script.onload = () => {
  //     if (typeof window._quickchat_embedded === "function") {
  //       window._quickchat_embedded("host", "app.quickchat.ai");
  //       window._quickchat_embedded("init", "APIKEY");
  //     } else {
  //       console.error("Skrypt QuickChat nie został załadowany prawidłowo.");
  //     }
  //   };

  //   // Wstawiamy skrypt do body
  //   document.body.appendChild(script);

  //   // Cleanup script on component unmount
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div
      className={`absolute bottom-[3.2rem] right-4 md:right-12 bg-secondary border-white border-4 p-4 text-black rounded-xl overflow-hidden origin-bottom-right ${visible ? "scale-100" : "scale-0"} duration-500`}
    >
      {/* <div id="quickchat-embedded" className=" w-72 h-[25rem]"></div> */}
      here should be quickchat but it was turned off
    </div>
  );
};

export default Quickchat;
