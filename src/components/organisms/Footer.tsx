import React from 'react';
import styles from '../../styles/components/Footer.module.scss';

import ThinksebIcon from '../../../public/icons/thinkseb.svg';
import Logo from '../atoms/LogoIcon';
import AnimatedText from '../molecules/AnimatedText';

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBlock}>
        {/* <p className={styles.description}>
          Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating.
        </p> */}
        <AnimatedText
          className={styles.description}
          text="Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating."
          once
        />

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.title}>Pages</h3>

            <a href="#home">Home</a>
            <a href="#business">For Businesses</a>
            <a href="#individuals">For Individuals</a>
            <a href="#reviews">Blog</a>
            <a href="#getstarted">Marketing&nbsp;Efforts</a>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.title}>For Business</h3>

            <a href="">Label link 1</a>
            <a href="">Label link 2</a>
            <a href="">Label link 3</a>
          </li>

          <li className={styles.listItem}>
            <h3 className={styles.title}>For Individuals</h3>

            <a href="">Label link 1</a>
            <a href="">Label link 2</a>
            <a href="">Label link 3</a>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.title}>Contact</h3>

            <a href="">421-273-0427</a>
            <a href="">info@theinfin.com</a>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.title}>Social Media</h3>

            <a href="">Instagram</a>
            <a href="">LinkedIn</a>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
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
