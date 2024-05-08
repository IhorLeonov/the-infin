'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../styles/components/Business.module.scss';
import clsx from 'clsx';

import { Section } from '../atoms/Section';
import { CardTitle } from '../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import { AppContext, IAppContext } from '@/context/app.context';

import useTargetInView from '@/hooks/useTargetInView';
import ImageWithButton from '../molecules/ImageWithButton';
import Description from '../molecules/Description';
import AnimatedLineText from '../molecules/AnimatedLineText';

interface BusinessProps extends CardProps {}

export default function Business({ className }: BusinessProps) {
  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  const target = useRef(null);
  const { isInView } = useTargetInView(target);

  useEffect(() => {
    isInView ? setActiveSection('business') : removeActiveSection('business');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <Section
      className={clsx(styles.section, className)}
      type="filled"
      id="business"
    >
      <div className={styles.box} ref={target}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          cardNumber="01"
          cardTitle="Business"
        />

        {/* <h2 className={styles.title}>
          The Insufficient Status Quo for Businesses
        </h2> */}
        <AnimatedLineText
          el="h2"
          text={['The Insufficient Status', 'Quo for Businesses']}
          className={styles.title}
        />

        <Description className={styles.description} />
      </div>

      <ImageWithButton
        className={styles.imageWithButton}
        imageSrc="/images/business.png"
        imageAlt="girl and boy with laptop"
        btnText="THE INFIN FOR BUSINESS"
      />
    </Section>
  );
}
