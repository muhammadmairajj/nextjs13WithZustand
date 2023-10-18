import PostsCount from '@/components/postsCount/postsCount';
import styles from './page.module.css';
import Posts from '@/components/posts/posts';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Zustand Integrate with NextJS 13.5 </h1>
      <PostsCount />
      <Posts />
    </main>
  )
}
