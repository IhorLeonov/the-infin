'use client';

import React, { useRef } from 'react';
import styles from '../../styles/components/Hero.module.scss';
import Image from 'next/image';
import PlusesGrid from '../atoms/PlusesGrid';
import useTargetInView from '@/hooks/useTargetInView';
import AnimatedText from '../molecules/AnimatedText';

import { Section } from '../atoms/Section';
import { Button } from '../atoms/Button';
import { motion } from 'framer-motion';
import { IInfinDetail } from '@/lib/api';
import { notFound } from 'next/navigation';

interface HeroProps {
  content: IInfinDetail[] | undefined;
}

export default function Hero({ content }: HeroProps) {
  const targetRef = useRef(null);
  const { isInView } = useTargetInView(targetRef);

  const heroData = content?.find((item) => item.__typename === 'HeroRecord');
  if (!heroData) notFound();

  return (
    <Section id="home" className={styles.hero} type="ghost">
      <div className={styles.topBlock}>
        <h3 className={styles.smallTitle}>
          <span>
            {/* Web + Mobile app */}
            {heroData?.imageTitle}
          </span>
        </h3>

        <motion.div className={styles.imageContainer}>
          <Image
            className={styles.image}
            // src="/images/hand-phone.png"
            src={heroData.smallImage.url}
            width={201}
            height={160}
            alt="hand with phone"
            priority
          />
        </motion.div>
      </div>

      <div className={styles.bottomBlock}>
        <AnimatedText
          el="span"
          className={styles.description}
          // text="A market-based assessment of your contribution."
          text={heroData.description}
          delay={1.5}
          once
        />
        {/* <span className={styles.description}>
          A market-based assessment of your contribution.
        </span> */}

        <motion.div
          initial={{ scale: 0.75, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className={styles.titleBox}
        >
          <h1 className={styles.mainTitle}>
            {/* To know your true value, Help others understand theirs. */}
            {heroData.mainTitle}
          </h1>

          <div ref={targetRef} />

          {heroData.isPluses && (
            <motion.div
              className={styles.plusesGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <PlusesGrid />
            </motion.div>
          )}
        </motion.div>

        {heroData.isButton && (
          <Button className={styles.button} appearance="primary">
            {/* Schedule a demo */}
            {heroData.buttonText}
          </Button>
        )}
      </div>
    </Section>
  );
}
