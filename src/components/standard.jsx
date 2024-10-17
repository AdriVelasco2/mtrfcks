"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-red-600 dark:text-neutral-200 font-sans">
        Jornadas
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(1).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
             Empate a 6-6, victoria por desempate
            </span>{" "}
          
          </p>
          <img
            src=""
            alt="Macbook mockup from Aceternity UI"
            height="700"
            width="700"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "Jornada 1",
    title: "Lateral (L)",
    src: "",
    content: <DummyContent />,
  },
  {
    category: "Jornada 2",
    title: "Nortseco-El Moscón (V)",
    src: "",
    content: "Por definir",
  },
  {
    category: "Jornada 3",
    title: "Villaoril club de pádel - fugitivos (L)",
    src: "",
    content: "WPC 26 de octubre",
  },
  {
    category: "Jornada 4",
    title: "Drive pádel(V)",
    src: "",
    content: "Drive padel 10 de noviembre",
  },
  {
    category: "Jornada 5",
    title: "Descansa",
    src: "",
    content: "23/24 de noviembre",
  },
  {
    category: "Jornada 6",
    title: "Lateral (V)",
    src: "",
    content: "Lateral 14/15 de diciembre",
  },
  {
    category: "Jornada 7",
    title: "Nortseco-CP MOSCÓN (L)",
    src: "",
    content: "11/12 de enero",
  },
  {
    category: "Jornada 8",
    title: "Villaoril club de pádel (fugitivos) (V)",
    src: "",
    content: "Paidesport 26 de enero",
  },
  {
    category: "Jornada 9",
    title: "Drive pádel(L)",
    src: "",
    content: "Drive pádel 1 de febrero",
  },
  {
    category: "Jornada 10",
    title: "Descansamos",
    src: "",
    content: "16 de febrero",
  },
];
