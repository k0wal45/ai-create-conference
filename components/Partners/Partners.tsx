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
              src="/assets/img/partners/time.png"
              alt="logo time"
              className="object-contain w-64 h-auto"
            />
          </div>
          <p className="text-4xl font-semibold">Partnerzy merytoryczni</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
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
              src="/assets/img/partners/logo_przezroczystosc_mini-1.png"
              alt="mimo.ooo"
              className="object-contain h-12 xl:h-16 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/Partner Merytoryczny Fundacja Lubię Poniedziałki.png"
              alt="fundacja lubię poniedziałki"
              className="object-contain h-16 xl:h-24 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/QED_logo_original.png"
              alt="QED Software"
              className="object-contain h-16 xl:h-24 w-auto"
            />
          </div>
          <p className="text-4xl font-semibold">Partnerzy medialni</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/logo_eska.ai.png"
              alt="radio Eska"
              className="object-contain h-16 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/SUPER EXPRESS LOGO 2018 2 GAZETA.png"
              alt="Logo Super Express"
              className="object-contain h-28 w-auto"
            />
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/superbiz_.ai.png"
              alt="Superbiznes Logo"
              className="object-contain h-16 w-auto"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Partners;
