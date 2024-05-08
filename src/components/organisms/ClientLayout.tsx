'use client';

import React, { useContext, useRef } from 'react';
import styles from '../../styles/components/ClientLayout.module.scss';

import Header from './Header';
import Footer from './Footer';
import WelcomeAnimation from './WelcomeAnimation';
import { AppContext, IAppContext } from '@/context/app.context';
import { useInView } from 'framer-motion';

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayotProps) {
  const { showAllDom, setShowAllDom, showFooter } = useContext(
    AppContext,
  ) as IAppContext;

  const ref = useRef(null);
  // const {} = useInView(ref);

  return (
    <div ref={ref}>
      <WelcomeAnimation setShowAllDom={setShowAllDom} />
      {showAllDom && (
        <div className={styles.wrapper}>
          <Header />
          <main>{children}</main>
          {showFooter && <Footer />}
        </div>
      )}
    </div>
  );
}
