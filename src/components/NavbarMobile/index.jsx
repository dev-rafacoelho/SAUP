'use client'

import { FaAppStore } from "react-icons/fa";
import React, { useState } from "react"
import { ChevronRight } from "lucide-react"
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAplicativoOpen, setIsAplicativoOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      setIsAplicativoOpen(false)
    }
  }

  const toggleAplicativo = () => {
    setIsAplicativoOpen(!isAplicativoOpen)
  }

  return (
    <header
      className={`header fixed top-0 left-0 w-full border-b bg-white shadow-xl z-20 transition-all duration-400 ease-out ${
        isMenuOpen ? (isAplicativoOpen ? "h-auto" : "h-68") : "h-[75px]"
      }`}
    >
      <div className="flex justify-between items-center h-[75px]">
        <div className="logo-container ml-4">
          <a href="#">
            <img src="/assets/logo.svg" alt="Logo" className="h-[50px]" />
          </a>
        </div>

        {/* Menu icon on the right */}
        <div
          className="icon-container relative inline-block z-[2] float-right h-[75px] w-[75px] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0.01,0.165,0.99)] transform"
          onClick={toggleMenu}
        >
          <div
            id="menuicon"
            className="w-[20px] h-[10px] relative block mx-auto mt-8"
          >
            <div
              className={`bar w-full h-[2px] block relative bg-black transition-all duration-300 ease-[cubic-bezier(0.4,0.01,0.165,0.99)] ${
                isMenuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            ></div>
            <div
              className={`bar w-full h-[2px] block relative bg-black transition-all duration-300 ease-[cubic-bezier(0.4,0.01,0.165,0.99)] mt-[6px] ${
                isMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      <nav className={`mobile-menu transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden transition-none'}`}>
        {/* Menu items */}
        <ul className="p-4 space-y-4">
          <li><a href="#" className="text-lg hover:text-primary">Institucional</a></li>
          <li><a href="#" className="text-lg hover:text-primary">Instagram</a></li>
          <li><a href="#" className="text-lg hover:text-primary">Contato</a></li>
          <li>
            <button 
              onClick={toggleAplicativo}
              className="flex items-center w-full text-lg hover:text-primary"
            >
              Aplicativo
              <ChevronRight className={`ml-2 h-5 w-5 transform transition-transform ${isAplicativoOpen ? 'rotate-90' : ''}`} />
            </button>
            {isAplicativoOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="flex flex-row items-center"><div className="text-xl mr-2"><FaAppStore /></div><a href="#" className="text-base hover:text-primary">App Store</a></li>
                <li className="flex flex-row items-center"><div className="text-xl mr-2" ><IoLogoGooglePlaystore /></div><a href="#" className="text-base hover:text-primary">Play Store</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
