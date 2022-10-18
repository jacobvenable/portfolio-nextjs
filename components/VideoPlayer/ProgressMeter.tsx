import classNames from "classnames";

import styles from "./ProgressMeter.module.scss";

interface ProgressMeterProps {
  className?: string;
  percentageProgress: number;
}

const ProgressMeterProps: React.FC<ProgressMeterProps> = ({
  className,
  percentageProgress,
}) => {
  return (
    <div
      className={classNames(styles.progress, className)}
      style={{ width: `${percentageProgress}%` }}
    />
  );
};

export default ProgressMeterProps;
