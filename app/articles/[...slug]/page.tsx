import { notFound } from "next/navigation";
import { getArticleBySlug, getMarkdownContent } from "@/lib/mdx";
import styles from "./article.module.scss";

interface ArticlePageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const slugString = slug.join("/");

  const article = await getArticleBySlug(slugString);

  if (!article) {
    notFound();
  }

  const htmlContent = await getMarkdownContent(article.filePath);

  return (
    <div className={styles["article-container"]}>
      <header className={styles.header}>
        <h1>{article.title}</h1>
        {article.date && <time>{article.date}</time>}
      </header>

      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
