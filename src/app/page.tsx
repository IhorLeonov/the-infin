import clsx from 'clsx';
import styles from '../styles/components/HomePage.module.scss';

import Hero from '@/components/organisms/Hero';
import WhyChoose from '@/components/organisms/WhyChoose';
import HeroImage from '@/components/organisms/HeroImage';
import Business from '@/components/organisms/Business';
import Individuals from '@/components/organisms/Individuals';
import Reviews from '@/components/organisms/Reviews';
import GetStarted from '@/components/organisms/GetStarted';

import { fetchDataFromCMS } from '@/lib/datocms-api';

export default async function HomePage() {
  const { data } = await fetchDataFromCMS();

  const content = data.theInfin.theInfinDetail;
  console.log(content);

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
