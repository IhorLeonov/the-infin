'use client';

import React, { useState } from 'react';
import styles from '../../styles/components/ClientLayout.module.scss';

import Header from './Header';
import Footer from './Footer';
import WelcomeAnimation from './WelcomeAnimation';

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayotProps) {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <>
      <WelcomeAnimation setShowAll={setShowAll} />
      {showAll && (
        <div className={styles.wrapper}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
