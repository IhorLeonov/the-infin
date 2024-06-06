import React from 'react';
import styles from '../../../styles/components/Individuals.module.scss';
import clsx from 'clsx';

import { Section } from '../../atoms/Section';
import { CardTitle } from '../../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import { Divider } from '../../atoms/Divider';

import ImageWithButton from '../../molecules/ImageWithButton';
import AnimatedLineText from '../../molecules/AnimatedLineText';

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

        <div className={styles.description}>
          <Divider className={styles.hr} />

          <div className={styles.topBlock}>
            <h4 className={styles.smallTitle}>For Business</h4>
            <p className={styles.bigText}>
              For employees, lack of recognition, lack of advancement, and toxic
              work culture are among the top reasons for leaving a company.
              Wouldn’t it be empowering to have ownership of–and visibility
              into–your contributions? Employees yearn to get recognized by
              their peers and be rewarded based on their value to the team.
              Ultimately, individuals own their profile on The INFIN and can
              bring their reputations with them, wherever they work.
            </p>
          </div>

          <Divider className={styles.hr} />

          <div className={styles.bottomBlock}>
            <h4 className={styles.smallTitle}>
              Use insights from <br /> The INFIN to
            </h4>

            <p className={styles.bottomText}>
              <span>Get recognition for your contributions</span>

              <span>Own your reputation regardless of place of employment</span>
            </p>

            <p className={styles.bottomText}>
              <span>Better navigate your career</span>
              <span>Let your opinion be heard in a safe, constructive way</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
