import styles from '../../styles/components/pages/Marketing/MarketingPage.module.scss';
import BottomComponent from '@/components/BottomComponent';

interface MarketingPageProps {}

export default async function MarketingPage({}: MarketingPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>MarketingPage</main>

      <BottomComponent />
    </div>
  );
}
