import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React, {
  MouseEvent as RMouseEvent,
  useCallback,
  useContext,
} from "react";

import styles from "./Accordion.module.scss";
import AccordionContext from "./AccordionContext";
import Button, { ButtonProps } from "components/Button";

type AccordionButtonProps = Omit<
  ButtonProps,
  "aria-controls" | "aria-expanded" | "id"
> & {
  index: number;
};

export const AccordionButton: React.FC<Omit<AccordionButtonProps, "index">> =
  Button;

export const ExtendedAccordionButton: React.FC<AccordionButtonProps> = ({
  className,
  iconProps,
  index,
  onClick,
  ...props
}) => {
  const { activeIndex, setActiveIndex } = useContext(AccordionContext);
  const isOpen = activeIndex === index;

  const handleOnClick = useCallback(
    (e: RMouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e);
      setActiveIndex((i) => (i === index ? undefined : index));
    },
    [index, onClick, setActiveIndex]
  );

  return (
    <AccordionButton
      aria-expanded={isOpen}
      className={classNames(styles.button, className)}
      color="primary"
      iconProps={{
        icon: faChevronUp,
        transform: { rotate: isOpen ? 180 : 0 },
        ...iconProps,
      }}
      onClick={handleOnClick}
      variant="ghost"
      {...props}
    />
  );
};
