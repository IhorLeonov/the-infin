'use client';

import { TypeActiveSection, TypeCursorVisibility } from '@/lib/types';
import { ReactNode, createContext, useState } from 'react';

export interface IAppContext {
  cursorVisibility: TypeCursorVisibility;
  setCursorVisibility: (cursorDisplay: TypeCursorVisibility) => void;
  activeSection?: TypeActiveSection;
  setActiveSaction: (value: TypeActiveSection) => void;
}

export const AppContext = createContext<IAppContext>({
  cursorVisibility: 'none',
  setCursorVisibility: () => {},
  setActiveSaction: () => {},
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

  const [section, setSection] = useState<TypeActiveSection>('other');
  const setActiveSaction = (value: TypeActiveSection) => {
    setSection(value);
  };

  return (
    <AppContext.Provider
      value={{
        cursorVisibility: cursorDisplay,
        setCursorVisibility,
        activeSection: section,
        setActiveSaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
