import React from "react";
import style from "../../styles/components/Individuals.module.scss";
import { Section } from "../atoms/Section";
import { Title } from "../atoms/Title";
import Description from "../molecules/Description";
import ImageWithButton from "../molecules/ImageWithButton";

interface IndividualsProps {}

export default function Individuals({}: IndividualsProps) {
  return (
    <Section className={style.section} type="filled">
      <ImageWithButton
        className={style.imageWithButton}
        imageSrc="/images/individuals.png"
        imageAlt="girl and boy with laptop"
        btnText="THE INFIN FOR Individuals"
      />

      <div className={style.box}>
        <span className={style.numb}>02</span>
        <Title className={style.title} tag="h2">
          Fairness and Objective Data for Individuals
        </Title>
        <Description className={style.description} />
      </div>
    </Section>
  );
}
