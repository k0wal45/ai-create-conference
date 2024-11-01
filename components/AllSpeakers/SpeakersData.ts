export interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  img: string;
}

export const speakersData: Speaker[] = [
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
    name: "Sonia Staniek",
    title: "Prezes Zarządu",
    company: "W.M. Murator Projekt",
    bio: "Prezes Zarządu W.M. Murator Projekt. Prawniczka, compliance officer. Specjalistka z zakresu prawa nowych technologii i własności intelektualnej. Doradza przedsiębiorstwom z branży kreatywnej, mediowej, technologicznej i gamingowej. Wykładowczyni  na studiach podyplomowych 'Cyber Science. Tokenizacja i automatyzacja procesów w gospodarce cyfrowej. Aspekty prawne, technologiczne i zarządcze'. Ekspertka Grupy Roboczej ds. Sztucznej Inteligencji przy Ministerstwie Cyfryzacji (GRAI), gdzie pełni rolę liderki podsekcji AI i inne gałęzie prawa Członkini International Association for Artificial Intelligence and Law oraz Robotics & AI Law Society.",
    img: "23_sonia staniek.jpg",
  },
  {
    id: 5,
    name: "Michał Domański",
    title: "Członek grupy",
    company: "Bielik.AI",
    bio: "Członek grupy ds. współpracy z biznesem Fundacji SpeakLeash tworzącej otwarty polski Duży Model Językowy Bielik.ai. Organizator cyklu spotkań Masovian AI Fest z misją łączenie warszawskich środowisk biznesowych, technologicznych, i naukowych w zakresie sztucznej inteligencji. Obsesyjnie skupiony na relacjach popularyzator i edukator w zakresie etycznego i inkluzywnego networkingu.",
    img: "13_Michał Domański.jpg",
  },
  {
    id: 6,
    name: "Jeremiasz Krok",
    title: " AI Specialist",
    company: "Kaizen Ads",
    bio: "Jest także redaktorem portalu hAIMagazine.com działającym w ramach CampusAI Poland. W swojej pracy zajmuje się popularyzacją i wdrażaniem technologii AI w różnych aspektach marketingu cyfrowego. Jego doświadczenie obejmuje zarówno praktyczne zastosowanie sztucznej inteligencji, jak i edukację w tej dziedzinie. Jest również znany ze swojej działalności edukacyjnej, gdzie tłumaczy zawiłości sztucznej inteligencji w prosty i przystępny sposób.",
    img: "11 jeremiasz krok profilowe.jpg",
  },
  {
    id: 7,
    name: "Dawid Pawlicki",
    title: "Chief Operating Officer",
    company: "mimo.ooo",
    bio: "Dawid Pawlicki od wielu lat pełni kluczowe funkcje menadżerskie w międzynarodowych spółkach technologicznych, gdzie odpowiadał m.in. za wprowadzanie innowacyjnych produktów cyfrowych na rynek, realizację ekspansji zagranicznej oraz zarządzanie złożonymi projektami międzynarodowymi.",
    img: "10 Dawid Pawlicki Portret DPA.jpg",
  },
  {
    id: 8,
    name: "Anna Proch",
    title: "CEO",
    company: "DP Vision",
    bio: "Ania Proch jest CEO agencji digitalowej DP Vision, gdzie przekształca innowacyjne pomysły w wyjątkowe marki i produkty. Specjalizuje się we współpracy z odważnymi startupami, firmami SaaS oraz technologicznymi, które kwestionują status quo.",
    img: "7 Ania Proch.jpg",
  },
  {
    id: 9,
    name: "Artur Paprocki",
    title: "Prezes Zarządu",
    company: "Veles Productions",
    bio: "Artur Paprocki jest Prezesem Zarządu Veles Productions, firmy współpracującej z ZPR Media nad infrastrukturą rzeczywistości rozszerzonej. Specjalizuje się w wykorzystaniu silników Unreal i Vizrt dla metaverse.",
    img: "12 Artur Paprocki.png",
  },
  {
    id: 10,
    name: "Justyna Masalska",
    title: "Music Publishing & Project Manager",
    company: "Wytwórnia SAYHi",
    bio: "Absolwentka Uniwersytetu Warszawskiego oraz Państwowej Szkoły Muzycznej II stopnia. W branży muzycznej i kreatywnej działa od prawie 10 lat jako konsultantka muzyczna oraz specjalistka od publishingu.",
    img: "5 Justyna Masalska Zdjęcie.jpg",
  },
  {
    id: 11,
    name: "Alicja Szydłowska",
    title: "Marketing Manager",
    company: "Time S.A.",
    bio: "",
    img: "8 Alicja Szydłowska.jpg",
  },
  {
    id: 12,
    name: "Cezary Albiński",
    title: "Członek Zarządu",
    company: "Bambaa",
    bio: "Oversaw work for the biggest video game studios and major international brands, such as UBISOFT, ACTIVISION, ELECTRONIC ARTS. Co-created production pipelines for Apex Legends series and Hyperscape.",
    img: "15 Cezary Albiński .jpg",
  },
  {
    id: 13,
    name: "Tomasz Kurzątkowski",
    title: "Dyrektor Sprzedaży i Marketingu",
    company: "QED Software",
    bio: "Menedżer ds. Rozwoju Biznesu z 30-letnim doświadczeniem w tworzeniu i wdrażaniu zarządzania opartego na wartościach oraz zarządzania projektami i procesami.",
    img: "17 Tomasz Kurzątkowski.jpg",
  },
  {
    id: 14,
    name: "Patryk Lasek",
    title: "Product Lead",
    company: "Quickchat AI",
    bio: "",
    img: "20 patryk lasek quickchat ai.webp",
  },
  {
    id: 15,
    name: "Bartek Kuban",
    title: "Marketing Manager",
    company: "Quickchat AI",
    bio: "",
    img: "19 bartek kuban quickchat ai.webp",
  },
  {
    id: 16,
    name: "Dr inż. Ewelina Bartuzi-Trokielewicz",
    title: "Assistant Professor",
    company: "NASK Science",
    bio: "Ekspertka w dziedzinie biometrii i uczenia maszynowego. Prowadzi badania nad detekcją deepfake'ów oraz wizją komputerową.",
    img: "9 Ewelina Bartuzi-Trokielewicz.jpg",
  },
  {
    id: 17,
    name: "Karolina Wilamowska",
    title: "Partnerka Zarządzająca",
    company: "Wilamowscy Adwokaci",
    bio: "Adwokatka i mediatorka, członkini Instytutu Legal Tech przy Naczelnej Radzie Adwokackiej. Specjalistka w prawie nowych technologii i ochronie danych osobowych.",
    img: "2 Karolina Wilamowska.jpeg",
  },
  {
    id: 18,
    name: "Ewa Dolińska-Wysocka",
    title: "Radczyni prawna",
    company: "JT Weston Legal",
    bio: "Radczyni prawna z ponad 15-letnim doświadczeniem. Ekspertka w zakresie prawa nowych technologii i sztucznej inteligencji.",
    img: "14 Ewa Dolińska Wysocka.jpg",
  },
  {
    id: 19,
    name: "Emilia Florek",
    title: "Radczyni prawna",
    company: "LegalLab",
    bio: "Radczyni prawna, menedżerka cyberbezpieczeństwa, audytorka ISO 27001, specjalizująca się w prawie IT i compliance.",
    img: "4 Emilia Florek Zdjęcie.jpg",
  },
  {
    id: 20,
    name: "Radosław Komuda",
    title: "Założyciel",
    company: "Laboratorium Etyki Cyfrowej “DERL”",
    bio: "Naukowiec z 15-letnim doświadczeniem w obszarze etyki sztucznej inteligencji i filozofii postępu. Badacz w zakresie przyszłości cyfrowej.",
    img: "1_Radosław Komuda - profilowe.jpeg",
  },
  {
    id: 21,
    name: "Milena Rzemieniak",
    title: "Prezes Zarządu",
    company: "Fundacja Lubię Poniedziałki",
    bio: "Adwokatka, Prezes Zarządu Fundacji Lubię Poniedziałki oraz partnerka w kancelarii MILLAW. Specjalizuje się w prawie pracy i nowych technologii.",
    img: "6 Milena Rzemieniak Kielin Zdjęcie.jpg",
  },
  {
    id: 22,
    name: "Przemysław Kucharski",
    title: "AI Deployment Director",
    company: "Cledar",
    bio: "Badacz i wykładowca akademicki,  zajmujący się metodami sztucznej inteligencji i uczenia maszynowego, ze szczególnym uwzględnieniem wyjaśnialnej sztucznej inteligencji (XAI). Menedżer z doświadczeniem we wdrażaniu rozwiązań opartych o sztuczną inteligencję w organizacjach.",
    img: "21_PRZEMYSŁAW KUCHARSKI.jpeg",
  },
  {
    id: 23,
    name: "Aleksander Piskorz",
    title: "Content & Communications Hero",
    company: "AI Hero",
    bio: "Twórca, edukator, konsultant. Buduję mosty pomiędzy człowiekiem, technologią i biznesem. Pomagam rozwijać marki osobiste w IT oraz holistycznie wspieram content marketing i komunikację firm technologicznych. Szkolę z wykorzystania sztucznej inteligencji w tworzeniu systemów kreatywnych.",
    img: "22aleksander Piskorz.jpeg",
  },
  {
    id: 24,
    name: "Tomasz Horecki",
    title: "Product Owner",
    company: "Stenograf.io",
    bio: "Absolwent Founders Acadamy by Google for Startups i ALK. Pasjonat zrównoważonego rozwoju i dostępności technologii dla osób z niepełnosprawnościami. Entuzjasta bezpiecznej AI i jej pozytywnego wpływu na świat. Propagator cyfrowej transformacji korzystnie wpływającej na rozwój ludzkości. Lokalny aktywista.",
    img: "24_Tomasz Horecki.JPG",
  },
  {
    id: 25,
    name: "Paweł Cyrta",
    title: "Head of Research and Voice AI",
    company: "Stenograf.io",
    bio: "15-lat doświadczenia w tworzeniu systemów głosowych AI, analizie audio i wideo oraz rozpoznawaniu mowy. Opracował asystenta głosowego S Voice w Samsungu, współpracował z NowThis Media, programuje w Pythonie, C++ i Rust. Prelegent na konferencjach PyData i wykładowca PW.",
    img: "25_Paweł Cyrta.jpg",
  },
  {
    id: 26,
    name: "Dr Marta Matylda Kania",
    title: "CEO",
    company: "Circuit Tree",
    bio: "Dla biznesu, NGOsów i uczelni szyje na miarę warsztaty Superpowered by AI - z pisania promptów, narzędzi oraz zastosowań generatywnej sztucznej inteligencji. Projektuje procesy i narzędzia AI, kierując się zasadą: 'Make augmentation, not automation'. Po godzinach prowadzi AI Book Club.",
    img: "26_MMKania.png",
  },
  {
    id: 27,
    name: "Hubert Jaśtak",
    title: "Creative Supervisor",
    company: "Mimo.ooo",
    bio: "Zajmuje się tworzeniem koncepcji w projektach komercyjnych i wdrażaniem rozwiązań operacyjnych z wykorzystaniem najnowszych technologii. Dzięki wieloletniemu doświadczeniu w produkcji i postprodukcji skutecznie łączy nowoczesne technologie z kreatywnymi strategiami.",
    img: "27_HubertJaśtak.Zdjęcie.jpg",
  },
  {
    id: 28,
    name: "Paweł Piekarski",
    title: "Prezes Zarządu",
    company: "Accorp",
    bio: "Założyciel i Prezes Instytutu Badań Pollster, w którym odpowiada za dział Data Science. Wraz z zespołem wdraża rozwiązania oparte o uczenie maszynowe w prawdziwym biznesie.",
    img: "28_Pawel Piekarski.png",
  },
];
