import React, { Children, useMemo, useState } from "react";

import { AccordionButton, ExtendedAccordionButton } from "./AccordionButton";
import { AccordionContent, ExtendedAccordionContent } from "./AccordionContent";
import AccordionContext, { AccordionContextValue } from "./AccordionContext";
import Stack from "components/Stack";

const recursiveMapAccordionGroupChildren = (
  children: React.ReactNode,
  idPrefix: string,
  startingIndex = 0
): React.ReactNode => {
  let numGroups = startingIndex;
  return Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
    if (child && typeof child === "object" && "type" in child) {
      if (child.type === AccordionButton) {
        return (
          <ExtendedAccordionButton
            aria-controls={`${idPrefix}-content-${numGroups}`}
            id={`${idPrefix}-button-${numGroups}`}
            index={numGroups}
            {...child.props}
          />
        );
      }
      if (child.type === AccordionContent) {
        const index = numGroups;
        numGroups++;
        return (
          <ExtendedAccordionContent
            id={`${idPrefix}-content-${index}`}
            index={index}
            {...child.props}
          />
        );
      }
      return recursiveMapAccordionGroupChildren(child, idPrefix, numGroups);
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
