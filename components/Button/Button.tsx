import React from "react";

import styles from "./Button.module.scss";

export type ButtonProps<P = React.HTMLProps<HTMLButtonElement>> =
  React.Attributes &
    P & {
      children: React.ReactNode;
      className?: string;
      color?:
        | "blue-dark"
        | "blue-light"
        | "white"
        | "yellow-dark"
        | "yellow-light";
      component?: string | React.FC;
      variant?: "hollow" | "ghost" | "solid";
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
