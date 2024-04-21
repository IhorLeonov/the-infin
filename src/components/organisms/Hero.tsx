import React from "react";
import styles from "../../styles/components/Hero.module.scss";
import Image from "next/image";
import { Section } from "../atoms/Section";
import { Title } from "../atoms/Title";
import { Button } from "../atoms/Button";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <Section className={styles.hero} type="ghost">
      <div className={styles.topBlock}>
        <Title className={styles.smallTitle} tag="h3">
          Web +<br /> Mobile app
        </Title>

        <Image
          className={styles.image}
          src="/images/hand-phone.png"
          width={201}
          height={160}
          alt="hand with phone"
          priority
        />
      </div>

      <div className={styles.bottomBlock}>
        <span className={styles.description}>
          A market-based assessment of your contribution.
        </span>

        <Title tag="h1" className={styles.title}>
          To know your true value,  Help others understand theirs.
        </Title>

        <Button className={styles.button} appearance="primary">
          Schedule a demo
        </Button>
      </div>
    </Section>
  );
}
