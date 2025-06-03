import { Logo } from "./logo";
import styles from "./home-navbar.module.scss";
import Link from "next/link";

export const HomeNavbar = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <nav className={styles.menuItem}>
        <ul className={styles.menuContainer}>
          <li>
            <Link href="/">최신글</Link>
          </li>
          <li>
            <Link href="/">인기글</Link>
          </li>
          <li>
            <Link href="/">예전글</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
