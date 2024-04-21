import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import styles from "../../styles/components/Title.module.scss";
import clsx from "clsx";

export interface TitleProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  > {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export const Title = ({
  tag,
  children,
  className,
}: TitleProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={clsx(styles[tag], className)}>{children}</h1>;
    case "h2":
      return <h2 className={clsx(styles[tag], className)}>{children}</h2>;
    case "h3":
      return <h3 className={clsx(styles[tag], className)}>{children}</h3>;
    default:
      return <></>;
  }
};
