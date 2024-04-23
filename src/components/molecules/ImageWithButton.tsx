import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import styles from '../../styles/components/ImageWithButton.module.scss';
import Image from 'next/image';
import { Button } from '../atoms/Button';
import clsx from 'clsx';

interface ImageWithButtonProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  imageSrc: string;
  btnText: string;
  imageAlt: string;
}

export default function ImageWithButton({
  imageSrc,
  imageAlt,
  btnText,
  className,
  ...props
}: ImageWithButtonProps) {
  return (
    <div className={clsx(styles.wrapper, className)} {...props}>
      <Image
        className={styles.image}
        src={imageSrc}
        width={421}
        height={636}
        layout="responsive"
        loading="lazy"
        alt={imageAlt}
      />

      <Button className={styles.button} appearance="primary">
        {btnText}
      </Button>
    </div>
  );
}
