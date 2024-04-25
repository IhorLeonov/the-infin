'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import styles from '../../styles/components/HeroImage.module.scss';
import { Button } from '../atoms/Button';
import PlayIcon from '../../../public/icons/play.svg';
import { useScroll, useTransform, motion } from 'framer-motion';

interface HeroImageProps {}

export default function HeroImage({}: HeroImageProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <div className={styles.wrapper} ref={container}>
      <motion.div style={{ scale }} className={styles.imageContainer}>
        <Image
          src="/images/schoolmates.png"
          alt="schoolmates"
          layout="responsive"
          width={1416}
          height={720}
        />
      </motion.div>
      <Button className={styles.button} appearance="primary">
        <span className={styles.btnText}>Play</span>
        <div className={styles.circle}>
          <PlayIcon width={16} height={16} />
        </div>
      </Button>
    </div>
  );
}
