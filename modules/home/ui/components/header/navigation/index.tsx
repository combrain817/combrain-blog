import Link from "next/link";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
