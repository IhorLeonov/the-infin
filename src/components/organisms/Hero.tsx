'use client';

import React, { useContext, useRef } from 'react';
import styles from '../../styles/components/Hero.module.scss';

import { Section } from '../atoms/Section';
import { Title } from '../atoms/Title';
import { Button } from '../atoms/Button';
// import { AppContext, IAppContext } from '@/context/app.context';

import Image from 'next/image';
import PlusesGrid from '../atoms/PlusesGrid';
import { motion } from 'framer-motion';
import useTargetInView from '@/hooks/useTargetInView';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  // const { setCursorVisibility } = useContext(AppContext) as IAppContext;
  const targetRef = useRef(null);
  const { isInView } = useTargetInView(targetRef);

  return (
    <Section
      id="home"
      className={styles.hero}
      type="ghost"
      // onMouseLeave={() => setCursorVisibility('none')}
      // onMouseOver={() => setCursorVisibility('block')}
    >
      <div className={styles.topBlock}>
        <Title className={styles.smallTitle} tag="h3">
          Web +<br /> Mobile app
        </Title>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/hand-phone.png"
            width={201}
            height={160}
            alt="hand with phone"
            priority
          />
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <span className={styles.description}>
          A market-based assessment of your contribution.
        </span>

        <div className={styles.titleBox}>
          <Title tag="h1" className={styles.title}>
            To know your true value,  Help others understand theirs.
          </Title>
          <div ref={targetRef} />
          <motion.div
            className={styles.plusesGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 3 }}
          >
            <PlusesGrid />
          </motion.div>
        </div>

        <Button className={styles.button} appearance="primary">
          Schedule a demo
        </Button>
      </div>
    </Section>
  );
}
