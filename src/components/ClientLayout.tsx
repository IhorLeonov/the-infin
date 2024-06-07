'use client';

import React, { useContext } from 'react';
import Header from './organisms/Header';
import WelcomeAnimation from './organisms/WelcomeAnimation';

import { AppContext, IAppContext } from '@/context/app.context';

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayotProps) {
  const { showAllDom, setShowAllDom } = useContext(AppContext) as IAppContext;

  return (
    <>
      {/* <WelcomeAnimation setShowAllDom={setShowAllDom} /> */}
      {showAllDom ||
        (!showAllDom && (
          <>
            <Header />
            {children}
            {/* <Footer /> */}
          </>
        ))}
    </>
  );
}
