import styles from '../../styles/components/pages/Contact/ContactPage.module.scss';
import BottomComponent from '@/components/BottomComponent';

interface ContactPageProps {}

export default async function ContactPage({}: ContactPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>ContactPage</main>

      <BottomComponent />
    </div>
  );
}
