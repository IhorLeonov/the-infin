import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import styles from "../../styles/components/Section.module.scss";
import clsx from "clsx";

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  type: "filled" | "ghost";
  numb?: string;
  shortTitle?: string;
}

export const Section = ({
  children,
  type,
  numb,
  shortTitle,
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      className={clsx(
        styles.section,
        {
          [styles.filled]: type === "filled",
          [styles.ghost]: type === "ghost",
        },
        className
      )}
      {...props}
    >
      <div className={styles.header}>
        {numb && <span className={styles.numb}>{numb}</span>}
        {shortTitle && <h2 className={styles.shortTitle}>{shortTitle}</h2>}
      </div>
      {children}
    </section>
  );
};
