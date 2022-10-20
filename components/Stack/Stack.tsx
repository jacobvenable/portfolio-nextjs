import classnames from "classnames";
import { Children } from "react";

import styles from "./Stack.module.scss";

export type StackProps = {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  itemProps?: React.HTMLProps<HTMLDivElement>;
  padded?: boolean;
};

const Stack: React.FC<StackProps> = ({
  children,
  direction = "horizontal",
  itemProps: { className: itemClassName = "", ...itemProps } = {},
  padded,
}) => {
  return (
    <div
      className={classnames(styles.stack, styles[direction], {
        [styles.padded]: padded,
      })}
    >
      {Children.map(children, (child, index) => (
        <div
          className={classnames(
            styles.item,
            styles[direction],
            {
              [styles.padded]: padded,
            },
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
