import React from 'react';
import styles from '../../styles/components/Footer.module.scss';
import { Title } from '../atoms/Title';

import ThinksebIcon from '../../../public/icons/thinkseb.svg';
import Logo from '../atoms/Logo';

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBlock}>
        <p className={styles.description}>
          Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating.
        </p>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              Pages
            </Title>
            <p>Home</p>
            <p>For Businesses</p>
            <p>For Individuals</p>
            <p>Blog</p>
            <p>Marketing Efforts</p>
          </li>

          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              For Business
            </Title>
            <p>Label link 1</p>
            <p>Label link 2</p>
            <p>Label link 3</p>
          </li>

          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              For Individuals
            </Title>
            <p>Label link 1</p>
            <p>Label link 2</p>
            <p>Label link 3</p>
          </li>

          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              Contact
            </Title>
            <p>For Businesses</p>
            <p>For Individuals</p>
          </li>

          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              Social Media
            </Title>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </li>
        </ul>
      </div>

      <Logo className={styles.logo} />

      <div className={styles.thinkseb}>
        <ThinksebIcon />
        <div className={styles.copyright}>
          <span className={styles.copyrightAccent}>© 2024 • Curated by </span>
          ThinkSeb
        </div>
      </div>
    </footer>
  );
}
