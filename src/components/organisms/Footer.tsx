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
        <AnimatedText
          className={styles.description}
          el="p"
          text="Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating."
          once
        />

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.title}>Pages</h4>

            <a href="#home">Home</a>
            <a href="#business">For Businesses</a>
            <a href="#individuals">For Individuals</a>
            <a href="#reviews">Blog</a>
            <a href="#getstarted">Marketing&nbsp;Efforts</a>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>For Business</h4>

            <a href="">Benefits</a>
            <a href="">Performance</a>
            <a href="">Data</a>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>For Individuals</h4>

            <a href="">Label link 1</a>
            <a href="">Label link 2</a>
            <a href="">Label link 3</a>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>Contact</h4>

            <a href="">421-273-0427</a>
            <a href="">info@theinfin.com</a>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>Social Media</h4>

            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">X</a>
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
