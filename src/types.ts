import { StaticImageData } from "next/image";

export type ServiceType = {
    title: string;
    description: string;
    duration: string;
    price: string;
    icon: React.ReactNode;
    link: string;
    image: StaticImageData;
  };

  export type TestimonyType = {
    title: string;
    experience: string;
    product: string;
    avaliacao: number;
    date: string;
    image: StaticImageData;
  };