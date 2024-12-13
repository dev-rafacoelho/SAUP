import Image from "next/image";
import styles from "./style.module.css";

export default function Card2({path, title, description}) {

    return (
        <div className={styles.card} data-aos="flip-right">
          <Image 
            src={path}
            alt={title}
            width={811}
            height={651}
            className={styles.img}
          />
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
    );
}