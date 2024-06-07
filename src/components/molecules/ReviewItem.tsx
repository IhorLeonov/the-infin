'use client';

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import styles from '../../styles/components/ReviewItem.module.scss';
import clsx from 'clsx';

import Image from 'next/image';

interface ReviewItemProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  review: string;
  imageSrc: string;
  name: string;
  job: string;
}

export default function ReviewItem({
  review,
  imageSrc,
  name,
  job,
  className,
  ...props
}: ReviewItemProps) {
  return (
    <li className={clsx(styles.reviewItem, className)} {...props}>
      <p className={styles.review}>{review}</p>

      <div className={styles.reviewer}>
        <Image
          className={styles.photo}
          src={imageSrc}
          width={52}
          height={52}
          alt={name}
          loading="lazy"
        />

        <div className={styles.nameBox}>
          <div className={styles.name}>{name}</div>
          <div className={styles.job}>{job}</div>
        </div>
      </div>
    </li>
  );
}
