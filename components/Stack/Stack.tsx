import classnames from "classnames";
import { Children, useMemo } from "react";

import styles from "./Stack.module.scss";

type ScreenSize = "mobile" | "tablet" | "medium" | "large";
type Direction = "horizontal" | "vertical";
type DirectionByScreenSize = Partial<Record<ScreenSize, Direction>>;
type DirectionProp = Direction | DirectionByScreenSize;

export type StackProps = {
  children: React.ReactNode;
  direction?: DirectionProp;
  itemProps?: React.HTMLProps<HTMLDivElement>;
  padded?: boolean;
};

const DEFAULT_DIRECTION = "horizontal";

export const getStackDirectionClassNames = (direction: DirectionProp) => {
  if (typeof direction === "string") {
    return [
      styles[`mobile-${direction}`],
      styles[`tablet-${direction}`],
      styles[`medium-${direction}`],
      styles[`large-${direction}`],
    ];
  }

  const mobileDirection = direction.mobile || DEFAULT_DIRECTION;
  const tabletDirection = direction.tablet || mobileDirection;
  const mediumDirection = direction.medium || tabletDirection;
  const largeDirection = direction.large || mediumDirection;
  return [
    styles[`mobile-${mobileDirection}`],
    styles[`tablet-${tabletDirection}`],
    styles[`medium-${mediumDirection}`],
    styles[`large-${largeDirection}`],
  ];
};

const Stack: React.FC<StackProps> = ({
  children,
  direction = DEFAULT_DIRECTION,
  itemProps: { className: itemClassName = "", ...itemProps } = {},
  padded,
}) => {
  const directionClassNames = useMemo(
    () => getStackDirectionClassNames(direction),
    [direction]
  );

  return (
    <div
      className={classnames(styles.stack, directionClassNames, {
        [styles.padded]: padded,
      })}
    >
      {Children.map(children, (child, index) => (
        <div
          className={classnames(
            styles.item,
            directionClassNames,
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
