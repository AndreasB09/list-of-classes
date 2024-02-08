import styles from './Header.module.css'
import githubLogo from "./assets/images/github_logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>This is a header</h1>
      <img className={styles.logo} src={githubLogo} alt="GitHub Logo"/>
    </header>
  );
}
