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
        <div>
          <Business className={styles.card} />
        </div>

        <div>
          <Individuals className={styles.card} />
        </div>

        <div>
          <Reviews className={styles.card} />
        </div>

        <div>
          <GetStarted className={styles.card} />
        </div>
      </div>
    </div>
  );
}
