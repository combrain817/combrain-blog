import { PostItem } from "./post-item";
import styles from "./post-list.module.scss";
import { getMdxArticles } from "@/lib/mdx";

export const PostList = () => {
  const posts = getMdxArticles();

  if (posts.length === 0) {
    return (
      <main className={styles.postList}>
        <p>게시글이 없습니다.</p>
      </main>
    );
  }

  return (
    <main className={styles.postList}>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <PostItem
              title={post.title}
              summary={post.summary}
              date={post.date}
              href={post.href}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
