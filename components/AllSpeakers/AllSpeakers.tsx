import Image from "next/image";
import React from "react";

const AllSpeakers = () => {
  return (
    <section className="p-4 lg:p-12 flex flex-col gap-12">
      <p className="text-lg px-6 py-2 w-fit rounded-full border-2 border-black">
        PRELEGENCI
      </p>
      <div className="flex flex-wrap gap-12 items-start justify-center">
        {speakersData.map(
          (
            speaker: {
              name: string;
              title: string;
              company: string;
              img: string;
            },
            index: number
          ) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center text-center w-64"
            >
              <Image
                width={300}
                height={300}
                src={"/assets/img/speakers/" + speaker.img}
                alt={speaker.name}
                className="aspect-square object-cover object-top"
              />
              <p className="text-2xl px-4 pt-4">{speaker.name}</p>
              <p className="font-light px-4">{speaker.title}</p>
              <p className="text-lg px-4">{speaker.company}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default AllSpeakers;

const speakersData = [
  {
    name: "Radosław Komuda",
    title: "Założyciel",
    company: "Laboratorium Etyki Cyfrowej “DERL”",
    img: "1_Radosław Komuda - profilowe.jpeg",
  },
  {
    name: "Karolina Wilamowska",
    title: "Partnerka Zarządzająca",
    company: "Wilamowscy Adwokaci",
    img: "2 Karolina Wilamowska.jpeg",
  },
  {
    name: "Dr Ewa Chamczyk",
    title: "Co-founder & Head of AI Books",
    company: "CampusAI",
    img: "3 Ewa Chamczyk Zdjęcie.jpg",
  },
  {
    name: "Emilia Florek",
    title: "Radczyni prawna",
    company: "LegalLab",
    img: "4 Emilia Florek Zdjęcie.jpg",
  },
  {
    name: "Justyna Masalska",
    title: "Music Publishing & Project Manager",
    company: "Wytwórnia SAYHi",
    img: "5 Justyna Masalska Zdjęcie.jpg",
  },
  {
    name: "Milena Rzemieniak",
    title: "Prezes Zarządu",
    company: "Fundacja Lubię Poniedziałki",
    img: "6 Milena Rzemieniak Kielin Zdjęcie.jpg",
  },
  {
    name: "Ania Proch",
    title: "CEO",
    company: "DP Vision",
    img: "7 Ania Proch.jpg",
  },
  {
    name: "Alicja Szydłowska",
    title: "nie mam",
    company: "opisu",
    img: "8 Alicja Szydłowska.jpg",
  },
  {
    name: "dr inż. Ewelina Bartuzi-Trokielewicz",
    title: "nie mam stanowiska",
    company: "ani firmy",
    img: "9 Ewelina Bartuzi-Trokielewicz.jpg",
  },
  {
    name: "Dawid Pawlicki",
    title: "nie mam stanowiska",
    company: "mimo.ooo",
    img: "10 Dawid Pawlicki Portret DPA.jpg",
  },
  {
    name: "Jeremiasz Krok",
    title: "specjalista ds. sztucznej inteligencj",
    company: "Kaizen Ads",
    img: "11 jeremiasz krok profilowe.jpg",
  },
];
