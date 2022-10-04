import classnames from "classnames";
import React, { useContext } from "react";

import styles from "./Collapsable.module.scss";
import CollapsableContext from "./CollapsableContext";

interface CollapsableContentProps
  extends React.FC<React.HTMLProps<HTMLDivElement>> {
  children: React.ReactNode;
  className?: string;
  index: number;
}

export const CollapsableContent: React.FC<
  Omit<CollapsableContentProps, "index">
> = () => null;

export const ExtendedCollapsableContent: React.FC<CollapsableContentProps> = ({
  className,
  children,
  index,
  ...props
}) => {
  const { activeIndex } = useContext(CollapsableContext);

  return (
    <div
      className={classnames(
        {
          [styles.hidden]: index !== activeIndex,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
