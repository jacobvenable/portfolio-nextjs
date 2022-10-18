import classNames from "classnames";

import styles from "./ProgressMeter.module.scss";
import Typography from "components/Typography";

interface ProgressMeterProps {
  className?: string;
  currentTime: number;
  duration?: number;
  id: string;
}

const ProgressMeterProps: React.FC<ProgressMeterProps> = ({
  className,
  currentTime,
  duration,
  id,
}) => {
  const percentageProgress = duration ? (currentTime / duration) * 100 : 0;
  return (
    <div
      className={classNames(styles.progress, className)}
      id={id}
      style={{ width: `${percentageProgress}%` }}
    >
      {duration && (
        <Typography variant="sr-only">
          progress is {currentTime.toFixed(2)} seconds of {duration.toFixed(2)}{" "}
          seconds
        </Typography>
      )}
    </div>
  );
};

export default ProgressMeterProps;
