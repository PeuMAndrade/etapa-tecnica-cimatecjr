"use client";

import { useState } from "react";

const menus = ["home", "sobre", "serviços", "depoimentos"];

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed left-0 right-0 z-50 bg-black/50 py-4">
      {/* Botão hambúrguer para mobile */}
      <div className="px-4 flex justify-end sm:hidden">
        <button
          className="cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 246.42 246.04"
            className="fill-white w-8 h-8"
          >
            <rect x="0.79" y="30.22" width="245.63" height="23.36" rx="11.68" />
            <rect
              x="0.39"
              y="111.32"
              width="245.63"
              height="23.36"
              rx="11.68"
            />
            <rect y="192.42" width="245.63" height="23.36" rx="11.68" />
          </svg>
        </button>
      </div>

      {/* Navegação */}
      <nav
        className={`${
          toggleMenu ? "flex" : "hidden sm:flex"
        } justify-center items-center gap-3 sm:gap-5 lg:gap-10 sm:flex-row flex-col mt-2 sm:mt-0`}
      >
        {menus.map((menu, i) => (
          <button
            key={i}
            onClick={() => {
              const section = document.getElementById(menu);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                setToggleMenu(false); // fecha o menu no mobile após clique
              }
            }}
            className={'w-full sm:w-auto uppercase font-semibold text-base text-white text-center sm:px-3 lg:px-5 py-2 sm:py-1 rounded-2xl transition-all ease-linear hover:bg-green-500 hover:shadow-md'}>
            {menu}
          </button>
        ))}
      </nav>
    </header>
  );
}
