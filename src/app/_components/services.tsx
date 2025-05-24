"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  Cake,
  CalendarClock,
  Volleyball,
  Trophy,
  Clock,
  ChevronLeft,
  ChevronRight,
  TrafficCone,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import aulaFutvoleiImg from "../../../public/img_aulaFutvolei.jpg";
import dayUseImg from "../../../public/img_dayUse.jpg";
import escolinhaImg from "../../../public/img-escola-de-futebol-2.webp";
import campoImg from "../../../public/img_campoFutebolPartida.jpg";
import festaImg from "../../../public/img_festa.png";
import { ReactNode } from "react";
import { ServiceType } from "../../types";

const services: ServiceType[] = [
  {
    title: "Aniversário",
    description:
      "Inclui o uso de dois dos nossos campos e todos os nossos equipamentos e instrutores à disposição.",
    duration: "4h",
    price: "$1000",
    icon: <Cake />,
    link: "Olá, vi no site sobre a utilização do espaço para um aniversário",
    image: festaImg,
  },
  {
    title: "Aula de Futvolei",
    description:
      "Inclui o uso de dois dos nossos campos e todos os nossos equipamentos e instrutores à disposição.",
    duration: "4h",
    price: "$1000",
    icon: <Volleyball />,
    link: "Olá, vi no site sobre a utilização do espaço para um aniversário",
    image: aulaFutvoleiImg,
  },
  {
    title: "Day use Futvolei",
    description:
      "Inclui o uso de dois dos nossos campos e todos os nossos equipamentos e instrutores à disposição.",
    duration: "4h",
    price: "$1000",
    icon: <CalendarClock />,
    link: "Olá, vi no site sobre a utilização do espaço para um aniversário",
    image: dayUseImg,
  },
  {
    title: "Escolinha de Futebol",
    description:
      "Inclui o uso de dois dos nossos campos e todos os nossos equipamentos e instrutores à disposição.",
    duration: "4h",
    price: "$1000",
    icon: <TrafficCone />,
    link: "Olá, vi no site sobre a utilização do espaço para um aniversário",
    image: escolinhaImg,
  },
  {
    title: "Partida de futebol",
    description:
      "Inclui o uso de dois dos nossos campos e todos os nossos equipamentos e instrutores à disposição.",
    duration: "4h",
    price: "$1000",
    icon: <Trophy />,
    link: "Olá, vi no site sobre a utilização do espaço para um aniversário",
    image: campoImg,
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="serviços" className="bg-blue-950 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Serviços</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_33.3333%] px-3"
                >
                  <article className="bg-neutral-700 text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    {item.image && (
                      <div className="relative w-full h-80 mb-4 rounded-xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          quality={100}
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1 flex items-start gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-5 h-5" />
                        <span>{item.duration}</span>
                      </div>
                      <a
                        href="https://wa.me/5571994020221"
                        className="flex items-center justify-center gap-2 hover:bg-green-600 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
