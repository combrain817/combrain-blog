import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </nav>
  );
};