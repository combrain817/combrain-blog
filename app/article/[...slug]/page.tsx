import { promises as fs } from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import styles from "./article.module.scss";

interface ArticlePageProps {
  params: Promise<{ slug: string[] }>;
}

// URL 슬러그와 파일 경로 매핑
const articlePathMap: Record<string, string> = {
  "html-semantic-guide": "articles/section과 article을 판단하는 방법.md",
  // 새로운 게시글 추가 예시:
  // "another-article": "articles/다른글.md",
};

async function getArticleContent(slugPath: string[]) {
  const slug = slugPath.join("/");
  const filePath = articlePathMap[slug];

  if (!filePath) {
    // 매핑에 없으면 기존 방식으로 시도
    const articlePath =
      path.join(process.cwd(), "articles", ...slugPath) + ".md";

    try {
      const fileContent = await fs.readFile(articlePath, "utf8");
      const { data, content } = matter(fileContent);
      const htmlContent = marked(content);

      const title =
        data.title ||
        content
          .split("\n")
          .find((line) => line.startsWith("# "))
          ?.slice(2) ||
        "Article";

      return { content: htmlContent, title, slug: data.slug };
    } catch (error) {
      console.log("Error reading article:", error);
      return null;
    }
  }

  try {
    const fullPath = path.join(process.cwd(), filePath);
    const fileContent = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContent);
    const htmlContent = marked(content);

    const title =
      data.title ||
      content
        .split("\n")
        .find((line) => line.startsWith("# "))
        ?.slice(2) ||
      "Article";

    return { content: htmlContent, title, slug: data.slug };
  } catch (error) {
    console.log("Error reading article:", error);
    return null;
  }
}


export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article =  await getArticleContent(slug);

  if (!article) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>게시글을 찾을 수 없습니다</h1>
        <p>요청하신 게시글이 존재하지 않습니다.</p>
      </div>
    );
  }

  return (
    <div className={styles["article-container"]}>
      <article dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

