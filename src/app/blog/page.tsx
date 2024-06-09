import styles from '../../styles/components/pages/Blog/BlogPage.module.scss';
import BottomComponent from '@/components/BottomComponent';

interface BlogPageProps {}

export default async function BlogPage({}: BlogPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>BlogPage</main>

      <BottomComponent />
    </div>
  );
}
