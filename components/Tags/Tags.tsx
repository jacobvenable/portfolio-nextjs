import classNames from "classnames";

import styles from "./Tags.module.scss";

const List: React.FC<React.HTMLProps<HTMLUListElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul className={classNames(styles.list, className)} {...props}>
      {children}
    </ul>
  );
};

const Item: React.FC<React.HTMLProps<HTMLLIElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li className={classNames(styles.item, className)} {...props}>
      {children}
    </li>
  );
};

const Tags = {
  Item,
  List,
};

export default Tags;
