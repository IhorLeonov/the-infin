import React from 'react';
import styles from '../../styles/components/Individuals.module.scss';
import { Section } from '../atoms/Section';
import { Title } from '../atoms/Title';
import Description from '../molecules/Description';
import ImageWithButton from '../molecules/ImageWithButton';
import { CardTitle } from '../molecules/CardTitle';

interface IndividualsProps {}

export default function Individuals({}: IndividualsProps) {
  return (
    <Section className={styles.section} type="filled">
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

        <Title className={styles.title} tag="h2">
          Fairness and Objective Data for Individuals
        </Title>
        <Description className={styles.description} />
      </div>
    </Section>
  );
}
