import styles from '../../styles/components/pages/Capitalism/CapitalismPage.module.scss';
import BottomComponent from '@/components/BottomComponent';

interface CapitalismPageProps {}

export default async function CapitalismPage({}: CapitalismPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>CapitalismPage</main>

      <BottomComponent />
    </div>
  );
}
