import classnames from "classnames";
import { createContext, useContext, useMemo } from "react";

import styles from "./Grid.module.scss";
import { getStackDirectionClassNames, StackProps } from "components/Stack";

type GridContainerProps = Omit<StackProps, "itemProps">;
type GridContext = Omit<GridContainerProps, "children" | "direction"> & {
  direction: Exclude<StackProps["direction"], undefined>;
};
const GridContext = createContext<GridContext>({ direction: "horizontal" });

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  direction = "horizontal",
  padded,
}) => {
  const gridContextValue = useMemo(
    () => ({
      direction,
      padded,
    }),
    [direction, padded]
  );
  const directionClassNames = useMemo(
    () => getStackDirectionClassNames(direction),
    [direction]
  );

  return (
    <GridContext.Provider value={gridContextValue}>
      <div
        className={classnames(styles.container, directionClassNames, {
          [styles.padded]: padded,
        })}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};

type columnSize = 35 | 50 | 65 | 100;
type GridItemProps = {
  children: React.ReactNode;
  large?: columnSize;
  medium?: columnSize;
  tablet?: columnSize;
  mobile?: columnSize;
};
const GridItem: React.FC<GridItemProps> = ({
  children,
  large,
  medium,
  tablet,
  mobile,
}) => {
  const { direction, padded } = useContext(GridContext);

  const sizeMobile = mobile || 100;
  const sizeTablet = tablet || sizeMobile;
  const sizeMedium = medium || sizeTablet;
  const sizeLarge = large || sizeMedium;
  const directionClassNames = useMemo(
    () => getStackDirectionClassNames(direction),
    [direction]
  );

  return (
    <div
      className={classnames(
        styles.item,
        directionClassNames,
        { [styles.padded]: padded },
        styles[`mobile-${sizeMobile}`],
        styles[`tablet-${sizeTablet}`],
        styles[`medium-${sizeMedium}`],
        styles[`large-${sizeLarge}`]
      )}
    >
      {children}
    </div>
  );
};

const Grid = {
  Container: GridContainer,
  Item: GridItem,
};
export default Grid;
