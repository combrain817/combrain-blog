import { Github, Linkedin } from "lucide-react";
import styles from "./social-links.module.scss";

export const SocialLinks = () => {
  return (
    <nav className={styles.socialLinks}>
      <ul>
        <li>
          <a
            href="https://github.com/combrain817"
            className={styles.link}
            target="blank"
          >
            <span className={styles.text}>Github</span>
            <Github className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nak-soo-choi-b37791301/"
            className={styles.link}
            target="blank"
          >
            <span className={styles.text}>LinkedIn</span>
            <Linkedin className={styles.icon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
