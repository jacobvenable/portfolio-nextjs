import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React, { useCallback, useState } from "react";

import styles from "./Accordion.module.scss";
import Button, { ButtonProps } from "components/Button";
import {
  ExtendedCollapsableButton,
  ExtendedCollapsableButtonProps,
  CollapsableButtonProps,
} from "components/Collapsable/CollapsableButton";

type AccordionButtonProps = CollapsableButtonProps<ButtonProps>;

export const AccordionButton: React.FC<CollapsableButtonProps<ButtonProps>> =
  Button;

type ExtendedAccordionButtonProps = ExtendedCollapsableButtonProps<ButtonProps>;
export const ExtendedAccordionButton: React.FC<
  ExtendedAccordionButtonProps
> = ({ className, iconProps, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <ExtendedCollapsableButton<AccordionButtonProps>
      aria-expanded={isOpen}
      className={classNames(styles.button, className)}
      color="yellow-light"
      component={Button}
      iconProps={{
        icon: faChevronUp,
        transform: { rotate: isOpen ? 180 : 0 },
        ...iconProps,
      }}
      onClose={handleClose}
      onOpen={handleOpen}
      variant="ghost"
      {...props}
    />
  );
};
