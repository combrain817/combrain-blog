import { SocialLinks } from "./social-links";
import styles from "./footer.module.scss";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo />
        <small className={styles.copyright}>
          <span>Copyright©2025 combrain-log.</span>
          <span>All rights reserved</span>
        </small>
      </div>
      <SocialLinks />
    </footer>
  );
};
