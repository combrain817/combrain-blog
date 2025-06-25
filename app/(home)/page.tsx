import { Header } from "@/modules/home/ui/components/header";
import { PostList } from "@/modules/home/ui/components/post-list";
import { Footer } from "@/modules/home/ui/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  );
}
