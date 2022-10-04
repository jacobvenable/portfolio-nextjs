import { createContext } from "react";

type activeIndex = number | undefined;
export interface CollapsableContextValue {
  activeIndex: activeIndex;
  setActiveIndex: (activeIndex) => void;
}

const noop = () => undefined;
const CollapsableContext = createContext<CollapsableContextValue>({
  activeIndex: undefined,
  setActiveIndex: noop,
});

export default CollapsableContext;
