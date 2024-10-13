import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section className="p-4 md:px-24 flex flex-col gap-6 mx-auto my-12 text-white">
      <p className="relative w-fit flex items-center gap-2 text-2xl font-semibold uppercase after:content-[''] after:absolute after:w-8 after:h-[3px] after:bg-white after:-right-12 after:block">
        O wydarzeniu
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {info.map(
          (
            item: {
              num: number;
              text: string;
              suffix?: string;
            },
            index: number
          ) => (
            <AboutCard
              num={item.num}
              text={item.text}
              index={index + 1}
              suffix={item.suffix}
              key={index}
            />
          )
        )}
      </div>
    </section>
  );
};

export default About;

const info = [
  {
    num: 2,
    text: "Sceny",
  },
  {
    num: 20,
    suffix: "+",
    text: "Prelegentów",
  },
  {
    num: 10,
    text: "Paneli",
  },
  {
    num: 6,
    suffix: "h",
    text: "Praktycznej wiedzy",
  },
];
