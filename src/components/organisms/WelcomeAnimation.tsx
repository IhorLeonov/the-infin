'use client';

import styles from '../../styles/components/WelcomeAnimation.module.scss';

import TheIcon from '../../../public/icons/logo/the.svg';
import IIcon from '../../../public/icons/logo/i.svg';
import NIcon from '../../../public/icons/logo/n.svg';
import FinIcon from '../../../public/icons/logo/fin.svg';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WelcomeAnimation() {
  const [mounted, setMounted] = useState(false);

  document.body.style.overflow = 'hidden';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
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

          <motion.div>
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
