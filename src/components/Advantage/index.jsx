import styles from "./style.module.css";
import Cards2 from '@/components/Cards2';
export default function Advantage() {
    return (
      <div>
        <section className="pb-16 border-b shadow w-full">
            <div className='flex flex-col'>
                <h1 className="text-6xl font-bold my-20 text-center" data-aos="fade-right">+Vantagens</h1>
                <div className={styles.cards} >
                    <Cards2 path="/assets/img 01.png" title="Economia de Energia" description="Permite um controle preciso de dispositivos eletrônicos, reduzindo o consumo de energia de forma inteligente."/>
                    <Cards2 path="/assets/img 02.png" title="Gestão Automatizada" description="No aplicativo é possível fazer agendamentos dos ambientes e dispositivos."/>
                    <Cards2 path="/assets/img 03.png" title="Controle em suas Mãos" description="Oferece a conveniência de controle por dispositivos móveis, permitindo gerenciar o ambiente de qualquer lugar."/>        
                </div>
            </div>
        </section>
      </div>
      
    );
  }

  