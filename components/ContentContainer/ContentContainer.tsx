import classnames from "classnames";

import styles from "./ContentContainer.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={classnames(styles.contentContainer, className)}>
      {children}
    </div>
  );
};

export default ContentContainer;
