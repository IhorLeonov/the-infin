import React from 'react';
import styles from '../styles/components/BottomComponent.module.scss';

import GetStarted from './organisms/GetStarted';
import Footer from './organisms/Footer';

interface BottomComponentProps {}

export default function BottomComponent({}: BottomComponentProps) {
  return (
    <div className={styles.wrapper}>
      <GetStarted />
      <Footer />
    </div>
  );
}
