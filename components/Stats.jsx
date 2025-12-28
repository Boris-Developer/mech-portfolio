"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 10,
    text: "Años de experiencia",
  },
  {
    num: 6,
    text: "Cursos de gestión",
  },
  {
    num: 4,
    text: "Cursos tecnológicos",
  },
  {
    num: 16,
    text: "Tecnologías dominadas",
  },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center flex-col xl:flex-row">
          {stats.map((item, index) => {
            return (
              <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold w-auto"
                />
                <p className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]:"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
