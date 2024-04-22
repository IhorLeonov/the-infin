import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import Image from 'next/image';
import style from '../../styles/components/ReviewItem.module.scss';
import clsx from 'clsx';

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
    <li className={clsx(style.reviewItem, className)} {...props}>
      <p className={style.review}>{review}</p>

      <div className={style.reviewer}>
        <Image
          className={style.photo}
          src={imageSrc}
          width={52}
          height={52}
          alt={name}
          loading="lazy"
        />

        <div className={style.nameBox}>
          <div className={style.name}>{name}</div>
          <div className={style.job}>{job}</div>
        </div>
      </div>
    </li>
  );
}
