'use client';

import React, { useContext } from 'react';
import Header from './organisms/Header';
// import WelcomeAnimation from './organisms/WelcomeAnimation';

// import { AppContext, IAppContext } from '@/context/app.context';

import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./organisms/Header'), {
  ssr: false,
  // loading: () => <p>Loading...</p>,
});

interface ClientLayotProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayotProps) {
  // const { showAllDom, setShowAllDom } = useContext(AppContext) as IAppContext;

  return (
    <>
      {/* <WelcomeAnimation setShowAllDom={setShowAllDom} /> */}
      {/* {showAllDom &&  */}
      <>
        <DynamicHeader />
        {children}
      </>
    </>
  );
}
