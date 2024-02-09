import styles from "./Card.module.css";

export function Card({ title, desc, image }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <img src={image} alt={title} />
        </div>
    );
}