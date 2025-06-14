import { SocialLinks } from "./social-links";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>Copyright©2025 combrain-log. All rights reserved</small>
      <SocialLinks />
    </footer>
  );
};