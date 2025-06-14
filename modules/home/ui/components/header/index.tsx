import { Logo } from "./logo";
import { Navigation } from "./navigation";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
};