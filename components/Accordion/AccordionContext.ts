import { createContext } from "react";

type activeIndex = number | undefined;
export interface AccordionContextValue {
  activeIndex: activeIndex;
  setActiveIndex: (activeIndex) => void;
}

const noop = () => undefined;
const AccordionContext = createContext<AccordionContextValue>({
  activeIndex: undefined,
  setActiveIndex: noop,
});

export default AccordionContext;
