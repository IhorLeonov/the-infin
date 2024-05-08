'use client';

import React, { useContext, useRef } from 'react';
import styles from '../../styles/components/Header.module.scss';

import { Variants, motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';
import { colors } from '@/lib/constants';

import Logo from '../atoms/Logo';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';
import useTargetInView from '@/hooks/useTargetInView';
import clsx from 'clsx';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { light, dark, accent } = colors;
  const { activeSection } = useContext(AppContext) as IAppContext;
  const { isMobile } = useCheckIsMobile();

  const targetRef = useRef(null);

  const { isInView } = useTargetInView(targetRef);

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

  const colorCondition =
    activeSection?.includes('reviews') || activeSection?.includes('image');

  return (
    <>
      <div ref={targetRef} />
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
          <Logo className={styles.logo} fill={colorCondition ? accent : dark} />
        </motion.div>

        <nav
          className={styles.nav}
          style={{
            color: colorCondition ? light : dark,
          }}
        >
          <motion.a
            href="#home"
            className={styles.link}
            variants={variantsLink(1)}
            transition={{ duration: 0, delay: isInView ? 0.5 : 0.1 }}
          >
            Home
          </motion.a>

          <motion.a
            href="#business"
            className={styles.link}
            variants={variantsLink(2)}
            transition={{ duration: 0, delay: isInView ? 0.4 : 0.2 }}
          >
            For Businesses
          </motion.a>

          <motion.a
            href="#individuals"
            className={styles.link}
            variants={variantsLink(3)}
            transition={{ duration: 0, delay: 0.3 }}
          >
            For Individuals
          </motion.a>

          <motion.a
            href="#reviews"
            className={styles.link}
            variants={variantsLink(4)}
            transition={{ duration: 0, delay: isInView ? 0.2 : 0.4 }}
          >
            Capitalism 2.0
          </motion.a>

          <motion.a
            href="#getstarted"
            className={styles.link}
            variants={variantsLink(5)}
            transition={{ duration: 0, delay: isInView ? 0.1 : 0.5 }}
          >
            Marketing Efforts
          </motion.a>
        </nav>

        <motion.button
          className={clsx(styles.button, {
            [styles.buttonReview]: colorCondition === true,
            [styles.buttonGetStarted]: activeSection?.includes('getstarted'),
          })}
          variants={variantsButton}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.button>
      </motion.header>
    </>
  );
}
