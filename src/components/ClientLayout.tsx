'use client';

import React, { useContext } from 'react';

import Header from './organisms/Header';
import Footer from './organisms/Footer';
import WelcomeAnimation from './organisms/WelcomeAnimation';

import { AppContext, IAppContext } from '@/context/app.context';

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayotProps) {
  const { showAllDom, setShowAllDom, showFooter } = useContext(
    AppContext,
  ) as IAppContext;

  return (
    <>
      <WelcomeAnimation setShowAllDom={setShowAllDom} />
      {showAllDom && (
        <>
          <Header />
          <main>{children}</main>
          {showFooter && <Footer />}
        </>
      )}
    </>
  );
}
