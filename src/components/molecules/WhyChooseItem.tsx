'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/components/WhyChooseItem.module.scss';
import AnimatedText from './AnimatedText';

import { Divider } from '../atoms/Divider';
import { useScroll, useTransform, motion } from 'framer-motion';

interface SmallCardProps {
  title: string[];
  text: string;
  imageSrc: string;
}

export default function WhyChooseItem({
  title,
  text,
  imageSrc,
}: SmallCardProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <li ref={containerRef}>
      <Divider className={styles.hr} />
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        {/* <AnimatedLineText
          delay={1}
          className={styles.title}
          el="h3"
          text={title}
        /> */}

        {/* <p className={styles.text}>{text}</p> */}
        <AnimatedText className={styles.text} text={text} once />

        <div className={styles.imageContainer}>
          <motion.div style={{ scale }}>
            <Image
              className={styles.image}
              src={imageSrc}
              width={223}
              height={223}
              alt="image of people"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </li>
  );
}
