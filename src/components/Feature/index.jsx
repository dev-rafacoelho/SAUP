import Image from "next/image";
import styles from "./style.module.css";

export default function Feature({ children }) {
  return (
    <section className={styles.features}>
      <h1 className={styles.title} data-aos="fade-right">+Facilidade</h1>
      <div className={styles.box}>{children}</div>
    </section>
  );
}
