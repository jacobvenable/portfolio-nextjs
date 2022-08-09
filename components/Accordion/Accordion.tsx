import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import React, {
  Children,
  createContext,
  MouseEvent as RMouseEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import styles from "./Accordion.module.scss";
import Button, { ButtonProps } from "components/Button";
import Stack from "components/Stack";

type activeIndex = number | undefined;
type idPrefix = string;

const getId = (prefix: idPrefix, index: number, elementName: string) =>
  `${prefix}-${elementName}-${index}`;
const getButtonId = (prefix: idPrefix, index: number) =>
  getId(prefix, index, "button");
const getContentId = (prefix: idPrefix, index: number) =>
  getId(prefix, index, "content");
const noop = () => undefined;

interface AccordionContextValue {
  activeIndex: activeIndex;
  idPrefix: idPrefix;
  setActiveIndex: (activeIndex) => void;
}
const AccordionContext = createContext<AccordionContextValue>({
  activeIndex: undefined,
  idPrefix: "accordionContentIdPrefix",
  setActiveIndex: noop,
});

interface AccordionButtonProps
  extends Omit<ButtonProps, "aria-controls" | "aria-expanded" | "id"> {
  index: number;
}
const AccordionButton: React.FC<AccordionButtonProps> = ({
  iconProps,
  index,
  onClick,
  ...props
}) => {
  const { activeIndex, idPrefix, setActiveIndex } =
    useContext(AccordionContext);
  const isOpen = activeIndex === index;

  const handleOnToggle = useCallback(() => {
    setActiveIndex((i) => (i === index ? undefined : index));
  }, [index, setActiveIndex]);

  const handleOnClick = useCallback(
    (e: RMouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e);
      handleOnToggle();
    },
    [handleOnToggle, onClick]
  );

  return (
    <Button
      aria-controls={getContentId(idPrefix, index)}
      aria-expanded={isOpen}
      color="yellow-light"
      iconProps={{
        icon: faChevronUp,
        transform: { rotate: isOpen ? 180 : 0 },
        ...iconProps,
      }}
      id={getButtonId(idPrefix, index)}
      onClick={handleOnClick}
      variant="ghost"
      {...props}
    />
  );
};
const ExportedAccordionButton: React.FC<Omit<AccordionButtonProps, "index">> =
  Button;

interface AccordionContentProps
  extends React.FC<React.HTMLProps<HTMLDivElement>> {
  children: React.ReactNode;
  index: number;
}
const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  index,
  ...props
}) => {
  const { activeIndex, idPrefix } = useContext(AccordionContext);

  return (
    <div
      className={classnames({
        [styles.hidden]: index !== activeIndex,
      })}
      id={getContentId(idPrefix, index)}
      {...props}
    >
      {children}
    </div>
  );
};
// do nothing export that will be replaced by the actual button above
export const ExportedAccordionContent: React.FC<
  Omit<AccordionContentProps, "index">
> = () => null;

const mapAccordionGroupChildren = (
  children: React.ReactNode
): React.ReactNode => {
  let numButton = 0;
  let numContent = 0;

  return Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
    if (typeof child === "object" && "type" in child) {
      if (child.type === ExportedAccordionButton) {
        const index = numButton;
        numButton++;
        return <AccordionButton index={index} {...child.props} />;
      }
      if (child.type === ExportedAccordionContent) {
        const index = numContent;
        numContent++;
        return <AccordionContent index={index} {...child.props} />;
      }
      return mapAccordionGroupChildren(child);
    }
    return child;
  });
};

interface AccordionGroupProps {
  children: React.ReactNode;
  idPrefix: idPrefix;
}
export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  idPrefix,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const accordionContextValue = useMemo<AccordionContextValue>(
    () => ({
      activeIndex,
      idPrefix,
      setActiveIndex,
    }),
    [activeIndex, idPrefix]
  );
  return (
    <AccordionContext.Provider value={accordionContextValue}>
      <Stack direction="vertical">{mapAccordionGroupChildren(children)}</Stack>
    </AccordionContext.Provider>
  );
};

const Accordion = {
  Button: ExportedAccordionButton,
  Content: ExportedAccordionContent,
  Group: AccordionGroup,
};

export default Accordion;
