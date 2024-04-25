'use client';

import React, { useRef } from 'react';
import styles from '../../styles/components/GetStarted.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

import { CardTitle } from '../molecules/CardTitle';
import { Section } from '../atoms/Section';
import { Button } from '../atoms/Button';
import { CardProps } from '@/lib/types';

import girlImage from '../../../public/images/girl1.jpeg';
import boyImage from '../../../public/images/boy1.jpg';
import PlusesIcon from '../../../public/icons/plusGroup.svg';

import { useScroll, useTransform, motion } from 'framer-motion';

interface GetStartedProps extends CardProps {}

export default function GetStarted({ className }: GetStartedProps) {
  const containerRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ['start end', 'end start'],
  // });

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <Section className={clsx(styles.section, className)} type="filled">
      <CardTitle showTitle={false} cardNumber="03" cardTitle="Get started" />

      <p className={styles.text}>What can The INFIN do for you?</p>
      <strong className={styles.textStrong}>Ready to get started</strong>

      <Button className={styles.button} appearance="primary">
        Schedule a live demo
      </Button>

      <div
        className={clsx(styles.imageContainer, styles.girlImageContainer)}
        ref={containerRef}
      >
        <motion.div style={{}}>
          <Image
            className={styles.image}
            src={girlImage}
            width={223}
            height={223}
            alt="girl"
          />
        </motion.div>
      </div>

      <div className={clsx(styles.imageContainer, styles.boyImageContainer)}>
        <motion.div style={{}}>
          <Image
            className={styles.image}
            src={boyImage}
            width={223}
            height={223}
            alt="boy"
          />
        </motion.div>
      </div>

      <PlusesIcon className={styles.plusesLeft} />
      <PlusesIcon className={styles.plusesRight} />
    </Section>
  );
}
