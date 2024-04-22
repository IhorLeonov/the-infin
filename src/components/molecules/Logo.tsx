"use client";

import React from "react";
import styles from "../../styles/components/Logo.module.scss";

import TheIconS from "../../../public/icons/the-s.svg";
import InfinIconS from "../../../public/icons/infin-s.svg";
import TheIcon from "../../../public/icons/the.svg";
import InfinIcon from "../../../public/icons/infin.svg";
import useCheckIsMobile from "@/hooks/useCheckIsMobile.ts";

interface LogoProps {}

export default function Logo({}: LogoProps) {
  const { isMobile } = useCheckIsMobile();

  return (
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
  );
}
