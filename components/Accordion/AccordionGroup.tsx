import React, { Children, useMemo, useState } from "react";

import { AccordionButton, ExtendedAccordionButton } from "./AccordionButton";
import { AccordionContent, ExtendedAccordionContent } from "./AccordionContent";
import AccordionContext, { AccordionContextValue } from "./AccordionContext";
import Stack from "components/Stack";

let numButton = 0;
let numContent = 0;

const recursiveMapAccordionGroupChildren = (
  children: React.ReactNode,
  idPrefix: string
): React.ReactNode => {
  return Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
    if (typeof child === "object" && "type" in child) {
      if (child.type === AccordionButton) {
        const index = numButton;
        numButton++;
        return (
          <ExtendedAccordionButton
            aria-controls={`${idPrefix}-content-${index}`}
            id={`${idPrefix}-button-${index}`}
            index={index}
            {...child.props}
          />
        );
      }
      if (child.type === AccordionContent) {
        const index = numContent;
        numContent++;
        return (
          <ExtendedAccordionContent
            id={`${idPrefix}-content-${index}`}
            index={index}
            {...child.props}
          />
        );
      }
      return recursiveMapAccordionGroupChildren(child, idPrefix);
    }
    return child;
  });
};

interface AccordionGroupProps {
  children: React.ReactNode;
  idPrefix: string;
}
const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  idPrefix,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const accordionContextValue = useMemo<AccordionContextValue>(
    () => ({
      activeIndex,
      setActiveIndex,
    }),
    [activeIndex]
  );
  return (
    <AccordionContext.Provider value={accordionContextValue}>
      <Stack direction="vertical">
        {recursiveMapAccordionGroupChildren(children, idPrefix)}
      </Stack>
    </AccordionContext.Provider>
  );
};

export default AccordionGroup;
