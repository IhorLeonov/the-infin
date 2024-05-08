'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../styles/components/Reviews.module.scss';
import clsx from 'clsx';

import { Section } from '../atoms/Section';
import { Divider } from '../atoms/Divider';
import { CardTitle } from '../molecules/CardTitle';
import { reviews } from '@/lib/constants';
import { CardProps } from '@/lib/types';
import { motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';

import PlusIcon from '../../../public/icons/plus.svg';
import ReviewList from '../molecules/ReviewList';
import useTargetInView from '@/hooks/useTargetInView';
import AnimatedLineText from '../molecules/AnimatedLineText';

interface ReviewsProps extends CardProps {}

export default function Reviews({ className }: ReviewsProps) {
  const targetMiddle = useRef(null);
  const targetBottom = useRef(null);

  const { isInView: isInViewTargetBottom } = useTargetInView(targetBottom);
  const { isInView: isInViewTargetMiddle } = useTargetInView(targetMiddle);

  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  useEffect(() => {
    isInViewTargetBottom || isInViewTargetMiddle
      ? setActiveSection('reviews')
      : removeActiveSection('reviews');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewTargetBottom, isInViewTargetMiddle]);

  return (
    <Section
      className={clsx(styles.section, className)}
      type="filled"
      id="reviews"
    >
      <div className={styles.firstBlock}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          cardNumber="03"
          cardTitle="Reviews"
        />

        <h2 className={styles.title}>
          {/* <span>Fairness and</span>{' '}
          <span className={styles.titleAccent}>Objective</span> */}
          {/* <AnimatedLineText el="span" text={['Fairness and']} />
          <AnimatedLineText
            className={styles.titleAccent}
            el="span"
            text={['Objective']}
          /> */}
        </h2>

        <AnimatedLineText
          className={styles.title}
          el="h2"
          text={['Fairness and', 'Objective']}
        />

        <motion.div
          className={styles.pluses}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
        </motion.div>

        <div className={styles.description} ref={targetMiddle}>
          <p>
            The INFIN’s data is an objective, flexible, dynamic, and real-time
            alternative to the limited and speculative information normally
            available to employers and individuals.
          </p>

          <Divider className={styles.hr} />

          <p>
            The old maxim of “knowledge is power” applies here for both
            employers and employees. Don’t let individual performance and
            recognition be lost in the cloud of office politics. The INFIN gives
            a voice to each individual and a fuller picture to the employer.
          </p>
        </div>
      </div>

      <ReviewList reviews={reviews} />
      <div ref={targetBottom} />
    </Section>
  );
}
