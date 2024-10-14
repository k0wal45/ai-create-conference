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
    bio: "Radosław Komuda - Naukowiec z 15-letnim doświadczeniem w obszarze etyki sztucznej inteligencji i filozofii postępu. Wykładowca akademicki. Beneficjent „Diamentowego Grantu” Ministerstwa Nauki i Szkolnictwa Wyższego w projekcie dotyczącym problemu agresji elektronicznej w Polsce oraz stypendysta rządu Japonii. Prezentował na najważniejszych międzynarodowych konferencjach naukowych w: Japonii, USA i Europie. Założyciel Laboratorium Etyki Cyfrowej 'DERL'.",
    img: "1_Radosław Komuda - profilowe.jpeg",
  },
  {
    id: 2,
    name: "Karolina Wilamowska",
    title: "Partnerka Zarządzająca",
    company: "Wilamowscy Adwokaci",
    bio: "Adwokatka, mediatorka Centrum Mediacji przy Krajowej Izbie Gospodarczej oraz Centrum Mediacji przy Naczelnej Radzie Adwokackiej, doktorantka Uczelni Łazarskiego, trenerka, wykładowczyni, mentorka Fundacji Women in Law. Absolwentka studiów podyplomowych LegalTech i innowacje w branży prawniczej na SWPS, Tokenizacja i automatyzacja procesów w gospodarce cyfrowej. Aspekty prawne, technologiczne, zarządcze (artificial intelligence, Blockchain, automatyzacja pracy i algorytmów) na Uniwersytecie Śląskim oraz Inspektor Ochrony Danych Osobowych na Polskiej Akademii Nauk oraz licznych szkoleń z zakresu legaltech, nowych technologii i ochrony danych osobowych. Członkini Instytutu Legal Tech przy Naczelnej Radzie Adwokackiej. Zawodowo zajmuje się prawem własności intelektualnej, nowych technologii, ochroną danych osobowych oraz mediacjami (w sprawach IP i IT). Jest prelegentką na polskich i międzynarodowych konferencjach z zakresu prawa własności intelektualnej, prawa nowych technologii oraz mediacji.  Wyróżniona na liście 25 najlepszych prawniczek w biznesie przez Forbes Women w 2022 r.",
    img: "2 Karolina Wilamowska.jpeg",
  },
  {
    id: 3,
    name: "Dr Ewa Chamczyk",
    title: "Co-founder & Head of AI Books",
    company: "CampusAI",
    bio: "Współtwórczyni „hAI Magazine” – pierwszego w Polsce magazynu poświęconego sztucznej inteligencji, członkini Grupy Robocze ds. Sztucznej Inteligencji przy Ministerstwie Cyfryzacji, ekspertka ds. wydawniczych, muzykolożka, managerka kultury, pasjonatka nowych technologii. Przez 10 lat związana z branżą kulturalną. Pracowała w Narodowym Instytucie Fryderyka Chopina (Dział Promocji i PR, Dział ds. Nauki i Wydawnictw) i w Filharmonii Narodowej, gdzie była kierowniczką Działu Wydawniczego. Współpracowała również z licznymi instytucjami kultury jako konferansjerka oraz redaktorka publikacji książkowych i nutowych. W 2023 roku została Doradczynią ds. popularyzacji wiedzy o AI w Dziale Doradców Dyrektora ds. Naukowych w NASK – Państwowym Instytucie Badawczym. Obecnie związana z CampusAI. W 2024 roku obroniła rozprawę doktorską na Wydziale Nauk o Kulturze i Sztuce Uniwersytetu Warszawskiego. Studiowała Muzykologię oraz Dziennikarstwo i komunikację społeczną na Uniwersytecie Warszawskim (studia magisterskie), jak również Zarządzanie Kulturą w strukturach Unii Europejskiej w Polskiej Akademii Nauk w Warszawie (studia podyplomowe). Laureatka m.in. Fulbright Junior Research Award 2020–2021, w ramach której odbyła staż badawczy na Columbia University w Nowym Jorku.",
    img: "3 Ewa Chamczyk Zdjęcie.jpg",
  },
  {
    id: 4,
    name: "Emilia Florek",
    title: "Radczyni prawna",
    company: "LegalLab",
    bio: "Radczyni prawna, menedżer cyberbezpieczenstwa. Przedsiębiorczyni. Audytor wiodący ISO 27001 Doradza przedsiębiorcom, liderom i managerom z sektora prywatnego i publicznego. Specjalizuje się w tematach z obszaru prawa i technologii zwłaszcza w zakresie cyberbezpieczeństwa i sztucznej inteligencji. Ukonczyła liczne kursy specjalistyczne i studia podyplomowe. Posiada m.in. dyplom ukonczenia studiów: “Prawo nowych technologii” prowadzonych przez INP PAN, “Tokenizacja i automatyzacja procesów w gospodarce cyfrowej” oraz “Zarządzanie cyberbezpieczstwem” realizowanych przez konsorcjum Cyber Science (Uniwersytet Śląski, Politechnikę Śląską i Uniwersytet Ekonomiczny w Katowicach). Zaangażowana w wybrane społeczności i inicjatywy funkcjonujące w obszarze cyberbezpieczenstwa i AI, w tym ISSA Polska czy Campus AI czy GRAI działającej przy Ministerstwie Cyfryzacji. ",
    img: "4 Emilia Florek Zdjęcie.jpg",
  },
  {
    id: 5,
    name: "Justyna Masalska",
    title: "Music Publishing & Project Manager",
    company: "Wytwórnia SAYHi",
    bio: "Absolwentka Uniwersytetu Warszawskiego na Wydziale Dziennikarstwa i Nauk Politycznych oraz Państwowej Szkoły Muzycznej II stopnia im. Józefa Elsnera, gdzie uzyskała tytuł zawodowego muzyka. W branży muzycznej i kreatywnej działa od prawie 10 lat jako konsultantka muzyczna oraz specjalistka od publishingu i pozyskiwania praw do utworów polskich i zagranicznych.  Współpracowała z największymi polskimi stacjami telewizyjnymi, domami produkcji, studiami dźwiękowymi oraz agencjami reklamowymi zajmując się realizacją projektów reklamowych i telewizyjnych.",
    img: "5 Justyna Masalska Zdjęcie.jpg",
  },
  {
    id: 6,
    name: "Milena Rzemieniak",
    title: "Prezes Zarządu",
    company: "Fundacja Lubię Poniedziałki",
    bio: "Adwokat i partner w Kancelarii MILLAW Założycielka i Prezes Zarządu Fundacji Lubię Poniedziałki Trener Biznesu Milena  zawód adwokata łączy z prowadzeniem Fundacji Lubię Poniedziałki, której misją jest inspirowanie do wyboru pracy dającej spełnienie, zgodnej z wartościami i talentami.  W Fundacji Milena  prowadzi indywidualne sesje job-coachingowe oraz warsztaty, aby pomóc moim klientom skutecznie rozwijać swoją karierę i odważnie wprowadzać zmiany. ",
    img: "6 Milena Rzemieniak Kielin Zdjęcie.jpg",
  },
  {
    id: 7,
    name: "Ania Proch",
    title: "CEO",
    company: "DP Vision",
    bio: "Ania Proch jest CEO agencji digitalowej DP Vision, gdzie przekształca innowacyjne pomysły w wyjątkowe marki i produkty. Specjalizuje się we współpracy z odważnymi startupami, firmami SaaS oraz technologicznymi, które kwestionują status quo. Jej misją jest skuteczne pozycjonowanie marek, wspierając firmy w docieraniu do inwestorów i klientów oraz zwiększaniu sprzedaży dzięki precyzyjnie opracowanym strategiom marketingowym. Dzięki doświadczeniu w tworzeniu trafnych komunikatów, dba o to, by przekazy firm docierały tam, gdzie są najbardziej potrzebne. Ania jest również współzałożycielką projektu edukacyjnego iLMS, który demokratyzuje dostęp do edukacji na najwyższym poziomie. Wykorzystując technologie AI i XR, tworzy przyszłość nauki, zapewniając dostęp do wysokiej jakości szkoleń z dowolnego miejsca na świecie. Platforma, będąca alternatywą dla tradycyjnych szkoleń VR, dostarcza bardziej przystępnych rozwiązań zarówno pod względem kosztów, jak i elastyczności. Dzięki swojej pasji do technologii i doświadczeniu w rozwijaniu startupów, Ania buduje innowacyjne rozwiązania, które przyczyniają się do tworzenia silnych marek oraz nowoczesnych produktów, przekształcając wizje w rzeczywistość.",
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
    title: "Assistant Professor",
    company: "NASK Science",
    bio: "Ekspertka w dziedzinie biometrii i uczenia maszynowego, kierownik zespołu analizy i wykrywania materiałów syntetycznych. Prowadzi badania nad detekcją tzw. deepfake'ów w zakresie audio, obrazu oraz analizy sentymentu, a także w obszarze wizji komputerowej i rozpoznawania tożsamości. Ponadto, prowadzi akcje edukacyjne i szkolenia, które mają na celu zwiększenie społecznej świadomości na temat sztucznej inteligencji i związanych z nią zagrożeń.",
    img: "9 Ewelina Bartuzi-Trokielewicz.jpg",
  },
  {
    id: 10,
    name: "Dawid Pawlicki",
    title: "Chief Operating Officer",
    company: "mimo.ooo",
    bio: "Dawid Pawlicki od wielu lat pełni kluczowe funkcje menadżerskie w międzynarodowych spółkach technologicznych, gdzie odpowiadał m.in. za wprowadzanie innowacyjnych produktów cyfrowych na rynek, realizację ekspansji zagranicznej oraz zarządzanie złożonymi projektami międzynarodowymi. Obecnie koncentruje się na budowaniu zespołu wyspecjalizowanego w realizacji innowacyjnych projektów AI w ramach firmy mimo.ooo. W wolnym czasie zgłębia zagadnienia z zakresu sztucznej inteligencji i ekonomii. Pasjonat triathlonu, fan piłki siatkowej i zapalony podróżnik.",
    img: "10 Dawid Pawlicki Portret DPA.jpg",
  },
  {
    id: 11,
    name: "Jeremiasz Krok",
    title: "specjalista ds. sztucznej inteligencji",
    company: "Kaizen Ads",
    bio: " Jest także redaktorem portalu hAIMagazine.com działającym w ramach CampusAI Poland. W swojej pracy zajmuje się popularyzacją i wdrażaniem technologii AI w różnych aspektach marketingu cyfrowego. Jego doświadczenie obejmuje zarówno praktyczne zastosowanie sztucznej inteligencji, jak i edukację w tej dziedzinie. Jest również znany ze swojej działalności edukacyjnej, gdzie tłumaczy zawiłości sztucznej inteligencji w prosty i przystępny sposób (wielokrotny gość audycji radiowych). Regularnie publikuje artykuły oraz występuje w podcastach związanych z tematyką AI, takich jak Ai to AI - z miłości do sztucznej inteligencji (愛とAI).",
    img: "11 jeremiasz krok profilowe.jpg",
  },
  {
    id: 12,
    name: "Artur Paprocki",
    title: "Prezes Zarządu",
    company: "Veles Production",
    bio: "Artur Paprocki jest Prezesem Zarządu Veles Production, firmy ściśle współpracującej z ZPR Media w celu opracowania zaawansowanej infrastruktury rzeczywistości rozszerzonej i wirtualnych instalacji produkcyjnych. Firma wykorzystuje silniki czasu rzeczywistego, takie jak Unreal i Vizrt, do realizacji projektów związanych z metaverse dla branży filmowej i rozrywkowej. Paprocki ma prawie dwie dekady doświadczenia w produkcji wideo. Swoją karierę rozpoczął w Telewizji Polskiej w latach 2003-2006, gdzie pełnił funkcję dyrektora artystycznego. Następnie przez ponad pięć lat pracował w TVN w dziale autopromocji TVN24. Później był producentem w Platige Image, gdzie współtworzył dział Platige Broadcast, specjalizujący się w grafice rozszerzonej rzeczywistości (XR), pracując dla klientów takich jak Polsat Sport HD i przy nowej identyfikacji wizualnej „Wiadomości” TVP. Pracował również w Mozzaika Productions. Współpracował z kilkoma międzynarodowymi nadawcami, takimi jak Sky Italy, Canal+ France, HRT Croatia i Grupo Imagen, jako projektant programów audiowizualnych opartych na nowoczesnych technologiach. Jest również założycielem galerii Polska Grafika Cyfrowa, w której organizuje wystawy i aukcje dla najlepszych artystów cyfrowych w Polsce. Ukończył Polsko-Japońską Akademię Technik Komputerowych (PJATK), a obecnie wykłada w Wyższej Szkole Informatyki i Zarządzania (WIT)",
    img: "12 Artur Paprocki.png",
  },
  {
    id: 13,
    name: "Michał Domański",
    title: "Business & Partner Relations",
    company: "Bielik.Ai",
    bio: "Członek grupy ds. współpracy z biznesem Fundacji SpeakLeash tworzącej otwarty polski Duży Model Językowy Bielik.ai. Organizator cyklu spotkań Masovian AI Fest z misją łączenie warszawskich środowisk biznesowych, technologicznych, i naukowych w zakresie sztucznej inteligencji.  Obsesyjnie skupiony na relacjach popularyzator i edukator w zakresie etycznego i inkluzywnego networkingu. Z uwzględnieniem introwertyków oraz osób mających trudności z interakcjami społecznymi. Współtwórca algorytmu matchmakingowego Come Network With Us. Stały bywalec wydarzeń branżowych i konferencji w postaci gospodarza oraz mówcy. Konsultant oraz lobbysta edukacji technologicznej dla osób nietechnicznych, instytucji publicznych, oraz fundacji pożytku publicznego. Mentor dla młodych przedsiębiorców. Ambasador Szwedzko-Polskiej Izby Gospodarczej, propagujący współpracę międzynarodową państw basenu Morza Bałtyckiego.",
    img: "13_Michał Domański.jpg",
  },
  {
    id: 14,
    name: "Ewa Dolińska-Wysocka",
    title: "Radczyni prawna",
    company: "Kancelaria Radcy Prawnego Ewa Dolińska - Wysocka",
    bio: "Radczyni prawna z ponad 15-letnim doświadczeniem we współpracy z branżą marketingową i IT, także jako prawnik in-house. Na co dzień współpracuje z grupą doradczą JT Weston. Ekspertka w zakresie prawa nowych technologii i prawa sztucznej inteligencji. Członkini Grupy Roboczej ds. Sztucznej Inteligencji przy Ministerstwie Cyfryzacji i European AI Alliance. Wykładowczyni na studiach podyplomowych 'Cyber Science. Tokenizacja i automatyzacja procesów w gospodarce cyfrowej' na Uniwersytecie Śląskim. Trenerka i mentorka. Prywatnie pasjonatka technologii, w wolnym czasie buduje i trenuje małe modele językowe.",
    img: "14 Ewa Dolińska Wysocka.jpg",
  },
];
