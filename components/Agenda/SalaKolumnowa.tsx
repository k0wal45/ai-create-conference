import React, { Fragment } from "react";
import { FaCircle } from "react-icons/fa";
import OpacityOnScroll from "../OpacityOnScroll";

const STOP_CLASSES = `w-full px-6 py-4 text-white rounded-full text-center text-3xl font-bold relative flex items-center justify-between text-2xl`;

const SalaKolumnowa = () => {
  return (
    <Fragment>
      {/* spliter */}

      <div className={STOP_CLASSES + " bg-accent"}>
        <FaCircle className="text-sm" />
        Część pierwsza
        <FaCircle className="text-sm" />
      </div>
      <OpacityOnScroll>
        <p>9.30 – 9.40 – Przywitanie</p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>9.40 – 10.00 – Przyszłość AI w Polsce, gość specjalny</p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          10.00 – 10.35 - Jak sztuczna inteligencja zmienia branżę kreatywną
          (marketing i reklama, branża filmowa,
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          wydawnicza, muzyczna, gamingowa). Panel dyskusyjny Artur Paprocki
          Veles Production, Cezary Albiński
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>Bambaa, Alicja Szydłowska Time, Justyna Masalska SayHi</p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          10.35 – 10.50 Ewa Chamczyk hAI Magazine - o projekcie interaktywnej
          książki. Prelekcja
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          10.50 – 11.10 Filip Sobiecki QuickchatAI o personalizowanych
          asystentach AI. Prelekcja
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>11.10 – 11.30 Przerwa kawowa</p>
      </OpacityOnScroll>
      {/* spliter */}

      <div className={STOP_CLASSES + " bg-primary"}>
        <FaCircle className="text-sm" />
        Część druga
        <FaCircle className="text-sm" />
      </div>
      <OpacityOnScroll>
        <p>
          11.30– 12.00 Kamil Soldacki, Pawel Kaminski, Elevenlabs o AI w
          obszarze audio. Prelekcja
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          12.00 – 12.30 – Czy warto rozwijać polskie modele językowe, czyli
          Bielik.AI. Prezentacja
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          12.30 – 13.05 – Narzędzia AI w branży kreatywnej – przegląd i
          możliwości. Panel dyskusyjny Anna Proch
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          DP Vision. Tomasz Kurzątkowski QED Software, Paweł Piekarski Accorp
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>13.05 – 13.25 – Jak wdrożyć AI w firmie</p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>13.25 – 14.00 – Przerwa kawowa/lunch</p>
      </OpacityOnScroll>
      {/* spliter */}

      <div className={STOP_CLASSES + " bg-secondary"}>
        <FaCircle className="text-sm" />
        Część trzecia
        <FaCircle className="text-sm" />
      </div>
      <OpacityOnScroll>
        <p>
          14.00 – 14.20 – AI i przyszłość mediów. Wystąpienie Przewodniczącego
          KRRiT Macieja Świrskiego
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          14.20 – 14.40 – Odpowiedzialna rola mediów w czasie dezinformacji i
          technologii deepfake. Prelekcja
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          14.40 – 15.10 – AI Safety, czyli jak korzystać z AI w sposób
          odpowiedzialny i etyczny, Radosław Komuda,
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>DERP Laboratorium Etyki Cyfrowej</p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          15.10 – 15.40 – AI i prawo – czyli odpowiedzi na najczęściej zadawane
          pytania prawne branży kreatywnej.
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          Karolina Wilamowska LegalLab, Ewa Dolińska Wysocka JT Weston Legal
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>
          15.40 – 16.00 – AI i kompetencje przyszłości, Milena
          Rzemieniak-Kielin, Fundacja Lubię Poniedziałki
        </p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>16.00 – Zakończenie konferencji</p>
      </OpacityOnScroll>
      <OpacityOnScroll>
        <p>16.00 – 17.00 – Networking</p>
      </OpacityOnScroll>
    </Fragment>
  );
};

export default SalaKolumnowa;
