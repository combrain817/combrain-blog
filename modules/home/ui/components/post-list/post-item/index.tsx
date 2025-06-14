import styles from "./post-item.module.scss";

interface PostItemProps {
  title: string;
  summary: string;
  date: string;
  href: string;
}

export const PostItem = ({ title, summary, date, href }: PostItemProps) => {
  return (
    <article className={styles.postItem}>
      <header>
        <a href={href}>
          <h2>{title}</h2>
        </a>
        <p>{summary}</p>
      </header>
      <footer>
        <p>
          작성일: <time dateTime={date}>{date}</time>
        </p>
      </footer>
    </article>
  );
};