import React from 'react';
import styles from '../../styles/components/Header.module.scss';
import { Button } from '../atoms/Button';
import Logo from '../atoms/Logo';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />

      <nav className={styles.nav}>
        <a href="#home">
          <p className={styles.p}>Home</p>
        </a>
        <a href="#business">
          <p className={styles.p}>For Businesses</p>
        </a>
        <a href="#individuals">
          <p className={styles.p}>For Individuals</p>
        </a>
        <a href="#reviews">
          <p className={styles.p}>Capitalism 2.0</p>
        </a>
        <a href="#getstarted">
          <p className={styles.p}>Marketing Efforts</p>
        </a>
      </nav>

      <Button className={styles.button} appearance="ghost">
        Contact
      </Button>
    </header>
  );
}
