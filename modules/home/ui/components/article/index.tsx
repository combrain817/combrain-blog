import { getMarkdownContent, Post } from "@/lib/mdx";
import styles from "./article.module.scss";

export const Article = async ({ article }: { article: Post }) => {
  const htmlContent = await getMarkdownContent(article.filePath);

  return (
    <article className={styles["article-container"]}>
      {/* 글 제목 */}
      <header className={styles.header}>
        <h2>{article.title}</h2>
        {article.date && <time>{article.date}</time>}
      </header>

      {/* 글 내용 영역(mdx -> html 변환하여 보여짐) */}
      <section
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
};
