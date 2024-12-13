"use client"
import Hero from "@/components/Hero";
import Feature from '@/components/Feature';
import Card from '@/components/Card';
import Solutions from '@/components/Solutions';
import Advantage from '@/components/Advantage';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import { useEffect } from "react";
import * as React from 'react'
import AOS from "aos";


const features = [
  {
    path: "/assets/01.png",
    title:"Controle por ambiente",
    description: "Personalize a automação de cada espaço.",
  },
  {
    path: "/assets/02.png",
    title:"Controle por dispositivo",
    description: "Monitore e gerencie todos os seus dispositivos de forma simples e intuitiva.",
  },
  {
    path: "/assets/03.png",
    title:"Controle por sensor ",
    description: "Integre múltiplos sensores em uma interface única.",
  },
  {
    path: "/assets/04.png",
    title:"Controle de temperatura",
    description: "Mantenha o conforto térmico com monitoramento em tempo real.",
  },
  {
    path: "/assets/05.png",
    title:"Controle de Umidade",
    description: "Regule os níveis de umidade do ambiente.",
  },
  {
    path: "/assets/06.png",
    title:"Radar de presença humana",
    description: "Ative automaticamente dispositivos como luzes e ar condicionado.",
  },
  {
    path: "/assets/07.png",
    title:"Controle infravermelho",
    description: "Controle seus dispositivos com tecnologia IR.",
  },
  {
    path: "/assets/08.png",
    title:"Rotinas automatizadas",
    description: "Crie rotinas personalizadas que atendam às suas necessidades diárias.",
  },

]


export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);
  return (    
    <div>
      <Hero/>
      <Feature>
        {features.map((feature)=>
          <Card path={feature.path} title={feature.title} description={feature.description} key={feature.title}/>
        )}
      </Feature>
      <Solutions/>
      <Advantage/>
      <Contato/>
      <Footer/>
    </div>
    
  );
}
