import React from 'react';
import styles from '../../styles/components/Reviews.module.scss';

import { Section } from '../atoms/Section';
import { Title } from '../atoms/Title';
import { Divider } from '../atoms/Divider';
import { CardTitle } from '../molecules/CardTitle';
import { reviews } from '@/lib/constants';

import PlusIcon from '../../../public/icons/plus.svg';
import ReviewList from '../molecules/ReviewList';

interface ReviewsProps {}

export default function Reviews({}: ReviewsProps) {
  return (
    <Section className={styles.section} type="filled">
      <div className={styles.firstBlock}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          cardNumber="03"
          cardTitle="Reviews"
        />

        <Title className={styles.title} tag="h2">
          <span>Fairness and</span>{' '}
          <span className={styles.titleAccent}>Objective</span>
        </Title>

        <div className={styles.pluses}>
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
        </div>

        <div className={styles.description}>
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
    </Section>
  );
}
