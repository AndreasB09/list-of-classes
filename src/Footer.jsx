import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <h1 className={styles.title}>This is a footer</h1>
      </footer>
    </div>
  );
}

