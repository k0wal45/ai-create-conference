"use client";
import Image from "next/image";
import React, { useState } from "react";
import AllSpeakersOverlay from "./AllSpeakersOverlay";
import { Speaker, speakersData } from "./SpeakersData";

// Define the Speaker type

const AllSpeakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null); // Use Speaker type or null

  const handleOnClick = (id: number) => {
    const filteredSpeaker = speakersData.find((speaker) => id === speaker.id);

    if (!filteredSpeaker) {
      console.log("Speaker not found");
      return;
    }

    setSelectedSpeaker(filteredSpeaker); // Set the clicked speaker in state to show overlay
    console.log(filteredSpeaker);
  };

  const handleCloseOverlay = () => {
    setSelectedSpeaker(null); // Clear the selected speaker to close the overlay
  };

  return (
    <section
      className="p-4 lg:p-12 flex flex-col gap-12 text-white"
      id="speakers"
    >
      <p className="text-lg px-6 py-2 w-fit rounded-full border-2 border-white ">
        PRELEGENCI
      </p>
      <div className="flex flex-wrap gap-16 items-start justify-center">
        {speakersData.map((speaker: Speaker, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center text-center w-56"
            onClick={() => handleOnClick(speaker.id)}
          >
            <Image
              width={300}
              height={300}
              src={"/assets/img/speakers/" + speaker.img}
              alt={speaker.name}
              className="aspect-square object-cover object-top"
            />
            <p className="text-xl px-4 pt-4">{speaker.name}</p>
            <p className="text-sm font-light px-4">{speaker.title}</p>
            <p className="px-4">{speaker.company}</p>
          </div>
        ))}
      </div>
      <div></div>

      {/* Conditionally render the overlay if a speaker is selected */}
      {selectedSpeaker && (
        <AllSpeakersOverlay
          speaker={selectedSpeaker}
          onClose={handleCloseOverlay}
        />
      )}
    </section>
  );
};

export default AllSpeakers;
