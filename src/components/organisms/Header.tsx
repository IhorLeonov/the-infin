import React from "react";
import styles from "../../styles/components/Header.module.scss";
import { P } from "../atoms/P";
import { Button } from "../atoms/Button";

import TheIconS from "../../../public/icons/the-s.svg";
import InfinIconS from "../../../public/icons/infin-s.svg";
import TheIcon from "../../../public/icons/the.svg";
import InfinIcon from "../../../public/icons/infin.svg";

interface HeaderProps {
  isMobile: boolean;
}

export default function Header({ isMobile }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {isMobile ? (
          <>
            <TheIconS className={styles.the} width={54} height={19} />
            <InfinIconS className={styles.infin} width={190} height={46} />
          </>
        ) : (
          <>
            <TheIcon className={styles.the} width={106} height={36} />
            <InfinIcon className={styles.infin} width={375} height={90} />
          </>
        )}
      </div>

      <nav className={styles.nav}>
        <a href="#home">
          <P size="s">Home</P>
        </a>
        <a href="#business">
          <P size="s">For Businesses</P>
        </a>
        <a href="#individuals">
          <P size="s">For Individuals</P>
        </a>
        <a href="#reviews">
          <P size="s">Capitalism 2.0</P>
        </a>
        <a href="#getstarted">
          <P size="s">Marketing Efforts</P>
        </a>
      </nav>

      <Button className={styles.button} appearance="ghost">
        Contact
      </Button>
    </header>
  );
}
