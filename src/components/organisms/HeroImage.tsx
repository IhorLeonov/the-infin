import Image from 'next/image';
import React from 'react';
import styles from '../../styles/components/HeroImage.module.scss';
import { Button } from '../atoms/Button';
import PlayIcon from '../../../public/icons/play.svg';
// import { useViewportScroll, useTransform } from 'framer-motion';

interface HeroImageProps {}

export default function HeroImage({}: HeroImageProps) {
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className={styles.wrapper}>
      <Image
        src="/images/schoolmates.png"
        alt="schoolmates"
        layout="responsive"
        width={1416}
        height={720}
      />
      <Button className={styles.button} appearance="primary">
        <span className={styles.btnText}>Play</span>
        <div className={styles.circle}>
          <PlayIcon width={16} height={16} />
        </div>
      </Button>
    </div>
  );
}
