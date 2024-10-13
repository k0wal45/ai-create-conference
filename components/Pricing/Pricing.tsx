import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-12 py-12 px-4">
      <h5 className="text-5xl font-semibold">Twój bilet na AI Create 2024</h5>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <PricingCard
          name="Standard"
          cost={500}
          desc="Udział w konferencji dotyczącej innowacji i trendów w AI i branżach kreatywnych"
          link=""
        />
        <PricingCard
          name="Pełen pakiet"
          cost={700}
          desc="Pełny dostęp do konferencji oraz praktycznych warsztatów z AI i branży kreatywnej"
          link=""
        />
      </div>
    </section>
  );
};

export default Pricing;
