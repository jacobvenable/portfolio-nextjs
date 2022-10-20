import classnames from "classnames";

import styles from "./ContentContainer.module.scss";

type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classnames(styles.contentContainer, className)}>
      {children}
    </div>
  );
};

export default ContentContainer;
