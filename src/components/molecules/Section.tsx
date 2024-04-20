import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import styles from "../../styles/molecules/Section.module.scss";
import { Htag } from "../atoms/Htag";
import clsx from "clsx";

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  numb: string;
  title?: string;
}

export const Section = ({
  children,
  numb,
  title,
  className,
  ...props
}: SectionProps) => {
  return (
    <section className={clsx(styles.section, className)} {...props}>
      <div className={styles.header}>
        <span className={styles.numb}>{numb}</span>
        {title && <Htag tag="h3">{title}</Htag>}
      </div>
      {children}
    </section>
  );
};
