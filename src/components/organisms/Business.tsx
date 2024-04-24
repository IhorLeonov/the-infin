import React from 'react';
import { Section } from '../atoms/Section';
import ImageWithButton from '../molecules/ImageWithButton';
import Description from '../molecules/Description';
import { Title } from '../atoms/Title';
import styles from '../../styles/components/Business.module.scss';
import { CardTitle } from '../molecules/CardTitle';
import clsx from 'clsx';
import { CardProps } from '@/lib/types';

interface BusinessProps extends CardProps {}

export default function Business({ className }: BusinessProps) {
  return (
    <Section className={clsx(styles.section, className)} type="filled">
      <div className={styles.box}>
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
