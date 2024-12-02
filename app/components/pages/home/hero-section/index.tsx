"use client";

import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandGoogleDrive,
  TbBrandLinkedin,
  TbBrandYoutube,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/jonathasDavid",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/jonathas-david-6429b813b/",
    icon: <TbBrandLinkedin />,
  },

  {
    url: "https://www.youtube.com/channel/UCkyzweUM-wbOpDqwHNGtSxA",
    icon: <TbBrandYoutube />,
  },
  {
    url: "https://drive.google.com/drive/folders/178emWzDIolsePtwhyzCYWqonZlxLhaNQ?usp=sharing",
    icon: <TbBrandGoogleDrive />,
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px] ">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2"> Jônathas David</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou estudante de Ciência da Computação, atualmente no quinto período
            e com 25 anos. Tenho foco em desenvolvimento front-end, trabalhando
            com Next.js, React, CSS e HTML. Estudo metodologias ágeis e
            engenharia de software, além de estagiar em uma empresa de
            tecnologia. Também sou responsável pelo front-end em um projeto de
            uma startup.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next.Js" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors "
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={300}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Jônathas David"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};
