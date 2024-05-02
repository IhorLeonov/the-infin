import React from 'react';
import styles from '../../styles/components/Footer.module.scss';

import { Title } from '../atoms/Title';
import ThinksebIcon from '../../../public/icons/thinkseb.svg';
import Logo from '../atoms/LogoIcon';

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

            <a href="#home">Home</a>
            <a href="#business">For Businesses</a>
            <a href="#individuals">For Individuals</a>
            <a href="#reviews">Blog</a>
            <a href="#getstarted">Marketing&nbsp;Efforts</a>
          </li>

          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              For Business
            </Title>

            <a>Label link 1</a>
            <a>Label link 2</a>
            <a>Label link 3</a>
          </li>

          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              For Individuals
            </Title>

            <a>Label link 1</a>
            <a>Label link 2</a>
            <a>Label link 3</a>
          </li>

          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              Contact
            </Title>

            <a>For Businesses</a>
            <a>For Individuals</a>
          </li>

          <li className={styles.listItem}>
            <Title tag="h3" className={styles.title}>
              Social Media
            </Title>

            <a>Instagram</a>
            <a>LinkedIn</a>
            <a>Facebook</a>
            <a>Twitter</a>
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
