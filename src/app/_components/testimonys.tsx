"use client";
import { TestimonyType } from "../../types";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import TestimonyCard from "./card_testimony";
import {
  Cake,
  CalendarClock,
  Clock,
  Volleyball,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Star,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";

import aulaFutvoleiImg from "../../../public/img_aulaFutvolei.jpg";
import dayUseImg from "../../../public/img_dayUse.jpg";
import escolinhaImg from "../../../public/img-escola-de-futebol-2.webp";
import campoImg from "../../../public/img_campoFutebolPartida.jpg";
import festaImg from "../../../public/img_festa.png";
import pessoaImg from "../../../public/img_pessoa.jpg";

const services = [
  {
    title: "Marcela Duarte",
    experience:
      "Fiz minha festa de aniversário no espaço e foi simplesmente incrível! A estrutura é ótima, o campo super bem cuidado e a equipe foi super atenciosa do início ao fim. Recomendo demais pra quem quer uma comemoração diferente e animada!",
    product: "Aniversário",
    avaliacao: 5,
    date: "21/06/2024",
    image: pessoaImg
  },
  {
    title: "Renato Silva",
    experience:
      "Participei de uma aula de futevôlei e fiquei impressionado com a didática do professor e a energia da galera. Mesmo sendo iniciante, me senti à vontade o tempo todo. Com certeza vou voltar nas próximas aulas!",
    product: "Aula de futevôlei",
    avaliacao: 5,
    date: "14/07/2024",
    image: pessoaImg
  },
  {
    title: "Bianca Freitas",
    experience:
      "Fui com minha família passar o dia no espaço e adoramos! O ambiente é limpo, organizado, com bastante sombra e estrutura pra churrasco. As crianças se divertiram muito enquanto a gente relaxava.",
    product: "Partida de futebol",
    avaliacao: 4,
    date: "03/12/2024",
    image: pessoaImg
  },
  {
    title: "Júlio Matos",
    experience:
      "Levei minha namorada pra curtir um dia diferente e fomos surpreendidos positivamente! A vibe do lugar é maravilhosa, contato com a natureza, esportes, e ainda conseguimos assistir uma pelada super animada!",
    product: "Day use",
    avaliacao: 5,
    date: "01/04/2025",
    image: pessoaImg
  },
  {
    title: "Larissa Campos",
    experience:
      "Fui com amigos passar o dia e adoramos a estrutura. Só achamos que faltou um pouco mais de sinalização no local e os banheiros podiam estar mais bem conservados. No geral, valeu a pena!",
    product: "Escolinha de Futebol",
    avaliacao: 4,
    date: "04/10/2022",
    image: pessoaImg
  },
  {
    title: "Carlos Arnaldo",
    experience:
      "Conheci o espaço em 2020 e desde então voltei várias vezes. O atendimento é sempre excelente e o ambiente é perfeito pra quem quer jogar bola, curtir com a galera e esquecer um pouco da correria da cidade.",
    product: "Aula de Futvôlei",
    avaliacao: 5,
    date: "04/04/2020",
    image: pessoaImg
  },
];


export default function Testimonys() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const [selectedService, setSelectedService] = useState<TestimonyType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0); // Começa no primeiro slide sempre
  }, [emblaApi]);

  const openServiceModal = (serviço: TestimonyType) => {
    setSelectedService(serviço);
    setIsOpen(true);
  };

  return (
    <section id="depoimentos" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold mb-12 text-black">Depoimentos</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-2 pb-2 pt-2">
              {services.map((item, index) => (
                <div
                  key={item.title}
                  className="flex-[0_0_100%] lg:flex-[0_0_20%] px-2 cursor-pointer"
                  onClick={() => openServiceModal(item)}
                >
                  <div className="flex justify-center gap-2 select-none">
                    <TestimonyCard
                      title={item.title}
                      product={item.product}
                      experience={item.experience}
                      date={item.date}
                      image={item.image} 
                      avaliacao={item.avaliacao}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
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

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <Dialog.Panel className="bg-white max-w-xl w-full rounded-xl p-6 space-y-4">
            {selectedService && (
              <>
                <Dialog.Title className="text-2xl font-bold">
                  {selectedService.title}
                </Dialog.Title>
                <Dialog.Description className="text-sm text-gray-600">
                  {selectedService.experience}
                </Dialog.Description>
                <div className="flex justify-between">
                  <div className="flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        fill={
                          i < selectedService.avaliacao
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Fechar
                  </button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
