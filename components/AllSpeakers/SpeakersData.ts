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
    name: "Unknown",
    title: "CEO",
    company: "Unknown company",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur architecto temporibus repudiandae maxime. Voluptatem officia eligendi mollitia laboriosam in earum quas. Aperiam quod recusandae nam illo ab dolores molestiae et?",
    img: "unknown.png",
  },
  {
    id: 2,
    name: "Unknown",
    title: "CEO",
    company: "Unknown company",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur architecto temporibus repudiandae maxime. Voluptatem officia eligendi mollitia laboriosam in earum quas. Aperiam quod recusandae nam illo ab dolores molestiae et?",
    img: "unknown.png",
  },
  {
    id: 3,
    name: "Unknown",
    title: "CEO",
    company: "Unknown company",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur architecto temporibus repudiandae maxime. Voluptatem officia eligendi mollitia laboriosam in earum quas. Aperiam quod recusandae nam illo ab dolores molestiae et?",
    img: "unknown.png",
  },
  {
    id: 4,
    name: "Unknown",
    title: "CEO",
    company: "Unknown company",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur architecto temporibus repudiandae maxime. Voluptatem officia eligendi mollitia laboriosam in earum quas. Aperiam quod recusandae nam illo ab dolores molestiae et?",
    img: "unknown.png",
  },
  {
    id: 5,
    name: "Unknown",
    title: "CEO",
    company: "Unknown company",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur architecto temporibus repudiandae maxime. Voluptatem officia eligendi mollitia laboriosam in earum quas. Aperiam quod recusandae nam illo ab dolores molestiae et?",
    img: "unknown.png",
  },
  {
    id: 6,
    name: "Unknown",
    title: "CEO",
    company: "Unknown company",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur architecto temporibus repudiandae maxime. Voluptatem officia eligendi mollitia laboriosam in earum quas. Aperiam quod recusandae nam illo ab dolores molestiae et?",
    img: "unknown.png",
  },
  {
    id: 7,
    name: "Unknown",
    title: "CEO",
<<<<<<< HEAD
    company: "Unknown company",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur architecto temporibus repudiandae maxime. Voluptatem officia eligendi mollitia laboriosam in earum quas. Aperiam quod recusandae nam illo ab dolores molestiae et?",
    img: "unknown.png",
=======
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
>>>>>>> c2205b13d62812664813a506c1426c93e7758429
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
