import { createContext } from "react";

type activeIndex = number | undefined;
export type AccordionContextValue = {
  activeIndex: activeIndex;
  setActiveIndex: (activeIndex) => void;
};

const noop = () => undefined;
const AccordionContext = createContext<AccordionContextValue>({
  activeIndex: undefined,
  setActiveIndex: noop,
});

export default AccordionContext;
