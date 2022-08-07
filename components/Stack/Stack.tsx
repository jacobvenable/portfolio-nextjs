import styles from "./Stack.module.scss";

interface Props {
  children: React.ReactNode[];
  direction?: "horizontal" | "vertical";
  itemProps?: React.HTMLProps<HTMLDivElement>;
  padded?: boolean;
}

const Stack: React.FC<Props> = ({
  children,
  direction = "horizontal",
  itemProps: { className: itemClassName = "", ...itemProps } = {},
  padded,
}) => {
  const paddedClassName = padded ? styles.padded : "";
  return (
    <div className={`${styles.stack} ${styles[direction]} ${paddedClassName}`}>
      {children.map((child, index) => (
        <div
          className={`${styles.item} ${styles[direction]} ${paddedClassName} ${itemClassName}`}
          key={index}
          {...itemProps}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Stack;
