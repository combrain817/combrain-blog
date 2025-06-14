import { Header } from "@/modules/home/ui/components/header";
import { PostList } from "@/modules/home/ui/components/post-list";
import { Footer } from "@/modules/home/ui/components/footer";

export default function Home() {
  const posts = [
    {
      title: "Title",
      summary: "간략한 내용",
      date: "2025-01-01",
      href: ""
    }
  ];

  return (
    <>
      <Header />
      <PostList posts={posts} />
      <Footer />
    </>
  );
}

