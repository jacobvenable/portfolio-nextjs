import classnames from "classnames";
import { Children } from "react";

import styles from "./Stack.module.scss";

interface Props {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  itemProps?: React.HTMLProps<HTMLDivElement>;
  padded?: boolean;
}

const Stack: React.FC<Props> = ({
  children,
  direction = "horizontal",
  itemProps: { className: itemClassName = "", ...itemProps } = {},
  padded,
}) => {
  const paddedClassName = padded ? styles.padded : "";
  return (
    <div
      className={classnames(styles.stack, styles[direction], paddedClassName)}
    >
      {Children.map(children, (child, index) => (
        <div
          className={classnames(
            styles.item,
            styles[direction],
            paddedClassName,
            itemClassName
          )}
          key={index}
          {...itemProps}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Stack;
