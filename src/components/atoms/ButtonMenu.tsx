import React from 'react';
import styles from '../../styles/components/ButtonMenu.module.scss';

import BurgerIcon from '../../../public/icons/burger-menu.svg';
import CloseIcon from '../../../public/icons/close.svg';

interface ButtonMenuProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function ButtonMenu({ isOpen, setIsOpen }: ButtonMenuProps) {
  return (
    <button
      type="button"
      className={styles.buttonMenu}
      onClick={setIsOpen}
      style={{
        backgroundColor: isOpen ? '#c1c1c1' : 'transparent',
        borderColor: isOpen ? '#c1c1c1' : '#12121229',
      }}
    >
      {isOpen ? <CloseIcon /> : <BurgerIcon />}
    </button>
  );
}
