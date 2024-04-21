import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "../../styles/components/P.module.scss";
import clsx from "clsx";

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size: "s" | "m";
}

export const P = ({
  children,
  size,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p className={(clsx(styles[size]), className)} {...props}>
      {children}
    </p>
  );
};
