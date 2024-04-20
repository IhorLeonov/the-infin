import { Button } from "@/components/atoms/Button";
import styles from "../styles/organisms/Home.module.scss";
import { Htag } from "@/components/atoms/Htag";
import { Section } from "@/components/molecules/Section";

export default function Home() {
  return (
    <main>
      <div>
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
      </Section>
    </main>
  );
}
