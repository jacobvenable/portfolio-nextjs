import classnames from "classnames";
import { createContext, useContext, useMemo } from "react";

import styles from "./Grid.module.scss";

interface GridContext {
  direction?: "horizontal" | "vertical";
  padded?: boolean;
}
const GridContext = createContext<GridContext>({});

interface GridContainerProps {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  padded?: boolean;
}
const GridContainer: React.FC<GridContainerProps> = ({
  children,
  direction = "horizontal",
  padded,
}) => {
  const paddedClassName = padded ? styles.padded : "";
  const gridContextValue = useMemo(
    () => ({
      direction,
      padded,
    }),
    [direction, padded]
  );
  return (
    <GridContext.Provider value={gridContextValue}>
      <div
        className={classnames(styles.stack, styles[direction], paddedClassName)}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};

type columnSize = 50 | 100;
interface GridItemProps {
  children: React.ReactNode;
  large?: columnSize;
  medium?: columnSize;
  tablet?: columnSize;
  mobile?: columnSize;
}
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

  return (
    <div
      className={classnames(
        styles.item,
        styles[direction],
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
