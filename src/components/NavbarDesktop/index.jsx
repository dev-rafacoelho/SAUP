"use client"

import { useState } from 'react'
import { FaGooglePlay } from "react-icons/fa";
import { ChevronRight } from 'lucide-react'
import { FaAppStore } from "react-icons/fa";

export default function NavBarDesktop() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border-b tablet:bg-black shadow-xl fixed w-full h-24 z-30 flex flex-row items-center px-28 justify-between">
      <div>
        <img src="../../../assets/logo.svg" alt="Logo" className="h-[70px]" />
      </div>
      <div>
        <ul className="flex flex-row text-base lg:text-xl text-[#171717] gap-[2.2vw] pl-4">
          <li>
            <a href="">Institucional</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center focus:outline-none"
            >
              Aplicativo
              <ChevronRight
                className={`ml-1 h-4 w-4 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FaGooglePlay  className="mr-2 h-5 w-5" />
                  PlayStore
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FaAppStore className="mr-2 h-5 w-5" />
                  AppStore
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
