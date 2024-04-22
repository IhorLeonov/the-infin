import React from "react";
import { Section } from "../atoms/Section";
import ImageWithButton from "../molecules/ImageWithButton";
import Description from "../molecules/Description";
import { Title } from "../atoms/Title";
import style from "../../styles/components/Business.module.scss";

interface BusinessProps {}

export default function Business({}: BusinessProps) {
  return (
    <Section className={style.section} type="filled">
      <div className={style.box}>
        <span className={style.numb}>01</span>
        <Title className={style.title} tag="h2">
          The Insufficient Status Quo for Businesses
        </Title>
        <Description className={style.description} />
      </div>

      <ImageWithButton
        className={style.imageWithButton}
        imageSrc="/images/business.png"
        imageAlt="girl and boy with laptop"
        btnText="THE INFIN FOR BUSINESS"
      />
    </Section>
  );
}
