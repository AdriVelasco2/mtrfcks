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
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-cyan-700  font-sans">
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
          className="bg-cyan-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
             Victoria por 4-0
            </span>{" "}
          
          </p>
          
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "Jornada 1",
    title: "CLÍNICA ASTURIAS - FUTSAMERES (L)",
    src: "https://www.clinica-asturias.com/resources/logo/logo-negative.svg",
    content: <DummyContent />,
  },
  {
    category: "Jornada 2",
    title: "REAL CLUB TENIS DE GIJON A (V)",
    src: "https://realclubtenisgijon.es/wp-content/uploads/2024/08/logo_rctg_web.png",
    content: "Lugar: Club de tenis de Gijón Fecha: 08/02/2025 17:30",
  },
  {
    category: "Jornada 3",
    title: "COVER PADEL uno90 (V)",
    src: "http://www.coverpadel.es/CoverPadelNueva/img/logo.png",
    content: "Lugar: Cover Pádel Olloniego Fecha: 02/03/2025 12:00",
  },
  {
    category: "Jornada 4",
    title: "AGORASTUR FORMACION (L)",
    src: "https://agorastur.es/img/Agorastur_Logo65.gif",
    content: "Lugar: Paidesport Parqueastur Fecha: 16/03/2025 11:30",
  },
  {
    category: "Jornada 5",
    title: "RGCC (L)",
    src: "https://www.rgcc.es/wp-content/uploads/2022/04/Logo-rgcc-w.svg",
    content: "Lugar: Paidesport Parqueastur Fecha: 06/04/2025 11:30 ",
  },
  {
    category: "Jornada 6",
    title: "CLÍNICA ASTURIAS - FUTSAMERES (V)",
    src: "https://www.clinica-asturias.com/resources/logo/logo-negative.svg",
    content: "Lugar: Futsameres Fecha: 12/04/2025 17:30",
  },
  {
    category: "Jornada 7",
    title: "REAL CLUB TENIS DE GIJON A (L)",
    src: "https://realclubtenisgijon.es/wp-content/uploads/2024/08/logo_rctg_web.png",
    content: "Lugar: Paidesport Parqueastur Fecha: 27/04/2025 11:30 ",
  },
  {
    category: "Jornada 8",
    title: "COVER PADEL uno90 (L)",
    src: "http://www.coverpadel.es/CoverPadelNueva/img/logo.png",
    content: "Lugar: Paidesport Parqueastur Fecha: 04/05/2025 11:30",
  },
  {
    category: "Jornada 9",
    title: "AGORASTUR FORMACION (V)",
    src: "https://agorastur.es/img/Agorastur_Logo65.gif",
    content: "Lugar: Paidesport Parqueastur Fecha: 24/05/2025 12:00",
  },
  {
    category: "Jornada 10",
    title: "RGCC (V)",
    src: "https://www.rgcc.es/wp-content/uploads/2022/04/Logo-rgcc-w.svg",
    content: "Lugar: Grupo Covadonga Fecha: 08/06/2025 14:15",
  },
];
