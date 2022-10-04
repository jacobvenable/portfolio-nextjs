import React, { Children, useMemo, useState } from "react";

import {
  CollapsableButton,
  ExtendedCollapsableButton,
} from "./CollapsableButton";
import {
  CollapsableContent,
  ExtendedCollapsableContent,
} from "./CollapsableContent";
import CollapsableContext, {
  CollapsableContextValue,
} from "./CollapsableContext";

interface CollapsableGroupChildIndexes {
  button: number;
  content: number;
}

const recursiveMapCollapsableGroupChildren = (
  children: React.ReactNode,
  idPrefix: string,
  indexes: CollapsableGroupChildIndexes
): React.ReactNode => {
  return Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
    if (!React.isValidElement(child) || !("children" in child.props)) {
      return child;
    }

    if (child.type === CollapsableButton) {
      const buttonIndex = indexes.button;
      indexes.button = indexes.button + 1;
      return (
        <ExtendedCollapsableButton
          aria-controls={`${idPrefix}-content-${buttonIndex}`}
          id={`${idPrefix}-button-${buttonIndex}`}
          index={buttonIndex}
          {...child.props}
        />
      );
    }
    if (child.type === CollapsableContent) {
      const contentIndex = indexes.content;
      indexes.content = indexes.content + 1;
      return (
        <ExtendedCollapsableContent
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
        children: recursiveMapCollapsableGroupChildren(
          childWithChildren.props.children,
          idPrefix,
          indexes
        ),
      }
    );
  });
};

interface CollapsableGroupProps {
  children: React.ReactNode;
  idPrefix: string;
}
const CollapsableGroup: React.FC<CollapsableGroupProps> = ({
  children,
  idPrefix,
}) => {
  const indexes: CollapsableGroupChildIndexes = {
    button: 0,
    content: 0,
  };
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const collapsableContextValue = useMemo<CollapsableContextValue>(
    () => ({
      activeIndex,
      setActiveIndex,
    }),
    [activeIndex]
  );
  return (
    <CollapsableContext.Provider value={collapsableContextValue}>
      {recursiveMapCollapsableGroupChildren(children, idPrefix, indexes)}
    </CollapsableContext.Provider>
  );
};

export default CollapsableGroup;
