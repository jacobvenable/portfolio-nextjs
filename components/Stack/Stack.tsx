import styles from "./Stack.module.scss";

interface Props {
  children: React.ReactNode[];
}

const Stack: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.stack}>
      {children.map((child, index) => (
        <div className={styles.item} key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Stack;
