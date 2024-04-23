'use client';

import { TypeCursorVisibility } from '@/lib/types';
import { ReactNode, createContext, useState } from 'react';

export interface IAppContext {
  cursorVisibility: TypeCursorVisibility;
  setCursorVisibility: (cursorDisplay: TypeCursorVisibility) => void;
}

export const AppContext = createContext<IAppContext>({
  cursorVisibility: 'none',
  setCursorVisibility: () => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [cursorDisplay, setCursorDisplay] =
    useState<TypeCursorVisibility>('none');
  const setCursorVisibility = (cursorDisplay: TypeCursorVisibility) => {
    setCursorDisplay(cursorDisplay);
  };

  return (
    <AppContext.Provider
      value={{ cursorVisibility: cursorDisplay, setCursorVisibility }}
    >
      {children}
    </AppContext.Provider>
  );
};
