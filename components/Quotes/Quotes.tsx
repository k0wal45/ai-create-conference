"use client";
import { useRef } from "react";
import Quote from "./Quote";

const Quotes = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef();

  return (
    <section
      ref={ref}
      className="p-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[120rem] mx-auto gap-4"
    >
      {quotes.map(
        (
          quote: {
            img: string;
            quote: string;
            name: string;
            title: string;
          },
          index: number
        ) => (
          <Quote index={index} view={ref} quote={quote} key={index} />
        )
      )}
    </section>
  );
};

export default Quotes;

const quotes = [
  {
    img: "https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Kreatywność to nie tylko talent, ale przede wszystkim sposób myślenia. Polega na dostrzeganiu możliwości tam, gdzie inni widzą tylko ograniczenia. Warto wyjść poza ramy i odważyć się tworzyć coś zupełnie nowego.",
    name: "Anna Nowak",
    title: "Dyrektor Artystyczny",
  },
  {
    img: "https://images.unsplash.com/photo-1563807893646-b6598a2b6fdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Wielkie idee często rodzą się w momentach, gdy zderzają się różne perspektywy. Im więcej różnorodnych punktów widzenia, tym większa szansa na stworzenie czegoś przełomowego. Konferencje takie jak ta dają przestrzeń do takich spotkań.",
    name: "Michał Zieliński",
    title: "Projektant Graficzny",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Kreatywność jest jak mięsień, który rozwija się, gdy go regularnie trenujemy. Wyzwania i nowe doświadczenia na konferencjach pozwalają nam poszerzać nasze granice i odkrywać nowe możliwości twórcze.",
    name: "Katarzyna Lewandowska",
    title: "Mentorka Kreatywności",
  },
  {
    img: "https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Nie ma jednej drogi do kreatywności. Każdy z nas ma własny sposób na wyrażenie siebie i stworzenie czegoś wyjątkowego. Ta konferencja pozwala odkryć nowe ścieżki i rozwijać nasze umiejętności w wyjątkowy sposób.",
    name: "Tomasz Kwiatkowski",
    title: "Reżyser Filmowy",
  },
  {
    img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Podczas konferencji zrozumiałem, że kreatywność to proces ciągłego poszukiwania. Im bardziej otwieramy się na nowe idee, tym więcej inspiracji znajdujemy wokół nas. To przestrzeń do odkrywania siebie na nowo.",
    name: "Piotr Majewski",
    title: "Fotograf",
  },
  {
    img: "https://images.unsplash.com/photo-1583812140784-2cc89fff7097?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Kreatywność zaczyna się tam, gdzie kończy się komfort. Wyjście poza swoją strefę komfortu, eksperymentowanie i podejmowanie ryzyka to kluczowe elementy tworzenia czegoś naprawdę wyjątkowego.",
    name: "Ewa Szymczak",
    title: "Projektant UX/UI",
  },
];
