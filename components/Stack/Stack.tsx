import styles from "./Stack.module.scss";

interface Props {
  children: React.ReactNode[];
  padded?: boolean;
}

const Stack: React.FC<Props> = ({ children, padded }) => {
  const paddedClassName = padded ? "padded" : "";
  return (
    <div className={`${styles.stack} ${paddedClassName}`}>
      {children.map((child, index) => (
        <div className={`${styles.item} ${paddedClassName}`} key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Stack;
