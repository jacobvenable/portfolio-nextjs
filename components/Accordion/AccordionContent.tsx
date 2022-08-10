import classnames from "classnames";
import React, { useContext } from "react";

import styles from "./Accordion.module.scss";
import AccordionContext from "./AccordionContext";

interface AccordionContentProps
  extends React.FC<React.HTMLProps<HTMLDivElement>> {
  children: React.ReactNode;
  index: number;
}

export const AccordionContent: React.FC<
  Omit<AccordionContentProps, "index">
> = () => null;

export const ExtendedAccordionContent: React.FC<AccordionContentProps> = ({
  children,
  index,
  ...props
}) => {
  const { activeIndex } = useContext(AccordionContext);

  return (
    <div
      className={classnames({
        [styles.hidden]: index !== activeIndex,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
