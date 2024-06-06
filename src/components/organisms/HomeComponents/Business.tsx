'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../../styles/components/Business.module.scss';
import clsx from 'clsx';

import { Section } from '../../atoms/Section';
import { CardTitle } from '../../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import { AppContext, IAppContext } from '@/context/app.context';
import { Divider } from '../../atoms/Divider';

import useTargetInView from '@/hooks/useTargetInView';
import ImageWithButton from '../../molecules/ImageWithButton';
import AnimatedLineText from '../../molecules/AnimatedLineText';

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

        {/* <h3 className={styles.title}>
          The Insufficient Status Quo for Businesses
        </h3> */}
        <AnimatedLineText
          el="h3"
          text={['The Insufficient Status', 'Quo for Businesses']}
          className={styles.title}
        />

        <div className={styles.description}>
          <Divider className={styles.hr} />

          <div className={styles.topBlock}>
            <h4 className={styles.smallTitle}>For employers</h4>
            <p className={styles.bigText}>
              It’s hard to evaluate individual contributions in a team
              environment because some employees are more visible. Similarly,
              some employees may take more credit than others. Meanwhile, the
              ones who are actually driving the company’s success may be flying
              completely under the radar. And then, employers have to decide on
              bonuses and promotions based on limited information and often with
              resentment from the employees. It’s frustrating.
            </p>
          </div>

          <Divider className={styles.hr} />

          <div className={styles.bottomBlock}>
            <h3 className={styles.smallTitle}>
              Use The INFIN’s <br /> insights to
            </h3>

            <p className={styles.bottomText}>
              <span>
                Determine the individual contribution and ROI of every employee
              </span>

              <span>
                Identify underperformers and better utilize employee strengths
              </span>
            </p>

            <p className={styles.bottomText}>
              <span>Improve team dynamics and company culture</span>
              <span>
                Invest with better alignment of ROI, labor spend, and business
                objectives
              </span>
            </p>
          </div>
        </div>
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
