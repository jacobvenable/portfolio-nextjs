import React, {
  MouseEvent as RMouseEvent,
  useCallback,
  useContext,
} from "react";

import CollapsableContext from "./CollapsableContext";

type BlacklistedProps<T> = Omit<T, "aria-controls" | "aria-expanded" | "id">;
export type CollapsableButtonProps<P = React.HTMLProps<HTMLSpanElement>> =
  BlacklistedProps<
    P & {
      className?: string;
      component?: string | React.FC;
      onClose?: () => void;
      onOpen?: () => void;
    }
  >;

export function CollapsableButton<
  ExtendedProps extends React.HTMLProps<HTMLSpanElement>
>(_: CollapsableButtonProps<ExtendedProps>) {
  return null;
}

export type ExtendedCollapsableButtonProps<T> = CollapsableButtonProps<T> & {
  index: number;
};
export function ExtendedCollapsableButton<
  ExtendedProps extends React.HTMLProps<HTMLSpanElement>
>({
  className,
  component = "span",
  index,
  onClick,
  onClose,
  onOpen,
  ...props
}: ExtendedCollapsableButtonProps<ExtendedProps>) {
  const { activeIndex, setActiveIndex } = useContext(CollapsableContext);
  const isOpen = activeIndex === index;

  const handleOnClick = useCallback(
    (e: RMouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e);
      const isOpening = activeIndex !== index;

      if (isOpening) {
        setActiveIndex(index);
        return onOpen && onOpen();
      }

      setActiveIndex(undefined);
      return onClose && onClose();
    },
    [activeIndex, index, onClick, onClose, onOpen, setActiveIndex]
  );

  return React.createElement(component, {
    "aria-expanded": isOpen,
    className,
    onClick: handleOnClick,
    role: "button",
    tabIndex: 0,
    ...props,
  });
}
