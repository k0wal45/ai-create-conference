"use client";
import Quote from "./Quote";

const Quotes = () => {
  return (
    <section className="p-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[120rem] mx-auto gap-4">
      <Quote index={1}>
        <h2 className="text-5xl font-semibold">Dla kogo?</h2>
        <div className="flex flex-col gap-2">
          <p className="text-lg">Jeżeli: </p>
          <p>
            - prowadzisz firmę lub pracujesz w branży kreatywnej albo mediowej,
          </p>
          <p>- specjalizujesz się w marketingu lub reklamie, </p>
          <p>
            - tworzysz teksty, grafiki, wideo, audio przy wykorzystaniu AI lub
            ciekawi Cię jak zacząć to robić,
          </p>
          <p>
            - pasjonuje Cię tematyka sztucznej inteligencji i chcesz się
            dowiedzieć więcej
          </p>
          <p>- to ta konferencja jest właśnie dla Ciebie!</p>
        </div>
      </Quote>
      <Quote index={2}>
        <h2 className="text-5xl font-semibold">O czym?</h2>
        <p className="text-lg">
          Poznaj najnowsze narzędzia do generowania tekstu, obrazu, audio i
          wideo. Posłuchaj o najnowszych trendach związanych z wykorzystaniem
          sztucznej inteligencji w branży kreatywnej i w mediach. Dowiedz się,
          jak wykorzystywać AI w swojej firmie dbając jednocześnie o
          bezpieczeństwo i zgodność z prawem.
        </p>
      </Quote>
      <Quote index={3}>
        <h2 className="text-5xl font-semibold">Kogo spotkasz?</h2>
        <p className="text-lg">
          Swoją wiedzą i doświadczeniami podzielą się praktycy z poszczególnych
          branż kreatywnych, eksperci od technologii oraz przedstawiciele
          instytucji od których zależy dalszy rozwój AI w Polsce.
        </p>
      </Quote>
    </section>
  );
};

export default Quotes;
