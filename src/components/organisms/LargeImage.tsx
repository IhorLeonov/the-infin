'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../styles/components/LargeImage.module.scss';

import { useScroll, useTransform, motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';

import Image from 'next/image';
import useTargetInView from '@/hooks/useTargetInView';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';
import { TypeActiveSection } from '@/lib/types';

interface HeroImageProps {
  sectionName: TypeActiveSection;
  mobileImage: string;
  desctopImage: string;
}

export default function HeroImage({
  sectionName,
  mobileImage,
  desctopImage,
}: HeroImageProps) {
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
    isInView ? setActiveSection(sectionName) : removeActiveSection(sectionName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div ref={targetRef} />
      <motion.div style={{ scale }} className={styles.imageContainer}>
        {isMobile ? (
          <Image
            className={styles.image}
            src={mobileImage}
            alt="presentation"
            quality={100}
            width={1416}
            height={720}
            priority
          />
        ) : (
          <Image
            className={styles.image}
            src={desctopImage}
            alt="presentation"
            quality={100}
            width={355}
            height={640}
            priority
          />
        )}
      </motion.div>
    </div>
  );
}
