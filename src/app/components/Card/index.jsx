import Image from "next/image";
import styles from "./style.module.css";

export default function Card({path, title, description}) {
    return (
        <div className={styles.card} data-aos="zoom-out-up">
            <Image 
                src={path} 
                alt={title} 
                width={200} 
                height={200} 
                className={styles.img} 
            />
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
