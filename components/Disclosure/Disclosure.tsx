import classnames from "classnames";
import {
  createContext,
  MouseEvent as RMouseEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import styles from "./Disclosure.module.scss";
import Button, { ButtonProps } from "components/Button";

const noop = () => undefined;
type DisclosureContextValue = {
  contentId: string;
  isOpen: boolean;
  setIsOpen: (boolean) => void;
};
const DisclosureContext = createContext<DisclosureContextValue>({
  contentId: "disclosureContentId",
  isOpen: false,
  setIsOpen: noop,
});

export const DisclosureButton: React.FC<ButtonProps> = (props) => {
  const { contentId, isOpen, setIsOpen } = useContext(DisclosureContext);

  const handleOnClick = useCallback(
    (e: RMouseEvent<HTMLButtonElement, MouseEvent>) => {
      props.onClick && props.onClick(e);
      setIsOpen((o) => !o);
    },
    [props, setIsOpen]
  );

  return (
    <Button
      aria-controls={contentId}
      aria-expanded={isOpen}
      onClick={handleOnClick}
      {...props}
    />
  );
};

export const DisclosureContent: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const { contentId, isOpen } = useContext(DisclosureContext);

  return (
    <div
      className={classnames({
        [styles.hidden]: !isOpen,
      })}
      id={contentId}
      {...props}
    >
      {children}
    </div>
  );
};

type DisclosureProps = {
  children: React.ReactNode;
  idPrefix: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};

export const Disclosure: React.FC<DisclosureProps> = ({
  children,
  idPrefix,
  isOpen: externalIsOpen,
  onClose = noop,
  onOpen = noop,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(externalIsOpen ?? false);
  const isOpen = externalIsOpen ?? internalIsOpen;

  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setInternalIsOpen(externalIsOpen);
    }
  }, [externalIsOpen, setInternalIsOpen]);

  const setIsOpen = useCallback(
    (toggle: (boolean) => boolean) => {
      const newIsOpen = toggle(isOpen);
      newIsOpen ? onOpen() : onClose();
      setInternalIsOpen(newIsOpen);
    },
    [isOpen, onClose, onOpen]
  );

  const contextValue = useMemo<DisclosureContextValue>(
    () => ({
      contentId: `${idPrefix}-content`,
      isOpen: internalIsOpen,
      setIsOpen,
    }),
    [idPrefix, internalIsOpen, setIsOpen]
  );

  return (
    <DisclosureContext.Provider value={contextValue}>
      {children}
    </DisclosureContext.Provider>
  );
};
