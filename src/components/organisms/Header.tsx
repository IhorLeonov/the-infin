'use client';

import React, { useState } from 'react';
import styles from '../../styles/components/Header.module.scss';

import Logo from '../atoms/Logo';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isShort, setIsShort] = useState<boolean>(false);

  const variantsHeader = {
    short: {
      justifyContent: 'space-between',
    },
    large: {},
  };

  const variantsLogo = {
    short: { maxWidth: 285 },
    large: { maxWidth: 514 },
  };

  const variantsNav = {
    short: {
      flexDirection: 'row' as 'row',
    },
    large: {
      flexDirection: 'column' as 'column',
      marginLeft: 'auto',
    },
  };

  const variantsLink = {
    short: { padding: 12, marginRight: 12 },
    large: {},
  };

  const variantsButton = {
    short: { height: 50, width: 130 },
    large: { marginLeft: 249 },
  };

  return (
    <motion.header
      className={styles.header}
      layout
      variants={variantsHeader}
      initial={'large'}
      animate={isShort ? 'short' : 'large'}
    >
      <motion.div variants={variantsLogo} transition={{ duration: 0.7 }}>
        <Logo className={styles.logo} />
      </motion.div>

      <motion.nav className={styles.nav} variants={variantsNav}>
        <motion.a
          href="#home"
          className={styles.link}
          variants={variantsLink}
          transition={{ delay: 0 }}
        >
          <p className={styles.p}>Home</p>
        </motion.a>

        <motion.a
          href="#business"
          className={styles.link}
          variants={variantsLink}
          transition={{ delay: 0.1 }}
        >
          <p className={styles.p}>For Businesses</p>
        </motion.a>

        <motion.a
          href="#individuals"
          className={styles.link}
          variants={variantsLink}
          transition={{ delay: 0.2 }}
        >
          <p className={styles.p}>For Individuals</p>
        </motion.a>

        <motion.a
          href="#reviews"
          className={styles.link}
          variants={variantsLink}
          transition={{ delay: 0.3 }}
        >
          <p className={styles.p}>Capitalism 2.0</p>
        </motion.a>

        <motion.a
          href="#getstarted"
          className={styles.link}
          variants={variantsLink}
          transition={{ delay: 0.4 }}
        >
          <p className={styles.p}>Marketing Efforts</p>
        </motion.a>
      </motion.nav>

      <motion.button
        className={styles.button}
        onClick={() => setIsShort(!isShort)}
        variants={variantsButton}
        transition={{ duration: 0.7 }}
      >
        Contact
      </motion.button>
    </motion.header>
  );
}
