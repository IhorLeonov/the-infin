import React from 'react';
import styles from '../../styles/components/Individuals.module.scss';
import clsx from 'clsx';

import { Section } from '../atoms/Section';
import { CardTitle } from '../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import Description from '../molecules/Description';
import ImageWithButton from '../molecules/ImageWithButton';
import AnimatedLineText from '../molecules/AnimatedLineText';

interface IndividualsProps extends CardProps {}

export default function Individuals({ className }: IndividualsProps) {
  return (
    <Section
      className={clsx(styles.section, className)}
      type="filled"
      id="individuals"
    >
      <ImageWithButton
        className={styles.imageWithButton}
        imageSrc="/images/individuals.png"
        imageAlt="girl and boy with laptop"
        btnText="THE INFIN FOR Individuals"
      />

      <div className={styles.box}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          cardNumber="02"
          cardTitle="INDIVIDUALS"
        />

        {/* <h2 className={styles.title}>
          Fairness and Objective Data for Individuals
        </h2> */}
        <AnimatedLineText
          el="h2"
          text={['Fairness and Objective', 'Data for Individuals']}
          className={styles.title}
        />

        <Description className={styles.description} />
      </div>
    </Section>
  );
}
