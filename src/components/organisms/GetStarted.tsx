'use client';

import React, { useRef } from 'react';
import styles from '../../styles/components/GetStarted.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

import { CardTitle } from '../molecules/CardTitle';
import { Section } from '../atoms/Section';
import { Button } from '../atoms/Button';
import { CardProps } from '@/lib/types';
import { motion } from 'framer-motion';

import girlImage from '../../../public/images/girl1.jpeg';
import boyImage from '../../../public/images/boy1.jpg';
import PlusesIcon from '../../../public/icons/plusGroup.svg';
import useTargetInView from '@/hooks/useTargetInView';

interface GetStartedProps extends CardProps {}

export default function GetStarted({ className }: GetStartedProps) {
  const target = useRef(null);

  const { isInView } = useTargetInView(target);

  return (
    <Section className={clsx(styles.section, className)} type="filled">
      <CardTitle showTitle={false} cardNumber="03" cardTitle="Get started" />

      <p className={styles.text}>What can The INFIN do for you?</p>
      <strong className={styles.textStrong} ref={target}>
        Ready to get started
      </strong>

      <Button className={styles.button} appearance="primary">
        Schedule a live demo
      </Button>

      <div className={clsx(styles.imageContainer, styles.girlImageContainer)}>
        <Image
          className={styles.image}
          src={girlImage}
          width={223}
          height={223}
          alt="girl"
        />
      </div>

      <div className={clsx(styles.imageContainer, styles.boyImageContainer)}>
        <Image
          className={styles.image}
          src={boyImage}
          width={223}
          height={223}
          alt="boy"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <PlusesIcon className={styles.plusesLeft} />
        <PlusesIcon className={styles.plusesRight} />
      </motion.div>
    </Section>
  );
}
