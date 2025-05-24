import Image from "next/image";
import about1Img from "../../../public/img_futvolei.jpeg";
import about2Img from "../../../public/img_logo.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
export default function About() {
  return (
    <section id="sobre" className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do futvolei"
                fill
                quality={100}
                className="object-cover hover:scale-120 duration-500"
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-green-500">
              <Image
                src={about2Img}
                alt="Foto do futvolei"
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Nossa arena foi pensada para quem valoriza conforto, qualidade e
              praticidade na hora de jogar bola ou curtir um futvôlei com os
              amigos.Além disso, oferecemos tudo o que você precisa para uma
              experiência completa.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-green-600" />
                Referência em Salvador desde 2020
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-600" />
                Materiais e campos do mais alto padrão
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-600" />
                Equipe com mais de 10 Instrutores
              </li>
            </ul>
            <div className="flex gap-5">
              <div className="group">
                <a
                  href="https://wa.me/5571994020221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-950 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md group-hover:scale-105"
                >
                  <WhatsappLogo className="w-5 h-5 text-white group-hover:scale-105" />
                  Contato via Whatszapp
                </a>
              </div>
              <div className="group">
                <a
                  href="https://www.google.com/maps/place/SENAI+CIMATEC/@-12.938416,-38.3920089,17z/data=!3m1!4b1!4m6!3m5!1s0x71617406c5e77d3:0x4ec6a2c9c19397b1!8m2!3d-12.938416!4d-38.387138!16s%2Fg%2F1wd3w7hb?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-950 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md group-hover:scale-105"
                >
                  <MapPin className="w-5 h-5 text-white group-hover:scale-105" />
                  Endereço da Arena
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
