'use client';

import React, { useContext, useRef } from 'react';
import styles from '../../styles/components/Hero.module.scss';
import Image from 'next/image';
import { Section } from '../atoms/Section';
import { Title } from '../atoms/Title';
import { Button } from '../atoms/Button';
import { AppContext, IAppContext } from '@/context/app.context';

import { useScroll, useTransform, motion } from 'framer-motion';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const { setCursorVisibility } = useContext(AppContext) as IAppContext;

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
  });

  const y = useTransform(scrollYProgress, [0, 0.4], ['0', '150px']);

  return (
    <Section
      ref={container}
      className={styles.hero}
      type="ghost"
      onMouseLeave={() => setCursorVisibility('none')}
      onMouseOver={() => setCursorVisibility('block')}
    >
      <div className={styles.topBlock}>
        <Title className={styles.smallTitle} tag="h3">
          Web +<br /> Mobile app
        </Title>

        <div className={styles.imageContainer}>
          <motion.div style={{ y }}>
            <Image
              className={styles.image}
              src="/images/hand-phone.png"
              width={201}
              height={160}
              alt="hand with phone"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <span className={styles.description}>
          A market-based assessment of your contribution.
        </span>

        <Title tag="h1" className={styles.title}>
          To know your true value,  Help others understand theirs.
        </Title>

        <Button className={styles.button} appearance="primary">
          Schedule a demo
        </Button>
      </div>
    </Section>
  );
}
