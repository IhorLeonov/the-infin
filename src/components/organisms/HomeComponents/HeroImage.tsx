'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../../styles/components/pages/Home/HeroImage.module.scss';

import { useScroll, useTransform, motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';

import Image from 'next/image';
import useTargetInView from '@/hooks/useTargetInView';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

interface HeroImageProps {}

export default function HeroImage({}: HeroImageProps) {
  const { isMobile } = useCheckIsMobile();
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const containerRef = useRef(null);
  const targetRef = useRef(null);

  const { isInView } = useTargetInView(targetRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  useEffect(() => {
    isInView
      ? setActiveSection('home-image')
      : removeActiveSection('home-image');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div ref={targetRef} />
      <motion.div style={{ scale }} className={styles.imageContainer}>
        {isMobile ? (
          <Image
            className={styles.image}
            src={'/images/presentation-mobile.png'}
            alt="presentation"
            quality={100}
            width={1416}
            height={720}
            priority
          />
        ) : (
          <Image
            className={styles.image}
            src={'/images/presentation.png'}
            alt="presentation"
            quality={100}
            width={355}
            height={640}
            priority
          />
        )}
      </motion.div>

      {/* <Button className={styles.button} appearance="primary">
        <span className={styles.btnText}>Play</span>
        <div ref={targetRef} className={styles.circle}>
          <PlayIcon width={16} height={16} />
        </div>
      </Button> */}
    </div>
  );
}
