'use client';

import React, { DetailedHTMLProps, HtmlHTMLAttributes, useRef } from 'react';
import styles from '../../styles/components/ImageWithButton.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

import { Button } from '../atoms/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div
      className={clsx(styles.wrapper, className)}
      {...props}
      ref={containerRef}
    >
      <motion.div style={{ scale }} className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={imageSrc}
          width={421}
          height={636}
          loading="lazy"
          alt={imageAlt}
        />
      </motion.div>

      <Button className={styles.button} appearance="primary">
        {btnText}
      </Button>
    </div>
  );
}
