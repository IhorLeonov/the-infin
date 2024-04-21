import React from "react";
import { Section } from "../molecules/Section";
import { Title } from "../atoms/Title";
import styles from "../../styles/components/WhyChoose.module.scss";
import SmallCard from "../molecules/SmallCard";
import Image from "next/image";

interface WhyChooseProps {}

export default function WhyChoose({}: WhyChooseProps) {
  return (
    <Section className={styles.section} type="ghost">
      <Title className={styles.title} tag="h2">
        Why choose the INFIN
      </Title>
      <div className={styles.cardList}>
        <SmallCard
          title="The old way"
          text="Workers compete with their peers for recognition from bosses who also don’t like this dynamic."
          imageSrc="/images/men.png"
        />
        <SmallCard
          title="The INFIN way"
          text="Colleagues dynamically observe and rank each other’s contributions in a confidential, anonymous manner. The INFIN then calculates ownable, individual value and automatically distributes peer-reviewed recognition and rewards (while giving execs a clear picture of individual ROI)."
          imageSrc="/images/happy-men.png"
        />
      </div>

      <Image
        className={styles.pluses}
        src="/icons/plusGroup.svg"
        width={145}
        height={92}
        alt="pluses"
      />
    </Section>
  );
}
