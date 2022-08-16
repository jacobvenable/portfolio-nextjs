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
        className={classnames(
          styles.container,
          styles[direction],
          paddedClassName
        )}
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
  large = 100,
  medium = 100,
  tablet = 100,
  mobile = 100,
}) => {
  const { direction, padded } = useContext(GridContext);
  return (
    <div
      className={classnames(
        styles.item,
        styles[direction],
        { [styles.padded]: padded },
        styles[`large-${large}`],
        styles[`medium-${medium}`],
        styles[`tablet-${tablet}`],
        styles[`mobile-${mobile}`]
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
