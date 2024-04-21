import React from "react";
import { Title } from "../atoms/Title";
import { P } from "../atoms/P";
import Image from "next/image";
import styles from "../../styles/components/SmallCard.module.scss";
import { Divider } from "../atoms/Divider";

interface SmallCardProps {
  title: string;
  text: string;
  imageSrc: string;
}

export default function SmallCard({ title, text, imageSrc }: SmallCardProps) {
  return (
    <div>
      <Divider className={styles.hr} />
      <div className={styles.card}>
        <Title className={styles.title} tag="h3">
          {title}
        </Title>

        <p className={styles.text}>{text}</p>

        <Image
          className={styles.image}
          src={imageSrc}
          width={223}
          height={223}
          alt="image of people"
          loading="lazy"
        />
      </div>
    </div>
  );
}
