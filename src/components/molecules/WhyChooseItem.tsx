'use client';

import React, { useRef } from 'react';
import { Title } from '../atoms/Title';
import Image from 'next/image';
import styles from '../../styles/components/WhyChooseItem.module.scss';
import { Divider } from '../atoms/Divider';

interface SmallCardProps {
  title: string;
  text: string;
  imageSrc: string;
}

import { useScroll, useTransform, motion } from 'framer-motion';

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
        <Title className={styles.title} tag="h3">
          {title}
        </Title>

        <p className={styles.text}>{text}</p>

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
