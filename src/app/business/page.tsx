import styles from '../../styles/components/pages/Business/BusinessPage.module.scss';
import BottomComponent from '@/components/BottomComponent';

interface BusinessPageProps {}

export default async function BusinessPage({}: BusinessPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>BusinesssPage</main>

      <BottomComponent />
    </div>
  );
}
