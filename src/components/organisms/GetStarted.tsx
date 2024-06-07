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
import { AppContext, IAppContext } from '@/context/app.context';

import girlImage from '../../../public/images/girl.png';
import boyImage from '../../../public/images/boy.png';
import PlusesIcon from '../../../public/icons/plus-group.svg';
import PlusesSmallIcon from '../../../public/icons/pluses-group-small.svg';

import useTargetInView from '@/hooks/useTargetInView';
import AnimatedLineText from '../molecules/AnimatedLineText';
import AnimatedText from '../molecules/AnimatedText';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';

interface GetStartedProps extends CardProps {}

export default function GetStarted({ className }: GetStartedProps) {
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;
  const { isMobile } = useCheckIsMobile();

  const targetMiddle = useRef(null);
  const targetBottom = useRef(null);

  const { isInView: isInViewTargetMiddle } = useTargetInView(targetMiddle);
  const { isInView: isInViewTargetBottom } = useTargetInView(targetBottom);

  useEffect(() => {
    isInViewTargetBottom
      ? setActiveSection('getstarted')
      : removeActiveSection('getstarted');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewTargetBottom, isInViewTargetMiddle]);

  return (
    <Section
      className={clsx(styles.section, className)}
      type="filled"
      style={{ paddingBottom: 160 }}
      id="getstarted"
    >
      <CardTitle
        className={styles.cardTitle}
        showTitle={false}
        cardNumber="03"
        cardTitle="Get started"
      />

      <AnimatedText
        className={styles.smallText}
        text={['What can The INFIN do for you?']}
        delay={0.5}
      />

      <div ref={targetMiddle} className={styles.targetMiddle}>
        <AnimatedLineText
          className={styles.mainTitle}
          el="h1"
          text={['get started']}
          once
        />
      </div>

      <Button className={styles.button} appearance="primary">
        Schedule a live demo
      </Button>

      <div ref={targetBottom} />

      <div className={clsx(styles.imageContainer, styles.girlImageContainer)}>
        <Image className={styles.image} src={girlImage} alt="girl" />
      </div>

      <div className={clsx(styles.imageContainer, styles.boyImageContainer)}>
        <Image className={styles.image} src={boyImage} alt="boy" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {isMobile ? (
          <>
            <PlusesSmallIcon className={styles.plusesLeft} />
            <PlusesSmallIcon className={styles.plusesRight} />
          </>
        ) : (
          <>
            <PlusesIcon className={styles.plusesLeft} />
            <PlusesIcon className={styles.plusesRight} />
          </>
        )}
      </motion.div>
    </Section>
  );
}
