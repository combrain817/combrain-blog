import { PostItem } from "./post-item";
import styles from "./post-list.module.scss";

interface Post {
  title: string;
  summary: string;
  date: string;
  href: string;
}

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
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