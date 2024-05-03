'use client';

import clsx from 'clsx';
import styles from '../styles/components/HomePage.module.scss';

import Hero from '@/components/organisms/Hero';
import WhyChoose from '@/components/organisms/WhyChoose';
import HeroImage from '@/components/organisms/HeroImage';
import Business from '@/components/organisms/Business';
import Individuals from '@/components/organisms/Individuals';
import Reviews from '@/components/organisms/Reviews';
import GetStarted from '@/components/organisms/GetStarted';

import {
  Variants,
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <HeroImage />
      <WhyChoose />

      <motion.div className={styles.cardList}>
        <motion.div className={clsx(styles.card, styles.card1)}>
          <Business />
        </motion.div>

        <motion.div className={clsx(styles.card, styles.card2)}>
          <Individuals />
        </motion.div>

        <motion.div className={clsx(styles.card, styles.card3)}>
          <Reviews />
        </motion.div>

        <motion.div className={clsx(styles.card, styles.card4)}>
          <GetStarted />
        </motion.div>
      </motion.div>
    </div>
  );
}
