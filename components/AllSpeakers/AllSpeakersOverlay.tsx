import Image from "next/image";
import React from "react";

// Define the type for props
interface AllSpeakersOverlayProps {
  speaker: {
    id: number;
    name: string;
    title: string;
    company: string;
    bio: string;
    img: string;
  };
  onClose: () => void; // Function to close the overlay
}

const AllSpeakersOverlay: React.FC<AllSpeakersOverlayProps> = ({
  speaker,
  onClose,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-white/50 flex items-center justify-center text-black p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-[30rem] flex flex-col items-center max-h-screen overflow-y-scroll">
        <Image
          width={300}
          height={300}
          src={"/assets/img/speakers/" + speaker.img}
          alt={speaker.name}
          className="aspect-square object-cover object-top rounded-xl"
        />
        <h2 className="text-2xl my-4">{speaker.name}</h2>
        <p className="text-lg">{speaker.title}</p>
        <p>{speaker.company}</p>
        <p>{speaker.bio}</p>
        <button
          onClick={onClose} // Use onClose to remove the overlay
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:scale-105 active:scale-95 duration-200"
        >
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default AllSpeakersOverlay;
