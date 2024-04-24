import React from 'react';
import styles from '../../styles/components/GetStarted.module.scss';
import Image from 'next/image';

import { CardTitle } from '../molecules/CardTitle';
import { Section } from '../atoms/Section';
import { Button } from '../atoms/Button';

import girlImage from '../../../public/images/girl.png';
import boyImage from '../../../public/images/boy.png';
import PlusesIcon from '../../../public/icons/plusGroup.svg';
import { CardProps } from '@/lib/types';
import clsx from 'clsx';

interface GetStartedProps extends CardProps {}

export default function GetStarted({ className }: GetStartedProps) {
  return (
    <Section className={clsx(styles.section, className)} type="filled">
      <CardTitle showTitle={false} cardNumber="03" cardTitle="Get started" />

      <p className={styles.text}>What can The INFIN do for you?</p>
      <strong className={styles.textStrong}>Ready to get started</strong>

      <Button className={styles.button} appearance="primary">
        Schedule a live demo
      </Button>

      <Image
        className={styles.girlImage}
        src={girlImage}
        width={223}
        height={223}
        alt="girl"
      />
      <Image
        className={styles.boyImage}
        src={boyImage}
        width={223}
        height={223}
        alt="boy"
      />

      <PlusesIcon className={styles.plusesLeft} />
      <PlusesIcon className={styles.plusesRight} />
    </Section>
  );
}
