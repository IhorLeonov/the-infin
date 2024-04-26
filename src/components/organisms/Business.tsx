'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../styles/components/Business.module.scss';
import clsx from 'clsx';

import { Section } from '../atoms/Section';
import ImageWithButton from '../molecules/ImageWithButton';
import Description from '../molecules/Description';
import { Title } from '../atoms/Title';
import { CardTitle } from '../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import useTargetInView from '@/hooks/useTargetInView';
import { AppContext, IAppContext } from '@/context/app.context';

interface BusinessProps extends CardProps {}

export default function Business({ className }: BusinessProps) {
  const { setActiveSaction } = useContext(AppContext) as IAppContext;

  const target = useRef(null);
  const { isInView } = useTargetInView(target);

  useEffect(() => {
    isInView ? setActiveSaction('business') : setActiveSaction('other');
  }, [isInView]);

  return (
    <Section className={clsx(styles.section, className)} type="filled">
      <div className={styles.box} ref={target}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          cardNumber="01"
          cardTitle="Business"
        />

        <Title className={styles.title} tag="h2">
          The Insufficient Status Quo for Businesses
        </Title>
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
