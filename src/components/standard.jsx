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
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
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
             Victoria por 7-6
            </span>{" "}
          
          </p>
          <img
            src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/50-estrellas-desnudas-por-exigencias-del-guion/alexandra-daddario/95890969-1-esl-ES/Alexandra-Daddario.jpg"
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
    src: "https://cdn.asianporngif.com/118902/bangn-lea-hart.gif",
    content: <DummyContent />,
  },
  {
    category: "Jornada 2",
    title: "Nortseco-El Moscón (V)",
    src: "https://ist3-2.filesor.com/pimpandhost.com/1/5/5/8/155842/3/X/C/z/3XCzl/tumblr_mh7uz7eaSr1s1yxd2o1_500.gif",
    content: "Por definir",
  },
  {
    category: "Jornada 3",
    title: "Villaoril club de pádel - fugitivos (L)",
    src: "https://hardcoregify.com/content/2019/08/agfe_001-78.gif",
    content: "WPC 26 de octubre",
  },
  {
    category: "Jornada 4",
    title: "Drive pádel(V)",
    src: "https://68.media.tumblr.com/c28225d38ca2ebd64cca0d474488638a/tumblr_ovw128bWkq1w66xryo1_540.gif",
    content: "Drive padel 10 de noviembre",
  },
  {
    category: "Jornada 5",
    title: "Descansa",
    src: "https://sexxxgif.com/content/2022/04/when-she-makes-herself-come-and-your-cocks-up-her-ass-ladies-learn-this-its-hot-af_001.webp",
    content: "23/24 de noviembre",
  },
  {
    category: "Jornada 6",
    title: "Lateral (V)",
    src: "https://cdn.asianporngif.com/118902/bangn-lea-hart.gif",
    content: "Lateral 14/15 de diciembre",
  },
  {
    category: "Jornada 7",
    title: "Nortseco-CP MOSCÓN (L)",
    src: "https://ist3-2.filesor.com/pimpandhost.com/1/5/5/8/155842/3/X/C/z/3XCzl/tumblr_mh7uz7eaSr1s1yxd2o1_500.gif",
    content: "11/12 de enero",
  },
  {
    category: "Jornada 8",
    title: "Villaoril club de pádel (fugitivos) (V)",
    src: "https://hardcoregify.com/content/2019/08/agfe_001-78.gif",
    content: "Paidesport 26 de enero",
  },
  {
    category: "Jornada 9",
    title: "Drive pádel(L)",
    src: "https://68.media.tumblr.com/c28225d38ca2ebd64cca0d474488638a/tumblr_ovw128bWkq1w66xryo1_540.gif",
    content: "Drive pádel 1 de febrero",
  },
  {
    category: "Jornada 10",
    title: "Descansamos",
    src: "https://sexxxgif.com/content/2022/04/when-she-makes-herself-come-and-your-cocks-up-her-ass-ladies-learn-this-its-hot-af_001.webp",
    content: "16 de febrero",
  },
];
