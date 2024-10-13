import Image from "next/image";
import React, { Fragment } from "react";

const Partners = () => {
  return (
    <Fragment>
      <section className="bg-white py-24 px-4 grid place-items-center text-black">
        <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-16">
          <p className="text-4xl font-semibold">Partner Strategiczny</p>
          <div className="flex flex-wrap gap-8">
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/time.png"
              alt="logo time"
              className="object-contain w-64 h-auto"
            />
          </div>
          <p className="text-4xl font-semibold">Partnerzy merytoryczni</p>
          <div className="flex flex-wrap gap-8">
            {lecturesPartners.map((photo: string, index: number) => (
              <Image
                key={index}
                width={400}
                height={300}
                src={"/assets/img/partners/" + photo}
                alt="AI Create Partnet Merytoryczny"
                className="object-contain h-24 w-auto"
              />
            ))}
          </div>
          <p className="text-4xl font-semibold">Partnerzy medialny</p>
          <div className="flex flex-wrap gap-8">
            {mediaPartners.map((photo: string, index: number) => (
              <Image
                key={index}
                width={400}
                height={300}
                src={"/assets/img/partners/" + photo}
                alt="AI Create Partnet Merytoryczny"
                className="object-contain h-24 w-auto"
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
  "1_Partner_merytoryczny_DERL_vector-file.png",
  "combo-green+black-on-white.png",
  "DpVision-on white background.png",
  "logo_przezroczystosc_mini-1.png",
  "Partner Merytoryczny Fundacja Lubię Poniedziałki.png",
  "QED_logo_original.png",
];

const mediaPartners = [
  "logo_eska.ai.png",
  "SUPER EXPRESS LOGO 2018 2 GAZETA.png",
  "superbiz_.ai.png",
];
