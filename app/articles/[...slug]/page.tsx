import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/mdx";

import { Header } from "@/modules/home/ui/components/header";
import { Footer } from "@/modules/home/ui/components/footer";
import { Article } from "@/modules/home/ui/components/article";

interface ArticlePageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const slugString = slug.join("/");

  const article = getArticleBySlug(slugString);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <Article article={article} />
      <Footer />
    </>
  );
}
