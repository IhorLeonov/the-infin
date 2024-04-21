import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "../../styles/components/Description.module.scss";
import { Divider } from "../atoms/Divider";
import { Title } from "../atoms/Title";
import clsx from "clsx";

interface DescriptionProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default function Description({ className, ...props }: DescriptionProps) {
  return (
    <div className={clsx(className)} {...props}>
      <Divider />

      <div className={styles.topBlock}>
        <Title className={styles.title} tag="h3">
          For employers
        </Title>
        <p className={styles.bigText}>
          It’s hard to evaluate individual contributions in a team environment
          because some employees are more visible. Similarly, some employees may
          take more credit than others. Meanwhile, the ones who are actually
          driving the company’s success may be flying completely under the
          radar. And then, employers have to decide on bonuses and promotions
          based on limited information and often with resentment from the
          employees. It’s frustrating.
        </p>
      </div>

      <Divider />

      <div className={styles.bottomBlock}>
        <Title className={styles.title} tag="h3">
          Use The INFIN’s <br /> insights to
        </Title>

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
