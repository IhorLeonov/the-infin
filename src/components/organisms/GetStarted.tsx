'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../styles/components/GetStarted.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

import { CardTitle } from '../molecules/CardTitle';
import { Section } from '../atoms/Section';
import { Button } from '../atoms/Button';
import { CardProps } from '@/lib/types';
import { motion } from 'framer-motion';

import girlImage from '../../../public/images/girl.jpeg';
import boyImage from '../../../public/images/boy.jpg';
import PlusesIcon from '../../../public/icons/plusGroup.svg';
import useTargetInView from '@/hooks/useTargetInView';
import { AppContext, IAppContext } from '@/context/app.context';

interface GetStartedProps extends CardProps {}

export default function GetStarted({ className }: GetStartedProps) {
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const targetMiddle = useRef(null);
  const targetBottom = useRef(null);

  const { isInView: isInViewTargetMiddle } = useTargetInView(targetMiddle);
  const { isInView: isInViewTargetBottom } = useTargetInView(targetBottom);

  useEffect(() => {
    if (isInViewTargetBottom || isInViewTargetMiddle) {
      setActiveSection('getstarted');
      return;
    }
    removeActiveSection('getstarted');
  }, [isInViewTargetBottom, isInViewTargetMiddle]);

  return (
    <Section
      className={clsx(styles.section, className)}
      type="filled"
      style={{ paddingBottom: 160 }}
      id="getstarted"
    >
      <CardTitle showTitle={false} cardNumber="03" cardTitle="Get started" />

      <p className={styles.text}>What can The INFIN do for you?</p>

      <strong className={styles.textStrong} ref={targetMiddle}>
        Ready to get started
      </strong>

      <Button className={styles.button} appearance="primary">
        Schedule a live demo
      </Button>

      <div ref={targetBottom} />

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
        animate={{ opacity: isInViewTargetMiddle ? 1 : 0 }}
        transition={{ duration: 3 }}
      >
        <PlusesIcon className={styles.plusesLeft} />
        <PlusesIcon className={styles.plusesRight} />
      </motion.div>
    </Section>
  );
}
