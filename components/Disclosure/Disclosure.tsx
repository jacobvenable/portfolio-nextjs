import {
  useEffect,
  MouseEvent as RMouseEvent,
  useCallback,
  useState,
} from "react";

import styles from "./Disclosure.module.scss";
import Button, { ButtonProps } from "components/Button";

interface DisclosureProps {
  buttonProps: ButtonProps;
  children: React.ReactNode;
  idPrefix: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

const noop = () => undefined;
const Disclosure: React.FC<DisclosureProps> = ({
  buttonProps,
  children,
  idPrefix,
  onClose = noop,
  onOpen = noop,
  isOpen: externalIsOpen,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(externalIsOpen ?? false);
  const isOpen = externalIsOpen ?? internalIsOpen;

  useEffect(() => {
    setInternalIsOpen(externalIsOpen);
  }, [externalIsOpen, setInternalIsOpen]);

  const handleOnClick = useCallback(
    (e: RMouseEvent<HTMLButtonElement, MouseEvent>) => {
      buttonProps.onClick && buttonProps.onClick(e);
      setInternalIsOpen((o) => {
        const open = !o;
        open ? onOpen() : onClose();
        return open;
      });
    },
    [buttonProps, onClose, onOpen]
  );

  const contentId = `${idPrefix}-content`;

  return (
    <>
      <Button
        aria-controls={contentId}
        aria-expanded={isOpen}
        onClick={handleOnClick}
        {...buttonProps}
      />
      <div className={`${!isOpen ? styles.hidden : ""}`} id={contentId}>
        {children}
      </div>
    </>
  );
};

export default Disclosure;
