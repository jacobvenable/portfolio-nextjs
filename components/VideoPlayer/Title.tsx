import classNames from "classnames";

import styles from "./Title.module.scss";
import Typography, { TypographyProps } from "components/Typography";

type VideoPlayerControlsProps = TypographyProps<{
  className?: string;
  id: string;
}>;

const Title: React.FC<VideoPlayerControlsProps> = ({
  children,
  className,
  id,
  ...props
}) => {
  return (
    <Typography
      className={classNames(styles.title, className)}
      id={id}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;
