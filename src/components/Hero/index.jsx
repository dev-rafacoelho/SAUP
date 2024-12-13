import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Controle Total em Suas Mãos</h1>
      <div>
        <Image
          src="/assets/SAUP.png"
          alt="Header"
          width={820}
          height={450}
          className={styles.image}
          data-aos="fade-up"
        />
      </div>
      <h1 className={styles.description} data-aos="zoom-in">
        SAUP é a solução de automação predial inteligente que transforma seu
        ambiente em um espaço mais eficiente e econômico. Com nosso sistema,
        você pode gerenciar tudo em um único lugar, otimizar o uso de recursos e
        desfrutar de uma experiência de conforto e praticidade.
      </h1>
      <div className={styles.dowload}>
        <Link href="#">
          <div>
            <Image
              src="/assets/google_play.png"
              alt="Google Play"
              objectFit="fill"
              width={180}
              height={50}
            />
          </div>
        </Link>
        <Link href="#">
          <Image
            src="/assets/apple_store.svg"
            alt="App Store"
            width={165}
            height={50}
          />
        </Link>
      </div>
    </section>
  );
}
