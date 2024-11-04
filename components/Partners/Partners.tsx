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
              src="/assets/img/partners/logo.png"
              alt="logo time"
              className="object-contain w-64 h-auto"
            />
          </div>
          <p className="text-4xl font-semibold">Partnerzy merytoryczni</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/logo.png"
              alt=""
              className="object-contain h-32 xl:h-48 w-auto"
            />
          </div>

          <p className="text-4xl font-semibold">Partnerzy medialni</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              width={400}
              height={300}
              src="/assets/img/partners/logo.png"
              alt=""
              className="object-contain h-32 w-auto"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Partners;
