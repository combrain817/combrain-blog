import styles from "./social-links.module.scss";

export const SocialLinks = () => {
  return (
    <nav className={styles.socialLinks}>
      <ul>
        <li>
          <a href="https://github.com/combrain817">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nak-soo-choi-b37791301/">
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};