// components/Navbar.jsx

"use client";

import { useState, useEffect } from "react";
import Navdesk from "@/components/Navdesk"
import NavBarMobile from "@/app/components/NavBarMobile"; 

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const breakpoint = 768; // Define o ponto de corte para "md"

  useEffect(() => {
    const handleResize = () => {
      const isDesktopView = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
      setIsDesktop(isDesktopView);
    };

    handleResize(); // Verifica o tamanho da tela no primeiro carregamento

    window.addEventListener("resize", handleResize); // Adiciona listener para mudanças no tamanho da tela

    return () => window.removeEventListener("resize", handleResize); // Remove o listener ao desmontar
  }, []);

  return (
    <>
      {/* Renderiza a navbar dependendo do tamanho da tela */}
      {isDesktop ? <Navdesk /> : <NavBarMobile />}
    </>
  );
};

export default Navbar;
