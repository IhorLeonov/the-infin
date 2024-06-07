'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../../styles/components/HeroImage.module.scss';

import { useScroll, useTransform, motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';

import Image from 'next/image';
import useTargetInView from '@/hooks/useTargetInView';

interface HeroImageProps {}

export default function HeroImage({}: HeroImageProps) {
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
    isInView ? setActiveSection('image') : removeActiveSection('image');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <motion.div style={{ scale }} className={styles.imageContainer}>
        <Image
          src="/images/presentation.png"
          alt="presentation"
          layout="responsive"
          width={1416}
          height={720}
        />
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
