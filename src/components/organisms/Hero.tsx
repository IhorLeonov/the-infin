'use client';

import React, { useState } from 'react';
import styles from '../../styles/components/Hero.module.scss';
import Image from 'next/image';
import { Section } from '../atoms/Section';
import { Title } from '../atoms/Title';
import { Button } from '../atoms/Button';
import Cursor from '../atoms/Cursor';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const [cursorDisplay, setCursorDisplay] = useState<'block' | 'none'>('block');

  return (
    <Section
      className={styles.hero}
      type="ghost"
      onMouseLeave={() => setCursorDisplay('block')}
      // onMouseOver={() => setCursorDisplay('block')}
    >
      <div className={styles.topBlock}>
        <Title
          className={styles.smallTitle}
          tag="h3"
          onMouseOver={() => setCursorDisplay('none')}
          onMouseLeave={() => setCursorDisplay('block')}
        >
          Web +<br /> Mobile app
        </Title>

        <Image
          className={styles.image}
          src="/images/hand-phone.png"
          width={201}
          height={160}
          alt="hand with phone"
          priority
          onMouseOver={() => setCursorDisplay('none')}
          onMouseLeave={() => setCursorDisplay('block')}
        />
      </div>

      <div className={styles.bottomBlock}>
        <span
          className={styles.description}
          onMouseOver={() => setCursorDisplay('none')}
          onMouseLeave={() => setCursorDisplay('block')}
        >
          A market-based assessment of your contribution.
        </span>

        <Title
          tag="h1"
          className={styles.title}
          onMouseOver={() => setCursorDisplay('none')}
          onMouseLeave={() => setCursorDisplay('block')}
        >
          To know your true value,  Help others understand theirs.
        </Title>

        <Button
          className={styles.button}
          appearance="primary"
          onMouseOver={() => setCursorDisplay('none')}
          onMouseLeave={() => setCursorDisplay('block')}
        >
          Schedule a demo
        </Button>
      </div>

      <Cursor cursorDisplay={cursorDisplay} className={styles.cursor} />
    </Section>
  );
}
