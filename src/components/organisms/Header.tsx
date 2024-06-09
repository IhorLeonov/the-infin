'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/Header.module.scss';
import clsx from 'clsx';

import { Variants, motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';
import { Button } from '../atoms/Button';
import { colors } from '@/lib/constants';

import Logo from '../atoms/Logo';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';
import useTargetInView from '@/hooks/useTargetInView';
import ButtonMenu from '../atoms/ButtonMenu';
import PlusIcon from '../../../public/icons/plus.svg';
import { useSwipeable } from 'react-swipeable';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { light, dark, accent } = colors;
  const { activeSection } = useContext(AppContext) as IAppContext;
  const { isTablet } = useCheckIsMobile();

  const targetRef = useRef(null);
  const { isInView } = useTargetInView(targetRef);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const variantsHeader: Variants = {
    short: {
      height: isMenuOpen ? '100dvh' : '68px',
      backgroundColor: isMenuOpen ? '#121212' : 'transparent',
      transition: { duration: 0.4 },
    },
  };

  const variantsMobileMenu: Variants = {
    short: {
      y: isMenuOpen ? '0%' : '-150%',
      transition: { duration: 0.4 },
    },
  };

  const variantsLogo: Variants = {
    short: { maxWidth: 285 },
    large: { maxWidth: 514 },
  };

  const variantsButton: Variants = {
    short: {
      height: 50,
      width: 130,
    },
  };

  const variantsLink = (column: number): Variants => {
    return {
      short: { marginRight: 24, gridColumn: column },
      large: { gridColumn: 5 },
    };
  };

  const colorCondition =
    activeSection?.includes('reviews') || activeSection?.includes('home-image');

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleCloseMenu(),
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div ref={targetRef} />
      <motion.header
        className={styles.header}
        initial={'short'}
        animate={!isTablet && isInView ? 'large' : 'short'}
        variants={variantsHeader}
      >
        <div className={styles.topBlock}>
          <motion.div
            variants={variantsLogo}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Logo
              className={styles.logo}
              fill={(isMenuOpen && isTablet) || colorCondition ? accent : dark}
            />
          </motion.div>

          <nav
            className={styles.nav}
            style={{
              color: colorCondition ? light : dark,
            }}
          >
            <motion.a
              href="#home"
              className={styles.link}
              variants={variantsLink(1)}
              transition={{ duration: 0, delay: isInView ? 0.5 : 0.1 }}
            >
              Home
            </motion.a>

            <motion.a
              href="#business"
              className={styles.link}
              variants={variantsLink(2)}
              transition={{ duration: 0, delay: isInView ? 0.4 : 0.2 }}
            >
              For Businesses
            </motion.a>

            <motion.a
              href="#individuals"
              className={styles.link}
              variants={variantsLink(3)}
              transition={{ duration: 0, delay: 0.3 }}
            >
              For Individuals
            </motion.a>

            <motion.a
              href="#reviews"
              className={styles.link}
              variants={variantsLink(4)}
              transition={{ duration: 0, delay: isInView ? 0.2 : 0.4 }}
            >
              Capitalism 2.0
            </motion.a>

            <motion.a
              href="#getstarted"
              className={styles.link}
              variants={variantsLink(5)}
              transition={{ duration: 0, delay: isInView ? 0.1 : 0.5 }}
            >
              Marketing Efforts
            </motion.a>
          </nav>

          <motion.button
            className={clsx(styles.button, {
              [styles.buttonReview]: colorCondition === true,
              [styles.buttonGetStarted]: activeSection?.includes('getstarted'),
            })}
            variants={variantsButton}
            transition={{ duration: 0.4 }}
          >
            Contact
          </motion.button>

          {isTablet && (
            <ButtonMenu isOpen={isMenuOpen} setIsOpen={handleMenuOpen} />
          )}
        </div>

        {/* mobile menu */}
        {isTablet && (
          <motion.div
            className={styles.mobileMenu}
            variants={variantsMobileMenu}
            {...swipeHandlers}
          >
            <div>
              <div className={styles.topPluses}>
                <PlusIcon className={styles.plusIcon} />
                <PlusIcon className={styles.plusIcon} />
              </div>

              <div className={styles.navMobileBox}>
                <h3 className={styles.navMobileTitle}>Menu</h3>
                <nav className={styles.navMobile}>
                  <a href="#home" className={styles.mobileLink}>
                    Home
                  </a>

                  <a href="#business" className={styles.mobileLink}>
                    For Businesses
                  </a>

                  <a href="#individuals" className={styles.mobileLink}>
                    For Individuals
                  </a>

                  <a href="#reviews" className={styles.mobileLink}>
                    Capitalism 2.0
                  </a>

                  <a href="#getstarted" className={styles.mobileLink}>
                    Marketing Efforts
                  </a>
                </nav>
              </div>
            </div>

            <div>
              <div className={styles.bottomPluses}>
                <PlusIcon className={styles.plusIcon} />
                <PlusIcon className={styles.plusIcon} />
              </div>

              <Button className={styles.buttonMobile} appearance="ghost">
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
