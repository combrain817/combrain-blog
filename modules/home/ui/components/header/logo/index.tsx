import Image from "next/image";
import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <a href="">
        <Image src="/image/devlog.png" alt="Logo" width={50} height={50} />
      </a>
    </h1>
  );
};