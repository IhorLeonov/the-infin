'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/Header.module.scss';

import Logo from '../atoms/Logo';
import { Variants, motion, useInView } from 'framer-motion';
import useCheckIsMobile from '@/hooks/useCheckIsMobile.ts';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isShortHeader, setIsShortHeader] = useState<boolean>(false);
  const { isMobile } = useCheckIsMobile();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setIsShortHeader(!isInView);
  }, [isInView]);

  const variantsHeader = {
    short: {},
    large: {},
  };

  const variantsLogo = {
    short: { maxWidth: 285 },
    large: { maxWidth: 514 },
  };

  const variantsNav = {
    short: {},
    large: {},
  };

  const variantsButton = {
    short: {
      height: 50,
      width: 130,
      display: isMobile ? 'none' : 'inline-block',
    },
    large: {},
  };

  const variantsLink = (column: number): Variants => {
    return {
      short: { marginRight: 24, gridColumn: column },
      large: { gridColumn: 5 },
    };
  };

  return (
    <>
      <div ref={ref} />
      <motion.header
        className={styles.header}
        layout
        variants={variantsHeader}
        initial={'large'}
        animate={isShortHeader ? 'short' : 'large'}
        style={{ position: isMobile ? 'static' : 'fixed' }}
      >
        <motion.div
          variants={variantsLogo}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Logo className={styles.logo} />
        </motion.div>

        <motion.nav className={styles.nav} variants={variantsNav}>
          <motion.a
            href="#home"
            className={styles.link}
            variants={variantsLink(1)}
            transition={{ duration: 0, delay: !isShortHeader ? 0.5 : 0.1 }}
          >
            <p className={styles.p}>Home</p>
          </motion.a>

          <motion.a
            href="#business"
            className={styles.link}
            variants={variantsLink(2)}
            transition={{ duration: 0, delay: !isShortHeader ? 0.4 : 0.2 }}
          >
            <p className={styles.p}>For Businesses</p>
          </motion.a>

          <motion.a
            href="#individuals"
            className={styles.link}
            variants={variantsLink(3)}
            transition={{ duration: 0, delay: 0.3 }}
          >
            <p className={styles.p}>For Individuals</p>
          </motion.a>

          <motion.a
            href="#reviews"
            className={styles.link}
            variants={variantsLink(4)}
            transition={{ duration: 0, delay: !isShortHeader ? 0.2 : 0.4 }}
          >
            <p className={styles.p}>Capitalism 2.0</p>
          </motion.a>

          <motion.a
            href="#getstarted"
            className={styles.link}
            variants={variantsLink(5)}
            transition={{ duration: 0, delay: !isShortHeader ? 0.1 : 0.5 }}
          >
            <p className={styles.p}>Marketing Efforts</p>
          </motion.a>
        </motion.nav>

        <motion.button
          className={styles.button}
          // onClick={() => setIsShortHeader(!isShortHeader)}
          variants={variantsButton}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.button>
      </motion.header>
    </>
  );
}
