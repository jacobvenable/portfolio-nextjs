import React from "react";

import styles from "./Typography.module.scss";

type TypographyProps<P> = React.Attributes &
  P & {
    children: React.ReactNode;
    className?: string;
    component?: string | React.FC;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "sr-only";
  };

function Typography<ExtendedProps>({
  children,
  className: customClassName = "",
  component,
  variant = "p",
  ...props
}: TypographyProps<ExtendedProps>) {
  const comp = component || variant;
  const variantClassName = comp !== variant ? styles[variant] : "";
  const className = `${variantClassName} ${customClassName}`;
  return React.createElement(
    comp,
    {
      className,
      ...props,
    },
    children
  );
}

export default Typography;