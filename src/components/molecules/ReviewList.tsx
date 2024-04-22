import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import style from '../../styles/components/ReviewList.module.scss';
import clsx from 'clsx';
import ReviewItem from './ReviewItem';
import { IReview } from '@/lib/types';
import ArrowIcon from '../../../public/icons/arrow.svg';

interface ReviewListProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  reviews: IReview[];
}

export default function ReviewList({
  reviews,
  className,
  ...props
}: ReviewListProps) {
  return (
    <div className={clsx(style.reviews, className)} {...props}>
      <ul className={style.list}>
        {reviews.map((review) => (
          <ReviewItem key={review.name} {...review} />
        ))}
      </ul>

      <div className={style.pagination}>
        <button className={style.buttonLeft}>
          <ArrowIcon />
        </button>

        <div>
          01 <span className={style.span}>/ 03</span>
        </div>

        <button className={style.buttonRight}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
