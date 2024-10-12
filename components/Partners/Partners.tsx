import Image from "next/image";
import React, { Fragment } from "react";

const Partners = () => {
  return (
    <Fragment>
      <section className="bg-white py-24 px-4 grid place-items-center text-black">
        <div className="max-w-7xl w-full flex flex-col gap-12">
          <p className="relative w-fit flex items-center gap-2 text-2xl font-semibold uppercase after:content-[''] after:absolute after:w-8 after:h-[3px] after:bg-black after:-right-12 after:block">
            Partner Strategiczny
          </p>
          <div className="flex flex-wrap gap-8">
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/time.png"
              alt="logo time"
              className="object-contain w-64"
            />
          </div>
          <p className="relative w-fit flex items-center gap-2 text-2xl font-semibold uppercase after:content-[''] after:absolute after:w-8 after:h-[3px] after:bg-black after:-right-12 after:block">
            Partnerzy merytoryczni
          </p>
          <div className="flex flex-wrap gap-8">
            {lecturesPartners.map((photo: string, index: number) => (
              <Image
                key={index}
                width={400}
                height={300}
                src={photo}
                alt="AI Create Partnet Merytoryczny"
                className="object-contain h-24"
              />
            ))}
          </div>
          <p className="relative w-fit flex items-center gap-2 text-2xl font-semibold uppercase after:content-[''] after:absolute after:w-8 after:h-[3px] after:bg-black after:-right-12 after:block">
            Partnerzy medialny
          </p>
          <div className="flex flex-wrap gap-8">
            {mediaPartners.map((photo: string, index: number) => (
              <Image
                key={index}
                width={400}
                height={300}
                src={photo}
                alt="AI Create Partnet Merytoryczny"
                className="object-contain h-24"
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Partners;

const lecturesPartners = [
  "/assets/img/partners/1_Partner_merytoryczny_DERL_vector-file.png",
  "/assets/img/partners/combo-green+black-on-white.png",
  "/assets/img/partners/DpVision-on white background.png",
  "/assets/img/partners/logo_przezroczystosc_mini-1.png",
  "/assets/img/partners/Partner Merytoryczny Fundacja Lubię Poniedziałki.png",
  "/assets/img/partners/QED_logo_original.png",
];

const mediaPartners = [
  "/assets/img/partners/logo_eska.ai.png",
  "/assets/img/partners/SUPER EXPRESS LOGO 2018 2 GAZETA.png",
  "/assets/img/partners/superbiz_.ai.png",
];
