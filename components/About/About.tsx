import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section
      className="p-4 md:px-24 flex flex-col gap-6 mx-auto my-12 text-white"
      id="about"
    >
      <p className="uppercase text-lg px-6 py-2 w-fit rounded-full border-2 border-white ">
        o wydarzeniu
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
    num: 12,
    suffix: "+",
    text: "Paneli",
  },
  {
    num: 20,
    suffix: "+",
    text: "Prelegentów",
  },
  {
    num: 3,
    text: "Warsztaty",
  },
  {
    num: 7,
    suffix: "h",
    text: "Praktycznej wiedzy",
  },
];
