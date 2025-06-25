import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

export interface Post {
  title: string;
  summary: string;
  date: string;
  href: string;
  filePath: string;
  content?: string;
  isMarkdown?: boolean;
}

function getAllMdxFilesRecursively(
  dir: string,
  baseDir: string = dir
): string[] {
  const files: string[] = [];

  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // 재귀적으로 하위 디렉토리 탐색
        files.push(...getAllMdxFilesRecursively(fullPath, baseDir));
      } else if (item.endsWith(".mdx") || item.endsWith(".md")) {
        // baseDir 기준 상대 경로 생성
        const relativePath = path.relative(baseDir, fullPath);
        files.push(relativePath);
      }
    }
  } catch (error) {
    console.error(`디렉토리 ${dir}를 읽는 중 오류 발생:`, error);
  }

  return files;
}

export function getMdxArticles(): Post[] {
  const articlesDirectory = path.join(process.cwd(), "articles");

  try {
    const mdxFiles = getAllMdxFilesRecursively(articlesDirectory);

    return mdxFiles.map((filePath) => {
      // 확장자 제거 및 경로를 슬러그로 변환
      const slug = filePath.replace(/\.(mdx|md)$/, "").replace(/\\/g, "/");

      return {
        title: path.basename(slug).replace(/-/g, " "),
        summary: `${path.basename(slug)}에 대한 글입니다.`,
        date: new Date().toISOString().split("T")[0],
        href: `/articles/${slug}`,
        filePath: filePath.replace(/\\/g, "/"),
      };
    });
  } catch (error) {
    console.error("MDX 파일을 읽는 중 오류 발생:", error);
    return [];
  }
}

export function getArticleBySlug(slug: string): Post | null {
  const articles = getMdxArticles();

  // URL 디코딩 처리
  const decodedSlug = decodeURIComponent(slug);

  return (
    articles.find((article) => article.href === `/articles/${decodedSlug}`) ||
    null
  );
}

export async function getMarkdownContent(filePath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), "articles", filePath);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    if (filePath.endsWith(".mdx")) {
      const { content } = matter(fileContents);
      return marked(content);
    } else {
      return fileContents;
    }
  } catch (error) {
    console.error(`파일 ${filePath}를 읽는 중 오류 발생:`, error);
    return "";
  }
}
