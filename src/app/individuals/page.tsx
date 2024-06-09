import styles from '../../styles/components/pages/Individuals/IndividualsPage.module.scss';
import BottomComponent from '@/components/BottomComponent';

interface IndividualsPageProps {}

export default async function IndividualsPage({}: IndividualsPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>IndividualsPage</main>

      <BottomComponent />
    </div>
  );
}
