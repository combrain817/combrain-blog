import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <HeaderLogo />
      </h1>
      <Navigation />
    </header>
  );
};
