import React from "react";

import styles from "./Button.module.scss";

type ButtonProps<P> = React.Attributes &
  P & {
    children: React.ReactNode;
    className?: string;
    color?:
      | "white"
      | "yellow-dark"
      | "yellow-light"
      | "blue-dark"
      | "blue-light";
    component?: string | React.FC;
    variant?: "solid" | "hollow";
  };

function Button<ExtendedProps>({
  children,
  color = "white",
  className: customClassName = "",
  component = "button",
  variant = "hollow",
  ...props
}: ButtonProps<ExtendedProps>) {
  const className = `${styles.button} ${styles[color]} ${styles[variant]} ${customClassName}`;
  return React.createElement(
    component,
    {
      className,
      ...props,
    },
    children
  );
}

export default Button;
