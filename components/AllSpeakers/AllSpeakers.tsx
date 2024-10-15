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
    name: "Dr Ewa Chamczyk",
    title: "Co-founder & Head of AI Books",
    company: "CampusAI",
    bio: "Współtwórczyni „hAI Magazine” – pierwszego w Polsce magazynu poświęconego sztucznej inteligencji, członkini Grupy Robocze ds. Sztucznej Inteligencji przy Ministerstwie Cyfryzacji, ekspertka ds. wydawniczych, muzykolożka, managerka kultury, pasjonatka nowych technologii. Przez 10 lat związana z branżą kulturalną. Pracowała w Narodowym Instytucie Fryderyka Chopina (Dział Promocji i PR, Dział ds. Nauki i Wydawnictw) i w Filharmonii Narodowej, gdzie była kierowniczką Działu Wydawniczego. W 2023 roku została Doradczynią ds. popularyzacji wiedzy o AI w Dziale Doradców Dyrektora ds. Naukowych w NASK – Państwowym Instytucie Badawczym. Obecnie związana z CampusAI.",
    img: "3 Ewa Chamczyk Zdjęcie.jpg",
  },
  {
    id: 2,
    name: "Kamil Sołdacki",
    title: "Audio Director",
    company: "ElevenLabs",
    bio: "Rodzina i przyjaciele mówią o nim 'internista dźwięku'. Przez ostatnie 15 lat poświęcił się nagrywaniu, edytowaniu, miksowaniu i tworzeniu dźwięków do reklam, filmów, podcastów, programów telewizyjnych, gier i innych form audiowizualnych. W ElevenLabs odpowiedzialny za jakość dźwięku wchodzącą i wychodzącą z modeli AI, jak również za rozwój nowych produktów i usług.",
    img: "16 Kamil Sołdacki.jpg",
  },
  {
    id: 3,
    name: "Filip Sobiecki",
    title: "Head of Growth",
    company: "Quickchat AI",
    bio: "",
    img: "18 filip sobiecki quickchat ai.jpeg",
  },
  {
    id: 4,
    name: "Michał Domański",
    title: "Business & Partner Relations",
    company: "Bielik.Ai",
    bio: "Członek grupy ds. współpracy z biznesem Fundacji SpeakLeash tworzącej otwarty polski Duży Model Językowy Bielik.ai. Organizator cyklu spotkań Masovian AI Fest z misją łączenie warszawskich środowisk biznesowych, technologicznych, i naukowych w zakresie sztucznej inteligencji. Obsesyjnie skupiony na relacjach popularyzator i edukator w zakresie etycznego i inkluzywnego networkingu.",
    img: "13_Michał Domański.jpg",
  },
  {
    id: 5,
    name: "Jeremiasz Krok",
    title: "specjalista ds. sztucznej inteligencji",
    company: "Kaizen Ads",
    bio: "Jest także redaktorem portalu hAIMagazine.com działającym w ramach CampusAI Poland. W swojej pracy zajmuje się popularyzacją i wdrażaniem technologii AI w różnych aspektach marketingu cyfrowego. Jego doświadczenie obejmuje zarówno praktyczne zastosowanie sztucznej inteligencji, jak i edukację w tej dziedzinie. Jest również znany ze swojej działalności edukacyjnej, gdzie tłumaczy zawiłości sztucznej inteligencji w prosty i przystępny sposób.",
    img: "11 jeremiasz krok profilowe.jpg",
  },
  {
    id: 6,
    name: "Dawid Pawlicki",
    title: "Chief Operating Officer",
    company: "mimo.ooo",
    bio: "Dawid Pawlicki od wielu lat pełni kluczowe funkcje menadżerskie w międzynarodowych spółkach technologicznych, gdzie odpowiadał m.in. za wprowadzanie innowacyjnych produktów cyfrowych na rynek, realizację ekspansji zagranicznej oraz zarządzanie złożonymi projektami międzynarodowymi.",
    img: "10 Dawid Pawlicki Portret DPA.jpg",
  },
  {
    id: 7,
    name: "Anna Proch",
    title: "CEO",
    company: "DP Vision",
    bio: "Ania Proch jest CEO agencji digitalowej DP Vision, gdzie przekształca innowacyjne pomysły w wyjątkowe marki i produkty. Specjalizuje się we współpracy z odważnymi startupami, firmami SaaS oraz technologicznymi, które kwestionują status quo.",
    img: "7 Ania Proch.jpg",
  },
  {
    id: 8,
    name: "Artur Paprocki",
    title: "Prezes Zarządu",
    company: "Veles Productions",
    bio: "Artur Paprocki jest Prezesem Zarządu Veles Productions, firmy współpracującej z ZPR Media nad infrastrukturą rzeczywistości rozszerzonej. Specjalizuje się w wykorzystaniu silników Unreal i Vizrt dla metaverse.",
    img: "12 Artur Paprocki.png",
  },
  {
    id: 9,
    name: "Justyna Masalska",
    title: "Music Publishing & Project Manager",
    company: "Wytwórnia SAYHi",
    bio: "Absolwentka Uniwersytetu Warszawskiego oraz Państwowej Szkoły Muzycznej II stopnia. W branży muzycznej i kreatywnej działa od prawie 10 lat jako konsultantka muzyczna oraz specjalistka od publishingu.",
    img: "5 Justyna Masalska Zdjęcie.jpg",
  },
  {
    id: 10,
    name: "Alicja Szydłowska",
    title: "Marketing Manager",
    company: "TIME SA",
    bio: "",
    img: "8 Alicja Szydłowska.jpg",
  },
  {
    id: 11,
    name: "Cezary Albiński",
    title: "Członek Zarządu",
    company: "Bambaa",
    bio: "Oversaw work for the biggest video game studios and major international brands, such as UBISOFT, ACTIVISION, ELECTRONIC ARTS. Co-created production pipelines for Apex Legends series and Hyperscape.",
    img: "15 Cezary Albiński .jpg",
  },
  {
    id: 12,
    name: "Tomasz Kurzątkowski",
    title: "Dyrektor Sprzedaży i Marketingu",
    company: "QED Software",
    bio: "Menedżer ds. Rozwoju Biznesu z 30-letnim doświadczeniem w tworzeniu i wdrażaniu zarządzania opartego na wartościach oraz zarządzania projektami i procesami.",
    img: "17 Tomasz Kurzątkowski.jpg",
  },
  {
    id: 13,
    name: "Patryk Lasek",
    title: "Product Lead",
    company: "Quick Chat",
    bio: "",
    img: "20 patryk lasek quickchat ai.webp",
  },
  {
    id: 14,
    name: "Bartek Kaban",
    title: "Marketing Manager",
    company: "Quick Chat",
    bio: "",
    img: "19 bartek kuban quickchat ai.webp",
  },
  {
    id: 15,
    name: "Dr inż. Ewelina Bartuzi-Trokielewicz",
    title: "Assistant Professor",
    company: "NASK Science",
    bio: "Ekspertka w dziedzinie biometrii i uczenia maszynowego. Prowadzi badania nad detekcją deepfake'ów oraz wizją komputerową.",
    img: "9 Ewelina Bartuzi-Trokielewicz.jpg",
  },
  {
    id: 16,
    name: "Karolina Wilamowska",
    title: "Partnerka Zarządzająca",
    company: "Wilamowscy Adwokaci",
    bio: "Adwokatka i mediatorka, członkini Instytutu Legal Tech przy Naczelnej Radzie Adwokackiej. Specjalistka w prawie nowych technologii i ochronie danych osobowych.",
    img: "2 Karolina Wilamowska.jpeg",
  },
  {
    id: 17,
    name: "Ewa Dolińska-Wysocka",
    title: "Radczyni prawna",
    company: "Kancelaria Radcy Prawnego Ewa Dolińska-Wysocka",
    bio: "Radczyni prawna z ponad 15-letnim doświadczeniem. Ekspertka w zakresie prawa nowych technologii i sztucznej inteligencji.",
    img: "14 Ewa Dolińska Wysocka.jpg",
  },
  {
    id: 18,
    name: "Emilia Florek",
    title: "Radczyni prawna",
    company: "LegalLab",
    bio: "Radczyni prawna, menedżerka cyberbezpieczeństwa, audytorka ISO 27001, specjalizująca się w prawie IT i compliance.",
    img: "4 Emilia Florek Zdjęcie.jpg",
  },
  {
    id: 19,
    name: "Radosław Komuda",
    title: "Założyciel",
    company: "Laboratorium Etyki Cyfrowej “DERL”",
    bio: "Naukowiec z 15-letnim doświadczeniem w obszarze etyki sztucznej inteligencji i filozofii postępu. Badacz w zakresie przyszłości cyfrowej.",
    img: "1_Radosław Komuda - profilowe.jpeg",
  },
  {
    id: 20,
    name: "Milena Rzemieniak",
    title: "Prezes Zarządu",
    company: "Fundacja Lubię Poniedziałki",
    bio: "Adwokatka, Prezes Zarządu Fundacji Lubię Poniedziałki oraz partnerka w kancelarii MILLAW. Specjalizuje się w prawie pracy i nowych technologii.",
    img: "6 Milena Rzemieniak Kielin Zdjęcie.jpg",
  },
];
