import Hero from "@/components/organisms/Hero";
import styles from "../styles/components/HomePage.module.scss";
import WhyChoose from "@/components/organisms/WhyChoose";
import HeroImage from "@/components/organisms/HeroImage";
import Business from "@/components/organisms/Business";
// import { Button } from "@/components/atoms/Button";
// import { Htag } from "@/components/atoms/Htag";
// import { Section } from "@/components/molecules/Section";

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* <div>
        <Button appearance="primary">Schedule a demo</Button>
        <Button appearance="ghost">Contact</Button>
        <Button appearance="light" className={styles.button}>
          Schedule a live demo
        </Button>
      </div>

      <div>
        <Htag tag="h1">
          To know your true value,  Help others understand theirs.
        </Htag>
        <Htag tag="h2">Why choose the INFIN</Htag>
      </div>

      <Section className={styles.section} numb="01" title="Business">
        Section
      </Section> */}
      <Hero />
      <HeroImage />
      <WhyChoose />
      <Business />
    </div>
  );
}
