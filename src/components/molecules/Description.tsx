import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import styles from '../../styles/components/Description.module.scss';
import { Divider } from '../atoms/Divider';

import clsx from 'clsx';
import AnimatedText from './AnimatedText';
import useCheckIsMobile from '@/hooks/useCheckIsMobile.ts';

interface DescriptionProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function Description({ className, ...props }: DescriptionProps) {
  const { isTablet } = useCheckIsMobile();

  return (
    <div className={clsx(className)} {...props}>
      <Divider className={styles.hr} />

      <div className={styles.topBlock}>
        <h3 className={styles.title}>For employers</h3>

        {!isTablet ? (
          <AnimatedText
            className={styles.bigText}
            text="It’s hard to evaluate individual contributions in a team environment
          because some employees are more visible. Similarly, some employees may
          take more credit than others. Meanwhile, the ones who are actually
          driving the company’s success may be flying completely under the
          radar. And then, employers have to decide on bonuses and promotions
          based on limited information and often with resentment from the
          employees. It’s frustrating."
            once
          />
        ) : (
          <p className={styles.bigText}>
            It’s hard to evaluate individual contributions in a team environment
            because some employees are more visible. Similarly, some employees
            may take more credit than others. Meanwhile, the ones who are
            actually driving the company’s success may be flying completely
            under the radar. And then, employers have to decide on bonuses and
            promotions based on limited information and often with resentment
            from the employees. It’s frustrating.
          </p>
        )}
      </div>

      <Divider className={styles.hr} />

      <div className={styles.bottomBlock}>
        <h3 className={styles.title}>
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
  );
}
