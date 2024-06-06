import clsx from 'clsx';
import styles from '../styles/components/HomePage.module.scss';

import Hero from '@/components/organisms/Hero';
import WhyChoose from '@/components/organisms/HomeComponents/WhyChoose';
import HeroImage from '@/components/organisms/HomeComponents/HeroImage';
import Business from '@/components/organisms/HomeComponents/Business';
import Individuals from '@/components/organisms/HomeComponents/Individuals';
import Reviews from '@/components/organisms/HomeComponents/Reviews';
import GetStarted from '@/components/organisms/HomeComponents/GetStarted';

import { fetchDataFromCMS } from '@/lib/api';

export default async function HomePage() {
  const { data } = await fetchDataFromCMS();

  const content = data.theInfin.theInfinDetail;

  return (
    <div className={styles.page}>
      <Hero content={content} />
      <HeroImage />
      <WhyChoose />

      <div className={styles.cardList}>
        <div className={clsx(styles.card, styles.card1)}>
          <Business />
        </div>

        <div className={clsx(styles.card, styles.card2)}>
          <Individuals />
        </div>

        <div className={clsx(styles.card, styles.card3)}>
          <Reviews />
        </div>

        <div className={clsx(styles.card, styles.card4)}>
          <GetStarted />
        </div>
      </div>
    </div>
  );
}
