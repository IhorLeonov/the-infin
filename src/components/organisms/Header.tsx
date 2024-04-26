'use client';

import React, { useContext, useRef } from 'react';
import styles from '../../styles/components/Header.module.scss';

import Logo from '../atoms/Logo';
import { Variants, motion, useInView } from 'framer-motion';
import useCheckIsMobile from '@/hooks/useCheckIsMobile.ts';
import useTargetInView from '@/hooks/useTargetInView';
import { AppContext, IAppContext } from '@/context/app.context';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const ref = useRef(null);

  const { isMobile } = useCheckIsMobile();
  const { isInView } = useTargetInView(ref);
  const { activeSection } = useContext(AppContext) as IAppContext;

  const variantsLogo = {
    short: { maxWidth: 285 },
    large: { maxWidth: 514 },
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
        initial={'large'}
        animate={!isInView ? 'short' : 'large'}
        style={{ position: isMobile ? 'static' : 'fixed' }}
      >
        <motion.div
          variants={variantsLogo}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Logo
            className={styles.logo}
            fill={activeSection === 'reviews' ? '#ffcd00' : '#121212'}
          />
        </motion.div>

        <nav className={styles.nav}>
          <motion.a
            href="#home"
            className={styles.link}
            variants={variantsLink(1)}
            transition={{ duration: 0, delay: isInView ? 0.5 : 0.1 }}
          >
            <p className={styles.p}>Home</p>
          </motion.a>

          <motion.a
            href="#business"
            className={styles.link}
            variants={variantsLink(2)}
            transition={{ duration: 0, delay: isInView ? 0.4 : 0.2 }}
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
            transition={{ duration: 0, delay: isInView ? 0.2 : 0.4 }}
          >
            <p className={styles.p}>Capitalism 2.0</p>
          </motion.a>

          <motion.a
            href="#getstarted"
            className={styles.link}
            variants={variantsLink(5)}
            transition={{ duration: 0, delay: isInView ? 0.1 : 0.5 }}
          >
            <p className={styles.p}>Marketing Efforts</p>
          </motion.a>
        </nav>

        <motion.button
          className={styles.button}
          variants={variantsButton}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.button>
      </motion.header>
    </>
  );
}
