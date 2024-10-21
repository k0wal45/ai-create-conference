import Image from "next/image";
import React, { Fragment } from "react";

const Partners = () => {
  return (
    <Fragment>
      <section className="bg-white py-16 px-4 grid place-items-center text-black text-center">
        <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-16">
          <p className="text-4xl font-semibold">Partner Strategiczny</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/media/time.png"
              alt="logo time"
              className="object-contain w-64 h-auto"
            />
          </div>
          <p className="text-4xl font-semibold">Partnerzy merytoryczni</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/quickchat.png"
              alt="Quickchat ai"
              className="object-contain h-10 xl:h-12 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/Bielik.jpeg"
              alt="Bielik AI"
              className="object-contain h-10 xl:h-12 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/QED_logo_original.png"
              alt="QED Software"
              className="object-contain h-16 xl:h-24 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/KAIZEN LOGO_RGB_POZIOM 2.png"
              alt="Kaizen"
              className="object-contain h-16 xl:h-24 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/logo_przezroczystosc_mini-1.png"
              alt="mimo.ooo"
              className="object-contain h-12 xl:h-16 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/sayhi_logo kolor.png"
              alt="Say Hi"
              className="object-contain h-16 xl:h-24 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/Bambaa_Logo_Final.png"
              alt="Bambaa Logo"
              className="object-contain h-16 xl:h-24 w-auto"
            />

            <Image
              width={400}
              height={300}
              src="/assets/img/partners/VELES.png"
              alt="Veles"
              className="object-contain h-16 xl:h-24 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/logo HARDE_black.png"
              alt="HARDE"
              className="object-contain h-24 xl:h-32 w-auto"
            />

            <Image
              width={400}
              height={300}
              src="/assets/img/partners/CyberScience_logotyp_RGB_podstawowe.png"
              alt="CyberScience"
              className="object-contain h-16 xl:h-24 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/1_Partner_merytoryczny_DERL_vector-file.png"
              alt="Laboratorium etyki cyfrowej"
              className="object-contain h-16 xl:h-24 w-auto"
            />

            <Image
              width={400}
              height={300}
              src="/assets/img/partners/Partner Merytoryczny Fundacja Lubię Poniedziałki.png"
              alt="Fundacja Lubię Poniedziałki"
              className="object-contain h-24 xl:h-32 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/combo-green+black-on-white.png"
              alt="LMS"
              className="object-contain h-16 xl:h-24 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/DpVision-on white background.png"
              alt="dpVision"
              className="object-contain h-16 xl:h-24 w-auto"
            />

            <Image
              width={400}
              height={300}
              src="/assets/img/partners/WASP-logo-kolor kontra.jpg"
              alt="WASP"
              className="object-contain h-16 xl:h-24 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/Legal lab.png"
              alt="Legal Lab"
              className="object-contain h-16 xl:h-24 w-auto"
            />
          </div>

          <p className="text-4xl font-semibold">Partnerzy medialni</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/media/logo_eska.ai.png"
              alt="radio Eska"
              className="object-contain h-16 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/media/SUPER EXPRESS LOGO 2018 2 GAZETA.png"
              alt="Logo Super Express"
              className="object-contain h-28 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/media/superbiz_.ai.png"
              alt="Superbiznes Logo"
              className="object-contain h-16 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/media/hAI_logo_CMYK.png"
              alt="Superbiznes Logo"
              className="object-contain h-24 w-auto"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Partners;
