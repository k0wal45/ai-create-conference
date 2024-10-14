"use client";
import Image from "next/image";
import React, { useState } from "react";
import AllSpeakersOverlay from "./AllSpeakersOverlay";

// Define the Speaker type
interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  img: string;
}

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

// Define the speakersData array using the Speaker type
const speakersData: Speaker[] = [
  {
    id: 1,
    name: "Radosław Komuda",
    title: "Założyciel",
    company: "Laboratorium Etyki Cyfrowej “DERL”",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis tempore voluptatum dicta autem odio, voluptatibus sed architecto dignissimos commodi itaque possimus impedit nam incidunt tenetur maiores sunt ratione mollitia molestiae.",
    img: "1_Radosław Komuda - profilowe.jpeg",
  },
  {
    id: 2,
    name: "Karolina Wilamowska",
    title: "Partnerka Zarządzająca",
    company: "Wilamowscy Adwokaci",
    bio: "",
    img: "2 Karolina Wilamowska.jpeg",
  },
  {
    id: 3,
    name: "Dr Ewa Chamczyk",
    title: "Co-founder & Head of AI Books",
    company: "CampusAI",
    bio: "",
    img: "3 Ewa Chamczyk Zdjęcie.jpg",
  },
  {
    id: 4,
    name: "Emilia Florek",
    title: "Radczyni prawna",
    company: "LegalLab",
    bio: "",
    img: "4 Emilia Florek Zdjęcie.jpg",
  },
  {
    id: 5,
    name: "Justyna Masalska",
    title: "Music Publishing & Project Manager",
    company: "Wytwórnia SAYHi",
    bio: "",
    img: "5 Justyna Masalska Zdjęcie.jpg",
  },
  {
    id: 6,
    name: "Milena Rzemieniak",
    title: "Prezes Zarządu",
    company: "Fundacja Lubię Poniedziałki",
    bio: "",
    img: "6 Milena Rzemieniak Kielin Zdjęcie.jpg",
  },
  {
    id: 7,
    name: "Ania Proch",
    title: "CEO",
    company: "DP Vision",
    bio: "",
    img: "7 Ania Proch.jpg",
  },
  {
    id: 8,
    name: "Alicja Szydłowska",
    title: "**********",
    company: "**********",
    bio: "",
    img: "8 Alicja Szydłowska.jpg",
  },
  {
    id: 9,
    name: "dr inż. Ewelina Bartuzi-Trokielewicz",
    title: "**********",
    company: "**********",
    bio: "",
    img: "9 Ewelina Bartuzi-Trokielewicz.jpg",
  },
  {
    id: 10,
    name: "Dawid Pawlicki",
    title: "**********",
    company: "mimo.ooo",
    bio: "",
    img: "10 Dawid Pawlicki Portret DPA.jpg",
  },
  {
    id: 11,
    name: "Jeremiasz Krok",
    title: "specjalista ds. sztucznej inteligencji",
    company: "Kaizen Ads",
    bio: "",
    img: "11 jeremiasz krok profilowe.jpg",
  },
];
