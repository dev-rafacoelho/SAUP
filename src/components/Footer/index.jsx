import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.card}>
          <a href="#
          ">
            <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={200}
            height={200}
            className={styles.img}
          />
          </a>
        </div>
        <div className={styles.card}>
          <div>
            <div className="mt-3">
              <p className={styles.title}>Endereço</p>
            </div>
            <div>
              <Link
                href="https://www.google.com.br/maps/place/Av.+dos+Ing%C3%A1s,+3001+-+Jardim+Imperial,+Sinop+-+MT,+78555-000/@-11.8524525,-55.5184244,17z/data=!3m1!4b1!4m6!3m5!1s0x93a780205b7d599b:0x45cd4b2a840be071!8m2!3d-11.8524525!4d-55.5158495!16s%2Fg%2F11c4s_gq_d?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.subtitle}>
                  Av. dos Ingás, 3001, Jardim Imperial
                </p>
              </Link>
              <p className={styles.subtitle}>Sinop/MT - Brasil, 78555-000</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div>
              <p className={styles.title}>Contatos</p>
            </div>
            <div>
              <Link href="mailto:benevid@unemat.br" className={styles.subtitle}>
                benevid@unemat.br
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div>
              <p className={styles.title}>Redes Sociais</p>
            </div>
            <div>
              <div className="flex flex-row items-center pt-2 gap-2">
                <FaInstagram />
                <Link
                  href="https://instagram.com/saup.dev"
                  className="text-xs text-customFonte2 "
                >
                  Instagram
                </Link>
              </div>
              <div className="flex flex-row items-center pt-2 gap-2">
                <CiLinkedin />
                <Link
                  href="https://linkedin.com/company/saup"
                  className="text-xs text-customFonte2 "
                >
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center pb-5">
        <p className={styles.subtitle}>
          © 2024 SAUP. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
