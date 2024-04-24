'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/WelcomeAnimation.module.scss';

import { motion } from 'framer-motion';

import FinIcon from '../../../public/icons/logo/fin';
import NIcon from '../../../public/icons/logo/n';
import IIcon from '../../../public/icons/logo/i';
import TheIcon from '../../../public/icons/logo/the';

interface WelcomeAnimationProps {
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WelcomeAnimation({
  setShowAll,
}: WelcomeAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setShowAll(true);
    }, 2000);

    setTimeout(() => {
      document.body.style.overflow = 'scroll';
    }, 5000);
  }, []);

  return (
    mounted && (
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 4 }}
      >
        <motion.div className={styles.logo}>
          <motion.div
            className={styles.the}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <TheIcon />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <IIcon />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <NIcon />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <FinIcon />
          </motion.div>
        </motion.div>
      </motion.div>
    )
  );
}
