'use client';

import React, { useContext, useState } from 'react';
import styles from '../../styles/components/ClientLayout.module.scss';

import Header from './Header';
import Footer from './Footer';
import WelcomeAnimation from './WelcomeAnimation';
import Cursor from '../atoms/Cursor';
import { AppContext, IAppContext } from '@/context/app.context';

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayotProps) {
  const { cursorVisibility } = useContext(AppContext) as IAppContext;
  const [showAll, setShowAll] = useState<boolean>(true);

  return (
    <>
      {/* <WelcomeAnimation setShowAll={setShowAll} /> */}
      {showAll && (
        <div className={styles.wrapper}>
          <Cursor cursorDisplay={cursorVisibility} />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
