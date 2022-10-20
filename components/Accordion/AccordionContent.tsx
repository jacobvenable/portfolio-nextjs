import classnames from "classnames";
import React, { useContext } from "react";

import styles from "./Accordion.module.scss";
import AccordionContext from "./AccordionContext";

type AccordionContentProps = React.FC<React.HTMLProps<HTMLDivElement>> & {
  children: React.ReactNode;
  className?: string;
  index: number;
};

export const AccordionContent: React.FC<
  Omit<AccordionContentProps, "index">
> = () => null;

export const ExtendedAccordionContent: React.FC<AccordionContentProps> = ({
  className,
  children,
  index,
  ...props
}) => {
  const { activeIndex } = useContext(AccordionContext);

  return (
    <div
      className={classnames(
        {
          [styles.hidden]: index !== activeIndex,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
