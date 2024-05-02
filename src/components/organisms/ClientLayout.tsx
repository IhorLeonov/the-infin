'use client';

import React, { useContext } from 'react';
import styles from '../../styles/components/ClientLayout.module.scss';

import Header from './Header';
import Footer from './Footer';
import WelcomeAnimation from './WelcomeAnimation';
import { AppContext, IAppContext } from '@/context/app.context';
// import Cursor from '../atoms/Cursor';
// import useCheckIsMobile from '@/hooks/useCheckIsMobile.ts';

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayotProps) {
  // const { isTablet } = useCheckIsMobile();
  const { showAllDom, setShowAllDom } = useContext(AppContext) as IAppContext;

  return (
    <>
      <WelcomeAnimation setShowAllDom={setShowAllDom} />
      {showAllDom && (
        <div className={styles.wrapper}>
          {/* {!isTablet && <Cursor cursorDisplay={cursorVisibility} />} */}
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
