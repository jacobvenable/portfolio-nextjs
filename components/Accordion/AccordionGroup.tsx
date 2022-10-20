import React, { Children, useMemo, useState } from "react";

import { AccordionButton, ExtendedAccordionButton } from "./AccordionButton";
import { AccordionContent, ExtendedAccordionContent } from "./AccordionContent";
import AccordionContext, { AccordionContextValue } from "./AccordionContext";

type AccordionGroupChildIndexes = {
  button: number;
  content: number;
};

const recursiveMapAccordionGroupChildren = (
  children: React.ReactNode,
  idPrefix: string,
  indexes: AccordionGroupChildIndexes
): React.ReactNode => {
  return Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
    if (!React.isValidElement(child) || !("children" in child.props)) {
      return child;
    }

    if (child.type === AccordionButton) {
      const buttonIndex = indexes.button;
      indexes.button = indexes.button + 1;
      return (
        <ExtendedAccordionButton
          aria-controls={`${idPrefix}-content-${buttonIndex}`}
          id={`${idPrefix}-button-${buttonIndex}`}
          index={buttonIndex}
          {...child.props}
        />
      );
    }
    if (child.type === AccordionContent) {
      const contentIndex = indexes.content;
      indexes.content = indexes.content + 1;
      return (
        <ExtendedAccordionContent
          id={`${idPrefix}-content-${contentIndex}`}
          index={contentIndex}
          {...child.props}
        />
      );
    }

    // we short-circuited above if the element did not have any children
    const childWithChildren = child as React.ReactElement<{
      children: React.ReactNode;
    }>;
    return React.cloneElement<{ children: React.ReactNode }>(
      childWithChildren,
      {
        children: recursiveMapAccordionGroupChildren(
          childWithChildren.props.children,
          idPrefix,
          indexes
        ),
      }
    );
  });
};

type AccordionGroupProps = {
  children: React.ReactNode;
  idPrefix: string;
};
const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  idPrefix,
}) => {
  const indexes: AccordionGroupChildIndexes = {
    button: 0,
    content: 0,
  };
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
      {recursiveMapAccordionGroupChildren(children, idPrefix, indexes)}
    </AccordionContext.Provider>
  );
};

export default AccordionGroup;
