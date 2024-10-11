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
              img: string;
            },
            index: number
          ) => (
            <AboutCard
              num={item.num}
              text={item.text}
              index={index + 1}
              suffix={item.suffix}
              img={item.img}
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
    img: "https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    num: 20,
    suffix: "+",
    text: "Prelegentów",
    img: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    num: 10,
    text: "Paneli",
    img: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    num: 6,
    suffix: "h",
    text: "Praktycznej wiedzy",
    img: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
