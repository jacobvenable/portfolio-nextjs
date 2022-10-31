import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useMemo } from "react";

import styles from "./Button.module.scss";

export type ButtonProps<P = React.HTMLProps<HTMLButtonElement>> =
  React.Attributes &
    Omit<P, "size"> & {
      children: React.ReactNode;
      className?: string;
      color?: "primary" | "secondary" | "foreground";
      component?: string | React.FC;
      iconProps?: FontAwesomeIconProps;
      variant?: "hollow" | "ghost" | "solid";
      size?: "small" | "medium" | "large";
    };

function Button<ExtendedProps = React.HTMLProps<HTMLButtonElement>>({
  children,
  color = "foreground",
  className: customClassName = "",
  component = "button",
  iconProps,
  size = "medium",
  variant = "hollow",
  ...props
}: ButtonProps<ExtendedProps>) {
  const childrenWithIcon = useMemo(
    () => (
      <>
        {children}
        {iconProps && (
          <FontAwesomeIcon {...iconProps} className={styles.icon} />
        )}
      </>
    ),
    [children, iconProps]
  );

  return React.createElement(
    component,
    {
      className: classNames([
        styles.button,
        styles[color],
        styles[size],
        styles[variant],
        customClassName,
      ]),
      ...props,
    },
    childrenWithIcon
  );
}

export default Button;
