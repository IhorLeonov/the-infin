import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from '../../styles/components/CardTitle.module.scss';
import clsx from 'clsx';

export interface CardTitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  cardNumber: string;
  cardTitle: string;
  showTitle: boolean;
}

export const CardTitle = ({
  cardNumber,
  cardTitle,
  showTitle,
  className,
  ...props
}: CardTitleProps): JSX.Element => {
  return (
    <h3 className={clsx(styles.title, className)} {...props}>
      <span className={styles.numb}>{cardNumber}</span>
      {showTitle && <span className={styles.shortTitle}>{cardTitle}</span>}
    </h3>
  );
};
