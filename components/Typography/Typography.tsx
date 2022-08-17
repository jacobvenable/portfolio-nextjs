import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React, { useMemo } from "react";

import styles from "./Typography.module.scss";

type ElementVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type CustomVariant = "sr-only";
type TypographyProps<P> = React.Attributes &
  P & {
    children: React.ReactNode;
    className?: string;
    component?: string | React.FC;
    iconProps?: FontAwesomeIconProps;
    underline?: boolean;
    variant?: ElementVariant | CustomVariant;
  };

/**
  List of variants with the associated element they should output as by default,
  Variants not listed here should be a valid HTML element.
 */
const VARIANT_COMPONENT_MAP: Record<CustomVariant, string> = {
  "sr-only": "span",
};

function Typography<ExtendedProps>({
  children,
  className: customClassName = "",
  component,
  iconProps,
  underline,
  variant = "p",
  ...props
}: TypographyProps<ExtendedProps>) {
  const variantElement = (VARIANT_COMPONENT_MAP[variant] || variant) as string;
  const comp = component || variantElement;
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
    comp,
    {
      className: classnames(
        {
          [styles[variant]]: component !== variant,
        },
        {
          [styles.underline]: underline,
        },
        customClassName
      ),
      ...props,
    },
    childrenWithIcon
  );
}

export default Typography;
