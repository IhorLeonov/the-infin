import styles from '../styles/components/HomePage.module.scss';

import Hero from '@/components/organisms/Hero';
import WhyChoose from '@/components/organisms/WhyChoose';
import HeroImage from '@/components/organisms/HeroImage';
import Business from '@/components/organisms/Business';
import Individuals from '@/components/organisms/Individuals';
import Reviews from '@/components/organisms/Reviews';
import GetStarted from '@/components/organisms/GetStarted';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <HeroImage />
      <WhyChoose />

      <div className={styles.cardList}>
        <Business className={styles.card} />
        <Individuals className={styles.card} />
        <Reviews className={styles.card} />
        <GetStarted className={styles.card} />
      </div>
    </div>
  );
}
