import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classnames from "classnames";
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
  component = "p",
  iconProps,
  variant = "p",
  ...props
}: TypographyProps<ExtendedProps>) {
  const childrenWithIcon = useMemo(
    () => (
      <>
        {iconProps && (
          <FontAwesomeIcon
            {...iconProps}
            className={classnames(styles.icon, iconProps?.className)}
          />
        )}
        {children}
      </>
    ),
    [children, iconProps]
  );
  return React.createElement(
    component,
    {
      className: classnames(
        {
          [styles[variant]]: component !== variant,
        },
        customClassName
      ),
      ...props,
    },
    childrenWithIcon
  );
}

export default Typography;
