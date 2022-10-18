import classNames from "classnames";

import styles from "./ProgressMeter.module.scss";

interface ProgressMeterProps {
  hidden: boolean;
  percentageProgress: number;
}

const ProgressMeterProps: React.FC<ProgressMeterProps> = ({
  hidden,
  percentageProgress,
}) => {
  return (
    <div
      className={classNames(styles.progress, { [styles.hidden]: hidden })}
      style={{ width: `${percentageProgress}%` }}
    />
  );
};

export default ProgressMeterProps;
