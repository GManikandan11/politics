import Link from 'next/link';
import styles from './css/PostList.module.css';

interface Post {
  title: string;
  slug: { current: string };
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <section className={styles.posts}>
      <h2>Latest Posts</h2>
      <ul className={styles.postGrid}>
        {posts.map((post) => (
          <li key={post.slug.current} className={styles.postItem}>
            <Link href={`/${post.slug.current}`} className={styles.postLink}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
