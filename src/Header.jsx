import styles from './Header.module.css'
import githubLogo from "./assets/images/github_logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/circle">
        <button>Circle</button>
      </Link>
      <Link to="/square">
        <button>Square</button>
      </Link>
      <img className={styles.logo} src={githubLogo} alt="GitHub Logo" />
    </header>
  );
}
