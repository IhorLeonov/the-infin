import styles from '../styles/components/HomePage.module.scss';

import Hero from '@/components/organisms/Hero';
import WhyChoose from '@/components/organisms/HomeComponents/WhyChoose';
import Business from '@/components/organisms/HomeComponents/Business';
import Individuals from '@/components/organisms/HomeComponents/Individuals';
import Reviews from '@/components/organisms/HomeComponents/Reviews';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';

import { fetchDataFromCMS } from '@/lib/api';

export default async function HomePage() {
  const { data } = await fetchDataFromCMS();

  const content = data.theInfin.theInfinDetail;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero content={content} />
        <LargeImage
          sectionName="home-image"
          mobileImage="/images/presentation-mobile.png"
          desctopImage="/images/presentation.png"
        />
        <WhyChoose />

        <div className={styles.cardList}>
          <Business />
          <Individuals />
          <Reviews />
        </div>
      </main>

      <BottomComponent />
    </div>
  );
}
