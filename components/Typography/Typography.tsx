import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";

import styles from "./Typography.module.scss";

type TypographyProps<P> = React.Attributes &
  P & {
    children: React.ReactNode;
    className?: string;
    component?: string | React.FC;
    iconProps?: FontAwesomeIconProps;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "sr-only";
  };

function Typography<ExtendedProps>({
  children,
  className: customClassName = "",
  component,
  iconProps,
  variant = "p",
  ...props
}: TypographyProps<ExtendedProps>) {
  const comp = component || variant;
  const variantClassName = comp !== variant ? styles[variant] : "";
  const className = `${variantClassName} ${customClassName}`;
  const childrenWithIcon = useMemo(
    () => (
      <>
        {iconProps && (
          <FontAwesomeIcon {...iconProps} className={styles.icon} />
        )}
        {children}
      </>
    ),
    [children, iconProps]
  );
  return React.createElement(
    comp,
    {
      className,
      ...props,
    },
    childrenWithIcon
  );
}

export default Typography;
