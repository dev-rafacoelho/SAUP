import styles from "./style.module.css";
import Image from 'next/image';

export default function Solutions() {
  return (
      <section className={styles.section}>
          <h1 className="text-4xl md:text-6xl font-bold ml-6 text-center" data-aos="fade-right">Soluções Próprias</h1>
            <div className={styles.all}> 
                <div className={styles.box}>
                    <div className={styles.image}>
                        <Image 
                            src="/assets/SAUP-FULL.png" 
                            alt="SAUP-FULL" 
                            width={200}
                            height={200}
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.conjunto} data-aos="fade-right">
                        <p className={styles.title}>SAUP-FULL</p>
                        <p className={styles.description}>
                        A solução mais abrangente, que proporciona controle total sobre iluminação, climatização e integração de dispositivos como projetores e TVs. Com o SAUP-FULL, você pode personalizar a automação de acordo com suas necessidades específicas, programando horários e condições de operação para cada dispositivo. Relatórios detalhados sobre consumo de energia e uso dos dispositivos ajudam a identificar oportunidades de economia, permitindo que você tome decisões informadas sobre a gestão do seu espaço.                        </p>
                    </div>
                </div>

                <div className={styles.box2}>
                    <div className={styles.image}>
                        <Image 
                            src="/assets/SAUP-FULL.png" 
                            alt="SAUP-RELAY" 
                            width={400}
                            height={200}
                            className={styles.img}
                        />
                    </div>
                    <div className="flex-grow md:mr-28 md:mt-20"data-aos="fade-left">
                        <p className={styles.title}>SAUP-RELAY</p>
                        <p className={styles.description}>
                        Ideal para automatizar dispositivos elétricos, permitindo controle remoto de cargas como luzes e ventiladores. O módulo facilita a programação de ciclos de liga/desliga automáticos, ajudando a economizar energia e aumentar a durabilidade dos equipamentos. Com a capacidade de integrar facilmente uma variedade de dispositivos, o SAUP-RELAY é perfeito para quem busca praticidade e eficiência no cotidiano, garantindo que a automação se adapte ao seu estilo de vida.                        </p>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.image}>
                        <Image 
                            src="/assets/SAUP-FULL.png" 
                            alt="SAUP-IRLEDS" 
                            width={400}
                            height={200}
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.conjunto}data-aos="fade-right"> 
                        <p className={styles.title}>SAUP-IRLEDS</p>
                        <p className={styles.description}>
                        Focado na coleta de dados, este módulo inclui sensores de movimento que ativam dispositivos automaticamente, garantindo que as luzes e climatizadores funcionem quando necessário. Sensores de temperatura e umidade monitoram as condições do ambiente em tempo real, permitindo ajustes automáticos para conforto ideal. Os sensores infravermelhos controlam equipamentos sem conectividade direta, como TVs e sistemas de áudio, com dados visualizáveis em tempo real no aplicativo.                        </p>
                    </div>
                </div>
            </div>    
      </section>
  );
}
